import { Fragment } from "react";
import NavBar from "components/Navbar";
import Footer from "components/Footer";
import BarChart from "components/BarChart";
import DonutChart from "components/DonutChart";
import DataTable from "components/DataTable";

type Props = {
  toggleTheme(): void;
  theme: string;
}

const Dashboard = ({ toggleTheme, theme } : Props) => {
  return (
    <Fragment>
      <NavBar toggleTheme={toggleTheme} theme={theme} />
      <div className="container">
        <h1 className="text-primary py-3">Dashboard de Vendas</h1>
        <div className="row px-3 border rounded">
          <div className="col-sm-6">
            <h5 className="text-center text-secondary py-3">Taxa de Sucesso (%)</h5>
            <BarChart theme={theme}/>
          </div>

          <div className="col-sm-6">
            <h5 className="text-center text-secondary py-3">Todas as vendas</h5>
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
  )
};

export default Dashboard;