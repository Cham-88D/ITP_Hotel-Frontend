import React, { Component } from 'react';
import { Fragment } from 'react';
import ALERT_TYPES from "../../constants/AlertTypes";

import "./styles.css";

class Alert extends Component {
    constructor(props) {
        super(props)
    }


    render() {
        const { type,message } = this.props;

        return (
            <Fragment>
                {message !== null && (
                    type === ALERT_TYPES.SUCCESS ? (
                        <div className="success-alter-wrapper" >
                            <span className="msg-wrapper">{message}</span>
                        </div>
                    ) : (
                        <div className="failure-alert-wrapper" >
                            <span className="msg-wrapper">{message}</span>
                        </div>
                    )
                )}
            </Fragment>

        )
    }
}

export default Alert;