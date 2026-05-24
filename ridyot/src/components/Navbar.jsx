import { Link, useLocation } from 'react-router-dom';
import { Menu, X, User, Bike } from 'lucide-react';
import { useState } from 'react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { path: '/', label: 'Home' },
    { path: '/book', label: 'Book Ride' },
    { path: '/rides', label: 'My Rides' },
    { path: '/profile', label: 'Profile' }
  ];

  return (
    <nav className="navbar">
      <div className="container">
        <div className="navbar-content">
          <Link to="/" className="logo">
            <Bike size={32} className="logo-icon" />
            <span className="logo-text">Ridyot</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="nav-links desktop">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`nav-link ${location.pathname === link.path ? 'active' : ''}`}
              >
                {link.label}
              </Link>
            ))}
          </div>

          <div className="nav-actions desktop">
            <button className="btn btn-outline">Become a Partner</button>
            <Link to="/login" className="btn btn-primary">
              <User size={18} />
              Login
            </Link>
          </div>

          {/* Mobile Menu Toggle */}
          <button className="mobile-toggle" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="nav-links mobile animate-fade-in">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`nav-link ${location.pathname === link.path ? 'active' : ''}`}
                onClick={() => setIsOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <div className="mobile-actions">
              <button className="btn btn-outline full-width">Become a Partner</button>
              <Link to="/login" className="btn btn-primary full-width">
                <User size={18} />
                Login
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
