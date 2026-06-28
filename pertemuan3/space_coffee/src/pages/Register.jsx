import { Link } from 'react-router-dom';
import './Auth.css';

const Register = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Registration functionality would be implemented here.');
  };

  return (
    <div className="auth-page animate-fade-in">
      <div className="auth-container">
        <div className="auth-form-side">
          <div className="auth-form-container">
            <h2 className="auth-title">Create Account</h2>
            <p className="auth-subtitle">Join the Space Coffee community.</p>
            
            <form onSubmit={handleSubmit} className="auth-form">
              <div className="form-group">
                <label htmlFor="fullname">Full Name</label>
                <input type="text" id="fullname" placeholder="Enter your full name" required />
              </div>
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input type="email" id="email" placeholder="Enter your email" required />
              </div>
              <div className="form-group">
                <label htmlFor="password">Password</label>
                <input type="password" id="password" placeholder="Create a password" required />
              </div>
              
              <button type="submit" className="btn btn-primary auth-btn">Register</button>
            </form>
            
            <p className="auth-footer">
              Already have an account? <Link to="/login">Log in</Link>
            </p>
          </div>
        </div>
        <div className="auth-image-side">
          <img src="/matcha.png" alt="Coffee" className="auth-image" />
          <div className="auth-overlay">
            <h2>New Here?</h2>
            <p>Sign up and discover a new world of premium coffee.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
