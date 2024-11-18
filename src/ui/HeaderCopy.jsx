import { useState } from "react";
import { AiOutlineClose } from "react-icons/ai";
import { CiMenuFries } from "react-icons/ci";
import { NavLink } from "react-router-dom";
import { styled } from "styled-components";

const Navigation = styled.div``;

const NavigationNav = styled.nav`
  background-image: radial-gradient(
    var(--main-light-color),
    var(--main-dark-color)
  );
  height: 100vh;
  width: 100%;
  position: fixed;
  top: 0;
  right: 0;

  transition: all 0.8s cubic-bezier(0.68, -0.55, 0.265, 1.55);
  z-index: 1500;
`;
const StyleNavList = styled.ul`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  list-style: none;
  text-align: center;
  width: 100%;
`;
const NavigationItem = styled.li`
  margin: 3rem;
`;
const StyledNavLink = styled(NavLink)`
  &:link,
  &:visited {
    display: inline-block;
    font-size: 2rem;
    font-weight: 300;
    color: #fff;
    text-decoration: none;
    text-transform: uppercase;
    transition: 0.3s;
  }

  &:hover,
  &:active,
  &.active:link,
  &.active:visited {
    color: #eee;

    transform: translateX(0.5rem);
  }
`;

function Header() {
  const [showMenu, setShowMenu] = useState(false);

  function showNavbar() {
    setShowMenu((show) => !show);
  }

  return (
    <Navigation>
      {showMenu === true ? (
        <AiOutlineClose onClick={showNavbar} className="nav-cross" />
      ) : (
        <CiMenuFries onClick={showNavbar} className="nav-cross" />
      )}

      {showMenu && (
        <NavigationNav className="navigation-nav">
          <StyleNavList onClick={() => setShowMenu("")}>
            <NavigationItem>
              <StyledNavLink to="/">Home</StyledNavLink>
            </NavigationItem>
            <NavigationItem>
              <StyledNavLink to="/products">Products</StyledNavLink>
            </NavigationItem>
            <NavigationItem>
              <StyledNavLink to="/about">About Us</StyledNavLink>
            </NavigationItem>
            <NavigationItem>
              <StyledNavLink to="/services">Our Services</StyledNavLink>
            </NavigationItem>
            <NavigationItem>
              <StyledNavLink to="/projects">Our Projects</StyledNavLink>
            </NavigationItem>
            <NavigationItem>
              <StyledNavLink to="/contact">Contact Us</StyledNavLink>
            </NavigationItem>
          </StyleNavList>
        </NavigationNav>
      )}
    </Navigation>
  );
}

export default Header;
