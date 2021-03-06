import { useEffect, useState } from 'react';

import Chart from 'react-apexcharts';
import { SaleSuccess } from 'types/sale';
import { round } from 'utils/format';

import api from 'services/api';

type Props = {
  theme: string;
}

type SeriesData = {
  name: string;
  data: number[];
};

type ChartData = {
  labels: {
    categories: string[];
  },
  series: SeriesData[];
  };

const BarChart = ({ theme } : Props) => {
  const [chartData, setChartData] = useState<ChartData>({
    labels: {
      categories: []
    },
    series: [
      {
        name: "",
        data: []                   
      }
    ]});

    useEffect(() => {
      api.get('sales/success-by-seller').then(response => {
        const data = response.data as SaleSuccess[];
        const myLabels = data.map(x => x.sellerName);
        const mySeries = data.map(x => round(100.0 * (x.deals / x.visited),1));
  
        setChartData({
          labels: {
            categories: myLabels
          },
          series: [
            {
              name: "% Sucesso",
              data: mySeries                 
            }
        ]});
      });
    },[]);
  const options = {
    plotOptions: {
      bar: {
        horizontal: true,
      }
    },
  };

  return (
    <Chart
      options={{ ...options, xaxis: chartData.labels, theme: {mode: theme === "light" ? "light" : "dark"} }}
      series={chartData.series}
      type="bar"
      height="240"
    />
  
  );
}

export default BarChart;