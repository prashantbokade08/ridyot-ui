import { useRide } from '../context/RideContext';
import { MapPin, Navigation, Star, Clock, Bike, Car, Users } from 'lucide-react';

const Rides = () => {
  const { rideHistory, currentRide } = useRide();

  const getVehicleIcon = (vehicleType) => {
    switch(vehicleType) {
      case 'Bike': return <Bike size={20} />;
      case 'Auto': return <Car size={20} />;
      case 'Car Pool': return <Users size={20} />;
      default: return <Bike size={20} />;
    }
  };

  const getStatusBadge = (status) => {
    const badges = {
      confirmed: { text: 'Confirmed', class: 'confirmed' },
      completed: { text: 'Completed', class: 'completed' },
      cancelled: { text: 'Cancelled', class: 'cancelled' },
      ongoing: { text: 'Ongoing', class: 'ongoing' }
    };
    return badges[status] || badges.confirmed;
  };

  return (
    <div className="rides-page">
      <div className="container">
        <h2 className="page-title">My Rides</h2>

        {/* Current Ride */}
        {currentRide && (
          <div className="current-ride-section">
            <h3 className="section-heading">Current Ride</h3>
            <div className="ride-card active animate-fade-in">
              <div className="ride-header">
                <div className="ride-type">
                  {getVehicleIcon(currentRide.vehicleType)}
                  <span>{currentRide.vehicleType}</span>
                </div>
                <span className={`status-badge ${getStatusBadge(currentRide.status).class}`}>
                  {getStatusBadge(currentRide.status).text}
                </span>
              </div>
              <div className="ride-route">
                <div className="route-point">
                  <MapPin size={18} className="pickup-icon" />
                  <div>
                    <p className="point-label">From</p>
                    <p className="point-location">{currentRide.pickup}</p>
                  </div>
                </div>
                <div className="route-line"></div>
                <div className="route-point">
                  <Navigation size={18} className="drop-icon" />
                  <div>
                    <p className="point-label">To</p>
                    <p className="point-location">{currentRide.drop}</p>
                  </div>
                </div>
              </div>
              <div className="ride-footer">
                <div className="ride-time">
                  <Clock size={16} />
                  <span>{new Date(currentRide.bookedAt).toLocaleString()}</span>
                </div>
                <div className="ride-fare">
                  <span className="fare-label">Fare:</span>
                  <span className="fare-amount">₹{Math.round(currentRide.distance * 10 + 20)}</span>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Ride History */}
        <div className="ride-history-section">
          <h3 className="section-heading">Ride History</h3>
          
          {rideHistory.length === 0 ? (
            <div className="empty-state">
              <Bike size={64} className="empty-icon" />
              <h3>No rides yet</h3>
              <p>Book your first ride with Ridyot!</p>
            </div>
          ) : (
            <div className="rides-list">
              {rideHistory.map((ride, index) => {
                const statusInfo = getStatusBadge(ride.status);
                return (
                  <div key={index} className="ride-card animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
                    <div className="ride-header">
                      <div className="ride-type">
                        {getVehicleIcon(ride.vehicleType)}
                        <span>{ride.vehicleType}</span>
                      </div>
                      <span className={`status-badge ${statusInfo.class}`}>
                        {statusInfo.text}
                      </span>
                    </div>
                    <div className="ride-route">
                      <div className="route-point">
                        <MapPin size={18} className="pickup-icon" />
                        <div>
                          <p className="point-label">From</p>
                          <p className="point-location">{ride.pickup}</p>
                        </div>
                      </div>
                      <div className="route-line"></div>
                      <div className="route-point">
                        <Navigation size={18} className="drop-icon" />
                        <div>
                          <p className="point-label">To</p>
                          <p className="point-location">{ride.drop}</p>
                        </div>
                      </div>
                    </div>
                    <div className="ride-footer">
                      <div className="ride-time">
                        <Clock size={16} />
                        <span>{new Date(ride.bookedAt).toLocaleDateString()}</span>
                      </div>
                      <div className="ride-fare">
                        <span className="fare-label">Fare:</span>
                        <span className="fare-amount">₹{Math.round(ride.distance * 10 + 20)}</span>
                      </div>
                    </div>
                    {ride.status === 'completed' && (
                      <div className="ride-rating">
                        <div className="rating-stars">
                          {[1, 2, 3, 4, 5].map((star) => (
                            <Star key={star} size={16} className="star-filled" />
                          ))}
                        </div>
                        <span>Rate your ride</span>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Rides;
