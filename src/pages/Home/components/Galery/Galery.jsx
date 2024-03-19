import "./Galery.css"; // Asegúrate de que esta ruta apunte al archivo CSS correcto
import ItemGalery1 from "../../../../assets/img/ItemGalery1.png";
import ItemGalery2 from "../../../../assets/img/ItemGalery2.png";
import ItemGalery3 from "../../../../assets/img/ItemGalery3.png";
import ItemGalery4 from "../../../../assets/img/ItemGalery4.png";
import ItemGalery5 from "../../../../assets/img/ItemGalery5.png";
import ItemGalery6 from "../../../../assets/img/ItemGalery6.png";
import ItemGalery7 from "../../../../assets/img/ItemGalery7.png";
import ItemGalery8 from "../../../../assets/img/ItemGalery8.png";
import ItemGalery9 from "../../../../assets/img/ItemGalery9.png";

function Galery() {
  return (
    <div className='GalerySection'>
      <div className='GalerySectionTitle'>
        <p>Share your setup with</p>
        <h3>#FuniroFurniture</h3>
      </div>
      <div className='GaleryContainer'>
        <div
          className='img1'
          style={{ backgroundImage: `url(${ItemGalery1})` }}></div>
        <div className='empty1'></div>
        <div
          className='img2'
          style={{ backgroundImage: `url(${ItemGalery2})` }}></div>
        <div
          className='img3'
          style={{ backgroundImage: `url(${ItemGalery3})` }}></div>
        <div className='empty2'></div>
        <div
          className='img4'
          style={{ backgroundImage: `url(${ItemGalery4})` }}></div>
        <div
          className='img5'
          style={{ backgroundImage: `url(${ItemGalery5})` }}></div>
        <div
          className='img6'
          style={{ backgroundImage: `url(${ItemGalery6})` }}></div>
        <div className='empty5'></div>
        <div
          className='img7'
          style={{ backgroundImage: `url(${ItemGalery7})` }}></div>
        <div className='empty4'></div>
        <div
          className='img8'
          style={{ backgroundImage: `url(${ItemGalery8})` }}></div>
        <div
          className='img9'
          style={{ backgroundImage: `url(${ItemGalery9})` }}></div>
        <div className='empty3'></div>
        <div className='empty6'></div>
      </div>
    </div>
  );
}

export default Galery;
