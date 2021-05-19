import axios from 'axios';

const BEVERAGE_API_BASE_URL ="http://localhost:8080/api/v1/beverages"
const TYPE_API_BASE_URL ="http://localhost:8080/api/v1/beverage_item_category"

class BeverageService{

    getBeverage(){
        return axios.get(BEVERAGE_API_BASE_URL);


    }
    createBeverage(beverage){
        return axios.post(BEVERAGE_API_BASE_URL,beverage)
    }
    getBeverageByID(beverageId){
        return axios.get(BEVERAGE_API_BASE_URL +'/'+ beverageId);
    }
    updateBeverage(beverage,beverageId){
        return axios.put(BEVERAGE_API_BASE_URL + '/' + beverageId,beverage);
    }
    deleteBeverage(beverageId){
        return axios.delete(BEVERAGE_API_BASE_URL + '/' + beverageId);
    }
    createBevType(bevtype){
         return axios.post(TYPE_API_BASE_URL,bevtype);
    }

    getBevType(){
        let y = axios.get(TYPE_API_BASE_URL)
       return y;
    }

}

export default new BeverageService()