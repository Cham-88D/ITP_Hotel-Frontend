import axios from 'axios';

const BILL_API_BASE_URL ="http://localhost:8080/api/v1/bills"

class BillService{

    createBill(bill,orderId){
        return axios.post(BILL_API_BASE_URL+'/'+orderId,bill)
    }

    getBillByOrderId(orderId){
        return axios.get(BILL_API_BASE_URL +'/'+ orderId);
    }
}

export default new BillService()