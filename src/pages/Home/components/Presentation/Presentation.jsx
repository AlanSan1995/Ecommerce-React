import "./Presentation.css";
import background from "./../../../../assets/img/background-home.png";
function Presentation() {
  return (
    <div
      className='presentationSection'
      style={{ backgroundImage: `url(${background})` }}>
      <div>
        <span>New Arrival</span>
        <h2>
          Discover Our <br />
          New Collection
        </h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
          tellus, luctus nec ullamcorper mattis.
        </p>
        <button>BUY NOW</button>
      </div>
    </div>
  );
}

export default Presentation;
