import { configureStore } from "@reduxjs/toolkit";
// import { composeWithDevTools } from "redux-devtools-extension";
import categoriesReducer from './categories/index';
import productsReducer from './products';
import cartReducer from "./cart";

const store = () => configureStore({
  reducer: {
    categories: categoriesReducer,
    products: productsReducer,
    cart: cartReducer,
  },
  // enhancers: [composeWithDevTools()],
});

export default store();
