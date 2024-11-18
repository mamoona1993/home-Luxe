import { FaCartPlus } from "react-icons/fa";
import { styled } from "styled-components";
import { useCartContext } from "../context/cartContext";
import { Link } from "react-router-dom";

const StyledCartIcon = styled.div`
  position: relative;
  /* top: 2rem; */
  right: 4rem;
  z-index: 1000;
`;
const Span = styled.span`
  align-self: center;
  position: absolute;
  font-size: 1.2rem;
  padding: 3px 9px 1px;
  border-radius: 50px;
  background-color: #fff;
  top: -0.7rem;
  left: 1.9rem;
`;

function CartIcon() {
  const { total_item } = useCartContext();

  return (
    <>
      <StyledCartIcon>
        <Link to="/cart">
          <FaCartPlus className="icon" />
        </Link>
        <Span>{total_item}</Span>
      </StyledCartIcon>
    </>
  );
}

export default CartIcon;
