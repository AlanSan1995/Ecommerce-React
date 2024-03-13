import "./Categories.css";
import categoriesImg1 from "../../../../assets/img/categoriesImg1.png";
import categoriesImg2 from "../../../../assets/img/categoriesImg2.png";
import categoriesImg3 from "../../../../assets/img/categoriesImg3.png";
import { Link } from "react-router-dom";

function Categories() {
  return (
    <div className='categoriesSection'>
      <h3>Browse The Range</h3>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      <div className='categoriesContainer'>
        <div>
          <Link>
            <img src={categoriesImg1} alt='' />
          </Link>
          <span>Dining</span>
        </div>
        <div>
          <Link>
            <img src={categoriesImg2} alt='' />
          </Link>
          <span>Living</span>
        </div>
        <div>
          <Link>
            <img src={categoriesImg3} alt='' />
          </Link>
          <span>Bedroom</span>
        </div>
      </div>
    </div>
  );
}

export default Categories;
