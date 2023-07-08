import React from 'react';
import { Provider } from 'react-redux';
import HeaderModified from './Components/Header/index.jsx';
import Footer from './Components/Footer/index.jsx';
import Categories from './Components/Categories/index.jsx';
import Products from './Components/Products/index.jsx';
import store from './store/index.jsx';

const App = () => {
  return (
    <Provider store={store}>
      <div className="App">
        <HeaderModified />
        <main>
          <Categories />
          <Products />
        </main>
        <Footer />
      </div>
    </Provider>
  );
};

export default App;


