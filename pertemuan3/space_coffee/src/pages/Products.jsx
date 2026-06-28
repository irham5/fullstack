import Card from '../components/Card';
import { products } from '../data/products';
import './Products.css';

const Products = () => {
  return (
    <div className="products-page animate-fade-in">
      <div className="container">
        <h1 className="page-title">Our Menu</h1>
        <p className="page-subtitle">Explore our carefully crafted selection of premium beverages.</p>
        
        <div className="products-grid">
          {products.map(product => (
            <Card key={product.id} product={product} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Products;
