import styled, { css } from "styled-components";

// const test = css`
//   text-align: center;
//   ${10 > 5 && "background-color: yellow"}
// `;

const Heading = styled.h1`
  ${(props) =>
    props.as === "h1" &&
    css`
      font-size: 3rem;
      font-weight: 600;
    `}

  ${(props) =>
    props.as === "h2" &&
    css`
      font-size: 2rem;
      font-weight: 600;
    `}
    
    ${(props) =>
    props.as === "h3" &&
    css`
      font-size: 2rem;
      font-weight: 500;
    `}

    ${(props) =>
    props.as === "h4" &&
    css`
      font-size: 4rem;
      font-weight: 600;
      /* margin-top: 10%; */
      margin-bottom: 20%;
      background: rgb(0, 0, 0);
      background: rgba(0, 0, 0, 0.5);
      line-height: 1.4;
    `}
    

    
  line-height: 1.4;
`;

export default Heading;
