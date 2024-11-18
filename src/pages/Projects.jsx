import { Link } from "react-router-dom";
import { styled } from "styled-components";

const Container = styled.div`
  max-width: 120rem;
  margin: 0 auto;
  padding-top: 16rem;
`;

const Heading = styled.h1`
  font-size: 6rem;
  /* text-align: center; */
  font-weight: 500;
  margin-bottom: 6rem;
`;

const ProjectList = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  row-gap: 4rem;
  gap: 2rem;
`;
const ProjectBox = styled.div``;
const ProjectImage = styled.img`
  width: 100%;
  height: 58rem;
  margin-bottom: 2rem;
  object-fit: cover;
  object-position: center;
  transition: all 0.3s;
  display: block;
  &:hover {
    /* transform: scale(1.1); */
  }
`;
const ProjectName = styled.h4`
  font-size: 2rem;
`;

function Projects() {
  return (
    <Container>
      <Heading>PROJECTS</Heading>
      <ProjectList>
        <ProjectBox>
          <ProjectImage src="project10.jpg" alt="project" />
          <ProjectName>Emirates Hill Paris</ProjectName>
        </ProjectBox>
        <ProjectBox>
          <ProjectImage src="project2.jpg" alt="project" />
          <ProjectName>Beit Merry House</ProjectName>
        </ProjectBox>
        <ProjectBox>
          <ProjectImage src="project3.jpg" alt="project" />
          <ProjectName>Jabel Ali Villa</ProjectName>
        </ProjectBox>

        <ProjectBox>
          <ProjectImage src="project11.jpg" alt="project" />
          <ProjectName>Luci Luna Beauty Salon</ProjectName>
        </ProjectBox>

        <ProjectBox>
          <ProjectImage src="project4.jpg" alt="project" />
          <ProjectName>Xo Lounge</ProjectName>
        </ProjectBox>
        <ProjectBox>
          <ProjectImage src="project6.jpg" alt="project" />
          <ProjectName>Emirates Hill Paris</ProjectName>
        </ProjectBox>

        <ProjectBox>
          <ProjectImage src="project7.jpg" alt="project" />
          <ProjectName>Emirates Hill Paris Ground Floor</ProjectName>
        </ProjectBox>

        <ProjectBox>
          <ProjectImage src="project8.jpg" alt="project" />
          <ProjectName>Pent House JBR</ProjectName>
        </ProjectBox>
      </ProjectList>
    </Container>
  );
}

export default Projects;
