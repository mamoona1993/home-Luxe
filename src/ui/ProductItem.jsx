import { useNavigate } from "react-router-dom";
import { styled } from "styled-components";
import { formatCurrency } from "../helpers";

const StyledCard = styled.div`
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  max-width: 28rem;
  /* margin: auto; */
  text-align: center;
`;

const StyledInfo = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0.5rem 0;
  margin: 1rem 1rem;
`;

const StyledName = styled.p`
  font-size: 1.6rem;
  color: #333;
`;
const StyledPrice = styled.p`
  font-size: 1.4rem;
  color: #c22323;
`;

const StyledButton = styled.button`
  border: none;
  outline: 0;
  padding: 12px;
  color: white;
  background-color: var(--main-brown-color);
  text-align: center;
  cursor: pointer;
  width: 100%;
  font-size: 1.8rem;
  transition: all 0.4s;
  &:hover {
    background-color: var(--main-lightbrown-color);
  }
`;
const StyledImage = styled.img`
  width: 28rem;
  height: 38rem;
  object-fit: cover;
  object-position: center;
`;

function ProductItem({ product }) {
  const navigate = useNavigate();
  const { name, price, image, product_id, id } = product;

  return (
    <StyledCard>
      <StyledImage src={image} alt={name} />
      <StyledInfo>
        <StyledName>{name}</StyledName>
        <StyledPrice>{formatCurrency(price)}</StyledPrice>
      </StyledInfo>
      <StyledButton onClick={() => navigate(`/products/${id}`)}>
        Add To Cart
      </StyledButton>
    </StyledCard>
  );
}

export default ProductItem;
