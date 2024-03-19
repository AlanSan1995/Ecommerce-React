import "./InspirationSection.css";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import MinimizeIcon from "@mui/icons-material/Minimize";
import carrusel1 from "../../../../assets/img/carucel-1.png";
import carrusel2 from "../../../../assets/img/carucel-2.png";
import carrusel3 from "../../../../assets/img/carucel-3.png";
import carrusel4 from "../../../../assets/img/carucel-4.png";
import { useEffect, useState } from "react";

function InspirationSection() {
  const [carruselPosition, setCarruselPosition] = useState(1);
  const [timeChange, setTimeChange] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      carruselPosition == 4
        ? setCarruselPosition(1)
        : setCarruselPosition(carruselPosition + 1);
      setTimeChange(!timeChange);
    }, 2000);
  }, [timeChange]);
  const translateCarrucel = () => {
    if (carruselPosition == 1) {
      return "translateX(0%)";
    }
    if (carruselPosition == 2) {
      return "translateX(-25%)";
    }
    if (carruselPosition == 3) {
      return "translateX(-50%)";
    }
    if (carruselPosition == 4) {
      return "translateX(-75%)";
    }
  };
  return (
    <>
      <div className='InspirationSection'>
        <div className='InspirationSectionContainer'>
          <h3>
            50+ Beautiful rooms
            <br />
            inspiration
          </h3>
          <p>
            Our designer already made a lot of beautiful <br /> prototipe of
            rooms that inspire you
          </p>
          <button>Explore More</button>
        </div>
        <div className='InspirationSectionCarruselContainer'>
          <div className='carrucelPositionPoint '>
            <button
              className={`${carruselPosition == 1 && "positionPointActive"}`}
              onClick={() => setCarruselPosition(1)}>
              <span></span>
            </button>
            <button
              className={`${carruselPosition == 2 && "positionPointActive"}`}
              onClick={() => setCarruselPosition(2)}>
              <span></span>
            </button>
            <button
              className={`${carruselPosition == 3 && "positionPointActive"}`}
              onClick={() => setCarruselPosition(3)}>
              <span></span>
            </button>
            <button
              className={`${carruselPosition == 4 && "positionPointActive"}`}
              onClick={() => setCarruselPosition(4)}>
              <span></span>
            </button>
          </div>
          <div
            className='InspirationSectionCarrusel'
            style={{ transform: translateCarrucel() }}>
            <div
              className={` carruselItem ${
                carruselPosition == 1 && "carrucelItemActive"
              }`}
              style={{ backgroundImage: `url(${carrusel1})` }}>
              <div
                className={`${
                  carruselPosition == 1 && "carruselItemCardActive"
                }`}>
                <div>
                  <span>
                    01 <MinimizeIcon /> Bed Room
                  </span>
                  <h3>Inner Peace</h3>
                </div>
                <button>
                  <ArrowForwardIcon />
                </button>
              </div>
            </div>
            <div
              className={` carruselItem ${
                carruselPosition == 2 && "carrucelItemActive"
              }`}
              style={{ backgroundImage: `url(${carrusel2})` }}>
              <div
                className={`${
                  carruselPosition == 2 && "carruselItemCardActive"
                }`}>
                <div>
                  <span>
                    01 <MinimizeIcon /> Bed Room
                  </span>
                  <h3>Inner Peace</h3>
                </div>
                <button>
                  <ArrowForwardIcon />
                </button>
              </div>
            </div>
            <div
              className={` carruselItem ${
                carruselPosition == 3 && "carrucelItemActive"
              }`}
              style={{ backgroundImage: `url(${carrusel3})` }}>
              <div
                className={`${
                  carruselPosition == 3 && "carruselItemCardActive"
                }`}>
                <div>
                  <span>
                    01 <MinimizeIcon /> Bed Room
                  </span>
                  <h3>Inner Peace</h3>
                </div>
                <button>
                  <ArrowForwardIcon />
                </button>
              </div>
            </div>
            <div
              className={` carruselItem ${
                carruselPosition == 4 && "carrucelItemActive"
              }`}
              style={{ backgroundImage: `url(${carrusel4})` }}>
              <div
                className={`${
                  carruselPosition == 4 && "carruselItemCardActive"
                }`}>
                <div>
                  <span>
                    01 <MinimizeIcon /> Bed Room
                  </span>
                  <h3>Inner Peace</h3>
                </div>
                <button>
                  <ArrowForwardIcon />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default InspirationSection;
