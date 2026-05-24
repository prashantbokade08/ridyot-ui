import { Link } from 'react-router-dom';
import { Bike, Car, Users, Star, MapPin, Clock, Shield, Phone } from 'lucide-react';

const Home = () => {
  const features = [
    {
      icon: <Clock size={40} />,
      title: 'Quick Pickup',
      description: 'Get picked up within minutes. Our smart algorithm matches you with nearby riders.'
    },
    {
      icon: <Shield size={40} />,
      title: 'Safe Rides',
      description: 'Verified drivers, real-time tracking, and emergency support for your safety.'
    },
    {
      icon: <MapPin size={40} />,
      title: 'Easy Booking',
      description: 'Book a ride in just a few taps. Simple, fast, and convenient.'
    },
    {
      icon: <Phone size={40} />,
      title: '24/7 Support',
      description: 'Round the clock customer support to assist you anytime, anywhere.'
    }
  ];

  const vehicleOptions = [
    {
      name: 'Bike',
      icon: <Bike size={48} />,
      description: 'Fast & Affordable',
      price: '₹20/km'
    },
    {
      name: 'Auto',
      icon: <Car size={48} />,
      description: 'Comfortable Ride',
      price: '₹40/km'
    },
    {
      name: 'Pool',
      icon: <Users size={48} />,
      description: 'Share & Save',
      price: '₹60/km'
    },
    {
      name: 'Premium',
      icon: <Star size={48} />,
      description: 'Luxury Experience',
      price: '₹100/km'
    }
  ];

  return (
    <div className="home">
      {/* Hero Section */}
      <section className="hero">
        <div className="container">
          <div className="hero-content">
            <div className="hero-text animate-fade-in">
              <h1>Your Ride, Your Way</h1>
              <p className="hero-subtitle">
                Experience the fastest and most affordable two-wheeler taxi service. 
                Book now and skip the traffic!
              </p>
              <div className="hero-buttons">
                <Link to="/book" className="btn btn-primary btn-large">
                  Book a Ride
                </Link>
                <Link to="/partner" className="btn btn-outline btn-large">
                  Become a Partner
                </Link>
              </div>
              <div className="hero-stats">
                <div className="stat">
                  <span className="stat-number">1M+</span>
                  <span className="stat-label">Happy Riders</span>
                </div>
                <div className="stat">
                  <span className="stat-number">50K+</span>
                  <span className="stat-label">Daily Rides</span>
                </div>
                <div className="stat">
                  <span className="stat-number">100+</span>
                  <span className="stat-label">Cities</span>
                </div>
              </div>
            </div>
            <div className="hero-image animate-slide-in">
              <div className="hero-card">
                <div className="card-header">
                  <Bike size={32} className="card-icon" />
                  <span>Ridyot Bike</span>
                </div>
                <div className="card-body">
                  <div className="ride-info">
                    <MapPin size={20} className="location-icon" />
                    <div>
                      <p className="location-from\">MG Road</p>
                      <p className="location-to\">Indiranagar</p>
                    </div>
                  </div>
                  <div className="ride-details">
                    <span className="distance">5.2 km</span>
                    <span className="time">12 mins</span>
                  </div>
                  <div className="fare">
                    <span className="fare-label">Estimated Fare</span>
                    <span className="fare-amount">₹72</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Vehicle Options Section */}
      <section className="vehicles-section">
        <div className="container">
          <h2 className="section-title">Choose Your Ride</h2>
          <p className="section-subtitle">Multiple options to suit your needs</p>
          <div className="vehicle-grid">
            {vehicleOptions.map((vehicle, index) => (
              <div key={index} className="vehicle-card animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
                <div className="vehicle-icon">{vehicle.icon}</div>
                <h3>{vehicle.name}</h3>
                <p>{vehicle.description}</p>
                <span className="vehicle-price">{vehicle.price}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="features-section">
        <div className="container">
          <h2 className="section-title">Why Choose Ridyot?</h2>
          <p className="section-subtitle">Experience the difference</p>
          <div className="features-grid">
            {features.map((feature, index) => (
              <div key={index} className="feature-card animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
                <div className="feature-icon">{feature.icon}</div>
                <h3>{feature.title}</h3>
                <p>{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section">
        <div className="container">
          <div className="cta-content">
            <h2>Ready to Ride?</h2>
            <p>Download the Ridyot app and get your first ride free!</p>
            <div className="app-buttons">
              <button className="app-store-btn">
                <span>Download on the</span>
                <strong>App Store</strong>
              </button>
              <button className="play-store-btn">
                <span>Get it on</span>
                <strong>Google Play</strong>
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
