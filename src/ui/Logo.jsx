import { Link } from "react-router-dom";
import styled from "styled-components";

const StyledLogo = styled.div`
  text-align: center;
`;

const StyledLogoDiv = styled.div`
  /* position: fixed; */
  /* top: 2rem; */
  /* left: 2rem; */
  z-index: 1000;
`;

const Img = styled.h1`
  font-size: 4rem;
  width: auto;
  color: #fff;
  font-weight: 200;
  font-family: "Lato";
`;

const Span = styled.span`
  font-family: "Lato";
  font-weight: 600;
`;

function Logo() {
  return (
    <StyledLogoDiv>
      <StyledLogo>
        <Link to="/" className="link">
          {/* // <Img src="/Logo.avif" alt="Logo" /> */}
          <Img>
            HOME<Span>LUXE</Span>
          </Img>
        </Link>
      </StyledLogo>
    </StyledLogoDiv>
  );
}

export default Logo;
