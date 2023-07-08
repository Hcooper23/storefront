import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import App from './App.jsx';
import categoriesReducer from './store/categories/index.jsx';
import productsReducer from './Components/Products/index.jsx';
import './index.css';

const rootReducer = combineReducers({
  categories: categoriesReducer,
  products: productsReducer,
});

const store = createStore(rootReducer);
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);


