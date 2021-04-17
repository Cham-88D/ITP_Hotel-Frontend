import React from 'react';
import FullPageIntroWithFixedTransparentNavbar from '../components/Navbar';
import Home from '../pages/Home';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import ContactUs from '../pages/ContactUs';
import SignUp from '../pages/SignUp';
import Gallery from '../pages/Gallery';
import Event from '../pages/Event';
import Room from '../pages/Room';
import Service from '../pages/service';
import About from '../pages/About';
import Terms from '../pages/Terms';
import Footer from '../components/Footer';
import MapPage from  '../pages/Map';



function Routing() {
    return (
        <Router>
            <FullPageIntroWithFixedTransparentNavbar/>
            <Switch>
                <Route path='/' exact component={Home} />
                <Route path='/contact-us' component={ContactUs} />
                <Route path='/sign-up' component={SignUp} />
                <Route path='/gallery' component={Gallery} />
                <Route path='/event' component={Event} />
                <Route path='/room' component={Room} />
                <Route path='/service' component={Service} />
                <Route path='/about-us' component={About} />
                <Route path='/terms' component={Terms } />
                <Route path='/map' component={MapPage} />
            </Switch>
            <Footer/>

        </Router>
    );
}

export default Routing;
