import { styled } from "styled-components";

const AboutContainer = styled.div`
  background-color: rgb(242, 242, 242);
`;
const AboutContent = styled.div`
  max-width: 120rem;
  padding-top: 13rem;
  margin: 0 auto;
`;

const Heading = styled.h2`
  font-size: 7rem;
  letter-spacing: 3px;
  font-weight: 400;
  margin-bottom: 8rem;
`;
const About1 = styled.div`
  display: grid;
  grid-template-columns: 1fr 2fr;
  margin-bottom: 8rem;
`;
const AboutHead = styled.h6`
  font-size: 3rem;
  font-weight: 500;
  line-height: 1.8;
  color: #555;
`;
const AboutPara = styled.p`
  font-size: 3rem;
  line-height: 1.2;
  letter-spacing: 1.6px;
  /* margin-left: 10rem; */
  color: #333;
  font-weight: 500;
`;
const Image = styled.img`
  height: 90vh;
  width: 100%;
  margin-bottom: 8rem;
`;

const AboutContent1 = styled.div`
  display: flex;
  gap: 2rem;
`;
const AboutMiniPara = styled.span`
  font-size: 1.8rem;
  line-height: 1.6;
  color: #555;
`;
const Span = styled.span`
  font-weight: 600;
  margin-right: 0.8rem;
`;
const List = styled.li`
  margin-left: 1.8rem;
  margin-bottom: 1.4rem;
`;
const Ol = styled.ol`
  margin-top: 3rem;
`;

function About() {
  return (
    <AboutContainer>
      <AboutContent>
        <Heading>About Us</Heading>
        <About1>
          <AboutHead>WORLD WISE</AboutHead>
          <AboutPara>
            Bringing dream properties and visions into <br /> reality with
            impeccable results.
          </AboutPara>
        </About1>
        <Image src="project4.jpg" alt="about" />
        <About1>
          <AboutHead>HISTORY</AboutHead>
          <AboutContent1>
            <AboutMiniPara>
              WORLD WISE is a distinguished luxury architecture and interior
              design studio, specializing in exceptional design services for
              both residential and commercial properties. Founded in 2006 by two
              university classmates and architects, Firas Idelbi and Samer
              Nassan, EDNAS began with a vision for excellence.
            </AboutMiniPara>
            <AboutMiniPara>
              In 2014, Lama Kutait Taba, a California-based interior designer
              with experience across three continents, partnered with the firm
              to elevate the firms services for interior. Since their
              partnership, they have worked on multiple statement projects in
              the UAE, Lebanon, Turkey, and more.
            </AboutMiniPara>
          </AboutContent1>
        </About1>
        <About1>
          <AboutHead>VISION</AboutHead>
          <AboutPara>
            To become a center for innovative, adaptable, modern, and powerful
            architectural and interior design.
          </AboutPara>
        </About1>
        <Image src="about1.png" alt="about" />
        <About1>
          <AboutHead>VALUES</AboutHead>
          <AboutMiniPara>
            Our core values are represented by seven pillars that are
            incorporated into every project:
            {/* </AboutMiniPara> */}
            {/* <AboutMiniPara> */}
            <Ol>
              <List>
                <Span>Creativity:</Span>
                <AboutMiniPara>
                  employing a unique process to bring every project to life with
                  distinctive touches.
                </AboutMiniPara>
              </List>
              <List>
                <Span>Client-centric-approach:</Span>
                <AboutMiniPara>
                  Prioritizing client’s preferences and needs, ensuring a
                  tailored and satisfying design experience
                </AboutMiniPara>
              </List>
              <List>
                <Span>Attention to detail:</Span>
                <AboutMiniPara>
                  {" "}
                  Ensuring meticulous precision in design execution, with a keen
                  focus on every aspect for a refined outcome.
                </AboutMiniPara>
              </List>
              <List>
                <Span>Collaboration:</Span>
                <AboutMiniPara>
                  Nurturing effective teamwork and open communication with
                  clients and project collaborators
                </AboutMiniPara>
              </List>
              <List>
                <Span>Ingenuity:</Span>
                <AboutMiniPara>
                  providing clients with unique and eye-catching takes on their
                  dream properties from an architectural and interior standpoint
                </AboutMiniPara>
              </List>
              <List>
                <Span>Reliability:</Span>
                <AboutMiniPara>
                  allowing busy clients to immerse themselves in their dreams
                  without worrying about the process by effortlessly managing
                  every detail.
                </AboutMiniPara>
              </List>
              <List>
                <Span>Comprehensiveness:</Span>
                <AboutMiniPara>
                  Ensuring end-to-end commitment by integrating meticulous
                  design planning with diligent on-site supervision,
                  guaranteeing the realization of the envisioned design with
                  precision and excellence.
                </AboutMiniPara>
              </List>
            </Ol>
          </AboutMiniPara>
        </About1>
      </AboutContent>
    </AboutContainer>
  );
}

export default About;
