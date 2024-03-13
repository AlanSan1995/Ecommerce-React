import "./InspirationSection.css";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import MinimizeIcon from "@mui/icons-material/Minimize";
import carrusel1 from "../../../../assets/img/carucel-1.png";
import carrusel2 from "../../../../assets/img/carucel-2.png";
import carrusel3 from "../../../../assets/img/carucel-3.png";
import carrusel4 from "../../../../assets/img/carucel-4.png";
import { useState } from "react";

function InspirationSection() {
  const [carruselPosition, setCarruselPosition] = useState(0);

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
            <div className='positionPointActive'>
              <span></span>
            </div>
            <div>
              <span></span>
            </div>
            <div>
              <span></span>
            </div>
          </div>
          <div className='InspirationSectionCarrusel'>
            <div
              className='carruselItem carrucelItemActive'
              style={{ backgroundImage: `url(${carrusel1})` }}>
              <div>
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
              className='carruselItem  '
              style={{ backgroundImage: `url(${carrusel2})` }}>
              <div>
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
              className='carruselItem'
              style={{ backgroundImage: `url(${carrusel3})` }}>
              <div>
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
              className='carruselItem'
              style={{ backgroundImage: `url(${carrusel4})` }}>
              <div>
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
