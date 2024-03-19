import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./components/Header/Header";
import Home from "./pages/Home/Home";
import Shop from "./pages/Shop/Shop";
import Footer from "./components/Footer/Footer";
import ProductsProvider from "./context/ProductsContext";

function App() {
  return (
    <BrowserRouter>
      <ProductsProvider>
        <div className='appContainer'>
          <Header />
          {/* Componentes no navegables */}
          <Routes>
            {/* Componentes navegables */}
            <Route path='/' element={<Home />} />
            <Route path='/shop' element={<Shop />} />
            <Route path='/about' element={<Header />} />
            <Route path='/contact' element={<Header />} />
            <Route path='/cart' element={<Header />} />
          </Routes>
          <Footer />
        </div>
      </ProductsProvider>
    </BrowserRouter>
  );
}

export default App;
