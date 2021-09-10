import { useState, useEffect } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Dashboard from 'pages/Dashboard';
import Home from 'pages/Home';

import GlobalTheme from "./styles/globals";
import { lightTheme, darkTheme } from "./styles/theme";
import { ThemeProvider } from "styled-components";

const Routes = () => {
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
    
    <BrowserRouter>
      <Switch>
        <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
        
          <GlobalTheme />
          <Route path="/" exact render={props => <Home {...props} toggleTheme={toggleTheme} theme={theme}/>}  />
          <Route path="/dashboard" render={props => <Dashboard {...props} toggleTheme={toggleTheme} theme={theme}/>} />
          
        </ThemeProvider>
        </Switch>
    </BrowserRouter>
  )
};

export default Routes;