import axios from 'axios';

const FOODCOUNT_API_BASE_URL = "http://localhost:8080/api/v1/foodCount";

class FoodCountService{

    getFoodCount(){
        return axios.get(FOODCOUNT_API_BASE_URL);
    }

    createFoodCount(foodcount){
        return axios.post(FOODCOUNT_API_BASE_URL, foodcount)
    }

    getFoodCountById(count_id){
        return axios.get(FOODCOUNT_API_BASE_URL + '/' + count_id);
    }

    updateFoodCount(foodcount, count_id){
        return axios.put(FOODCOUNT_API_BASE_URL+ '/ '+ count_id, foodcount );
    }

    deleteFoodCount(count_id){
        return axios.delete(FOODCOUNT_API_BASE_URL + '/' + count_id);
    }

}

export default new FoodCountService()