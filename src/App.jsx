import React from 'react';
import { Provider } from 'react-redux';
import Header from './Components/Header';
import Footer from './Components/Footer';
import Categories from './Components/Categories';
import Products from './Components/Products';
import store from './store';

const App = () => {
  return (
    <Provider store={store}>
      <div className="App">
        <Header />
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
