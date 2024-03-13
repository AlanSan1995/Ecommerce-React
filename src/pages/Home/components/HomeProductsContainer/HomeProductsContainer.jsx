import { useEffect, useState } from "react";
import "./HomeProductsContainer.css";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../../../../firebase/config";
import ProducstList from "../../../../components/ProductsList/ProductsList";

function HomeProductsContainer() {
  const [products, setProducts] = useState([]);

  const getProducts = async () => {
    const reference = collection(db, "products");
    const querySnapshot = await getDocs(reference);
    const productsArray = [];
    querySnapshot.forEach((doc) => {
      productsArray.push({ id: doc.id, ...doc.data() });
    });
    setProducts(productsArray);
  };

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <div className='HomeProductsContainer'>
      <h1>Our Products</h1>
      <ProducstList products={products} />
      <button>Show More</button>
    </div>
  );
}

export default HomeProductsContainer;
