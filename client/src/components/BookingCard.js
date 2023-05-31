import {deleteBooking} from './BookingService'

const BookingCard= ({booking, removeBooking}) => {

    //////////////////// come back to this later
    
    console.log(booking.checkinStatus)
        return (
            <>
                <h1>Name: {booking.guest}</h1>
                <h3>Email: {booking.email}</h3>
                <h4>Check-in status: {booking.checkinStatus}</h4>
            </>
        )
}

export default BookingCard;