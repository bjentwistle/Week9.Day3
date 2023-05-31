import './App.css';
import { useState, useEffect } from 'react';
import BookingCard from './components/BookingCard';
import BookingForm from './components/BookingForm';
import { getBookings } from './components/BookingService';
import BookingGrid from './components/BookingGrid';



function App() {
  const [guestBookings, setGuestBookings] = useState([]);

  useEffect(() => {
    getBookings().then((allBookings) => {
      setGuestBookings(allBookings);
    })
  }, []);
      



  return (
    <div className="App">
    <h1>Hotel Bookings</h1>
    <BookingGrid bookings = {guestBookings}  />
      
    </div>
  );
}

export default App;
