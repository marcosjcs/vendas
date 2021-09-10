import Footer from "components/Footer";
import NavBar from "components/Navbar";
import { Link } from "react-router-dom";

interface Props {
  toggleTheme(): void;
  theme: string;
}

const Home: React.FC<Props> = ({ toggleTheme, theme }) => {
  return (
    <>
      <NavBar toggleTheme={toggleTheme} theme={theme} />
      <div className="container">
        <div className="jumbotron">
          <h1 className="display-4">DSVendas</h1>
          <p className="lead">Analise o desempenho das suas vendas por diferentes perspectivas</p>
          <hr/>
          <p>Esta aplicação consiste em exibir um dashboard a partir de dados fornecidos por um back end construído com Spring Boot.</p>
          <Link className="btn btn-lg btn-primary" to="/dashboard">Dashboard</Link>
        </div>
      </div>
      <Footer />
    </>
  )
};

export default Home;