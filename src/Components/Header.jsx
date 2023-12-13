import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import Nav from "./Nav";
const Header = () => {
  return (
    <>
      <MainHeader>
        <NavLink to="/">
          <img src="src/images/main.png" alt="logo" className="logo" />
        </NavLink>
        <Nav />
      </MainHeader>
    </>
  );
};
const MainHeader = styled.header`
  padding: 0 4.8rem;
  height: 10rem;
  background-color: ${({ theme }) => theme.colors.bg};
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;

  .logo {
    height: auto;
    max-width: 30%;
  }
`;

export default Header;
