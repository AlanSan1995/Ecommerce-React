import SectionPosition from "../../components/SectionPosition/SectionPosition";
import "./Shop.css";
import ShopProductsContainer from "./components/ShopProductsContainer/ShopProductsContainer";

function Shop() {
  return (
    <div className='shopContainer'>
      <SectionPosition sectionName='Shop' />
      <ShopProductsContainer />
    </div>
  );
}

export default Shop;
