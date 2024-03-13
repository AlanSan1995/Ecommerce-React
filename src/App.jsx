import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./components/Header/Header";
import Home from "./pages/Home/Home";
import Shop from "./pages/Shop/Shop";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <BrowserRouter>
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
    </BrowserRouter>
  );
}

export default App;
