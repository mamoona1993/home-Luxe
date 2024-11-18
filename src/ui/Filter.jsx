import { useState } from "react";
import { useSearchParams } from "react-router-dom";
import { styled } from "styled-components";
import { AiOutlineCaretUp, AiOutlineCaretDown } from "react-icons/ai";

const Button = styled.button`
  font-size: 2rem;
  background-color: var(--main-brown-color);
  color: #fff;
  padding: 1.2rem 2rem;
  margin-right: 1rem;
`;

const DropDown = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  /* align-items: flex-start;
   */
  width: 30rem;
  /* height: 30rem; */
`;
const DropDownButton = styled.div`
  background: #efefef;
  padding: 1rem;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-width: 3px;
  // border-color: #333;
  border-radius: 9px;
  transition: all 0.3s;
  cursor: pointer;
  &:active {
    border-color: #868e96;
  }
`;
const DropDownContent = styled.div`
  position: absolute;
  background-color: #fff;
  display: flex;
  // gap: 1rem;
  flex-direction: column;
  width: 100%;
  cursor: pointer;
  margin-top: 4rem;
  padding: 0.5rem 1rem;
  border-radius: 9px;
  /* min-width: 260px; */
  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
  &:hover {
    // background-color: #f1f1f1;
  }
`;

const DropDownHeading = styled.h3`
  font-size: 2rem;
  padding: 1rem;
  &:hover {
    background-color: #f1f1f1;
  }
`;

function Filter() {
  const [isOpen, setIsOpen] = useState(false);
  const [searchParams, setSearchParams] = useSearchParams();

  function handleClick(value) {
    searchParams.set("category", value);
    setSearchParams(searchParams);
    setIsOpen("");
  }

  function handleToggle() {
    setIsOpen((open) => !open);
  }

  return (
    <DropDown>
      <DropDownButton onClick={handleToggle}>
        Filter {!isOpen ? <AiOutlineCaretDown /> : <AiOutlineCaretUp />}
      </DropDownButton>
      {isOpen && (
        <DropDownContent>
          <DropDownHeading onClick={() => handleClick("all")}>
            All
          </DropDownHeading>
          <DropDownHeading onClick={() => handleClick("furniture")}>
            Furniture
          </DropDownHeading>
          <DropDownHeading onClick={() => handleClick("decor")}>
            Decor
          </DropDownHeading>
          <DropDownHeading onClick={() => handleClick("mirror")}>
            Mirror
          </DropDownHeading>
          <DropDownHeading onClick={() => handleClick("plant")}>
            Plant
          </DropDownHeading>
        </DropDownContent>
      )}
    </DropDown>
    // <div>
    //   <Button onClick={() => handleClick("all")}>All</Button>
    //   <Button onClick={() => handleClick("furniture")}>Furniture</Button>
    //   <Button onClick={() => handleClick("decor")}>Decor</Button>
    //   <Button onClick={() => handleClick("mirror")}>Mirrors</Button>
    //   <Button onClick={() => handleClick("plant")}>Plants</Button>
    // </div>
  );
}

export default Filter;
