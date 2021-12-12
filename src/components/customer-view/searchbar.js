import React from "react";
import { useGlobalContext } from "../../context";
import styled from "styled-components";

export default function SearchForm() {
  const { setSearchTerm } = useGlobalContext();
  const searchValue = React.useRef("");

  React.useEffect(() => {
    searchValue.current.focus();
  }, []);

  function searchProduct() {
    setSearchTerm(searchValue.current.value);
  }
  function handleSubmit(e) {
    e.preventDefault();
  }
  return (
    <>
      <form onSubmit={handleSubmit}>
        <div className="d-flex d-grid gap-2 col-xl-6 col-lg-6 col-md-8 col-sm-10 mx-auto ">
          <StyledFormCtrl className="bi bi-search"></StyledFormCtrl>
          <StyledInput
            className="form-control me-2 text-center"
            style={{ margin: "10px " }}
            type="search"
            placeholder="Search by product/shop"
            name="name"
            ref={searchValue}
            onChange={searchProduct}
          ></StyledInput>
          <StyledButton
            className="btn"
            type="submit"
            // onSubmit={handleSubmit}
          >
            Search
          </StyledButton>
        </div>
      </form>
    </>
  );
}
// ======================Styled Components============================
const StyledFormCtrl = styled.i`
  position: absolute;
  z-index: 2;
  display: block;
  width: 2.375rem;
  height: 2.375rem;
  line-height: 2.375rem;
  text-align: center;
  pointer-events: none;
  color: #f4633b;
  margin-top: 0.7rem;
  margin-left: 0.8rem;
`;

const StyledInput = styled.input`
  margin-top: 10px;
  margin-bottom: 10px;
  padding-left: 35px;
  border-color: #f4633b;
`;

const StyledButton = styled.button`
  margin-top: 10px;
  margin-bottom: 10px;
  background-color: #f4633b;
  color: white;
  border: white;
  &:hover {
    background-color: #f4633b;
    color: white;
    border: white;
  }
`;
