import React, { useEffect, useRef, useState } from 'react';
import { createChart, ColorType, ISeriesApi } from 'lightweight-charts';
import { Box, Flex, Text, useColorModeValue } from '@chakra-ui/react';
import axios from 'axios';
import { OHLCV_API } from '@/config/api';

interface TradingChartProps {
  poolAddress: string;
}

export const TradingChart: React.FC<TradingChartProps> = ({ poolAddress }) => {
  const chartContainerRef = useRef<HTMLDivElement | null>(null);
  const chartRef = useRef<any>(null);
  const candlestickSeriesRef = useRef<ISeriesApi<'Candlestick'> | null>(null);
  const volumeSeriesRef = useRef<ISeriesApi<'Histogram'> | null>(null);

  const [isLoading, setIsLoading] = useState(true);

  const colors = {
    backgroundColor: '#0C0D14',
    lineColor: '#2A2B3D',
    textColor: '#8B8FA8',
    areaTopColor: '#00D1CF22',
    areaBottomColor: '#00D1CF00',
    upColor: '#00C896',
    downColor: '#FF4D6A',
  };

  useEffect(() => {
    if (!chartContainerRef.current) return;

    const handleResize = () => {
      chartRef.current.applyOptions({ width: chartContainerRef.current!.clientWidth });
    };

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
      height: 400,
      timeScale: {
        borderColor: colors.lineColor,
        timeVisible: true,
        secondsVisible: false,
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
      priceFormat: {
        type: 'volume',
      },
      priceScaleId: '', // set as overlay
    });

    volumeSeries.priceScale().applyOptions({
      scaleMargins: {
        top: 0.8,
        bottom: 0,
      },
    });

    chartRef.current = chart;
    candlestickSeriesRef.current = candlestickSeries as any;
    volumeSeriesRef.current = volumeSeries as any;

    // Add Indicators
    const ma20Series = chart.addLineSeries({
      color: '#00D1CF',
      lineWidth: 1,
      priceLineVisible: false,
      lastValueVisible: false,
    });

    const ma50Series = chart.addLineSeries({
      color: '#7B61FF',
      lineWidth: 1,
      priceLineVisible: false,
      lastValueVisible: false,
    });

    window.addEventListener('resize', handleResize);

    fetchData().then((data) => {
      if (data) {
        // Calculate MA
        const calcMA = (data: any[], period: number) => {
          return data.map((_, index) => {
            if (index < period - 1) return null;
            const slice = data.slice(index - period + 1, index + 1);
            const sum = slice.reduce((acc, curr) => acc + curr.close, 0);
            return { time: data[index].time, value: sum / period };
          }).filter(item => item !== null);
        };

        ma20Series.setData(calcMA(data, 20) as any);
        ma50Series.setData(calcMA(data, 50) as any);
      }
    });

    return () => {
      window.removeEventListener('resize', handleResize);
      chart.remove();
    };
  }, [poolAddress]);

  const fetchData = async () => {
    try {
      setIsLoading(true);
      const url = `${OHLCV_API}/pools/${poolAddress}/ohlcv/hour`;
      const response = await axios.get(url);
      
      const ohlcvData = response.data.data.attributes.ohlcv_list;
      
      const formattedData = ohlcvData.map((item: any) => ({
        time: item[0],
        open: item[1],
        high: item[2],
        low: item[3],
        close: item[4],
      })).sort((a: any, b: any) => a.time - b.time);

      const volumeData = ohlcvData.map((item: any) => ({
        time: item[0],
        value: item[5],
        color: item[4] >= item[1] ? colors.upColor + '88' : colors.downColor + '88',
      })).sort((a: any, b: any) => a.time - b.time);

      candlestickSeriesRef.current?.setData(formattedData);
      volumeSeriesRef.current?.setData(volumeData);
      
      setIsLoading(false);
      return formattedData;
    } catch (error) {
      console.error('Error fetching OHLCV data:', error);
      setIsLoading(false);
      return null;
    }
  };

  return (
    <Box position="relative" w="100%" h="400px" bg={colors.backgroundColor} borderRadius="xl" overflow="hidden" border="1px solid" borderColor="whiteAlpha.100">
      {isLoading && (
        <Flex position="absolute" top="0" left="0" w="100%" h="100%" align="center" justify="center" zIndex="10" bg="blackAlpha.600">
           <Text color="white">Loading Chart...</Text>
        </Flex>
      )}
      <div ref={chartContainerRef} style={{ width: '100%', height: '100%' }} />
    </Box>
  );
};
