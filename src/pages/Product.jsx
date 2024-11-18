// import { Spinner } from "react-bootstrap";
import { useProduct } from "../hooks/useProduct";
import { styled } from "styled-components";
import UpdateQuantity from "../ui/AddToCart";
import {
  FaFacebookSquare,
  FaLinkedin,
  FaWhatsappSquare,
  FaTwitterSquare,
} from "react-icons/fa";
// import { Link } from "react-router-dom";
import Spinner from "../ui/Spinner";
import AddToCart from "../ui/AddToCart";
import RelatedProducts from "../ui/RelatedProducts";
import { formatCurrency } from "../helpers";
// import { LiaTwitterSquare } from "react-icons/lia";
const Container = styled.div`
  background-color: #fdf2e9;
`;
const StyledProductDetail = styled.div`
  display: flex;
  justify-content: center;
  gap: 5rem;
  max-width: 110rem;
  margin: 0 auto;

  padding: 16rem 0;
`;
const StyledProductImage = styled.img`
  height: 55rem;
  width: 50rem;
  &:img {
    border-radius: 9px;
  }
`;

const StyledProductContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const StyledName = styled.h1`
  font-size: 4rem;
  font-weight: 600;
  line-height: 1.2;
  color: var(--main-brown-color);
`;

const StyledDescription = styled.p`
  font-size: 1.8rem;
  line-height: 1.4;
  color: #555;
`;

const StyledPrice = styled.p`
  font-size: 1.8rem;
  font-weight: 500;
  color: var(--main-brown-color);
`;
const StyledDelivery = styled.p`
  font-size: 1.7rem;
  color: #c42222;
`;

const StyledHr = styled.hr`
  border-color: var(136 136 136);
  margin-top: 4rem;
  /* border-color: red; */
  /* display: block; */
  /* height: 1px; */
`;

const StyledCategory = styled.span`
  color: rgb(136, 136, 136);
  font-size: 1.8rem;
  font-weight: 300;
  line-height: 1.4;
  margin-left: 1rem;
`;
const StyledIconsContainer = styled.div`
  margin-top: 2rem;
  display: flex;
  gap: 1rem;
`;

const Category = styled.div`
  margin-top: 4rem;
`;
function Product() {
  const { product, isLoading } = useProduct();

  if (isLoading) return <Spinner />;

  const { name, category, description, image, price, stock, id } = product;

  return (
    <Container>
      <StyledProductDetail>
        <StyledProductImage src={image} />

        <StyledProductContent>
          <StyledName>{name}</StyledName>
          <StyledPrice>{formatCurrency(price)}</StyledPrice>
          <StyledDescription>{description}</StyledDescription>
          <StyledDescription>
            Make a 40% advance payment and pay the remaining
            <br /> amount in
            <span className="span">cash on delivery</span>
          </StyledDescription>
          <StyledDelivery>Standered Delivery Within 25 Days</StyledDelivery>
          <AddToCart product={product} />
          <StyledHr />
          <Category>
            <StyledDescription>
              SKU:
              <StyledCategory>BK0038</StyledCategory>
            </StyledDescription>
            <StyledDescription>
              Category:
              <StyledCategory>{category}</StyledCategory>
            </StyledDescription>

            <StyledDescription>
              Available:
              <StyledCategory>Only {stock} items left...</StyledCategory>
            </StyledDescription>
          </Category>

          <StyledIconsContainer>
            <FaFacebookSquare className="cart-icon-1" />
            <FaTwitterSquare className="cart-icon-2" />
            <FaLinkedin className="cart-icon-3" />
            <FaWhatsappSquare className="cart-icon-4" />
          </StyledIconsContainer>
        </StyledProductContent>
      </StyledProductDetail>
      <RelatedProducts />
    </Container>
  );
}

export default Product;
