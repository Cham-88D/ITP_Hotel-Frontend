import React, { useEffect,Component } from 'react'
import AttendanceService from '../adapters/AttendanceServiceIT19964638';
import '../styles/AddAttendIT19964638.css';
export default class ViewAttendance extends Component {
    constructor(props){
        super(props)

        this.state={
            attendances:[],
            searchId:''
        }
        this.deleteAttendance=this.deleteAttendance.bind(this);
        this.editAttendanceDetail=this.editAttendanceDetail.bind(this);
        this.navigateatte=this.navigateatte.bind(this);
        this.generateReport=this.generateReport.bind(this);
        

    }
    navigateatte(){
        this.props.history.push('/addAttendance');
    }

    deleteAttendance(id){
        var confirmtext;
        if(window.confirm("Are You Sure Want to Delete !")){
           AttendanceService.deleteAttendance(id).then(res=>{
                this.setState({attendances:this.state.attendances.filter(attendance=>attendance.attendanceId!==id )});
                confirmtext="You Succesfully deleted attendance";
           }) ;
        }else{
            confirmtext="You presed cansel Try again";
         }
    }
     generateReport(){
        this.props.history.push('/attendancereport');
           
    }
    componentDidMount(){
        AttendanceService.getAllDaily_Attendance().then((res)=>{
            this.setState({attendances:res.data});

        });
    }
    editAttendanceDetail(id){
        this.props.history.push(`/updateAttendance/${id}`);
    }
    searchMenuId(event){
        this.setState({ searchId: event.target.value.substr(0,
            20)});
    }

    render() {
        let filterEmpId = this.state.attendances.filter((
            attendance)=>{
                return attendance.atte_type.indexOf(this.state.
                    searchId)!==-1;
            }
        );
        return (
            <div>
                 <div>
                                            
                    <input type="text" class="search"  placeholder="Enter Attendance Type" value={this.state.searchId} onChange={this.searchMenuId.bind(this)} />
                                            
                </div>
                <ul className="attendance">
                    <li>
                        <div className="attenavcontainer">
                            <form className="attenav" >
                                <h3 className='caption2'>Attendance Details</h3>

                                <div>
                                    <button className="attenavbtn1" onClick={this.navigateatte} type='submit'>Add Now</button>
                                </div>
                            </form>
                        </div>
                    </li>
                    <li>
                            <h3 className="table-heading">Employee Daily Attendance</h3>
                            <div className="row">
                                <table className="attend-table">
                                    <thead>
                                        <tr>
                                            <th>Attendance ID</th>
                                            <th>Date</th>
                                            <th>In Time</th>
                                            <th>Out Time</th>
                                            <th>OT Hour</th>
                                            <th>Type</th>
                                            <th>Employee ID</th>
                                            <th>Actions</th>
                                            
                                        </tr>
                                    </thead>

                                    <tbody>
                                        {
                                           filterEmpId.map(
                                                attendance=>
                                                <tr key={attendance.attendanceId}>
                                                    <td>{attendance.attendanceId}</td>
                                                    <td>{attendance.date}</td>
                                                    <td>{attendance.in_Time}</td>
                                                    <td>{attendance.out_Time}</td>
                                                    <td>{attendance.otHours}</td>
                                                    <td>{attendance.atte_type}</td>
                                                    <td>{attendance.employee.id}</td>
                                                    
                                                    <td>
                                                        <button onClick={()=>this.editAttendanceDetail(attendance.attendanceId)} className="table-input-btn2">Update</button>
                                                        <button style={{marginLeft:"10px"}} onClick={()=>this.deleteAttendance(attendance.attendanceId)} className="table-input-btn1">Delete</button>
                                                    </td>
                                                </tr>

                                            )
                                        }
                                    </tbody>
                                </table>
                            </div>
                        
                    </li>

                    <li>
                        <div className="attenavcontainer2">
                            <form className="attenav" >
                                <h3 className='caption3'>Attendance Report</h3>

                                <div>
                                    <button className="attenavbtn2" onClick={this.generateReport} type='submit'>Generate</button>
                                </div>
                            </form>
                        </div>
                    </li>
                </ul>
            </div>
                
        )
    }
}
