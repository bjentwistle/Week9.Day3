import {deleteBooking} from './BookingService'

const BookingCard= ({booking, removeBooking}) => {

    const handleDelete = () => {
        deleteBooking(booking._id).then((res)=> {
            removeBooking(booking._id);
        })
    }
    
    console.log(booking.checkinStatus)
        return (
            <>
                <h1>Name: {booking.guest}</h1>
                <h3>Email: {booking.email}</h3>
                <h4>Check-in status: {booking.checkinStatus}</h4>
                <button onClick = {handleDelete}>Delete 🗑</button>
                <hr></hr>
            </>
        )
}

export default BookingCard;