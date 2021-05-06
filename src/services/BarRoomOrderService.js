import axios from 'axios';

const BARROOM_ORDER_API_BASE_URL ="http://localhost:8080/api/v1/bar-room-order"
const BEV_ORDER_API_BASE_URL = "http://localhost:8080/api/v1/bev-order"

class BarRoomOrderService{

    createOrder(payload){
        return axios.post(BARROOM_ORDER_API_BASE_URL,payload);
    }

    addBeverageToOrder(payload){
        return axios.post(BEV_ORDER_API_BASE_URL,payload);
    }

    getBarRoomOrderById(id){
        return axios.get(BARROOM_ORDER_API_BASE_URL +'/'+ id);
    }

    getBeverageOrdersByBarRoomOrderId(id){
        return axios.get("http://localhost:8080/api/v1/bev_order_by_order_id/"+id);
    }

    getAllOrders(query){
        return axios.get(BEV_ORDER_API_BASE_URL+'/'+"view",{params:query});
    }
}

export default new BarRoomOrderService()