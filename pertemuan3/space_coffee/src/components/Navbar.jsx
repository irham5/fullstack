import { Link, useLocation } from 'react-router-dom';
import { useState } from 'react';
import './Navbar.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => setIsOpen(!isOpen);

  const isActive = (path) => {
    return location.pathname === path ? 'active' : '';
  };

  return (
    <nav className="navbar">
      <div className="container nav-container">
        <Link to="/" className="nav-logo">
          <img src="/logo.png" alt="Space Coffee" className="logo-img" />
          <span className="logo-text">SPACE COFFEE</span>
        </Link>
        
        <div className={`nav-menu ${isOpen ? 'active' : ''}`}>
          <Link to="/" className={`nav-link ${isActive('/')}`} onClick={() => setIsOpen(false)}>Home</Link>
          <Link to="/products" className={`nav-link ${isActive('/products')}`} onClick={() => setIsOpen(false)}>Menu</Link>
          <Link to="/booking" className={`nav-link ${isActive('/booking')}`} onClick={() => setIsOpen(false)}>Booking</Link>
          <div className="nav-buttons">
            <Link to="/login" className="btn btn-secondary nav-btn" onClick={() => setIsOpen(false)}>Login</Link>
            <Link to="/register" className="btn btn-primary nav-btn" onClick={() => setIsOpen(false)}>Register</Link>
          </div>
        </div>

        <div className="hamburger" onClick={toggleMenu}>
          <span className={`bar ${isOpen ? 'active' : ''}`}></span>
          <span className={`bar ${isOpen ? 'active' : ''}`}></span>
          <span className={`bar ${isOpen ? 'active' : ''}`}></span>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
