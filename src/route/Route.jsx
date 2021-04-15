import React from 'react';
import Navbar from '../components/Navbar';
import Home from '../pages/Home';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import MyAccount from '../pages/My-Account';
import ContactUs from '../pages/ContactUs';
import SignUp from '../pages/SignUp';
import Gallery from '../pages/Gallery';
import Booking from '../pages/Booking';
import Room from '../pages/Room';

function Routing() {
    return (
        <Router>
            <Navbar />
            <Switch>
                <Route path='/' exact component={Home} />
                <Route path='/account' component={MyAccount} />
                <Route path='/contact-us' component={ContactUs} />
                <Route path='/sign-up' component={SignUp} />
                <Route path='/gallery' component={Gallery} />
                <Route path='/booking' component={Booking} />
                <Route path='/room' component={Room} />
            </Switch>
        </Router>
    );
}

export default Routing;
