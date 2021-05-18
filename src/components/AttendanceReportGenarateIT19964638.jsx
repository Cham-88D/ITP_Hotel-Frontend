import React, { Component } from 'react'
import GenerateReport from './GenerateReportIT19964638';
import ReactToPrint from 'react-to-print';
import '../styles/AddSalaryIT19964638.css';
export default class AttendanceReportGenarate extends Component {
    render() {
        return (
            <div>
                <div>
              <ReactToPrint
                trigger={() => {
                  // NOTE: could just as easily return <SomeComponent />. Do NOT pass an `onClick` prop
                  // to the root node of the returned component as it will be overwritten.
                  return  <button style={{marginLeft:855}} className="pdfbutton" onClick={this.generatepdf} type='submit'>Generate PDF</button>;
                }}
                content={() => this.componentRef}
              />
              <GenerateReport ref={el => (this.componentRef = el)} />
            </div>
            </div>
        )
    }
}
