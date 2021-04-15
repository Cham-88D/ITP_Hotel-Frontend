import React from 'react'
import* as BsIcons from "react-icons/bs";
import* as MdIcons from "react-icons/md";
import* as BiIcons from "react-icons/bi";
import* as CgIcons from "react-icons/cg";

export const SidebarData=[
    {
        title:'Main',
        path:'/',
        icon:<CgIcons.CgProfile/>,
        cName:'nav-text'
    },

    {
        title:'Manage Employee',
        path:'/',
        icon:<BsIcons.BsFillPersonLinesFill/>,
        cName:'nav-text'
    },
    {
        title:'Manage Attendance',
        path:'/',
        icon:<BsIcons.BsCardList/>,
        cName:'nav-text'
    },
    {
        title:'Manage Salary',
        path:'/',
        icon:<MdIcons.MdPayment/>,
        cName:'nav-text'
    },
    {
        title:'Calculate Salary',
        path:'/',
        icon:<BiIcons.BiCalculator/>,
        cName:'nav-text'
    },
    {
        title:'View Salary',
        path:'/',
        icon:<BiIcons.BiDetail/>,
        cName:'nav-text'
    },
]
