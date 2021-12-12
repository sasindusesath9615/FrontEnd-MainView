import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "../navbar";
import Searchbar from "../searchbar";
// import reactDom from "react-dom";
import Product from "../Product";
import { useGlobalContext } from "../../../context";
import styled from "styled-components";

function Main() {
  // const { category } = useParams();
  const { cart, products } = useGlobalContext();

  // ===============Get Total====================================
  const [total, setTotal] = useState(0);

  useEffect(() => {
    setTotal(
      cart.reduce((acc, curr) => acc + Number(curr.price) * curr.count, 0)
    );
  }, [cart]);
  // ===============Get Total====================================
  return (
    <>
      <div>
        <Navbar />
      </div>
      <div className="container container-margin">
        <Searchbar />
      </div>
      <div className="container ">
        <div className="container">
          <div className="d-grid gap-3 col-3 mx-auto">
            <div className="text-center">
              <h4>
                <StyledIcon className="fas fa-hamburger"></StyledIcon> Food
              </h4>
            </div>
          </div>
        </div>
      </div>
      <div className="container ">
        <div className="d-flex flex-row-reverse mb-3 ">
          <StyledTotal className="p-2">
            <strong>Rs.{total}</strong>
          </StyledTotal>
          <StyledTotal className="p-2">Total : </StyledTotal>
        </div>
      </div>
      <StyledContainer className="container">
        <div>
          <div className="row row-cols-1 row-cols-md-3 g-4">
            {products
              .filter((item) => item.category === "food")
              .map((item) => {
                return (
                  <div className="col" key={item.id}>
                    <Product {...item}></Product>
                  </div>
                );
              })}
          </div>
        </div>
        <div className="container">
          <div className=" col-1 mx-auto">
            <Link to="/cart">
              <button className="btn btn-secondary btn-lg" type="button">
                Checkout
              </button>
            </Link>
          </div>
        </div>
      </StyledContainer>
    </>
  );
}

export default Main;
// ======================Styled Components============================
const StyledIcon = styled.i`
  color: #ff4308;
`;
const StyledTotal = styled.div`
  width: 100px;
  text-align: end;
`;

const StyledContainer = styled.div`
  margin-top: 20px;
  margin-bottom: 20px;
`;
