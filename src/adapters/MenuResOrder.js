import axios from'axios';

const MENU_RES_ORDER_BASE_URL= "http://localhost:8080/api/v1/order_menu_item";

class MenuResOrderService  {
   addItemsToOrder(payload){
       return axios.post(MENU_RES_ORDER_BASE_URL,payload);
   }
    
   getOrderLinesByOrderId(id){
    return axios.get(MENU_RES_ORDER_BASE_URL+'/'+id);
   }

}

export default new MenuResOrderService()