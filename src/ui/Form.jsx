import styled, { css } from "styled-components";

const Form = styled.form`
  ${(props) =>
    props.type !== "modal" &&
    css`
      padding: 4.4rem 4rem;

      width: 50%;
      /* Box */
      background-color: #eee9e9;
      border: 1px solid rgb(136, 136, 136);
      border-radius: 5px;
    `}

  ${(props) =>
    props.type === "modal" &&
    css`
      /* width: 80rem; */
    `}
    
  overflow: hidden;
  font-size: 1.4rem;
`;

export default Form;
