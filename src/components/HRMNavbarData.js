import React from 'react'
import* as BsIcons from "react-icons/bs";
import* as MdIcons from "react-icons/md";
import* as BiIcons from "react-icons/bi";
import* as CgIcons from "react-icons/cg";

export const SidebarData=[
    {
        title:'Main',
        path:'/main',
        icon:<CgIcons.CgProfile/>,
        cName:'nav-text'
    },

    {
        title:'Manage Employee',
        path:'/manageEmployee',
        icon:<BsIcons.BsFillPersonLinesFill/>,
        cName:'nav-text'
    },
    {
        title:'Manage Attendance',
        path:'/manageAttendance',
        icon:<BsIcons.BsCardList/>,
        cName:'nav-text'
    },
    {
        title:'Manage Salary',
        path:'/manageSalary',
        icon:<MdIcons.MdPayment/>,
        cName:'nav-text'
    },
    {
        title:'Calculate Salary',
        path:'/calculateSalary',
        icon:<BiIcons.BiCalculator/>,
        cName:'nav-text'
    },
    {
        title:'View Salary',
        path:'/viewSalary',
        icon:<BiIcons.BiDetail/>,
        cName:'nav-text'
    },
]
