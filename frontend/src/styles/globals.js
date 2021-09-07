import { createGlobalStyle } from "styled-components";
export default createGlobalStyle`
  :root {
    --bs-secondary-rgb: ${({ theme }) => theme.text};
  }
  body {
    background: ${({ theme }) => theme.body};
    color: ${({ theme }) => theme.text};
    transition: all 0.25s linear;
  }
  .table {
    color: ${({ theme }) => theme.text};
    --bs-table-striped-color: ${({ theme }) => theme.text};
  }
  .nav-bar {
    background: ${({ theme }) => theme.secundary};
  }
  .apexcharts-legend-text {
    color: red;
  }

`;