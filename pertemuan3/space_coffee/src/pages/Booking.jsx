import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { products } from '../data/products';
import './Booking.css';

const Booking = () => {
  const location = useLocation();
  const [formData, setFormData] = useState({
    name: '',
    whatsapp: '',
    product: '',
    quantity: 1,
  });

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const productParam = params.get('product');
    if (productParam) {
      setFormData(prev => ({ ...prev, product: productParam }));
    }
  }, [location]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { name, whatsapp, product, quantity } = formData;
    
    if (!name || !whatsapp || !product || !quantity) {
      alert('Please fill all fields');
      return;
    }

    const message = `Hello Space Coffee! I would like to order:
Name: ${name}
WhatsApp: ${whatsapp}
Product: ${product}
Quantity: ${quantity}

Please confirm my order. Thank you!`;

    const targetWA = '6283897884439';
    const waUrl = `https://wa.me/${targetWA}?text=${encodeURIComponent(message)}`;
    
    window.open(waUrl, '_blank');
  };

  return (
    <div className="booking-page animate-fade-in">
      <div className="container">
        <div className="booking-form-container">
          <div className="booking-info">
            <h2>Book Your Space Coffee</h2>
            <p>Fill out the form below to order your favorite coffee. We'll direct you to our WhatsApp to complete your purchase.</p>
            <div className="contact-details">
              <div className="contact-item">
                <span className="icon">📱</span>
                <span>+62 838-9788-4439</span>
              </div>
              <div className="contact-item">
                <span className="icon">📍</span>
                <span>Jakarta, Indonesia</span>
              </div>
            </div>
            <div className="booking-image-placeholder">
              <img src="/logo.png" alt="Space Coffee Logo" className="booking-logo" />
            </div>
          </div>
          
          <form className="booking-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name">Full Name</label>
              <input 
                type="text" 
                id="name" 
                name="name" 
                value={formData.name} 
                onChange={handleChange} 
                placeholder="Enter your name" 
                required 
              />
            </div>
            
            <div className="form-group">
              <label htmlFor="whatsapp">WhatsApp Number</label>
              <input 
                type="tel" 
                id="whatsapp" 
                name="whatsapp" 
                value={formData.whatsapp} 
                onChange={handleChange} 
                placeholder="Ex: +62812345678" 
                required 
              />
            </div>
            
            <div className="form-group">
              <label htmlFor="product">Select Product</label>
              <select 
                id="product" 
                name="product" 
                value={formData.product} 
                onChange={handleChange} 
                required
              >
                <option value="" disabled>Choose a coffee...</option>
                {products.map(p => (
                  <option key={p.id} value={p.name}>{p.name} - Rp {p.price.toLocaleString('id-ID')}</option>
                ))}
              </select>
            </div>
            
            <div className="form-group">
              <label htmlFor="quantity">Quantity</label>
              <input 
                type="number" 
                id="quantity" 
                name="quantity" 
                min="1" 
                value={formData.quantity} 
                onChange={handleChange} 
                required 
              />
            </div>
            
            <button type="submit" className="btn btn-primary submit-btn">Order via WhatsApp</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Booking;
