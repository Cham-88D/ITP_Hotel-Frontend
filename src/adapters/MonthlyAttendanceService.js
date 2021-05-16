import axios from 'axios';

const MONTHLY_ATTENDANCE_API_BASE_URL="http://localhost:8080/api/v1/monthlyAttendance";


class MonthlyAttendanceService{
    getAllMonthly_Attendance(){
        return axios.get(MONTHLY_ATTENDANCE_API_BASE_URL);
    }
    getMonthlyAttendanceById(id){
        return axios.get(MONTHLY_ATTENDANCE_API_BASE_URL + '/'+ id);
    }
    updateMonthlyAttendance(mattendance,id){
        return axios.put(MONTHLY_ATTENDANCE_API_BASE_URL + '/'+ id,mattendance)
    }
    insertMonthlyAttendance(mattendance){
        return axios.post(MONTHLY_ATTENDANCE_API_BASE_URL,mattendance);
    }
}

export default new MonthlyAttendanceService()