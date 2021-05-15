import axios from'axios';

const RES_ORDER_BASE_URL= "http://localhost:8080/api/v1/res_order";

class ResOrderService  {
   save(payload){
       return axios.post(RES_ORDER_BASE_URL,payload);
   }
    
   getAById(id){
    return axios.get(RES_ORDER_BASE_URL+'/'+id);
   }

}

export default new ResOrderService()