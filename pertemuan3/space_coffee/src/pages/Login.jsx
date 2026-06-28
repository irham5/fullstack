import { Link } from 'react-router-dom';
import './Auth.css';

const Login = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Login functionality would be implemented here.');
  };

  return (
    <div className="auth-page animate-fade-in">
      <div className="auth-container">
        <div className="auth-image-side">
          <img src="/spanish.png" alt="Coffee" className="auth-image" />
          <div className="auth-overlay">
            <h2>Welcome Back!</h2>
            <p>Enter your details to access your Space Coffee account.</p>
          </div>
        </div>
        <div className="auth-form-side">
          <div className="auth-form-container">
            <h2 className="auth-title">Log In</h2>
            <p className="auth-subtitle">Good to see you again.</p>
            
            <form onSubmit={handleSubmit} className="auth-form">
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input type="email" id="email" placeholder="Enter your email" required />
              </div>
              <div className="form-group">
                <label htmlFor="password">Password</label>
                <input type="password" id="password" placeholder="Enter your password" required />
              </div>
              
              <div className="auth-options">
                <label className="remember-me">
                  <input type="checkbox" /> Remember me
                </label>
                <a href="#" className="forgot-password">Forgot Password?</a>
              </div>
              
              <button type="submit" className="btn btn-primary auth-btn">Log In</button>
            </form>
            
            <p className="auth-footer">
              Don't have an account? <Link to="/register">Register here</Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
