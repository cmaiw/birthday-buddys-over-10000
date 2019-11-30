import React from "react";
import { Link, useLocation } from "react-router-dom";
import styled from "@emotion/styled";

const Container = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  height: 100%;
`;

const NavLink = styled(Link)`
  display: flex;
  justify-content: space-around;
  align-items: center;
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
