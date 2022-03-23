import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import rootReducer from "./redux/reducers/rootReducer";
import { Provider } from "react-redux";
import { createStore } from "redux";

const store = createStore(rootReducer);
console.log("store data", store);

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>,
  document.getElementById("root")
);
