import { useState } from "react";
import { AiOutlineClose } from "react-icons/ai";
import { CiMenuFries } from "react-icons/ci";
import { NavLink } from "react-router-dom";
import { styled } from "styled-components";

const Navigation = styled.div``;
const NavigationBackground = styled.div`
  width: 4rem;
  height: 4rem;
  border-radius: 50%;
  position: fixed;
  top: 3.5rem;
  right: 3.5rem;
  background-image: radial-gradient(
    var(--main-light-color),
    var(--main-dark-color)
  );
  z-index: 1000;
  transition: 0.8s cubic-bezier(0.86, 0, 0.07, 1);
  /* transform: scale(80); */
`;
const NavigationNav = styled.nav`
  height: 100vh;
  width: 0;
  position: fixed;
  top: 0;
  right: 0;
  z-index: 1500;
  opacity: 0;
  transition: all 0.8s cubic-bezier(0.68, -0.55, 0.265, 1.55);
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
const StyledInput = styled.input`
  display: none;
`;

const StyledLabel = styled.label`
  background-color: #fff;
  width: 5rem;
  height: 5rem;
  position: fixed;
  top: 3rem;
  right: 3rem;
  border-radius: 50%;
  z-index: 2000;
  box-shadow: 0 1rem 3rem rgb(0, 0, 0, 0.1);
`;

function Header() {
  // const [showMenu, setShowMenu] = useState(false);

  // function showNavbar() {
  // setShowMenu((show) => !show);
  // }

  return (
    <Navigation>
      {/* {if(showMenu===true)? (
        <AiOutlineClose onClick={showNavbar} className="nav-btn" />
      ) : (
        <CiMenuFries onClick={showNavbar} className="nav-btn" />
      )} */}

      <StyledInput type="checkbox" id="nav-toggle" className="input-btn" />

      {/* {input:checked ?  <StyledLabel htmlFor="nav-toggle" className="nav-label">
        <AiOutlineClose/>
      </StyledLabel>:<StyledLabel htmlFor="nav-toggle" className="nav-label">
      <CiMenuFries/>
    
      </StyledLabel>
      
      } */}

      <StyledLabel htmlFor="nav-toggle" className="nav-label">
        {"input-btn:checked ~ navBack" ||
        "input-btn:checked ~ navigationNav" ? (
          <CiMenuFries className="nav-cross" />
        ) : (
          <AiOutlineClose className="nav-cross" />
        )}
      </StyledLabel>

      <NavigationBackground className="navBack">&nbsp;</NavigationBackground>

      <NavigationNav className="navigation-nav">
        <StyleNavList>
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
          <NavigationItem>
            <StyledNavLink to="/related">Related products</StyledNavLink>
          </NavigationItem>
        </StyleNavList>
      </NavigationNav>
    </Navigation>
  );
}

export default Header;
