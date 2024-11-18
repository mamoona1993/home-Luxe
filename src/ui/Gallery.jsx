import { styled } from "styled-components";

const Section = styled.div`
  /* max-width: 130rem; */
  /* margin: 0 auto; */
  display: grid;
  /* padding-top: 16rem; */
`;

const Container = styled.div`
  grid-column: full-start/full-end;
  display: grid;
  /* grid-template-columns: repeat(8, 1fr);
  grid-template-rows: repeat(7, 5vw); */

  grid-template: repeat(7, 5vw) / repeat(8, 1fr);
  grid-gap: 1.5rem;
`;
const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
`;
const Figure1 = styled.figure`
  grid-row: 1 / span 2;
  grid-column: 1 / span 2;
`;
const Figure2 = styled.figure`
  grid-row: 1 / span 3;
  grid-column: 3 / span 3;
`;
const Figure3 = styled.figure`
  grid-row: 1 / span 2;
  grid-column: 6 / 7;
`;
const Figure4 = styled.figure`
  grid-row: 1 / span 2;
  grid-column: 7 / -1;
`;
const Figure5 = styled.figure`
  grid-row: 3 / span 3;
  grid-column: 1 / span 2;
`;
const Figure6 = styled.figure`
  grid-row: 4 / span 2;
  grid-column: 3 / span 2;
`;
const Figure7 = styled.figure`
  grid-row: 4 / 5;
  grid-column: 5 / 6;
`;
const Figure8 = styled.figure`
  grid-row: 3 / span 2;
  grid-column: 6 / span 2;
`;
const Figure9 = styled.figure`
  grid-row: 3 / span 3;
  grid-column: 8 / -1;
`;
const Figure10 = styled.figure`
  grid-row: 6 / span 2;
  grid-column: 1 / 2;
`;
const Figure11 = styled.figure`
  grid-row: 6 / span 2;
  grid-column: 2 / span 2;
`;
const Figure12 = styled.figure`
  grid-row: 6 / span 2;
  grid-column: 4 / 5;
`;
const Figure13 = styled.figure`
  grid-row: 5 / span 3;
  grid-column: 5 / span 3;
`;
const Figure14 = styled.figure`
  grid-row: 6 / span 2;
  grid-column: 8 / -1;
`;
function Gallery() {
  return (
    <Section>
      <Container>
        <Figure1>
          <Image src="public/about1.png" alt="gallery" />
        </Figure1>
        <Figure2>
          <Image src="public/plant2.webp" alt="gallery" />
        </Figure2>
        <Figure3>
          <Image src="public/home2.jpeg" alt="gallery" />
        </Figure3>
        <Figure4>
          <Image src="public/home3.jpeg" alt="gallery" />
        </Figure4>
        <Figure5>
          <Image src="public/plant3.webp" alt="gallery" />
        </Figure5>
        <Figure6>
          <Image src="public/house-2.jpeg" alt="gallery" />
        </Figure6>
        <Figure7>
          <Image src="public/project1.jpg" alt="gallery" />
        </Figure7>
        <Figure8>
          <Image src="public/project2.jpg" alt="gallery" />
        </Figure8>
        <Figure9>
          <Image src="public/project3.jpg" alt="gallery" />
        </Figure9>
        <Figure10>
          <Image src="public/project4.jpg" alt="gallery" />
        </Figure10>
        <Figure11>
          <Image src="public/project5.jpg" alt="gallery" />
        </Figure11>
        <Figure12>
          <Image src="public/project6.jpg" alt="gallery" />
        </Figure12>
        <Figure13>
          <Image src="public/project7.jpg" alt="gallery" />
        </Figure13>
        <Figure14>
          <Image src="public/project8.jpg" alt="gallery" />
        </Figure14>
      </Container>
    </Section>
  );
}

export default Gallery;
