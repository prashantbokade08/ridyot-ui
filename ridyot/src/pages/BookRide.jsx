import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { MapPin, Navigation, Search, Bike, Car, Users, Star, Clock, Phone, MessageSquare } from 'lucide-react';
import { useRide } from '../context/RideContext';

const BookRide = () => {
  const navigate = useNavigate();
  const { 
    userLocation, 
    setUserLocation, 
    destination, 
    setDestination,
    selectedVehicle,
    setSelectedVehicle,
    vehicleTypes,
    bookRide,
    isSearching,
    matchedDriver,
    currentRide,
    cancelRide,
    completeRide
  } = useRide();

  const [pickupInput, setPickupInput] = useState('');
  const [dropInput, setDropInput] = useState('');
  const [showSuggestions, setShowSuggestions] = useState(false);

  const handlePickupChange = (e) => {
    setPickupInput(e.target.value);
    setShowSuggestions(true);
  };

  const handleDropChange = (e) => {
    setDropInput(e.target.value);
    setShowSuggestions(true);
  };

  const selectLocation = (type, value) => {
    if (type === 'pickup') {
      setUserLocation(value);
      setPickupInput(value);
    } else {
      setDestination(value);
      setDropInput(value);
    }
    setShowSuggestions(false);
  };

  const handleBookRide = () => {
    if (userLocation && destination && selectedVehicle) {
      bookRide({
        pickup: userLocation,
        drop: destination,
        vehicleType: selectedVehicle.name,
        distance: 5.2
      });
    }
  };

  const suggestions = [
    'MG Road, Bangalore',
    'Indiranagar, Bangalore',
    'Koramangala, Bangalore',
    'Whitefield, Bangalore',
    'Electronic City, Bangalore'
  ];

  if (currentRide && matchedDriver) {
    return (
      <div className="book-ride-page">
        <div className="container">
          <div className="ride-status-card animate-fade-in">
            <div className="status-header">
              <div className="status-badge confirmed">
                <Clock size={16} />
                Driver on the way
              </div>
              <button className="btn btn-outline btn-small" onClick={cancelRide}>
                Cancel Ride
              </button>
            </div>

            <div className="driver-info">
              <img src={matchedDriver.photo} alt={matchedDriver.name} className="driver-photo" />
              <div className="driver-details">
                <h3>{matchedDriver.name}</h3>
                <div className="rating">
                  <Star size={16} className="star-filled" />
                  <span>{matchedDriver.rating}</span>
                </div>
                <p className="vehicle-info">{matchedDriver.vehicle} • {matchedDriver.vehicleNumber}</p>
              </div>
              <div className="driver-actions">
                <button className="btn btn-icon">
                  <Phone size={20} />
                </button>
                <button className="btn btn-icon">
                  <MessageSquare size={20} />
                </button>
              </div>
            </div>

            <div className="ride-route">
              <div className="route-point">
                <MapPin size={20} className="pickup-icon" />
                <div>
                  <p className="point-label">Pickup</p>
                  <p className="point-location">{currentRide.pickup}</p>
                </div>
              </div>
              <div className="route-line"></div>
              <div className="route-point">
                <Navigation size={20} className="drop-icon" />
                <div>
                  <p className="point-label">Drop</p>
                  <p className="point-location">{currentRide.drop}</p>
                </div>
              </div>
            </div>

            <div className="eta-info">
              <div className="eta-box">
                <span className="eta-label">Arrival Time</span>
                <span className="eta-value">{matchedDriver.eta || '5 mins'}</span>
              </div>
              <div className="eta-box">
                <span className="eta-label">Distance</span>
                <span className="eta-value">{currentRide.distance} km</span>
              </div>
              <div className="eta-box">
                <span className="eta-label">Fare</span>
                <span className="eta-value">₹{currentRide.distance * 10 + 20}</span>
              </div>
            </div>

            <div className="map-placeholder">
              <p>Live Map Tracking</p>
              <div className="map-animation">
                <div className="pulse-dot"></div>
              </div>
            </div>

            <button className="btn btn-primary btn-large full-width" onClick={completeRide}>
              Complete Ride (Demo)
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="book-ride-page">
      <div className="container">
        <div className="booking-form-card animate-fade-in">
          <h2 className="form-title">Book Your Ride</h2>
          
          {/* Location Inputs */}
          <div className="location-inputs">
            <div className="input-group">
              <div className="input-icon pickup">
                <MapPin size={20} />
              </div>
              <div className="input-wrapper">
                <label>Pickup Location</label>
                <input
                  type="text"
                  placeholder="Enter pickup location"
                  value={pickupInput}
                  onChange={handlePickupChange}
                  onFocus={() => setShowSuggestions(true)}
                  onBlur={() => setTimeout(() => setShowSuggestions(false), 200)}
                />
              </div>
            </div>

            <div className="input-group">
              <div className="input-icon drop">
                <Navigation size={20} />
              </div>
              <div className="input-wrapper">
                <label>Drop Location</label>
                <input
                  type="text"
                  placeholder="Enter drop location"
                  value={dropInput}
                  onChange={handleDropChange}
                />
              </div>
            </div>

            {showSuggestions && (pickupInput || dropInput) && (
              <div className="suggestions-dropdown animate-fade-in">
                {suggestions.map((suggestion, index) => (
                  <div
                    key={index}
                    className="suggestion-item"
                    onClick={() => selectLocation(pickupInput ? 'pickup' : 'drop', suggestion)}
                  >
                    <Search size={16} />
                    <span>{suggestion}</span>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Vehicle Selection */}
          <div className="vehicle-selection">
            <h3 className="section-heading">Choose Vehicle</h3>
            <div className="vehicle-options">
              {vehicleTypes.map((vehicle) => (
                <div
                  key={vehicle.id}
                  className={`vehicle-option ${selectedVehicle?.id === vehicle.id ? 'selected' : ''}`}
                  onClick={() => setSelectedVehicle(vehicle)}
                >
                  <div className="vehicle-option-icon">
                    {vehicle.icon === 'bike' && <Bike size={32} />}
                    {vehicle.icon === 'car' && <Car size={32} />}
                    {vehicle.icon === 'users' && <Users size={32} />}
                    {vehicle.icon === 'star' && <Star size={32} />}
                  </div>
                  <div className="vehicle-option-info">
                    <h4>{vehicle.name}</h4>
                    <p>{vehicle.description}</p>
                    <div className="vehicle-meta">
                      <span className="eta"><Clock size={14} /> {vehicle.eta}</span>
                      <span className="capacity">👤 {vehicle.capacity}</span>
                    </div>
                  </div>
                  <div className="vehicle-option-price">
                    <span className="price">₹{vehicle.basePrice}</span>
                    <span className="per-km">base</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Fare Estimate */}
          {userLocation && destination && selectedVehicle && (
            <div className="fare-estimate animate-fade-in">
              <div className="fare-row">
                <span>Base Fare</span>
                <span>₹{selectedVehicle.basePrice}</span>
              </div>
              <div className="fare-row">
                <span>Distance (5.2 km)</span>
                <span>₹{selectedVehicle.perKm * 5.2}</span>
              </div>
              <div className="fare-row total">
                <span>Total Estimate</span>
                <span>₹{Math.round(selectedVehicle.basePrice + selectedVehicle.perKm * 5.2)}</span>
              </div>
            </div>
          )}

          {/* Book Button */}
          <button
            className="btn btn-primary btn-large full-width"
            onClick={handleBookRide}
            disabled={!userLocation || !destination || !selectedVehicle || isSearching}
          >
            {isSearching ? (
              <>
                <div className="spinner"></div>
                Finding Driver...
              </>
            ) : (
              'Book Now'
            )}
          </button>
        </div>
      </div>
    </div>
  );
};

export default BookRide;
