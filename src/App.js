import React from "react";
import "./App.css";
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

const App = () => {
  return (
    <div className="App">
      <Header />
      <Switch>
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
