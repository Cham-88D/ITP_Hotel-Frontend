import axios from'axios';

const POLICY_Base_URL= "http://localhost:8080/api/v1/policies";

class PolicyService  {
   save(payload){
       return axios.post(POLICY_Base_URL,payload);
   }
    
   getAll(){
    return axios.get(POLICY_Base_URL);
   }

   delete(id){
       return axios.delete(POLICY_Base_URL+"/"+id);
   }

   getApplicablePolicies(total){
    return axios.get(`http://localhost:8080/api/v1/policies-applicable/${total}`);
   }

}

export default new PolicyService()