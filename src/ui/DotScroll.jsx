import { styled } from "styled-components";
import Heading from "./Heading";
// import Logo from "./Logo";

import {
  Fullpage,
  FullPageSections,
  FullpageNavigation,
  FullpageSection,
} from "@ap.cx/react-fullpage";
import { Link, useSearchParams } from "react-router-dom";
import { useProducts } from "../hooks/useProducts";
import Footer from "./Footer";
import Contact from "./Contact";

const StyledPara = styled.p`
  font-size: 2.2rem;
  font-weight: 500;
  color: #fff;
  line-height: 1.6;
  /* display: flex;
  justify-content: center;
  align-items: center;
  text-align: center; */
  /* width: 50%; */
`;

const StyledHeading = styled.h2`
  font-size: 4rem;
  color: #fff;
  line-height: 1.6;
  font-weight: 600;
  margin-bottom: 2rem;
`;

const StyledContent = styled.div`
  text-align: center;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background: rgb(0, 0, 0);
  background: rgba(0, 0, 0, 0.5);
`;

function DotScroll() {
  return (
    // <div>
    <Fullpage>
      <FullpageNavigation />

      <FullPageSections>
        <Link to="/products">
          <FullpageSection className="home-page-section__main">
            <StyledContent>
              <StyledHeading as="h4">Bloom With Decor</StyledHeading>
              <StyledPara>
                For a house to be successful, the objects in it must communicate
                with one another, respond and balance one another.
              </StyledPara>
            </StyledContent>
          </FullpageSection>
        </Link>
        <Link to="products?category=furniture" className="link">
          <FullpageSection className="home-page-section__1">
            <Heading as="h4">Elegent furniture ideas</Heading>
          </FullpageSection>
        </Link>
        <Link to="products?category=plant" className="link">
          <FullpageSection className="home-page-section__2">
            <Heading as="h4" className="text">
              Outdoor Plants
            </Heading>
          </FullpageSection>
        </Link>
        <Link to="products?category=decor" className="link">
          <FullpageSection className="home-page-section__3">
            <Heading as="h4">Home Decor</Heading>
          </FullpageSection>
        </Link>
        <Link to="products?category=mirror" className="link">
          <FullpageSection className="home-page-section__4">
            <Heading as="h4">Stylish Mirrors</Heading>
          </FullpageSection>
        </Link>
        {/* <FullpageSection className="footer">
          {/* <Contact /> */}
        {/* <Footer /> */}
        {/* </FullpageSection> */}
      </FullPageSections>
    </Fullpage>
  );
}

export default DotScroll;
