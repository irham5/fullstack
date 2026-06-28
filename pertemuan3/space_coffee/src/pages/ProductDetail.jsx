import { useParams, Link } from 'react-router-dom';
import { products } from '../data/products';
import './ProductDetail.css';

const ProductDetail = () => {
  const { id } = useParams();
  const product = products.find(p => p.id === parseInt(id));

  if (!product) {
    return (
      <div className="container product-not-found">
        <h2>Product not found</h2>
        <Link to="/products" className="btn btn-primary">Back to Menu</Link>
      </div>
    );
  }

  return (
    <div className="product-detail-page animate-fade-in">
      <div className="container">
        <div className="detail-container">
          <div className="detail-image-box">
            <img src={product.image} alt={product.name} className="detail-image" />
          </div>
          <div className="detail-content">
            <Link to="/products" className="back-link">&larr; Back to Menu</Link>
            <h1 className="detail-title">{product.name}</h1>
            <p className="detail-price">Rp {product.price.toLocaleString('id-ID')}</p>
            <div className="detail-description">
              <h3>Description</h3>
              <p>{product.description}</p>
            </div>
            
            <div className="detail-features">
              <div className="feature-item">
                <span className="feature-icon">✨</span>
                <span>Premium Quality</span>
              </div>
              <div className="feature-item">
                <span className="feature-icon">🌱</span>
                <span>Fresh Ingredients</span>
              </div>
            </div>

            <Link to={`/booking?product=${encodeURIComponent(product.name)}`} className="btn btn-primary detail-btn">
              Order Now
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
