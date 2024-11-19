import { styled } from "styled-components";
import { useCartContext } from "../context/cartContext";
import CartItem from "../ui/CartItem";
import Heading from "../ui/Heading";
import { Link } from "react-router-dom";
import { formatCurrency } from "../helpers";

const StyledHeader = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
  column-gap: 5rem;
  align-items: center;
  padding: 2rem 2.4rem;

  /* &:not(:last-child) {
    border-bottom: 1px solid rgb(136, 136, 136);
  } */
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 1.6rem;
`;

const StyledButton = styled.button`
  font-size: 1.8rem;
  display: inline;
  font-weight: 500;
  color: #fff;
  background-color: var(--main-brown-color);
  padding: 1.2rem 2rem;
  /* width: 15rem; */
  transition: all 0.3s;
  border-radius: 9px;
  border: none;
  cursor: pointer;

  &:hover {
    background-color: var(--main-lightbrown-color);
  }
`;

const StyledCart = styled.div`
  max-width: 100rem;
  margin: 0 auto;
  padding-top: 20rem;
  /* display: flex; */
  /* flex-direction: column; */
  /* align-items: center; */
  text-align: center;
`;

const StyledHeading = styled.p`
  font-size: 2rem;
  font-weight: 500;
  color: var(--main-light-color);
  line-height: 1.2;
`;

const SubTotal = styled.div`
  max-width: 22rem;

  margin: 5rem 0 5rem 78rem;
  text-transform: capitalize;
  display: flex;
  gap: 3.2rem;
  flex-direction: column;
`;
const SubTotalDetails = styled.div`
  display: flex;
  justify-content: space-between;
  font-size: 1.6rem;
  font-weight: 600;
  gap: 2.2rem;
`;

const SubTotalHeading = styled.p`
  color: rgb(136, 136, 136);
`;
const Para = styled.span`
  font-weight: 700;
`;

const EmptyDiv = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 2rem;
  padding-top: 20rem;
`;

function Cart() {
  const { cart, clearCart, total_amount, shipping_fee } = useCartContext();
  // console.log(cart);

  if (cart.length === 0)
    return (
      <EmptyDiv>
        <Heading as="h1">No Items In The Cart...</Heading>
        <Link to="/products" className="link">
          <StyledButton>Continue Shopping</StyledButton>
        </Link>
      </EmptyDiv>
    );
  return (
    <>
      <StyledCart>
        <StyledHeader>
          <StyledHeading>Item</StyledHeading>
          <StyledHeading>Price</StyledHeading>
          <StyledHeading>Quantity</StyledHeading>
          <StyledHeading>Subtotal</StyledHeading>
          <StyledHeading>Remove</StyledHeading>
        </StyledHeader>
        <hr />

        <div>
          {cart.map((curElem) => {
            return <CartItem key={curElem.id} {...curElem} />;
          })}
        </div>
        <hr />
        <ButtonContainer>
          <Link to="/products" className="link">
            <StyledButton>Continue Shopping</StyledButton>
          </Link>
          <StyledButton onClick={clearCart}>Clear Cart</StyledButton>
        </ButtonContainer>
        <SubTotal>
          <SubTotalDetails>
            <SubTotalHeading>Subtotal:</SubTotalHeading>
            <Para>{formatCurrency(total_amount)}</Para>
          </SubTotalDetails>
          <SubTotalDetails>
            <SubTotalHeading>Shipping:</SubTotalHeading>
            <Para>{formatCurrency(shipping_fee)}</Para>
          </SubTotalDetails>

          <hr />
          <SubTotalDetails>
            <SubTotalHeading>Total:</SubTotalHeading>
            <Para>{formatCurrency(shipping_fee + total_amount)}</Para>
          </SubTotalDetails>
        </SubTotal>
      </StyledCart>
    </>
  );
}

export default Cart;
