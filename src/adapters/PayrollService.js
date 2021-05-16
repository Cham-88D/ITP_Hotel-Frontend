import axios from 'axios';

const PAYROLL_API_BASE_URL="http://localhost:8080/api/v1/payroll";

class PayrollService{

    getAllpayroll(){
        return axios.get(PAYROLL_API_BASE_URL);
    }
    getypayrollById(id){
        return axios.get(PAYROLL_API_BASE_URL+ '/'+ id);
    }
    insertPayroll(payroll){
        return axios.post(PAYROLL_API_BASE_URL,payroll);
    }
}
export default new PayrollService;
