import axios from 'axios';

const SALARY_API_BASE_URL="http://localhost:8080/api/v1/salarydetails";


class SalaryService{
    getAllSalary_Detail(){
        return axios.get(SALARY_API_BASE_URL);
    }
    deleteSalaryDetail(SalaryId){
        return axios.delete(SALARY_API_BASE_URL + '/'+ SalaryId);
    }
    insertSalaryDetail(salaryDetail){
        return axios.post(SALARY_API_BASE_URL,salaryDetail);

    }
    getSalaryDetailById(SalaryId){
        return axios.get(SALARY_API_BASE_URL + '/'+ SalaryId);
    }
    updateSalaryDetail(salaryDetail,SalaryId){
        return axios.put(SALARY_API_BASE_URL + '/'+ SalaryId,salaryDetail);
    }

}

export default new SalaryService()