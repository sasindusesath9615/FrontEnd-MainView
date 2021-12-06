import React, { useState, useEffect } from "react";
import Product from "./product";
import {dataProducts } from "../../../data";

function Container_one() {
  const [foodItem, setFoodItem] = useState(dataProducts);
  const [groceryItem, setGroceryItem] = useState(dataProducts);
  const [healthcareItem, setHealthcareItem] = useState(dataProducts);

  const filterItem = (category) => {
    const newItem = dataProducts.filter(
      (item) => item.category === "food" && item.id === 1
    );
    setFoodItem(newItem);
  };
  const filterGroceryItem = (category) => {
    const newItem = dataProducts.filter(
      (item) => item.category === "grocery" && item.id === 8
    );
    setGroceryItem(newItem);
  };
  const filterHealthcareItem = (category) => {
    const newItem = dataProducts.filter(
      (item) => item.category === "healthcare" && item.id === 14
    );
    setHealthcareItem(newItem);
  };

  useEffect(() => {
    filterItem("food");
    filterGroceryItem("grocery");
    filterHealthcareItem("healthcare");
  }, []);

  return (
    <>
      <div>
        <div className="row row-cols-1 row-cols-md-3 g-4">
          {foodItem.map((item) => {
            return (
              <div className="col" key={item.id}>
                <Product {...item}></Product>
              </div>
            );
          })}
          {groceryItem.map((item) => {
            return (
              <div className="col" key={item.id}>
                <Product {...item}></Product>
              </div>
            );
          })}
          {healthcareItem.map((item) => {
            return (
              <div className="col" key={item.id}>
                <Product {...item}></Product>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default Container_one;
