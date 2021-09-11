import { Link } from "react-router-dom";

import styled from "styled-components";
import { CgSun } from "react-icons/cg";
import { HiMoon } from "react-icons/hi";
import ImgDsDark from 'assets/img/ds-dark.svg';

type Props = {
  toggleTheme(): void;
  theme: string;
}

const NavBar = ({ toggleTheme, theme } : Props) => {
  const icon = theme === "light" ? <HiMoon size={20} /> : <CgSun size={20} />;
  return (
    <div className="d-flex flex-column flex-md-row p-3 px-md-4 mb-3 nav-bar border-bottom shadow-sm">
      <nav className="container my-2 my-md-0 mr-md-3 d-flex justify-content-between align-items-center">
        <Link to="/">
          <img src={ImgDsDark} alt="DevSuperior" width="120" />
        </Link>
        <ButtonChange onClick={toggleTheme}>{icon}</ButtonChange>
      </nav>
  </div>
  
  );
}

const ButtonChange = styled.button`
 cursor: pointer;
    height: 30px;
    width: 30px;
    border-radius: 50%;
    border: none;
    background-color: ${({ theme }) => theme.body};
    color: ${({ theme }) => theme.text};
    &:focus {
        outline: none;
    }
    transition: all .5s ease;
`;

export default NavBar;
