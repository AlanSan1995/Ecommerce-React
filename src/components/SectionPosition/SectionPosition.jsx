import "./SectionPosition.css";
import backgroundShop from "../../assets/img/backgroundShop.png";
import logo from "../../assets/icons/Logo-Icon.png";

function SectionPosition({ sectionName }) {
  return (
    <div
      className='SectionPosition'
      style={{ backgroundImage: `url(${backgroundShop})` }}>
      <img src={logo} alt='' />
      <h2>{sectionName}</h2>
      <p>
        <span>Home &#62;</span> {sectionName}
      </p>
    </div>
  );
}

export default SectionPosition;
