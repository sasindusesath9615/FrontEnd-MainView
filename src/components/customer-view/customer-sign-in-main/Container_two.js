import React, { useState, useEffect } from "react";
import Category from "./category";
import { dataProducts}  from "../../../data";

function Container_one() {
  const [foodItem, setFoodItem] = useState(dataProducts);
  const [groceryItem, setGroceryItem] = useState(dataProducts);
  const [healthcareItem, setHealthcareItem] = useState(dataProducts);

  const filterItem = () => {
    const newItem = dataProducts.filter(
      (item) => item.category === "food" && item.id === 1
    );
    setFoodItem(newItem);
  };
  const filterGroceryItem = () => {
    const newItem = dataProducts.filter(
      (item) => item.category === "grocery" && item.id === 8
    );
    setGroceryItem(newItem);
  };
  const filterHealthcareItem = () => {
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
                <Category {...item}></Category>
              </div>
            );
          })}
          {groceryItem.map((item) => {
            return (
              <div className="col" key={item.id}>
                <Category {...item}></Category>
              </div>
            );
          })}
          {healthcareItem.map((item) => {
            return (
              <div className="col" key={item.id}>
                <Category {...item}></Category>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default Container_one;
