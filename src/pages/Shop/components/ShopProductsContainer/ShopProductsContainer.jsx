import { useEffect } from "react";
import "./ShopProductsContainer.css";
import ProducstList from "../../../../components/ProductsList/ProductsList";
import { useProductsContext } from "../../../../context/ProductsContext";

function ShopProductsContainer() {
  const { products, getProducts } = useProductsContext();
  useEffect(() => {
    getProducts();
  }, []);

  return (
    <div className='ShopProductsContainer'>
      <ProducstList products={products} />
    </div>
  );
}

export default ShopProductsContainer;
