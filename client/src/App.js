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
      
  const addBooking = (newBooking) => {
    setGuestBookings([...guestBookings, newBooking])
  }

  const deleteBooking = (id) => {
    const bookingsToKeep = guestBookings.filter(bookingToDelete => bookingToDelete._id !== id)
    setGuestBookings(bookingsToKeep)
  }



  return (
    <div className="App">
      <h1>Hotel Bookings</h1>
      <BookingForm addBooking = {addBooking} />
      <BookingGrid bookings = {guestBookings} deleteBooking = {deleteBooking} />
    </div>
  );
}

export default App;
