import axios from 'axios';

const RESERVATION_API_BASE_URL= "http://localhost:8080/api/v1/res_modification_requests";

class ReservationRequestService_IT19964010{

    getAllRes_Modification_Requests(){
        return axios.get(RESERVATION_API_BASE_URL);
    
    }


    createRes_Modification_Request(res_modification_requests){
        return axios.post(RESERVATION_API_BASE_URL,res_modification_requests);
     }

     getRes_Modification_RequestById(Reserve_M_Id){
        return axios.get (RESERVATION_API_BASE_URL + '/' + Reserve_M_Id);
    }

    // updateRoom(room,RoomId){
    //     return axios.put(ROOM_API_BASE_URL + '/' + RoomId,room);
    // }

    deleteRes_Modification_Requests(Reserve_M_Id){
        return axios.delete(RESERVATION_API_BASE_URL + '/' + Reserve_M_Id);
    }

    
}
export default new ReservationRequestService_IT19964010()
