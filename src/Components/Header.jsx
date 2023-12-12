import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
const Header = () => {
  return (
    <>
      <MainHeader>
        <NavLink to="/"><img src="src/images/main.png" alt="logo" style={{ height: 50 }} /></NavLink>
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
  align-items: ccenter;
  position: relative;

  .logo {
    height: 5rem;
  }
`;

export default Header;
