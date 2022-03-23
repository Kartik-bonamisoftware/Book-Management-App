import React from "react";
import { useSelector } from "react-redux";
import data from "../components/data/data.json";
import CardDetail from "../components/ui/CardDetail";

const Cart = () => {
  // console.log("Props 111", props.payload);
  const data = useSelector((state) => state.cartItems);
  // const { cartData } = selector;
  // console.log("selector", selector);
  // console.log("cartData", cartData);

  console.log("Data", data);
  // const item = data.find((item) => item.id === cartData.bookId);
  // console.log("authorData", item);

  return (
    <div>
      {/* <h1>Cart</h1>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">Book ID</th>
            <th scope="col">Number of Books</th>
            <th scope="col">Amount</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">{cartData.bookId}</th>
            <td>{cartData.count}</td>
            <td>{cartData.count * 250}</td>
          </tr>
        </tbody>
      </table>
      <CardDetail item={item} />; */}
    </div>
  );
};

export default Cart;
