import {useState} from "react";
import {postBooking} from "./BookingService";

const BookingsForm = ({addBooking}) => {
    
    const [formData, setFormData] = useState({
        guest: "",
        email: "",
        checkinStatus: ""
    })

    const onChange = (e) =>{
        const newFormData = Object.assign({}, formData);
        newFormData[e.target.name] = e.target.value;
        setFormData(newFormData);
    }

    const onSubmit = (e) =>{
        e.preventDefault();
        postBooking(formData).then((data)=>{
            addBooking(data);
        })
        // Reset the form input values
        setFormData({
            guest: "",
            email: "",
            checkinStatus: ""
        });
    }

return (
    <form onSubmit={onSubmit} id="bookings-form" >
        <h2>Make A Booking</h2>
        <div className="formWrap">
            <label htmlFor="guest">Guest Name:</label>
            <input 
                onChange={onChange} 
                type="text" 
                id="guest" 
                name="guest"
                value={formData.guest} />
        </div>
        <div className="formWrap">
            <label htmlFor="email">Email:</label>
            <input 
                onChange={onChange} 
                type="text" 
                id="email" 
                name="email"
                value={formData.email} />
        </div>
        <div className="formWrap">
            <label htmlFor="checkinStatus">Select Checked In Status:</label>
            <select  onChange={onChange} name="checkinStatus" id="checkinStatus" value={formData.checkinStatus}>
                <option value = "disabled">Select</option>
                <option  value= "Not checked in">Not checked in</option>
                <option  value= "Checked in">Checked in</option>
            </select>            
        </div>

        <input type="submit" value="Save" id="save"/>
        <hr></hr>
    </form>

);
}

export default BookingsForm;