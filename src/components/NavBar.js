import React from "react";
import { Link, useLocation } from "react-router-dom";
import styled from "@emotion/styled";

const Container = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  height: 100%;
`;

const NavLink = styled(({ active, ...rest }) => <Link {...rest} />)`
  flex-grow: 1;
  flex-basis: 0;
  height: 100%;
  text-decoration: none;
  background: ${props =>
    props.active ? props.theme.colors.primary : props.theme.colors.background};
  color: ${props =>
    props.active ? props.theme.colors.text : props.theme.colors.secondary};
  display: flex;
  align-items: center;
  justify-content: center;
  text-transform: uppercase;
  font-size: 1.1rem;
  font-weight: 2000;
`;

function NavBar() {
  const location = useLocation();

  return (
    <Container>
      <NavLink to="/" active={location.pathname === "/"}>
        Home
      </NavLink>
      <NavLink to="/add" active={location.pathname === "/add"}>
        Add
      </NavLink>
    </Container>
  );
}

export default NavBar;
