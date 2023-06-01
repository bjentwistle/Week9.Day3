import './App.css';
import { useState, useEffect } from 'react';
//import BookingCard from './components/BookingCard';
import BookingForm from './components/BookingForm';
import BookingService from './components/BookingService'
import { getBookings, updateBooking } from './components/BookingService';
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

  const removeBooking = (id) => {
    const bookingsToKeep = guestBookings.filter(bookingToDelete => bookingToDelete._id !== id)
    setGuestBookings(bookingsToKeep)
  }

  // const updateBooking = updateBooking => {
  //   //request to server to update the booking
  //   BookingService.updateBooking(updateBooking);

  // }

  return (
    <div className="App">
      <h1 className = "App-header">Hotel Bookings</h1>
      <BookingForm addBooking = {addBooking} />
      <BookingGrid bookings = {guestBookings} removeBooking = {removeBooking} />
    </div>
  );
}

export default App;
