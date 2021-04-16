export default function validateAttendInfo(values){
    let errors={}


    if(!values.employeeId.trim()){
        errors.employeeId="Employee ID required"
    }

    if(!values.date){
        errors.date="Date  required"
    }

    if(!values.inTime){
        errors.inTime="In Time  required"
    }
    if(!values.outTime){
        errors.outTime="Out Time  required"
    }
    if(!values.otHour){
        errors.otHour="OT Hour  required"
    }
   
    if(!values.type){
        errors.type="Type  required"
    }
    return errors;

}