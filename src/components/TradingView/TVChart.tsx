import React from 'react';
import { Box } from '@chakra-ui/react';

export default function TVChart(props: any) {
  return (
    <Box w="100%" h="100%" minH="300px" bg="#13141F" borderRadius="xl" display="flex" alignItems="center" justifyContent="center">
      Chart Unavailable
    </Box>
  );
}

export const refreshChartSubject = {
  next: () => {}
};
