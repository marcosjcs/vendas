import Footer from "components/Footer";
import NavBar from "components/Navbar";
import { BiBarChartSquare } from "react-icons/bi";
import { DiReact } from "react-icons/di";
import { SiBootstrap, SiJava, SiPostgresql, SiSpring, SiTypescript } from "react-icons/si";

import { Link } from "react-router-dom";

type Props = {
  toggleTheme(): void;
  theme: string;
}

const Home = ({ toggleTheme, theme } : Props) => {
  return (
    <>
      <NavBar toggleTheme={toggleTheme} theme={theme} />
      <div className="container">
        <div className="jumbotron">
          <h1 className="display-4">DSVendas</h1>
          <p className="lead">Analise o desempenho das suas vendas por diferentes perspectivas</p>
          <Link className="btn btn-sm btn-primary" to="/dashboard"><BiBarChartSquare />Dashboard</Link>
          <hr/>
          <p className="text-center">Esta aplicação consiste em exibir um dashboard a partir de dados fornecidos por um backend construído com Spring Boot. Tecnologias utilizadas:</p>
        </div>
        <div className="card-group py-3 text-center">
          <div className="card col-sm-2 bg-secondary m-1">
            <SiJava className="card-img-top py-2" size="100"/>
            <div className="card-body">
              <h5 className="card-title">Java</h5>
            </div>
          </div>
          <div className="card col-sm-2 bg-secondary m-1">
            <SiSpring className="card-img-top py-2" size="100"/>
            <div className="card-body">
              <h5 className="card-title">Spring Boot</h5>
            </div>
          </div>
          <div className="card col-sm-2 bg-secondary m-1">
            <SiPostgresql className="card-img-top py-2" size="100"/>
            <div className="card-body">
              <h5 className="card-title">PostgreSql</h5>
            </div>
          </div>
          <div className="card col-sm-2 bg-secondary m-1">
            <DiReact className="card-img-top" size="100"/>
            <div className="card-body">
              <h5 className="card-title">React</h5>
            </div>
          </div>
          <div className="card col-sm-2 bg-secondary m-1">
            <SiTypescript className="card-img-top py-2" size="100"/>
            <div className="card-body">
              <h5 className="card-title">TypeScript</h5>
            </div>
          </div>
          <div className="card col-sm-2 bg-secondary m-1">
            <SiBootstrap className="card-img-top py-2" size="100"/>
            <div className="card-body">
              <h5 className="card-title">Bootstrap</h5>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
};

export default Home;