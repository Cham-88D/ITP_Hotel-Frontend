import axios from 'axios';

const FOODDetail__API_BASE_URL = "http://localhost:8080/api/v1/foodDetails";

class FoodDetailService{

    getFoodDetail(){
        return axios.get(FOODDetail__API_BASE_URL);
    }

    createFoodDetail(foodDetails){
        return axios.post(FOODDetail__API_BASE_URL, foodDetails)
    }

    getFoodDetailById(food_Id){
        return axios.get(FOODDetail__API_BASE_URL + '/' + food_Id);
    }

    updateFoodDetail(foodDetails, food_Id){
        return axios.put(FOODDetail__API_BASE_URL + '/ '+ food_Id, foodDetails );
    }

    deleteFoodDetail(food_Id){
        return axios.delete(FOODDetail__API_BASE_URL + '/' + food_Id);
    }

}
export default new FoodDetailService()