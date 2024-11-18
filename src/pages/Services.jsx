import { styled } from "styled-components";

import { FaMinus, FaPlus } from "react-icons/fa6";
import { useState } from "react";
import Gallery from "../ui/Gallery";

const Container = styled.div`
  max-width: 120rem;
  margin: 0 auto;
  padding-top: 16rem;
`;

const Heading = styled.h1`
  font-size: 6rem;
  font-weight: 500;
  /* letter-spacing: 1px; */
  line-height: 1.2;
  margin-bottom: 6rem;
  /* text-align: center; */
`;
const HeadingMini = styled.h2`
  font-size: 4rem;
  font-weight: 500;
  letter-spacing: 1px;
  line-height: 1.2;
  margin-top: 6rem;
  margin-bottom: 3rem;
`;

const ArchSection = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 2rem;
`;

const ArchHeading = styled.h3`
  font-size: 2.6rem;
  font-weight: 400;
`;

const ArchPara = styled.p`
  font-size: 1.9rem;
  color: #555;
  line-height: 1.6;
`;

const Content = styled.p`
  font-size: 1.9rem;
  color: #555;
  line-height: 1.6;
`;

function Services() {
  const [showText1, setShowText1] = useState(false);
  const [showText2, setShowText2] = useState(false);
  const [showText3, setShowText3] = useState(false);
  const [showText4, setShowText4] = useState(false);
  const [showText5, setShowText5] = useState(false);

  const handleToggle1 = () => {
    setShowText1((show) => !show);
  };

  const handleToggle2 = () => {
    setShowText2((show) => !show);
  };
  const handleToggle3 = () => {
    setShowText3((show) => !show);
  };
  const handleToggle4 = () => {
    setShowText4((show) => !show);
  };
  const handleToggle5 = () => {
    setShowText5((open) => !open);
  };
  return (
    <Container>
      <Heading>SERVICES</Heading>
      <Gallery />
      <HeadingMini>ARCHITECTURE</HeadingMini>
      <div>
        <ArchSection>
          <ArchHeading>Concept Design</ArchHeading>
          <div onClick={handleToggle1}>
            {!showText1 ? (
              <FaPlus className="plus-icon" />
            ) : (
              <FaMinus className="plus-icon" />
            )}
          </div>
        </ArchSection>
        {showText1 && (
          <Content>
            Defining the underlying idea, guiding principles, and creative
            vision, shaping the design's essence and <br /> functionality.
          </Content>
        )}

        <hr className="line" />
      </div>

      <ArchSection>
        <ArchHeading>Space Planing and Design</ArchHeading>
        <div onClick={handleToggle2}>
          {!showText2 ? (
            <FaPlus className="plus-icon" />
          ) : (
            <FaMinus className="plus-icon" />
          )}
        </div>
      </ArchSection>
      {showText2 && (
        <ArchPara>
          Optimizing functionality, circulation, and aesthetics, ensuring
          efficient and <br /> harmonious spatial arrangements for users.
        </ArchPara>
      )}

      <hr className="line" />

      <ArchSection>
        <ArchHeading>3D visualization and 3D imaging</ArchHeading>
        <div onClick={handleToggle3}>
          {!showText3 ? (
            <FaPlus className="plus-icon" />
          ) : (
            <FaMinus className="plus-icon" />
          )}
        </div>
      </ArchSection>
      {showText3 && (
        <ArchPara>
          Bringing designs to life, showcasing form, materials, and spatial
          dynamics creatively and convincingly.
        </ArchPara>
      )}

      <hr className="line" />

      <ArchSection>
        <ArchHeading>Tender Documents</ArchHeading>
        <div onClick={handleToggle4}>
          {!showText4 ? (
            <FaPlus className="plus-icon" />
          ) : (
            <FaMinus className="plus-icon" />
          )}
        </div>
      </ArchSection>
      {showText4 && (
        <ArchPara>
          Detail project specifications, requirements, and contract terms,
          guiding the bidding and construction <br /> process effectively.
        </ArchPara>
      )}

      <hr className="line" />

      <ArchSection>
        <ArchHeading>Site Supervision</ArchHeading>
        <div onClick={handleToggle5}>
          {!showText5 ? (
            <FaPlus className="plus-icon" />
          ) : (
            <FaMinus className="plus-icon" />
          )}
        </div>
      </ArchSection>
      {showText5 && (
        <ArchPara>
          Ensuring construction aligns with design, quality standards, and
          safety regulations for project success.
        </ArchPara>
      )}

      <hr className="line" />
    </Container>
  );
}

export default Services;
