import { styled } from "styled-components";
import { FaMinus, FaPlus } from "react-icons/fa";
import { useState } from "react";
import { Link } from "react-router-dom";
import { useCartContext } from "../context/cartContext";
import Product from "../pages/Product";
import ToggleQuantity from "./ToggleQuantity";

const StyledQuantityDiv = styled.div`
  display: flex;
  align-items: center;
  /* gap: 1rem; */
`;

const StyledQuantityButton = styled.button`
  font-size: 1.4rem;
  color: #555;
  /* border-radius: 8px; */
  padding: 1rem 1.3rem;
  /* width: 1rem; */
  border: none;
  background-color: #ece9e9;
`;
const StyledQuantity = styled.span`
  font-size: 2rem;
  background-color: #fff;
  color: #555;
  padding: 0.75rem 2.4rem;
  /* border-radius: 8px; */
`;

const StyledIconsContainer = styled.div`
  margin-top: 2rem;
  display: flex;
  gap: 1.6rem;
`;

const StyledCartButton = styled.button`
  font-size: 1.6rem;
  display: inline;
  font-weight: 500;
  color: #fff;
  background-color: var(--main-brown-color);
  padding: 1.2rem 2rem;
  width: 15rem;
  transition: all 0.3s;
  border-radius: 9px;
  border: none;
  &:hover {
    background-color: var(--main-lightbrown-color);
  }
`;

const StyledBuyButton = styled.button`
  font-size: 1.6rem;
  display: inline;
  font-weight: 500;
  color: #fff;
  /* background-color: var(--main-dark-color); */
  background-color: #68330d;
  padding: 1.2rem 2rem;
  width: 15rem;
  transition: all 0.3s;
  border-radius: 9px;
  border: none;
  &:hover {
    background-color: var(--main-lightbrown-color);
  }
`;

function AddToCart({ product }) {
  const { addToCart } = useCartContext();
  const { id, stock } = product;
  const [quantity, setQuantity] = useState(1);

  function decreaseQuantity() {
    quantity > 1 ? setQuantity(quantity - 1) : setQuantity(1);
  }
  function increaseQuantity() {
    quantity < stock ? setQuantity(quantity + 1) : setQuantity(stock);
  }

  return (
    <StyledIconsContainer>
      {/* <StyledQuantityDiv>
        <StyledQuantityButton onClick={decreaseQuantity}>
          <FaMinus />
        </StyledQuantityButton>
        <StyledQuantity>{quantity}</StyledQuantity>
        <StyledQuantityButton onClick={increaseQuantity}>
          <FaPlus />
        </StyledQuantityButton>
      </StyledQuantityDiv> */}

      <ToggleQuantity
        quantity={quantity}
        decreaseQuantity={decreaseQuantity}
        increaseQuantity={increaseQuantity}
      />

      <Link
        to="/cart"
        className="link"
        onClick={() => addToCart(id, quantity, product)}
      >
        <StyledCartButton>Add To Cart</StyledCartButton>
      </Link>
      <StyledBuyButton>Buy Now</StyledBuyButton>
    </StyledIconsContainer>
  );
}

export default AddToCart;
