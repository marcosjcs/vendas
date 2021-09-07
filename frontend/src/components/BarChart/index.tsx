import Chart from 'react-apexcharts';

interface Props {
  theme: string;
}

const BarChart: React.FC<Props> = ({ theme }) => {
  const options = {
    plotOptions: {
      bar: {
        horizontal: true,
      }
    },
  };

  const mockData = {
    labels: {
      categories: ['Anakin', 'Barry Allen', 'Kal-El', 'Logan', 'Padmé']
    },
    series: [
      {
        name: "% Sucesso",
        data: [43.6, 67.1, 67.7, 45.6, 71.1]                   
      }
    ]
  };

  return (
    <Chart
      options={{ ...options, xaxis: mockData.labels, theme: {mode: theme === "light" ? "light" : "dark"} }}
      series={mockData.series}
      type="bar"
      height="240"
    />
  
  );
}

export default BarChart;