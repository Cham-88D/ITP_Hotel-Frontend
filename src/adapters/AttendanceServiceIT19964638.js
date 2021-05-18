import axios from 'axios';

const ATTENDANCE_API_BASE_URL="http://localhost:8080/api/v1/dailyAttendance";


class AttendanceService{
        getAllDaily_Attendance(){
            return axios.get(ATTENDANCE_API_BASE_URL);
        }
        deleteAttendance(attendanceId){
            return axios.delete(ATTENDANCE_API_BASE_URL + '/'+ attendanceId);
        }
        insertAttendance(attendance){
            return axios.post(ATTENDANCE_API_BASE_URL,attendance);
        }
        getDailyAttendanceById(attendanceId){
            return axios.get(ATTENDANCE_API_BASE_URL + '/'+ attendanceId);
        }
        updateDailyAttendance(attendance,attendanceId){
            return axios.put(ATTENDANCE_API_BASE_URL + '/'+ attendanceId,attendance)
        }
}

export default new AttendanceService()