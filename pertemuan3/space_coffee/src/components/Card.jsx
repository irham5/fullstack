import { Link } from 'react-router-dom';
import './Card.css';

const Card = ({ product }) => {
  return (
    <div className="product-card animate-fade-in">
      <div className="card-img-container">
        <img src={product.image} alt={product.name} className="card-img" />
      </div>
      <div className="card-content">
        <h3 className="card-title">{product.name}</h3>
        <p className="card-price">Rp {product.price.toLocaleString('id-ID')}</p>
        <p className="card-desc">{product.description.substring(0, 60)}...</p>
        <Link to={`/product/${product.id}`} className="btn btn-primary card-btn">
          View Detail
        </Link>
      </div>
    </div>
  );
};

export default Card;
