import axios from 'axios';

class AuthService{

    signUp(user){
        return axios.post("http://localhost:8080/api/v1/signUp",user);
    }

    signIn(user){
        return axios.post("http://localhost:8080/api/v1/signIn",user);
    }

    checkUserUniquenessExists(username){
        return axios.get(`http://localhost:8080/api/v1/isUserExist/${username}`);
    }
}

export default new AuthService()