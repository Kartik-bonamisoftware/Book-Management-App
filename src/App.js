import React from "react";
import "./App.css";
import "../src/form_CSS/ContactForm.css";
import "../src/form_CSS/SignInForm.scss";
import "../src/form_CSS/SignUpForm.scss";
import { Switch, Route } from "react-router-dom";
import Home from "./view/Home";
import BookList from "./view/BookList";
import Category from "./view/Category";
import Author from "./view/Author";
import Cart from "./view/Cart";
import ContactUs from "./view/ContactUs";
import Header from "./components/header/Header";
import SignIn from "./components/forms/SignIn";
import SignUp from "./components/forms/SignUp";
import BillingAddress from "./components/forms/BillingAddress";

const App = () => {
  return (
    <div>
      <Header />
      <Switch>
        <Route exact path="/address" component={BillingAddress} />
        <Route exact path="/signin" component={SignIn} />
        <Route exact path="/signup" component={SignUp} />
        <Route exact path="/" component={Home} />
        <Route exact path="/booklist" component={BookList} />
        <Route path="/booklist/author" component={Author} />
        <Route path="/category" component={Category} />
        <Route path="/cart" component={Cart} />
        <Route path="/contactus" component={ContactUs} />
      </Switch>
    </div>
  );
};

export default App;
