import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import styled from "@emotion/styled";
import GlobalStyles from "./GlobalStyles";
import NavBar from "./components/NavBar";
import NewBirthday from "./pages/NewBirthday";

const Header = styled.header`
  display: flex;
  height: 60px;
  width: 100%;
  justify-content: space-around;
  align-items: center;

  background-color: grey;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  width: 100vw;
`;

const Main = styled.main`
  display: flex;
  overflow: auto;
  width: 100%;
  height: 100%;
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
        <Container>
          <Header>Header</Header>
          <Main>
            <Switch>
              <Route exact path="/">
                Home
              </Route>
              <Route exact path="/add">
                <NewBirthday />
              </Route>
            </Switch>
          </Main>
          <Footer>
            <NavBar />
          </Footer>
        </Container>
      </Router>
    </>
  );
}

export default App;
