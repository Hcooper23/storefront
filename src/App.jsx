
import HeaderModified from './Components/Header/index.jsx';
import Footer from './Components/Footer/index.jsx';
import Categories from './Components/Categories/index.jsx';
import Products from './Components/Products/index.jsx';
import SimpleCart from './Components/SimpleCart/index.jsx';


const App = () => {
  return (
      <div className="App">
        <HeaderModified />
        <main>
          <Categories />
          <Products />
        </main>
        <SimpleCart />
        <Footer />
      </div>
  );
};

export default App;


