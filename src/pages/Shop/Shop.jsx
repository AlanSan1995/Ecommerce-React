import { useParams } from "react-router-dom";
import SectionPosition from "../../components/SectionPosition/SectionPosition";
import "./Shop.css";
import ShopProductsContainer from "./components/ShopProductsContainer/ShopProductsContainer";

function Shop() {
  const { category } = useParams();
  return (
    <div className='shopContainer'>
      <SectionPosition sectionName='Shop' />
      <ShopProductsContainer category={category} />
    </div>
  );
}

export default Shop;
