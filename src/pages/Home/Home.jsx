import "./Home.css";
import Categories from "./components/Categories/Categories";
import Galery from "./components/Galery/Galery";
import HomeProductsContainer from "./components/HomeProductsContainer/HomeProductsContainer";
import InspirationSection from "./components/InspirationSection/InspirationSection";
import Presentation from "./components/Presentation/Presentation";

function Home() {
  return (
    <div className='homeContainer'>
      <Presentation />
      <Categories />
      <HomeProductsContainer />
      <InspirationSection />
      <Galery />
    </div>
  );
}

export default Home;
