import { styled } from "styled-components";
import { LiaFilterSolid } from "react-icons/lia";
import ProductsPage from "../ui/ProductsPage";
import Filter from "../ui/Filter";
import Pagination from "../ui/Pagination";

const StyledProductHeader = styled.div`
  background-image: url(story-2.jpeg);
  background-position: bottom;
  background-size: cover;
  height: 60vh;
  display: flex;
  justify-content: space-around;
  align-items: center;
`;
const StyledPara = styled.p`
  font-size: 3rem;
  color: #fff;
  line-height: 1.6;
`;
const StyledFeatures = styled.div`
  max-width: 120rem;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 2rem 4rem;
`;

const StyledFilter = styled.div`
  color: #333;
  font-size: 2rem;
`;

const Section = styled.div`
  max-width: 130rem;
  margin: 0 auto;
  padding-top: 4rem;
`;
const Heading = styled.div`
  font-size: 4rem;
  font-weight: 600;
`;
const Container = styled.div`
  max-width: 130rem;
  margin: 0 auto;
`;

function Products() {
  return (
    <>
      <StyledProductHeader>
        <StyledPara>Decorate Home With Comfort Joy</StyledPara>
      </StyledProductHeader>
      <Section>
        <StyledFeatures>
          <Heading>Elevate Your Space</Heading>
          <StyledFilter>
            <Filter />
          </StyledFilter>
        </StyledFeatures>
      </Section>
      <ProductsPage />;
    </>
  );
}

export default Products;
