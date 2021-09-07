import Chart from 'react-apexcharts';

interface Props {
  theme: string;
}

const DonutChart: React.FC<Props> = ({ theme })  => {
  const mockData = {
    series: [477138, 499928, 444867, 220426, 473088],
    labels: ['Anakin', 'Barry Allen', 'Kal-El', 'Logan', 'Padmé']
  };

  const options = {
    legend: {
      show: true
    },
  };

  return (
    <Chart
      options={{ ...options, labels: mockData.labels, theme: {mode: theme === "light" ? "light" : "dark"} }}
      series={mockData.series}
      type="donut"
      height="240"
    />
  
  );
}

export default DonutChart;