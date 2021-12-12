/* eslint-disable jsx-a11y/img-redundant-alt */
import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { useGlobalContext } from "../../context";

function Product({
  id,
  name,
  price,
  address,
  img,
  shopImg,
  restaurantName,
  inCart,
}) {
  const { addToCart, handledetails, removeItem } = useGlobalContext();

  return (
    <>
      <div className="card h-100 shadow bg-body rounded">
        <div className="row">
          <div className="row">
            <div className="col-12 ">
              {/* ================Restaurent name ================*/}
              <h5 className="position-absolute restourent">{restaurantName}</h5>
              {/* Restaurent name */}

              {/*================ Add to cart/In Cart button================ */}
              {inCart === true ? (
                <StyledButtonInCart
                  className="btn position-absolute rounded-pill"
                  type="button"
                  // disabled={inCart}
                  onClick={() => removeItem(id)}
                >
                  <span>In Cart</span>
                </StyledButtonInCart>
              ) : (
                <StyledButtonAddToCart
                  className="btn  position-absolute rounded-pill"
                  type="button"
                  // disabled={inCart}
                  onClick={() => addToCart(id)}
                >
                  <span>Add to Cart</span>
                </StyledButtonAddToCart>
              )}

              {/*================ Add to cart/In Cart button================*/}

              <StyledShopImg
                src={shopImg}
                className="position-absolute border border-3 "
                alt="shop-image"
              ></StyledShopImg>

              {/* ================Shop image(rounded poster)================ */}
            </div>
          </div>

          <div>
            {/*================ Link to product Description ================*/}
            <Link to="/ProductDetails">
              <StyledProductImg
                src={img}
                className="card-img-top rounded"
                alt="main-image"
                onClick={() => {
                  handledetails(id);
                }}
              ></StyledProductImg>
            </Link>
          </div>

          {/* ================Main image ================*/}
        </div>

        {/* ================Card Image(Card head)================*/}
        <div className="card-body">
          <div>
            <h5 className="card-title">{name}</h5>
            {/*================ Product name================ */}
            <div className="row">
              <div className="col">
                <div className="row">
                  <div className="col-2">
                    <StyledLikeIcon className="fas fa-thumbs-up"></StyledLikeIcon>
                  </div>
                  <div className="col-10">
                    <p>(24)sellings</p>
                  </div>
                </div>
              </div>
              <div className="col text-end">
                <p>
                  <b>{price}LKR</b>
                </p>
              </div>
            </div>
            {/* ================Selling and Price ================*/}
            <div className="row">
              <div className="col-1">
                <StyledLocationIcon className="fas fa-map-marker-alt"></StyledLocationIcon>
              </div>
              <div className="col-11">
                <p className="card-text">{address}</p>
              </div>
            </div>
            {/*================ Address================ */}
          </div>
        </div>
        {/*================ Card Body/Card Description================ */}
      </div>
    </>
  );
}
export default Product;

// ======================Styled Components============================
const StyledButtonInCart = styled.button`
  margin-left: 10px;
  margin-right: 10px;
  margin-top: 155px;
  color: black;
  background-color: #f4633b;
  width: 120px;
  
`;
const StyledButtonAddToCart = styled.button`
  margin-left: 10px;
  margin-right: 10px;
  margin-top: 155px;
  color: black;
  background-color: #fdca6e;
  width: 120px;
`;

const StyledShopImg = styled.img`
  object-fit: cover;
  height: auto;
  max-height: 60px;
  min-height: 60px;
  max-width: 60px;
  min-width: 60px;
  margin: 40px 10px 10px 15px;
  display: block;
  border-radius: 100%;
  border-color: white;
`;

const StyledProductImg = styled.img`
  cursor: pointer;
  border: 2.5px solid whitesmoke;
  object-fit: cover;
  max-height: 200px;
  min-height: 200px;
  display: block;
  /* border-radius: 0.25rem; */
  &:hover {
    cursor: pointer;
    border: 0.001px solid lightsalmon;
    /* transition: 0.25s; */
  }
`;

const StyledLikeIcon = styled.i`
  color: #ff4308;
`;

const StyledLocationIcon = styled.i`
  color: #fece00;
`;
