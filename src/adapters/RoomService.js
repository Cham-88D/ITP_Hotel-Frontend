
import axios from 'axios';

const ROOM_API_BASE_URL= "http://localhost:8080/api/v1/rooms";

class RoomService{

    getAllRooms(){
        return axios.get(ROOM_API_BASE_URL);
    
    }


    createRoom(rooms){
        return axios.post(ROOM_API_BASE_URL,rooms);
     }

    getRoomById(RoomId){
        return axios.get (ROOM_API_BASE_URL + '/' + RoomId);
    }

    updateRoom(room,RoomId){
        return axios.put(ROOM_API_BASE_URL + '/' + RoomId,room);
    }

    deleteRooms(RoomId){
        return axios.delete(ROOM_API_BASE_URL + '/' + RoomId);
    }

    
}
export default new RoomService()
