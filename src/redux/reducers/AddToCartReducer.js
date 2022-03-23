import { ADD_TO_CART, REMOVE_TO_CART } from "../constants/Constants";

const initialState = {
  cartData: [],
};
export default function cartItems(state = [], action) {
  switch (action.type) {
    case ADD_TO_CART:
      console.log("reducer", action);
      console.log("11111", action.type);
      return [...state, { cartData: action.data }];
      break;
    case REMOVE_TO_CART:
      console.log("reducer", action);
      state.pop();
      return [...state];
      break;
    default:
      return state;
  }
}
