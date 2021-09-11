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
  
  .nav-bar, .page-link, .page-item.disabled .page-link {
    background: ${({ theme }) => theme.secundary};
  }

  .table-sales {
    border:1px solid ${({ theme }) => theme.body};
    border-radius: 8px;
    background-color: ${({ theme }) => theme.body};
  }

  .table-responsive {
    margin: 10px;
    background-color: ${({ theme }) => theme.body};
  }

  .apexcharts-svg {
    background: ${({ theme }) => theme.body}!important;
  }
`;