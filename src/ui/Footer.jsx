import { Link } from "react-router-dom";
import { styled } from "styled-components";

const Container = styled.footer`
  /* max-width: 120rem; */
  /* margin: 0 auto; */

  /* background-color: #fdf2e9; */
  /* font-size: 5rem; */
`;

const FooterDetail = styled.div`
  /* background-color: grey; */
  max-width: 120rem;
  margin: 10rem auto;
  display: flex;
  flex-direction: column;
  gap: 5rem;
  /* margin-top: 18rem; */
  /* padding-top: 10rem; */
`;
const Para = styled.h1`
  font-size: 4rem;
  text-align: center;
  font-weight: 600;
  /* margin-top: 17rem; */
`;
const ImagesContainer = styled.div`
  display: grid;
  gap: 2rem;
  /* margin-top: 10rem; */
  grid-template-columns: repeat(3, 1fr);
`;
const Image = styled.img`
  height: 40rem;
  width: 100%;
  object-fit: cover;
  background-repeat: no-repeat;
`;

const HelpDetails = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;
const HelpDetailsHeading = styled.h3`
  /* color: #fff; */
  margin-top: 5rem;
  font-weight: 400;
  font-size: 1.8rem;
  line-height: 1.4;
  margin-bottom: 2rem;
  letter-spacing: 1px;
`;
const HelpDetailsPara = styled.p`
  letter-spacing: 1px;
  color: #333;
  font-size: 1.8rem;
`;

function Footer() {
  return (
    <Container>
      <FooterDetail>
        <Para>We're here to help</Para>
        <ImagesContainer>
          <div className="flip-card">
            <div className="flip-card__inner">
              <div className="flip-card__front">
                <Image src="footer1.webp" alt="contact" />
              </div>
              <div className="flip-card__back">
                <HelpDetails>
                  <HelpDetailsHeading>Company</HelpDetailsHeading>
                  <Link to="/contact" className="link">
                    <HelpDetailsPara>Contact Us</HelpDetailsPara>
                  </Link>

                  <Link to="/about" className="link">
                    <HelpDetailsPara>About Us</HelpDetailsPara>
                  </Link>
                  <Link to="/services" className="link">
                    <HelpDetailsPara>Our Services</HelpDetailsPara>
                  </Link>
                  <Link to="/project" className="link">
                    <HelpDetailsPara>Our Projects</HelpDetailsPara>
                  </Link>
                  <Link to="/policy" className="link">
                    <HelpDetailsPara>Privacy Policy</HelpDetailsPara>
                  </Link>
                </HelpDetails>
              </div>
            </div>
          </div>
          <div className="flip-card">
            <div className="flip-card__inner">
              <div className="flip-card__front">
                <Image src="footer2.jpeg" alt="contact" />
              </div>
              <div className="flip-card__back">
                <HelpDetails>
                  <HelpDetailsHeading>Help</HelpDetailsHeading>
                  <Link to="/policy" className="link">
                    <HelpDetailsPara>FAQ's</HelpDetailsPara>
                  </Link>
                  <Link to="/policy" className="link">
                    <HelpDetailsPara>Customer Services</HelpDetailsPara>
                  </Link>
                  <Link to="/policy" className="link">
                    <HelpDetailsPara>Store Location</HelpDetailsPara>
                  </Link>
                </HelpDetails>
              </div>
            </div>
          </div>
          <div className="flip-card">
            <div className="flip-card__inner">
              <div className="flip-card__front">
                <Image src="footer3.webp" alt="contact" />
              </div>
              <div className="flip-card__back">
                <HelpDetails>
                  <HelpDetailsHeading>Order Information</HelpDetailsHeading>
                  <Link to="/policy" className="link">
                    <HelpDetailsPara>Exchange Policy</HelpDetailsPara>
                  </Link>
                  <Link to="/policy" className="link">
                    <HelpDetailsPara>Refund Policy</HelpDetailsPara>
                  </Link>
                  <Link to="/policy" className="link">
                    <HelpDetailsPara>Payment Guide</HelpDetailsPara>
                  </Link>
                  <Link to="/policy" className="link">
                    <HelpDetailsPara>Shipping Details</HelpDetailsPara>
                  </Link>
                </HelpDetails>
              </div>
            </div>
          </div>
        </ImagesContainer>
      </FooterDetail>
    </Container>
  );
}

export default Footer;
