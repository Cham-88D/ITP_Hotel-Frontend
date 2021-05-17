import React, { useState, useEffect } from 'react';
import { forwardRef } from 'react';
import SideNav from "../components/sideNav";
import { jsPDF } from "jspdf";
import "jspdf-autotable";
import MaterialTable from "material-table";
import AddBox from '@material-ui/icons/AddBox';
import ArrowDownward from '@material-ui/icons/ArrowDownward';
import Check from '@material-ui/icons/Check';
import ChevronRight from '@material-ui/icons/ChevronRight';
import Clear from '@material-ui/icons/Clear';
import DeleteOutline from '@material-ui/icons/DeleteOutline';
import Edit from '@material-ui/icons/Edit';
import FilterList from '@material-ui/icons/FilterList';
import Remove from '@material-ui/icons/Remove';
import SaveAlt from '@material-ui/icons/SaveAlt';
import Search from '@material-ui/icons/Search';
import ViewColumn from '@material-ui/icons/ViewColumn';
import PrintIcon from '@material-ui/icons/Print';
import { Edit as EditIcon, Add as AddIcon} from "@material-ui/icons";
import DeleteOutlinedIcon from '@material-ui/icons/DeleteOutlined';
import EmployeeService from "../adapters/EmployeeService";
import {useHistory} from "react-router";
import {Button, Dialog, DialogActions, DialogTitle} from "@material-ui/core";
import AuthService from "../adapters/AuthService";
import {MDBNotification} from "mdbreact";

const tableIcons = {
    Add: forwardRef((props, ref) => <AddBox {...props} ref={ref} />),
    Check: forwardRef((props, ref) => <Check {...props} ref={ref} />),
    Clear: forwardRef((props, ref) => <Clear {...props} ref={ref} />),
    Delete: forwardRef((props, ref) => <DeleteOutline {...props} ref={ref} />),
    DetailPanel: forwardRef((props, ref) => <ChevronRight {...props} ref={ref} />),
    Edit: forwardRef((props, ref) => <Edit {...props} ref={ref} />),
    Export: forwardRef((props, ref) => <SaveAlt {...props} ref={ref} />),
    Filter: forwardRef((props, ref) => <FilterList {...props} ref={ref} />),
    ResetSearch: forwardRef((props, ref) => <Clear {...props} ref={ref} />),
    Search: forwardRef((props, ref) => <Search {...props} ref={ref} />),
    SortArrow: forwardRef((props, ref) => <ArrowDownward {...props} ref={ref} />),
    ThirdStateCheck: forwardRef((props, ref) => <Remove {...props} ref={ref} />),
    ViewColumn: forwardRef((props, ref) => <ViewColumn {...props} ref={ref} />)
};

function auth() {

    let user = AuthService.getCurrentUser();
    let role='';
    if(user !== null){
        user["roles"].map(result => {
                role = result
                return role;
            }
        );}
    return role;
}





function App() {
    const history= useHistory();
   if  (auth() !== 'HRmanager')
   {
       history.push("/");
   }
    let now = new Date();
    let time = now.getHours() + ':' + now.getMinutes();
    const [show, setShow] = useState(false);
    const onClose = () => { setShow(false);}

    const [open, setOpen] = React.useState(false);
    const [dat, setD] = React.useState(null);
    const handleClickOpen = (d) => {
        setOpen(true);
        setD(d);
    };

    const handleClose = () => {
        setOpen(false);
    };
    const handleDel = () => {
        setOpen(false);
        del();
    };
    const del = () =>
    {

               EmployeeService.deleteEmployee(dat.eid).then( () => {
                   setShow(true);
                   EmployeeService.getEmployees().then(res => {
                       setData(res.data)
                   })
               });


    };
    let columns = [
        {title: "id", field: "emp_id", hidden: true},
        {title: "First name", field: "fName"},
        {title: "Last name", field: "lName"},
        {title: "Address", field: "address"},
        {title: "NIC", field: "nic"},
        {title: "Date of Birth", field: "dateOfBirth"},
        {title: "Phone Number", field: "phone"},
        {title: "Start Date", field: "startDate"},
        {title: "Role", field: "roles.name"},

    ];
    const [data, setData] = useState([]);



    useEffect(() => {
        EmployeeService.getEmployees().then(res => {
                setData(res.data)
            console.log(res.data)
            })
            .catch(error=>{
                console.log(error)
            })
    }, [])

    const actions = [
        {
            icon: () => <AddIcon />,
            tooltip: "Add Employee",
            isFreeAction: true,
            onClick: () => {
               history.push('/add-employee');
            }
        },
        {
            icon: () => <PrintIcon />,
            tooltip: "Print Employee",
            isFreeAction: true,
            onClick: () => {

                    exportPDF(data);
            }
        },
        {
            icon: () => <EditIcon />,
            tooltip: "Edit Employee",
            onClick: (event, rowData) => {
              history.push(`/update-employee/${rowData.eid}`);
            }
        },

        {
            icon: () => <DeleteOutlinedIcon/>,
            tooltip: "Delete Employee",
            onClick: (event, rowData) => {
                handleClickOpen(rowData)

            }
        }
    ];

    const exportPDF = (data) => {
        const unit = "pt";
        const size = "A3";
        const orientation = "portrait";

        const marginLeft = 40;
        const doc = new jsPDF(orientation, unit, size);

        doc.setFontSize(18);

        let today = new Date();
        let dd = String(today.getDate()).padStart(2, '0');
        let mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
        let yyyy = today.getFullYear();

        today = mm + '/' + dd + '/' + yyyy;

        const title = "Employee Report  "+today;
        const headers = [["Employee ID", "First Name","Last Name","Address","NIC","Date of Birth","Phone Number","Start Date","Role"]];

        const d = data.map(employee => [employee.eid,employee.fName,employee.lName,employee.address,employee.nic,employee.dateOfBirth,employee.phone,employee.startDate,employee.roles.name]);
        let content = {
            startX: 100,
            startY: 50,
            head: headers,
            body: d
        };

        doc.text(title, marginLeft, 40);
        doc.autoTable(content);
        doc.save("report.pdf")
    }


    return (
<div>
    <SideNav/>
    {show ?
        <MDBNotification
            show
            fade
            title="New Message"
            message="Deleted"
            className="warm-flame-gradient"
            text={time}
            style={{marginLeft: "1180px"}}
            onClick={onClose}
        /> : null}
    <div>
        <Dialog
            open={open}
            onClose={handleClose}
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description"
        >
            <DialogTitle id="alert-dialog-title">{"Confirm Before Deleting Employee"}</DialogTitle>
            <DialogActions>
                <Button onClick={handleClose} color="primary">
                    Disagree
                </Button>
                <Button onClick={handleDel} color="primary" autoFocus>
                    Agree
                </Button>
            </DialogActions>
        </Dialog>
    </div>
        <div >

            <MaterialTable
                style={{ width: 1300,marginLeft:"150px",marginTop:"100px",marginBottom:"100px",fontWeight:"bolder"}}
                title="Employee"
                columns={columns}
                data={data}
                icons={tableIcons}
                actions={actions}
                options={{headerStyle:{fontSize:"16px"},
                    rowStyle: rowData => {
                        if(rowData.roles.name === "Worker") {
                            return {backgroundColor: '#bed0ed'};
                        }
                        else
                        {
                            return {backgroundColor: '#edbedc'};
                        }


                    },
                    paging: false
                }}

            />
        </div>


</div>
    );
}

export default App;