import React, { useEffect, useRef, useState } from 'react';
import { createChart, ColorType, ISeriesApi, CandlestickData, HistogramData } from 'lightweight-charts';
import { Box, Flex, Text, Spinner, AbsoluteCenter } from '@chakra-ui/react';
import axios from 'axios';
import { OHLCV_API, POOL_API } from '@/config/api';

interface SwapChartProps {
  baseMint: string;
  quoteMint: string;
}

export const SwapChart: React.FC<SwapChartProps> = ({ baseMint, quoteMint }) => {
  const chartContainerRef = useRef<HTMLDivElement | null>(null);
  const chartRef = useRef<any>(null);
  const candlestickSeriesRef = useRef<ISeriesApi<'Candlestick'> | null>(null);
  const volumeSeriesRef = useRef<ISeriesApi<'Histogram'> | null>(null);

  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [headerData, setHeaderData] = useState<{ price: number; change: number; high: number; low: number } | null>(null);

  const colors = {
    backgroundColor: '#0C0D14',
    lineColor: '#1A1B2E',
    textColor: '#8B8FA8',
    upColor: '#00C896',
    downColor: '#FF4D6A',
  };

  const getPoolAddress = async (mint: string) => {
    try {
      const res = await axios.get(`${POOL_API}/${mint}`);
      const solanaPool = res.data.pairs.find((p: any) => p.chainId === 'solana');
      return solanaPool?.pairAddress;
    } catch {
      return null;
    }
  };

  const fetchData = async () => {
    try {
      setIsLoading(true);
      setError(null);
      const poolAddress = await getPoolAddress(baseMint);
      if (!poolAddress) {
        setError('No chart data available');
        setIsLoading(false);
        return;
      }

      const res = await axios.get(`${OHLCV_API}/pools/${poolAddress}/ohlcv/hour?limit=168`);
      const ohlcvList = res.data.data.attributes.ohlcv_list;
      
      const chartData: CandlestickData[] = ohlcvList.map((item: any) => ({
        time: item[0],
        open: item[1],
        high: item[2],
        low: item[3],
        close: item[4],
      })).sort((a: any, b: any) => a.time - b.time);

      const volumeData: HistogramData[] = ohlcvList.map((item: any) => ({
        time: item[0],
        value: item[5],
        color: item[4] >= item[1] ? `${colors.upColor}88` : `${colors.downColor}88`,
      })).sort((a: any, b: any) => a.time - b.time);

      candlestickSeriesRef.current?.setData(chartData);
      volumeSeriesRef.current?.setData(volumeData);

      if (chartData.length > 0) {
        const last = chartData[chartData.length - 1];
        const first = chartData[0];
        const high = Math.max(...chartData.map(d => d.high));
        const low = Math.min(...chartData.map(d => d.low));
        const change = ((last.close - first.open) / first.open) * 100;
        setHeaderData({ price: last.close, change, high, low });
      }

      setIsLoading(false);
    } catch (err) {
      console.error(err);
      setError('Chart data unavailable');
      setIsLoading(false);
    }
  };

  useEffect(() => {
    if (!chartContainerRef.current) return;

    const chart = createChart(chartContainerRef.current, {
      layout: {
        background: { type: ColorType.Solid, color: colors.backgroundColor },
        textColor: colors.textColor,
      },
      grid: {
        vertLines: { color: colors.lineColor },
        horzLines: { color: colors.lineColor },
      },
      width: chartContainerRef.current.clientWidth,
      height: 300,
      timeScale: {
        borderColor: colors.lineColor,
        timeVisible: true,
      },
      rightPriceScale: {
        borderColor: colors.lineColor,
      },
    });

    const candlestickSeries = chart.addCandlestickSeries({
      upColor: colors.upColor,
      downColor: colors.downColor,
      borderVisible: false,
      wickUpColor: colors.upColor,
      wickDownColor: colors.downColor,
    });

    const volumeSeries = chart.addHistogramSeries({
      color: '#00D1CF66',
      priceFormat: { type: 'volume' },
      priceScaleId: '',
    });

    volumeSeries.priceScale().applyOptions({
      scaleMargins: { top: 0.8, bottom: 0 },
    });

    chartRef.current = chart;
    candlestickSeriesRef.current = candlestickSeries;
    volumeSeriesRef.current = volumeSeries;

    const handleResize = () => {
      chart.applyOptions({ width: chartContainerRef.current?.clientWidth });
    };
    window.addEventListener('resize', handleResize);

    fetchData();
    const interval = setInterval(fetchData, 30000);

    return () => {
      window.removeEventListener('resize', handleResize);
      chart.remove();
      clearInterval(interval);
    };
  }, [baseMint, quoteMint]);

  return (
    <Box position="relative" w="100%" h="100%" minH="300px" bg={colors.backgroundColor}>
        {headerData && (
            <Flex justify="space-between" mb={4} px={4} pt={2}>
                <Box>
                    <Text fontSize="xs" color={colors.textColor}>Price</Text>
                    <Text fontSize="md" fontWeight="bold" color="white">${headerData.price.toFixed(6)}</Text>
                </Box>
                <Box textAlign="right">
                    <Text fontSize="xs" color={colors.textColor}>24h Change</Text>
                    <Text fontSize="sm" color={headerData.change >= 0 ? colors.upColor : colors.downColor}>
                        {headerData.change >= 0 ? '+' : ''}{headerData.change.toFixed(2)}%
                    </Text>
                </Box>
            </Flex>
        )}
      {isLoading && <AbsoluteCenter><Spinner color="cyan.400" /></AbsoluteCenter>}
      {error && <AbsoluteCenter><Text color={colors.textColor}>{error}</Text></AbsoluteCenter>}
      <div ref={chartContainerRef} style={{ width: '100%', height: '100%' }} />
    </Box>
  );
};
