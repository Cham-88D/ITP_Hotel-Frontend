import axios from 'axios';

const EVENT_MODIFICATION_REQUEST_API_BASE_URL="http://localhost:8080/api/v1/ev_Modification_Requests";

class EventModificationRequestServiceIT19067148 {
    getAllEv_Modification_Requests(){
        //return axios.post(EVENT_MODIFICATION_REQUEST_API_BASE_URL);
        let x = axios.get(EVENT_MODIFICATION_REQUEST_API_BASE_URL);
        console.log(x);
        return x;
    
    }
    createEv_Modification_Request(eventModificationRequest){
        // let x = axios.post(EVENT_MODIFICATION_REQUEST_API_BASE_URL, eventModificationRequest);
        // console.log(x);
        // return x;
        // console.log(eventModificationRequest)
        return axios.post(EVENT_MODIFICATION_REQUEST_API_BASE_URL, eventModificationRequest);
    }
    getEv_Modification_RequestById(Ev_M_ID){
        return axios.get(EVENT_MODIFICATION_REQUEST_API_BASE_URL + '/' + Ev_M_ID);
    }
}
export default new EventModificationRequestServiceIT19067148()