import { useState } from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { AiOutlineClose } from "react-icons/ai";
import { CiMenuFries } from "react-icons/ci";
import { useRef } from "react";

const NavList = styled.ul`
  display: flex;
  /* flex-direction: column; */
  justify-content: end;
  align-items: center;
  flex-grow: 1;
  gap: 0.8rem;
`;

const StyledNavLink = styled(NavLink)`
  &:link,
  &:visited {
    display: flex;
    align-items: center;
    gap: 4rem;

    color: #444;
    font-size: 1.6rem;
    font-weight: 500;
    padding: 1.2rem 2.4rem;
    transition: all 0.3s;
  }

  /* This works because react-router places the active class on the active NavLink */
  &:hover,
  &:active,
  &.active:link,
  &.active:visited {
    color: #333;
    /* background-color: var(--color-grey-50); */
    /* border-radius: var(--border-radius-sm); */
  }

  & svg {
    width: 2.4rem;
    height: 2.4rem;
    color: #444;
    transition: all 0.3s;
  }

  &:hover svg,
  &:active svg,
  &.active:link svg,
  &.active:visited svg {
    color: #333;
  }
`;

function MainNav() {
  const [showMenu, setShowMenu] = useState(false);
  // const navRef = useRef();
  // const showNavbar = () => {
  // navRef.current.classList.toggle("responsive_nav");
  // };

  function showNavbar() {
    setShowMenu((show) => !show);
  }

  return (
    <>
      <div className="show-nav">
        {showMenu ? (
          <AiOutlineClose onClick={showNavbar} className="close-btn" />
        ) : (
          <CiMenuFries onClick={showNavbar} />
        )}
      </div>

      <NavList>
        <li>
          <StyledNavLink to="/">
            <span>Home</span>
          </StyledNavLink>
        </li>
        <li>
          <StyledNavLink to="/products">
            <span>Products</span>
          </StyledNavLink>
        </li>
        <li>
          <StyledNavLink to="/about">
            <span>About Us</span>
          </StyledNavLink>
        </li>
        <li>
          <StyledNavLink to="/services">
            <span>Our Services</span>
          </StyledNavLink>
        </li>
        <li>
          <StyledNavLink to="/projects">
            <span>Our Projects</span>
          </StyledNavLink>
        </li>
        <li>
          <StyledNavLink to="/contact">
            <span>Contact Us</span>
          </StyledNavLink>
        </li>
      </NavList>
    </>
  );
}
export default MainNav;
