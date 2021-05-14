import axios from 'axios';

const EVENT_API_BASE_URL="http://localhost:8080/api/v1/events";

class EventService {
    getEvent(){
        return axios.get(EVENT_API_BASE_URL);
    }
    createEvent(event){
        return axios.post(EVENT_API_BASE_URL, event);
    }
    getEventById(event_Id){
        return axios.get(EVENT_API_BASE_URL + '/' + event_Id);
    }
    updateEvent(event, event_Id){
        return axios.put(EVENT_API_BASE_URL + '/' +event_Id, event);
    }
    deleteEvent(event_Id){
        return axios.delete(EVENT_API_BASE_URL + '/' + event_Id);
    }
}

export default new EventService()