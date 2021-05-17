import React from 'react';
import Home from '../pages/Home';
import {BrowserRouter as  Switch, Route, BrowserRouter} from 'react-router-dom';
import ContactUs from '../pages/ContactUs';
import Login from '../pages/Login';
import Gallery from '../pages/Gallery';
import Event from '../pages/Event';
import Room from '../pages/Room';
import Service from '../pages/service';
import About from '../pages/About';
import MapPage from  '../pages/Map';
import Register from '../pages/Register'
import UserAccount from "../pages/UserAccount";
import HRPage from "../pages/EmpManagment";
import UpdateEmployeeComponent from "../pages/UpdateEmployee";
import CreateEmployeeComponent from "../pages/AddEmployee";

function Routing() {

    return (
        <BrowserRouter>
                <Switch >
                    <Route exact  path='/' component={Home}/>
                    <Route exact  path='/contact-us' component={ContactUs}/>
                    <Route exact  path='/gallery'  component={Gallery}/>
                    <Route exact  path='/event'  component={Event}/>
                    <Route exact  path='/room'  component={Room}/>
                    <Route exact  path='/service'  component={Service}/>
                    <Route exact  path='/about-us'  component={About}/>
                    <Route exact  path='/map'  component={MapPage}/>
                    <Route exact  path='/user-account'  component={UserAccount}/>
                    <Route exact  path="/login"  component={Login} />
                    <Route exact  path="/register"  component={Register} />
                    <Route exact  path='/employee'  component={HRPage}/>
                    <Route exact  path="/add-employee"  component={CreateEmployeeComponent}/>
                    <Route exact  path="/update-employee/:id"  component={UpdateEmployeeComponent}/>
                </Switch>

        </BrowserRouter>
    );

}

export default Routing;
