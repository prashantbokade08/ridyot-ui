import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { RideProvider } from './context/RideContext';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import BookRide from './pages/BookRide';
import Rides from './pages/Rides';
import './App.css';

function Profile() {
  return (
    <div className="rides-page">
      <div className="container">
        <h2 className="page-title">Profile</h2>
        <div className="booking-form-card">
          <p style={{ textAlign: 'center', color: 'var(--text-gray)' }}>
            Profile page coming soon...
          </p>
        </div>
      </div>
    </div>
  );
}

function Login() {
  return (
    <div className="rides-page">
      <div className="container">
        <h2 className="page-title">Login</h2>
        <div className="booking-form-card">
          <p style={{ textAlign: 'center', color: 'var(--text-gray)' }}>
            Login page coming soon...
          </p>
        </div>
      </div>
    </div>
  );
}

function Partner() {
  return (
    <div className="rides-page">
      <div className="container">
        <h2 className="page-title">Become a Partner</h2>
        <div className="booking-form-card">
          <p style={{ textAlign: 'center', color: 'var(--text-gray)' }}>
            Partner registration coming soon...
          </p>
        </div>
      </div>
    </div>
  );
}

function App() {
  return (
    <RideProvider>
      <Router>
        <div className="app">
          <Navbar />
          <main>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/book" element={<BookRide />} />
              <Route path="/rides" element={<Rides />} />
              <Route path="/profile" element={<Profile />} />
              <Route path="/login" element={<Login />} />
              <Route path="/partner" element={<Partner />} />
            </Routes>
          </main>
        </div>
      </Router>
    </RideProvider>
  );
}

export default App;
