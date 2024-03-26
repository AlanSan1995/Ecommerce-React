import { collection, getDocs, limit, query, where } from "firebase/firestore";
import { createContext, useContext, useState } from "react";
import { db } from "../firebase/config";

const ProductsContext = createContext();

export const useProductsContext = () => useContext(ProductsContext);

function ProductsProvider({ children }) {
  const [products, setProducts] = useState([]);

  const getProducts = async ({ limite = null, category = null }) => {
    let reference = "";
    if (limite && !category) {
      reference = query(collection(db, "products"), limit(limite));
    } else if (category && !limite) {
      reference = query(
        collection(db, "products"),
        where("category", "==", category)
      );
    } else if (category && limite) {
      reference = query(
        collection(db, "products"),
        where("category", "==", category),
        limit(limite)
      );
    } else {
      reference = collection(db, "products");
    }

    const querySnapshot = await getDocs(reference);
    const productsArray = [];
    querySnapshot.forEach((doc) => {
      productsArray.push({ id: doc.id, ...doc.data() });
    });
    setProducts(productsArray);
  };

  return (
    <ProductsContext.Provider value={{ products, getProducts }}>
      {children}
    </ProductsContext.Provider>
  );
}
export default ProductsProvider;
