import axios from 'axios';

const EVENT_BOOKINGS_API_BASE_URL="http://localhost:8080/api/v1/bookings";

class EventBookingsService {
    getEventBookings(){
        return axios.get(EVENT_BOOKINGS_API_BASE_URL);
    }
    createEventBooking(/*cid,eid,*/eventBooking){
        return axios.post(EVENT_BOOKINGS_API_BASE_URL /*+ '/' + eid+ '/' +cid*/, eventBooking);
    }
    getEventBookingById(booking_Id){
        return axios.get(EVENT_BOOKINGS_API_BASE_URL + '/' + booking_Id);
    }
    updateEventBooking(bookings, Booking_Id){
        return axios.put(EVENT_BOOKINGS_API_BASE_URL + '/' + Booking_Id, bookings);
    }
    deleteEventBooking(booking_Id){
        return axios.delete(EVENT_BOOKINGS_API_BASE_URL + '/' + booking_Id);
    }
}

export default new EventBookingsService()