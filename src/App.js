import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import styled from "@emotion/styled";
import GlobalStyles from "./GlobalStyles";
import NavBar from "./components/NavBar";
import NewBirthday from "./pages/NewBirthday";
import Birthday from "./pages/Birthday";
import { ThemeProvider } from "emotion-theming";
import defaultTheme from "./themes/default";
import Title from "./components/Title";

const Header = styled.header`
  display: flex;
  height: 60px;
  width: 100%;
  justify-content: center;
  align-items: center;
  background-color: ${props => props.theme.colors.background};
  color: ${props => props.theme.colors.secondary};
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
  background-color: ${props => props.theme.colors.tertiary};
  color: ${props => props.theme.colors.text};
`;

const Footer = styled.footer`
  height: 60px;
  background-color: grey;
  justify-content: space-around;
  align-items: center;
  background-color: ${props => props.theme.colors.background};
  color: ${props => props.theme.colors.secondary};
`;

function App() {
  return (
    <>
      <ThemeProvider theme={defaultTheme}>
        <GlobalStyles />
        <Router>
          <Container>
            <Header>
              {" "}
              <span role="img" aria-label="present">
                🎁
              </span>
              <Title>Birthday Buddy</Title>
              <span role="img" aria-label="present">
                🎉
              </span>
            </Header>
            <Main>
              <Switch>
                <Route exact path="/">
                  Home
                </Route>
                <Route exact path="/add">
                  <NewBirthday />
                </Route>
                <Route exact path="/birthday/:id">
                  <Birthday />
                </Route>
                <Route>
                  <div>404 Not found</div>
                </Route>
              </Switch>
            </Main>
            <Footer>
              <NavBar />
            </Footer>
          </Container>
        </Router>
      </ThemeProvider>
    </>
  );
}

export default App;
