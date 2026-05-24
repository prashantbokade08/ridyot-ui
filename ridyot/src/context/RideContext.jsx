import { createContext, useContext, useState } from 'react';

const RideContext = createContext();

export const useRide = () => {
  const context = useContext(RideContext);
  if (!context) {
    throw new Error('useRide must be used within a RideProvider');
  }
  return context;
};

export const RideProvider = ({ children }) => {
  const [currentRide, setCurrentRide] = useState(null);
  const [rideHistory, setRideHistory] = useState([]);
  const [userLocation, setUserLocation] = useState(null);
  const [destination, setDestination] = useState(null);
  const [selectedVehicle, setSelectedVehicle] = useState(null);
  const [isSearching, setIsSearching] = useState(false);
  const [matchedDriver, setMatchedDriver] = useState(null);

  const vehicleTypes = [
    {
      id: 1,
      name: 'Bike',
      icon: 'bike',
      basePrice: 20,
      perKm: 10,
      eta: '5 mins',
      capacity: 1,
      description: 'Quick & Affordable'
    },
    {
      id: 2,
      name: 'Auto',
      icon: 'car',
      basePrice: 40,
      perKm: 15,
      eta: '8 mins',
      capacity: 3,
      description: 'Comfortable Ride'
    },
    {
      id: 3,
      name: 'Car Pool',
      icon: 'users',
      basePrice: 60,
      perKm: 20,
      eta: '10 mins',
      capacity: 4,
      description: 'Share & Save'
    },
    {
      id: 4,
      name: 'Premium',
      icon: 'star',
      basePrice: 100,
      perKm: 30,
      eta: '12 mins',
      capacity: 4,
      description: 'Luxury Experience'
    }
  ];

  const calculateFare = (distance, vehicleType) => {
    const vehicle = vehicleTypes.find(v => v.name === vehicleType);
    if (!vehicle) return 0;
    return vehicle.basePrice + (vehicle.perKm * distance);
  };

  const bookRide = (rideData) => {
    setIsSearching(true);
    setTimeout(() => {
      const driver = {
        id: 1,
        name: 'Rajesh Kumar',
        rating: 4.8,
        vehicle: rideData.vehicleType,
        vehicleNumber: 'KA01AB1234',
        phone: '+91 9876543210',
        photo: 'https://randomuser.me/api/portraits/men/32.jpg'
      };
      setMatchedDriver(driver);
      setIsSearching(false);
      setCurrentRide({
        ...rideData,
        driver,
        status: 'confirmed',
        bookedAt: new Date()
      });
    }, 3000);
  };

  const cancelRide = () => {
    if (currentRide) {
      setRideHistory(prev => [currentRide, ...prev]);
      setCurrentRide(null);
      setMatchedDriver(null);
      setDestination(null);
      setSelectedVehicle(null);
    }
  };

  const completeRide = () => {
    if (currentRide) {
      const completedRide = { ...currentRide, status: 'completed', completedAt: new Date() };
      setRideHistory(prev => [completedRide, ...prev]);
      setCurrentRide(null);
      setMatchedDriver(null);
      setDestination(null);
      setSelectedVehicle(null);
    }
  };

  const value = {
    currentRide,
    rideHistory,
    userLocation,
    destination,
    selectedVehicle,
    isSearching,
    matchedDriver,
    vehicleTypes,
    setUserLocation,
    setDestination,
    setSelectedVehicle,
    bookRide,
    cancelRide,
    completeRide,
    calculateFare
  };

  return <RideContext.Provider value={value}>{children}</RideContext.Provider>;
};
