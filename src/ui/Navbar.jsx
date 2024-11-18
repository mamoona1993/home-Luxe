import styled from "styled-components";
import Logo from "./Logo";
import { NavLink } from "react-router-dom";
import MainNav from "./MainNav";

const StyledNav = styled.nav`
  display: flex;
  justify-content: space-between;
  /* align-items: center; */
  padding: 2rem 3rem;
  /* z-index: 555; */
  background-color: #fff4e6;
  /* width: 100vh; */
  /* position: fixed; */
`;

function Navbar() {
  return (
    <StyledNav>
      <NavLink to="/">
        <Logo />
      </NavLink>
      <MainNav />
    </StyledNav>
  );
}

export default Navbar;
