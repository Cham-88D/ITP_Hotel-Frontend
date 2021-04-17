import React from 'react';
import {
    MDBNavbar,
    MDBNavbarBrand,
    MDBNavbarNav,
    MDBNavbarToggler,
    MDBCollapse,
    MDBNavItem,
    MDBNavLink,
    MDBAnimation,
    MDBDropdown,
    MDBDropdownToggle,
    MDBDropdownItem,
    MDBDropdownMenu, MDBBtn,
} from 'mdbreact';


import 'mdbreact/dist/css/mdb.css'
import 'bootstrap-css-only/css/bootstrap.min.css';




class Navigation extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            collapse: false,
            isWideEnough: false,
            change: false,

        };
        this.onClick = this.onClick.bind(this);
    }


    componentDidMount() {
        window.addEventListener('scroll', this.handleScroll);
    }

    componentWillUnmount() {
        window.removeEventListener('scroll', this.handleScroll);
    }
    handleScroll = () => {
        if (window.scrollY === 0) {
            this.setState({ change: false });
        } else if (window.scrollY > 0 ) {
            this.setState({ change: true });
        }
    }
    onClick() {
        this.setState({
            collapse: !this.state.collapse,


        });
    }

    render() {
        return (
            <div>
                <header>

                        <MDBNavbar fixed="top" dark expand="md" scrolling color={"black"} >
                            <MDBNavbarBrand href="/">
                                <MDBAnimation type="slideInLeft" >
                                <strong style={{ color: this.state.change ? "#e97b2c":"white"}}>
                                    Villa Acres Green</strong>
                                    </MDBAnimation>
                            </MDBNavbarBrand>
                            {!this.state.isWideEnough && <MDBNavbarToggler onClick={this.onClick} />}
                            <MDBCollapse isOpen={this.state.collapse} navbar >
                                <MDBNavbarNav right>
                                    <MDBNavItem active style={{marginLeft:"20px" }}>
                                        <MDBNavLink to="/" style={{color:"#e97b2c"}}>Home</MDBNavLink>
                                    </MDBNavItem>
                                    <MDBNavItem style={{marginLeft:"20px" }}>
                                        <MDBNavLink to="/gallery">Gallery</MDBNavLink>
                                    </MDBNavItem>
                                    <MDBNavItem style={{marginLeft:"20px" }}>
                                        <MDBNavLink to="/contact-us">Contact-us</MDBNavLink>
                                    </MDBNavItem>
                                    <MDBNavItem style={{marginRight:"440px",marginLeft:"20px" }}>
                                        <MDBDropdown>
                                            <MDBDropdownToggle nav caret>
                                                <div className="d-none d-md-inline" >Booking</div>
                                            </MDBDropdownToggle>
                                            <MDBDropdownMenu className="dropdown-default">
                                                <MDBDropdownItem href="/room">Room</MDBDropdownItem>
                                                <MDBDropdownItem href="/event">Event</MDBDropdownItem>
                                            </MDBDropdownMenu>
                                        </MDBDropdown>
                                    </MDBNavItem>
                                    <MDBNavItem style={{marginLeft:"20px" }}>
                                        <MDBBtn outline color="deep-orange" style={{padding:"1px"}} href="/sign-up">Sign-Up</MDBBtn>
                                    </MDBNavItem>
                                </MDBNavbarNav>
                            </MDBCollapse>
                        </MDBNavbar>
                </header >


            </div>
        );
    }
}

export default Navigation;