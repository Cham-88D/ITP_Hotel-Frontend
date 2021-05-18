import React from 'react';
import * as FaIcon from "react-icons/fa";
import * as AiIcon from "react-icons/ai";
import * as IoIcon from "react-icons/io5";
import * as GoIcon from "react-icons/go";
import* as BsIcons from "react-icons/bs";
import* as MdIcons from "react-icons/md";
import* as BiIcons from "react-icons/bi";
import* as CgIcons from "react-icons/cg";
import* as FaIcons from "react-icons/fa";
import* as IoIcons  from "react-icons/io5";

export const SidebarData = [
    {
        title: 'Home',
        path:'/',
        icon: <AiIcon.AiFillHome/>,
        cName:'nav-text'
    },
    //beverageManagement
    {
        title: ' Beverage Management',
        path:'/beverages',
        icon: <IoIcon.IoFastFoodSharp/>,
        cName:'nav-text'
    },
    {
        title: 'Beverage Order Managment',
        path:'/orders',
        icon: <FaIcon.FaMoneyBillAlt/>,
        cName:'nav-text'
    },
    //Restaurant management
    {
        title: ' Menu  Managment',
        path:'/menuItems',
        icon: <IoIcon.IoFastFoodSharp/>,
        cName:'nav-text'
    },
    {
        title: 'Restaurant Order Managment',
        path:'/ViewOrder',
        icon: <FaIcon.FaMoneyBillAlt/>,
        cName:'nav-text'
    },
    {
        title: 'Policy Managment',
        path:'/policy',
        icon: <FaIcon.FaMoneyBillAlt/>,
        cName:'nav-text'
    },
    //attendance and salary management
    {
        title:'Main',
        path:'/main',
        icon:<AiIcon.AiFillHome/>,
        cName:'nav-text'
    },
    {
        title:'Manage Employee',
        path:'/manageEmployee',
        icon:<BsIcons.BsFillPersonLinesFill/>,
        cName:'nav-text'
        
    },
    {
        title:'Daily Attendance',
        path:'/manageAttendance',
        icon:<BsIcons.BsCardList/>,
        cName:'nav-text'
    },
    {
        title:'Monthly Attendance',
        path:'/monthlyAttendance',
        icon:<BiIcons.BiCalculator/>,
        cName:'nav-text'
    },
    {
        title:'Manage Salary',
        path:'/manageSalary',
        icon:<MdIcons.MdPayment/>,
        cName:'nav-text'
    },
    {
        title:'View Salary',
        path:'/payroll',
        icon:<BiIcons.BiDetail/>,
        cName:'nav-text'
    },
    //supplier management
    {
        title:'Supplier List',
        path:'/view-supplier',
        icon:<BsIcons.BsFillPersonLinesFill/>,
        cName:'nav-text'
        
    },
    {
        title:'Add Supplier ',
        path:'/supplier',
        icon:<IoIcons.IoPersonAdd/>,
        cName:'nav-text'
        
    },
    {
        title:'Purchased Item List',
        path:'/view-purchaseditem',
        icon:<FaIcons.FaTruck/>,
        cName:'nav-text'
    },
    {
        title:'Add Purchased Item',
        path:'/purchaseditem',
        icon:<BsIcons.BsCardList/>,
        cName:'nav-text'
    },
    {
        title: 'Sign Out',
        path:'/',
        icon: <GoIcon.GoSignOut/>,
        cName:'nav-text'
    },
]
