import axios from 'axios';

const PAYMENT_API_BASE_URL= "http://localhost:8080/api/v1/payments";

class PaymentService{

    getAllPayments(){
        return axios.get(PAYMENT_API_BASE_URL);
    
    }


    createPayment(payments){
        return axios.post(PAYMENT_API_BASE_URL,payments);
     }

     getPaymentById(PId){
        return axios.get (PAYMENT_API_BASE_URL + '/' + PId);
    }

    // updateRoom(room,RoomId){
    //     return axios.put(ROOM_API_BASE_URL + '/' + RoomId,room);
    // }

    deletePayments(PId){
        return axios.delete(PAYMENT_API_BASE_URL + '/' + PId);
    }

    
}
export default new PaymentService()
