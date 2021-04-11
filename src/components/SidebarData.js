import React from 'react';
import * as FaIcon from "react-icons/fa";
import * as AiIcon from "react-icons/ai";
import * as IoIcon from "react-icons/io5";
import * as GoIcon from "react-icons/go";

export const SidebarData = [
    {
        title: 'Home',
        path:'/',
        icon: <AiIcon.AiFillHome/>,
        cName:'nav-text'
    },
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
    {
        title: 'Sign Out',
        path:'/',
        icon: <GoIcon.GoSignOut/>,
        cName:'nav-text'
    }

]