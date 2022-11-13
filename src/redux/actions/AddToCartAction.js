import { ADD_TO_CART } from "../constants/Constants";
import { REMOVE_TO_CART } from "../constants/Constants";
import { ADD_TO_FINAL } from "../constants/Constants";

export const addToFinal = (data) => {
  return {
    type: ADD_TO_FINAL,
    data: data,
  };
};

export const addToCart = (data) => {
  console.log("action", data);
  return {
    type: ADD_TO_CART,
    data: data,
  };
};

export const removeToCart = () => {
  console.log("action");
  return {
    type: REMOVE_TO_CART,
  };
};
