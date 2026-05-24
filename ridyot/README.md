# Ridyot - Two Wheeler Taxi Service

Ridyot is a modern, responsive React.js frontend application for a two-wheeler pick and pool service, similar to Rapido, Ola, Uber, and BlaBlaCar.

## Features

- **Modern UI/UX**: Clean, intuitive interface with smooth animations
- **Responsive Design**: Works seamlessly on desktop, tablet, and mobile devices
- **Real-time Booking**: Book rides with multiple vehicle options (Bike, Auto, Car Pool, Premium)
- **Live Tracking**: Simulated driver tracking with ETA and route information
- **Ride History**: View past and current rides with detailed information
- **Fare Estimation**: Transparent pricing with fare breakdown
- **Driver Information**: View driver details, ratings, and contact options

## Tech Stack

- **React 19** - Modern React with hooks
- **React Router DOM** - Client-side routing
- **Lucide React** - Beautiful icons
- **Vite** - Fast build tool and dev server
- **CSS3** - Custom styling with CSS variables and animations

## Project Structure

```
ridyot/
├── src/
│   ├── components/
│   │   └── Navbar.jsx          # Navigation component
│   ├── context/
│   │   └── RideContext.jsx     # Global state management
│   ├── pages/
│   │   ├── Home.jsx            # Landing page
│   │   ├── BookRide.jsx        # Ride booking page
│   │   └── Rides.jsx           # Ride history page
│   ├── App.jsx                 # Main app component
│   ├── App.css                 # Application styles
│   ├── index.css               # Global styles
│   └── main.jsx                # Entry point
├── public/
│   └── favicon.svg             # App icon
├── index.html                  # HTML template
└── package.json                # Dependencies
```

## Installation

1. Navigate to the project directory:
```bash
cd ridyot
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and visit `http://localhost:5173`

## Build for Production

```bash
npm run build
```

The production build will be available in the `dist/` folder.

## Pages

### Home Page (`/`)
- Hero section with call-to-action
- Vehicle options showcase
- Features section
- Download app CTA

### Book Ride Page (`/book`)
- Location input with suggestions
- Vehicle selection (Bike, Auto, Car Pool, Premium)
- Fare estimation
- Real-time booking status
- Driver matching simulation
- Live tracking view

### My Rides Page (`/rides`)
- Current active ride
- Ride history
- Ride details and ratings

## Vehicle Types

1. **Bike** - Quick & Affordable (₹20 base)
2. **Auto** - Comfortable Ride (₹40 base)
3. **Car Pool** - Share & Save (₹60 base)
4. **Premium** - Luxury Experience (₹100 base)

## Color Scheme

- Primary: #ffc107 (Yellow)
- Secondary: #212121 (Dark Gray)
- Accent: #ff5722 (Orange)
- Success: #4caf50 (Green)
- Danger: #f44336 (Red)

## Features Demo

1. **Book a Ride**: 
   - Enter pickup and drop locations
   - Select vehicle type
   - View fare estimate
   - Click "Book Now"
   - Wait for driver matching (3 seconds simulation)
   - View driver details and tracking

2. **Complete Ride**:
   - Click "Complete Ride (Demo)" to finish
   - Ride moves to history

3. **View History**:
   - Navigate to "My Rides"
   - See all completed rides

## Responsive Breakpoints

- Mobile: < 768px
- Tablet: 768px - 968px
- Desktop: > 968px

## License

MIT License

## Author

Ridyot Team

---

Built with ❤️ using React.js
