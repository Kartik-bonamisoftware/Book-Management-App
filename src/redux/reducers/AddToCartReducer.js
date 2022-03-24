import { useSelector } from "react-redux";
import { ADD_TO_CART, REMOVE_TO_CART } from "../constants/Constants";

const initialState = {
  cartData: [],
};

export default function cartItems(state = [], action) {
  console.log(state);
  switch (action.type) {
    case ADD_TO_CART:
      console.log("reducer", action);
      return { ...state, cartData: action.payload };
      break;
    case REMOVE_TO_CART:
      console.log("reducer", action);
      state.pop();
      return { ...state };
      break;
    default:
      return state;
  }
}
