import { useEffect, useState } from 'react';

import Chart from 'react-apexcharts';
import { SaleSum } from 'types/sale';

import api from 'services/api';

type Props = {
  theme: string;
}

type ChartData = {
  labels: string[];
  series: number[];
}

const DonutChart: React.FC<Props> = ({ theme } : Props)  => {

  const [chartData, setChartData] = useState<ChartData>({ labels: [], series: [] });
  
  useEffect(() => {
    api.get('sales/amount-by-seller').then(response => {
      const data = response.data as SaleSum[];
      const myLabels = data.map(x => x.sellerName);
      const mySeries = data.map(x => x.sum);

      setChartData({labels: myLabels, series: mySeries});
    });
  },[]);

  const options = {
    legend: {
      show: true
    },
  };

  return (
    <Chart
      options={{ ...options, labels: chartData.labels, theme: {mode: theme === "light" ? "light" : "dark"} }}
      series={chartData.series}
      type="donut"
      height="240"
    />
  );
}

export default DonutChart;