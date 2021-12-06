import React, { useState, useContext, useEffect } from "react";
import { useCallback } from "react";
// Import product instesd of api
import { dataProducts, productInDetails } from "./data";
// Import daeliverer data
import { DelivererData } from "./DelivererData";

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  //++++++++++++++++++++USE STATES++++++++++++++++++++
  // const [loading, setLoading] = useState(false);
  const [searchTerm, setSearchTerm] = useState("a");

  // ===============PRODUCT DETAILS=====================
  const [products, setProducts] = useState(dataProducts);
  const [cart, setCart] = useState([]);

  const [detailProduct, setDetailProduct] = useState(productInDetails);
  // ===============DELIVERER DETAILS=====================
  const [deliverer, setDeliverer] = useState(DelivererData);

  // ==================MAIN FUNCTIONS=============================
  // =============================================================

  // ===========================SET ITEM===========================
  const getItem = (id) => {
    return products.find((item) => item.id === id);
  };
  //  setProductTemp
  // =====================
  // const setTempProducts = () => {
  //     let tempProducts = [];
  //     dataProducts.forEach(item => {
  //       const singleItem = { ...item };
  //       tempProducts = [...tempProducts, singleItem];
  //     });
  //     setProductTemp(tempProducts);
  //   };

  //  useEffect(()=>{
  //    setTempProducts();
  //  },[])
  // =====================

  //=========================HANDLE ITEM=====================
  const handledetails = (id) => {
    const product = getItem(id);
    setDetailProduct(product);
  };

  // ========================ADD TO CART =====================
  const addToCart = (id) => {
    let tempProduct = [...products];
    const index = tempProduct.indexOf(getItem(id));
    const product = tempProduct[index];
    //======
    product.inCart = true;
    product.count = 1;
    const price = product.price;
    product.total = price;
    // ======
    setProducts(tempProduct);
    setCart([...cart, product]);
  };

  //  ==========================INCREENT==========================
  const increment = (id) => {
    let tempCart = [...cart];
    //=====
    const selectedProduct = tempCart.find((item) => {
      return item.id === id;
    });
    //=====
    const index = tempCart.indexOf(selectedProduct);
    const product = tempCart[index];
    product.count = product.count + 1;
    product.total = product.count * product.price;
    //=====
    setCart(tempCart);
    // this.setState(() => {
    //   return {
    //     cart: [...tempCart]
    //   };
    // }, this.addTotals);
  };

  // =============================DECREMENT ========================
  const decrement = (id) => {
    let tempCart = [...cart];
    //=====
    const selectedProduct = tempCart.find((item) => {
      return item.id === id;
    });
    //=====
    const index = tempCart.indexOf(selectedProduct);
    const product = tempCart[index];
    product.count = product.count - 1;
    //=====
    if (product.count === 0) {
      removeItem(id);
    } //=====
    else {
      product.total = product.count * product.price;
      //=====
      setCart(tempCart);
      // this.setState(() => {
      //   return { cart: [...tempCart] };
      // }, this.addTotals);
    }
  };

  // ======================REMOVE ITEM =====================
  const removeItem = (id) => {
    let tempProducts = [...products];
    let tempCart = [...cart];
    //=====
    const index = tempProducts.indexOf(getItem(id));
    let removedProduct = tempProducts[index];
    //=====
    removedProduct.inCart = false;
    removedProduct.count = 0;
    removedProduct.total = 0;
    //=====
    tempCart = tempCart.filter((item) => {
      return item.id !== id;
    });
    //=====
    setCart(tempCart);
    setProducts(tempProducts);
    // this.setState(() => {
    //   return {
    //     cart: [...tempCart],
    //     products: [...tempProducts]
    //   };
    // }, this.addTotals);
  };

  // =========================CLEAR CART=====================
  // =====================
  // clearCart = () => {
  //   this.setState(
  //     () => {
  //       return { cart: [] };
  //     },
  //     () => {
  //       this.setProducts();
  //       this.addTotals();
  //     }
  //   );
  // };
  // ===============================================================

  // =====================FOOD PAGE DATA FETCH======================
  // When data is comming from data.js
  // Fetch data for customer view
  const fetchData = useCallback(() => {
    // setLoading(true);
    if (products) {
      // const newItems = products.filter((item) => item.category === "grocery");
      // .filter((item) => item.name === `${searchTerm}`);
      // setProducts(newItems);
      setProducts(products);
    } else {
      setProducts([]);
    }
    // setLoading(false);
  }, [searchTerm]);

  useEffect(() => {
    fetchData();
    console.log("hollo");
  }, [searchTerm, fetchData]);
  // ======================FOOD PAGE DATA FETCH=======================

  // =======================DELIVERER PAGE DARA FETCH========================
  const fetchDelivererData = useCallback(() => {
    // setLoading(true);
    if (deliverer) {
      // const newItems = products.filter((item) => item.category === "grocery");
      // .filter((item) => item.name === `${searchTerm}`);
      // setProducts(newItems);
      setDeliverer(deliverer);
    } else {
      setDeliverer([]);
    }
    // setLoading(false);
  }, []);

  useEffect(() => {
    fetchDelivererData();
    console.log("hollo deliverer!");
  }, [fetchDelivererData]);
  //=======================DELIVERER PAGE DARA FETCH========================

  // =========================SETTING useGlobalContext======================
  return (
    <AppContext.Provider
      value={{
        products,
        cart,
        deliverer,
        detailProduct,
        setSearchTerm,
        addToCart,
        handledetails,
        increment,
        decrement,
        removeItem,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };
// =========================SETTING useGlobalContext======================
