import CartIcon from "./CartIcon";
import Logo from "./Logo";
import HeaderCopy from "./HeaderCopy";
import { styled } from "styled-components";

const Header = styled.div`
  /* brightness: 30%; */
  /* background: rgb(0, 0, 0); */
  background: rgba(0, 0, 0, 0.212);
  position: fixed;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 2rem 4rem;
  width: 100%;
  z-index: 2000;
  box-shadow: 0 1rem 3rem rgb(0, 0, 0, 0.1);
`;

const CartNav = styled.div`
  display: flex;
  gap: 6rem;
`;

function NavigationBar() {
  return (
    <Header>
      <Logo />
      <CartNav>
        <CartIcon />
        <HeaderCopy />
      </CartNav>
    </Header>
  );
}

export default NavigationBar;
