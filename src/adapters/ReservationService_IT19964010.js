
import axios from 'axios';

const RESERVATION_API_BASE_URL= "http://localhost:8080/api/v1/reservations";

class ReservationService_IT19964010{

    getAllReservations(){
        return axios.get(RESERVATION_API_BASE_URL);
    
    }


    createReservation(reservations){
        return axios.post(RESERVATION_API_BASE_URL,reservations);
     }

    getReservationtById(Res_Id){
        return axios.get(RESERVATION_API_BASE_URL + '/' + Res_Id);
    }

    updateReservation(reservation,Res_Id){
        return axios.put(RESERVATION_API_BASE_URL + '/' + Res_Id,reservation);
    }

    deleteReservations(Res_Id){
        return axios.delete(RESERVATION_API_BASE_URL + '/' + Res_Id);
    }

    
}
export default new ReservationService_IT19964010()
