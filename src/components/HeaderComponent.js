import React, { Component } from 'react';

class HeaderComponent extends Component {
    render() {
        return (
            <div>
                <header>
                    <nav className="header">
                        <div>
                            <a href="https://javaguides.net" className="navbar-brand">Barroom management </a>
                        </div>

                    </nav>
                </header>
            </div>
        );
    }
}

export default HeaderComponent;