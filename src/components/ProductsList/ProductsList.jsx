import ProductCard from "../ProductCard/ProductCard";
import "./ProducstList.css";

function ProducstList({ products }) {
  return (
    <div className='ProductList'>
      {products.map((prod) => (
        <ProductCard prod={prod} key={prod.id} />
      ))}
    </div>
  );
}
export default ProducstList;
