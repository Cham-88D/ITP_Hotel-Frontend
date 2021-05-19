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
    //Food management
    {
        title:'Manage Food Stock',
        path:'/foodDetails',
        icon:<IoIcons.IoFastFood/>,
        cName:'nav-text'
    },
    {
        title:'Manage Food Count',
        path:'/foodCount',
        icon:<IoIcons.IoFastFoodOutline/>,
        cName:'nav-text'
    },
    //event management
    {
        title: ' Events',
        path:'/events',
        icon: <FaIcon.FaCalendarWeek/>,
        cName:'nav-text'

    },
    {
        title: 'Event Bookings',
        path:'/bookings',
        icon: <FaIcon.FaAddressBook/>,
        cName:'nav-text'
    },
    {
        title: 'Event Modification Request',
        path:'/event-modification-request',
        icon: <FaIcon.FaEdit/>,
        cName:'nav-text'
    },
    {
        title: 'Payment',
        path:'/payments',
        icon: <FaIcon.FaMoneyBillAlt/>,
        cName:'nav-text'
    },
    //Room reservation management
    {
        title: ' Room Management',
        path:'/rooms',
        icon: <FaIcon.FaHotel/>,
        cName:'nav-text'
    },
    {
        title: 'Reservation Managment',
        path:'/reservations',
        icon: <FaIcon.FaAddressBook/>,
        cName:'nav-text'
    },
    {
        title: 'Reservation Modification Request Managment',
        path:'/res_modification_requests',
        icon: <FaIcon.FaEdit/>,
        cName:'nav-text'
    },
    {
        title: 'Room Reservation Payment',
        path:'/payments',
        icon: <FaIcon.FaMoneyBillAlt/>,
        cName:'nav-text'
    },
    {
        title: 'Sign Out',
        path:'/',
        icon: <GoIcon.GoSignOut/>,
        cName:'nav-text'
    },
]