import { useEffect, useState } from "react";
import "./ShopProductsContainer.css";
import ProducstList from "../../../../components/ProductsList/ProductsList";
import { useProductsContext } from "../../../../context/ProductsContext";
import TuneIcon from "@mui/icons-material/Tune";
import { Link } from "react-router-dom";
import CloseIcon from "@mui/icons-material/Close";

function ShopProductsContainer({ category }) {
  const { products, getProducts } = useProductsContext();
  const [dropdown, setDropdown] = useState(false);
  const [value, setValue] = useState("");
  useEffect(() => {
    getProducts({ category, limite: value || null });
  }, [category, value]);

  const handleChange = (event) => {
    const maxLength = 2; // Limita a 5 caracteres
    const value = event.target.value < 1 ? 1 : event.target.value;
    console.log(event.target.value);
    if (value.length <= maxLength) {
      setValue(value);
    }
    if (!event.target.value) {
      setValue("");
    }
  };
  return (
    <div className='ShopProductsContainer'>
      <div className='ShopProductsFilter'>
        <div className='ShopProductsCategoriesAndCount'>
          <div className='ShopFilterDropdownContainer'>
            <button onClick={() => setDropdown(!dropdown)}>
              {dropdown ? <CloseIcon /> : <TuneIcon />}
              Filter
            </button>
            <div
              className={`ShopFilterDropdown ${
                dropdown && "ShopFilterDropdownShow"
              }`}>
              <Link onClick={() => setDropdown(false)} to='/shop/dining'>
                Dining
              </Link>
              <Link onClick={() => setDropdown(false)} to='/shop/living'>
                Living
              </Link>
              <Link onClick={() => setDropdown(false)} to='/shop/bedroom'>
                Bedroom
              </Link>
            </div>
          </div>
          <span></span>
          <p>Showing - {products.length} results </p>
        </div>
        <div className='ShopProductsLimit'>
          <p>Show</p>
          <input
            placeholder='0'
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
