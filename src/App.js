import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import styled from "@emotion/styled";
import GlobalStyles from "./GlobalStyles";
import NavBar from "./components/NavBar";

const Header = styled.header`
  display: flex;
  height: 60px;
  width: 100%;
  justify-content: space-around;
  align-items: center;

  background-color: grey;
`;

const Main = styled.main`
  height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
`;

const Footer = styled.footer`
  height: 60px;
  background-color: grey;
  justify-content: space-around;
  align-items: center;
`;

function App() {
  return (
    <>
      <GlobalStyles />
      <Router>
        <Header>Header</Header>
        <Main>
          <Switch>
            <Route exact path="/">
              Home
            </Route>
            <Route exact path="/add">
              Add
            </Route>
          </Switch>
        </Main>
        <Footer>
          <NavBar />
        </Footer>
      </Router>
    </>
  );
}

export default App;
