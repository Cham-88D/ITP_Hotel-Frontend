import React from 'react';
import * as FaIcon from "react-icons/fa";
import * as AiIcon from "react-icons/ai";
import * as IoIcon from "react-icons/io5";
import * as GoIcon from "react-icons/go";
import * as RiIcon from "react-icons/ri";
import * as GiIcon from "react-icons/gi";

export const SidebarData = [
    {
        title: 'Home',
        path:'/page-bookings',
        icon: <AiIcon.AiFillHome/>,
        cName:'nav-text'
    },
    {
        title: ' Events',
        path:'/events',
        icon: <IoIcon.IoFastFoodSharp/>,
       
        cName:'nav-text'

    },
    {
        title: 'Event Bookings',
        path:'/bookings',
        icon: <FaIcon.FaMoneyBillAlt/>,
        cName:'nav-text'
    },
    {
        title: 'Event Modification Request',
        path:'/event-modification-request',
        icon: <FaIcon.FaMoneyBillAlt/>,
        cName:'nav-text'
    },
    {
        title: 'Sign Out',
        path:'/',
        icon: <GoIcon.GoSignOut/>,
        cName:'nav-text'
    }

]