import "./ProductCard.css";

function ProductCard({ prod }) {
  return (
    <div className='ProductCard'>
      <img src={prod.image} alt='' />
      <h3>{prod.title}</h3>
      <span>{prod.category}</span>
      <p> ${prod.price}</p>
      <div className='productCardHover'>
        <div className='productCardhoverBackground'></div>
        <button>View details</button>
      </div>
    </div>
  );
}

export default ProductCard;
