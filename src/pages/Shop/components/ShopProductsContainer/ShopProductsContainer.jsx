import { useEffect, useState } from "react";
import "./ShopProductsContainer.css";
import ProducstList from "../../../../components/ProductsList/ProductsList";
import { useProductsContext } from "../../../../context/ProductsContext";
import TuneIcon from "@mui/icons-material/Tune";

function ShopProductsContainer({ category }) {
  const [value, setValue] = useState("");
  const { products, getProducts } = useProductsContext();
  useEffect(() => {
    getProducts({ category });
  }, []);

  const handleChange = (event) => {
    const maxLength = 2; // Limita a 5 caracteres
    const value = event.target.value;
    if (value.length <= maxLength) {
      setValue(value > products.length ? products.length : value);
    }
  };
  return (
    <div className='ShopProductsContainer'>
      <div className='ShopProductsFilter'>
        <div className='ShopProductsCategoriesAndCount'>
          <button>
            <TuneIcon /> Filter
          </button>
          <span></span>
          <p>Showing - {products.length} results </p>
        </div>
        <div className='ShopProductsLimit'>
          <p>Show</p>
          <input
            type='number'
            value={value}
            onChange={handleChange}
            onInput={(e) => (e.target.value = e.target.value.slice(0, 5))} // Alternativa directa en el input
          />
        </div>
      </div>

      <ProducstList products={products} />
    </div>
  );
}

export default ShopProductsContainer;
