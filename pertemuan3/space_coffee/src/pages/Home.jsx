import { Link } from 'react-router-dom';
import Card from '../components/Card';
import { products } from '../data/products';
import './Home.css';

const Home = () => {
  const featuredProducts = products.slice(0, 3);

  return (
    <div className="home-page animate-fade-in">
      <section className="hero-section">
        <div className="container hero-container">
          <div className="hero-text">
            <h1>Discover the True Taste of <span className="highlight">Space</span></h1>
            <p>Experience our carefully crafted premium coffee, brought to you with passion and dedication. A perfect blend of flavors to start your day.</p>
            <div className="hero-buttons">
              <Link to="/products" className="btn btn-primary">Explore Menu</Link>
              <Link to="/booking" className="btn btn-secondary">Order Now</Link>
            </div>
          </div>
          <div className="hero-image">
            <img src="/banner.png" alt="Space Coffee Banner" />
          </div>
        </div>
      </section>

      <section className="featured-section">
        <div className="container">
          <h2 className="section-title">Featured Signatures</h2>
          <div className="products-grid">
            {featuredProducts.map(product => (
              <Card key={product.id} product={product} />
            ))}
          </div>
          <div className="view-all-container">
            <Link to="/products" className="btn btn-secondary">View All Menu</Link>
          </div>
        </div>
      </section>

      <section className="about-section">
        <div className="container about-container">
          <div className="about-image">
            <img src="/americano.png" alt="Premium Coffee" />
          </div>
          <div className="about-text">
            <h2 className="section-title" style={{ textAlign: 'left' }}>Premium Quality,<br/>Every Time</h2>
            <p>At Space Coffee, we believe that every cup tells a story. We source our beans from the finest local farmers, ensuring a rich and authentic taste in every sip. Whether you're craving a classic Americano or our unique Sea Salt Latte, we have something to delight your senses.</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
