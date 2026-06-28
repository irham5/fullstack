import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container footer-container">
        <div className="footer-section">
          <h3 className="footer-logo">SPACE COFFEE</h3>
          <p>Experience the ultimate coffee journey with our premium beans and expert brewing.</p>
        </div>
        <div className="footer-section">
          <h4>Quick Links</h4>
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/products">Menu</a></li>
            <li><a href="/booking">Booking</a></li>
          </ul>
        </div>
        <div className="footer-section">
          <h4>Contact Us</h4>
          <p>Email: hello@spacecoffee.com</p>
          <p>WhatsApp: +62 838-9788-4439</p>
          <p>Location: Jakarta, Indonesia</p>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} SPACE COFFEE. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
