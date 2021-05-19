import React, { Component } from 'react';
import FoodCountReportGernerate from './FoodCountReportGenerate-IT19176116';
import ReactToPrint from 'react-to-print';
export default class example extends Component {
    render() {
        return (
            <div>
                
                <div>
              <ReactToPrint
                trigger={() => {
                  
                  return  <button style={{marginLeft:855, marginTop:50}} className="btn btn-danger" onClick={this.generatepdf} type='submit'>Generate PDF</button>
                }}
                content={() => this.componentRef}
              />
              <FoodCountReportGernerate ref={el => (this.componentRef = el)} />
            </div>
            </div>
        )
    }
}