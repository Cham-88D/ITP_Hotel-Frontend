import React, { Component } from 'react';
import FoodCountReportGernerate from './FoodCountReportGenerate';
import ReactToPrint from 'react-to-print';
export default class example extends Component {
    render() {
        return (
            <div>
                
                <div>
              <ReactToPrint
                trigger={() => {
                  // NOTE: could just as easily return <SomeComponent />. Do NOT pass an `onClick` prop
                  // to the root node of the returned component as it will be overwritten.
                  return  <button style={{marginLeft:855}} className="btn btn-info" onClick={this.generatepdf} type='submit'>Generate PDF</button>
                }}
                content={() => this.componentRef}
              />
              <FoodCountReportGernerate ref={el => (this.componentRef = el)} />
            </div>
            </div>
        )
    }
}