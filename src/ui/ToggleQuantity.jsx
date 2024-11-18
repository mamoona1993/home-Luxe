import { FaMinus, FaPlus } from "react-icons/fa";
import { styled } from "styled-components";

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
  display: flex;
  gap: 1rem;
`;
function ToggleQuantity({ quantity, increaseQuantity, decreaseQuantity }) {
  // function decreaseQuantity() {
  //   quantity > 1 ? setQuantity(quantity - 1) : setQuantity(1);
  // }
  // function increaseQuantity() {
  //   quantity < stock ? setQuantity(quantity + 1) : setQuantity(stock);
  // }

  return (
    <StyledQuantityDiv>
      <StyledQuantityButton onClick={decreaseQuantity}>
        <FaMinus />
      </StyledQuantityButton>
      <StyledQuantity>{quantity}</StyledQuantity>
      <StyledQuantityButton onClick={increaseQuantity}>
        <FaPlus />
      </StyledQuantityButton>
    </StyledQuantityDiv>
  );
}

export default ToggleQuantity;
