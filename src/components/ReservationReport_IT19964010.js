import React, { Component } from 'react'
import GenerateListRoomComponent_IT19964010 from './GenerateListRoomComponent_IT19964010';
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
                  return  <button style={{marginLeft:965, color:"red", fontStyle:"bold", background:"white"}} className="pdfbutton" onClick={this.generatepdf} type='submit'>Generate PDF</button>;
                }}
                content={() => this.componentRef}
              />
              <GenerateListRoomComponent_IT19964010 ref={el => (this.componentRef = el)} />
            </div>
            </div>
        )
    }
}