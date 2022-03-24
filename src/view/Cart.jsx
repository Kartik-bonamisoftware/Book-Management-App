import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import data from "../components/data/data.json";
import CardDetail from "../components/ui/CardDetail";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import CartSection from "../components/ui/CartSection";

const Cart = () => {
  // console.log("Props 111", props.payload);
  // const [selector] = useSelector((state) => state.cartItems);
  // const { cartData } = selector;
  // console.log("selector", selector);

  const cartItems = useSelector((state) => state.cartItems);
  console.log("cartItems", cartItems);
  // const bookIds = cartItems.map((ele, index) => ele.cartData.bookId);
  const bookQuantity = cartItems.cartData.map((ele, index) => ele.count);
  console.log("bookQuantity", bookQuantity);

  let result1 = [];

  if (cartItems?.cartData) {
    console.log("running");
    result1 = cartItems.cartData.map(({ bookId }, index) => {
      let temp = data.find((element) => element.id === bookId);
      console.log("remp", temp);

      return { ...temp, quantity: bookQuantity[index] };
    });
    console.log("result with quatity", result1);
  }

  return (
    <div>
      <h1>Cart</h1>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">Book ID</th>
            <th scope="col">Number of Books</th>
            <th scope="col">Amount</th>
          </tr>
        </thead>
      </table>
      {/* <CardDetail item={item} quantity={cartData.count} /> */}
      <Box sx={{ display: "flex", flexWrap: "wrap" }}>
        {result1 &&
          result1.map((ele, index) => {
            return <CardDetail key={index} item={ele} />;
          })}
      </Box>

      <Link to="/booklist">
        <Button
          sx={{
            border: "2px solid #000",
            m: 3,
            display: "flex",
            float: "center",
          }}
        >
          Back to Booklist
        </Button>
      </Link>
    </div>
  );
};

export default Cart;
