import React from "react";
import "bootstrap/dist/css/bootstrap.min.css"; /**Boostrap */
import "bootstrap-icons/font/bootstrap-icons.css"; /**Bootstrap Icon */
// Routing
import { BrowserRouter, Route, Switch } from "react-router-dom";
import "./App.css";

// HomePage
import Homebody from "./components/home-page/Mainhome/Mhbody";
import Navbar from "./components/home-page/Navbar/navbar";
import Error from "./components/home-page/Error";
// customer-view
import CustomerSignInFood from "./components/customer-view/customer-sign-in/Food";
import CustomerSignInGrocery from "./components/customer-view/customer-sign-in/Grocery";
import CustomerSignInHealthcare from "./components/customer-view/customer-sign-in/Healthcare";
import CustomerSignInMain from "./components/customer-view/customer-sign-in-main/Main";
import ProductDetails from "./components/customer-view/product-details/Main";
import Cart from "./components/customer-view/cart/Main";
import CheckoutOnline from "./components/customer-view/checkout(Online)/Main";
// forms
import LogIn from "./components/forms/LogIn";
import SignIn from "./components/forms/sign-in-customer/Main";
import SignInDeliverer from "./components/forms/sign-in-deliverer/Main";
import SignInSeller from "./components/forms/sign-in-seller/Main";

function App() {
  return (
    <React.Fragment>
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            <Navbar />
            <Homebody />
          </Route>

          <Route exact path="/CustomerSignInFood">
            <CustomerSignInFood />
          </Route>
          <Route exact path="/CustomerSignInGrocery">
            <CustomerSignInGrocery />
          </Route>
          <Route exact path="/CustomerSignInHealthcare">
            <CustomerSignInHealthcare />
          </Route>
          <Route exact path="/CustomerSignInMain">
            <CustomerSignInMain />
          </Route>

          <Route exact path="/SignIn">
            <SignIn />
          </Route>
          <Route exact path="/LogIn">
            <LogIn />
          </Route>
          <Route exact path="/SignInDeliverer">
            <SignInDeliverer />
          </Route>
          <Route exact path="/SignInSeller">
            <SignInSeller />
          </Route>
          <Route exact path="/ProductDetails">
            <ProductDetails />
          </Route>
          <Route exact path="/cart">
            <Cart />
          </Route>
          <Route exact path="/CheckoutOnline">
            <CheckoutOnline />
          </Route>

          <Route path="*">
            <Error />
          </Route>
        </Switch>
      </BrowserRouter>
    </React.Fragment>
  );
}

export default App;
