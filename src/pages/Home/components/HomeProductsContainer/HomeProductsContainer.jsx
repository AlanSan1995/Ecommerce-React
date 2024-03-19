import { useEffect, useState } from "react";
import "./HomeProductsContainer.css";
import ProducstList from "../../../../components/ProductsList/ProductsList";
import { useProductsContext } from "../../../../context/ProductsContext";
import { Link } from "react-router-dom";

function HomeProductsContainer() {
  const { products, getProducts } = useProductsContext();
  const [limit, setLimit] = useState(4);
  useEffect(() => {
    getProducts({ limite: limit });
  }, [limit]);

  return (
    <div className='HomeProductsContainer'>
      <h1>Our Products</h1>
      <ProducstList products={products} />
      {limit == 8 ? (
        <Link to='/shop'>Go Shop</Link>
      ) : (
        <button onClick={() => setLimit(limit + 4)}>Show More</button>
      )}
    </div>
  );
}

export default HomeProductsContainer;
