import NavBar from "components/Navbar";
import Footer from "components/Footer";
import DataTable from "components/DataTable";
import BarChart from "components/BarChart";
import DonutChart from "components/DonutChart";

import { useState, useEffect, Fragment } from 'react';
import { ThemeProvider } from "styled-components";
import { lightTheme, darkTheme } from "./styles/theme";
import GlobalTheme from "./styles/globals";

function App() {
  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    if (theme === "light") {
      window.localStorage.setItem("theme", "dark");
      setTheme("dark");
    } else {
      window.localStorage.setItem("theme", "light");
      setTheme("light");
    }
  };
  useEffect(() => {
    const localTheme = window.localStorage.getItem("theme");
    localTheme && setTheme(localTheme);
  }, []);
  return (
    <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
      <Fragment>
        <GlobalTheme />
          
        <NavBar toggleTheme={toggleTheme} theme={theme} />
        <div className="container">
          <h1 className="text-primary py-3">Dashboard de Vendas</h1>
          <div className="row px-3">
            <div className="col-sm-6">
              <h5 className="text-center text-secondary">Taxa de Sucesso (%)</h5>
              <BarChart theme={theme}/>
            </div>

            <div className="col-sm-6">
              <h5 className="text-center text-secondary">Todas as vendas</h5>
              <DonutChart theme={theme}/>
            </div>
          </div>

          <div className="py-3">
            <h2 className="text-primary">
              Todas as vendas
            </h2>
          </div>

          <DataTable />
        </div>
        <Footer />
      </Fragment>
    </ThemeProvider>
  );
}

export default App;
