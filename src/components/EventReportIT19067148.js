/*import React, { useRef } from "react";
import { render } from "react-dom";
import { useReactToPrint } from "react-to-print";

class ComponentToPrint extends React.Component {
    render() {
        return (
            <table>
                <thead>
                    <th>Column 1</th>
                    <th>Column 2</th>
                    <th>Column 3</th>
                </thead>
                <tbody>
                    <tr>
                        <td>data 1</td>
                        <td>data 2</td>
                        <td>data 3</td>
                    </tr>
                </tbody>
            </table>
        );
    }
}


const Example = () => {
   const componentRef = useRef();
   const handlePrint = useReactToPrint({
    content: () => componentRef.current,
});

    return (
        <div>
            <ComponentToPrint ref={componentRef} />
            <button onClick={handlePrint}>Print this out!</button>
        </div>
    );
};
render(<Example />, document.querySelector("#root"));
//generate Report   */ 

import React, { Component } from 'react'
import GenerateEventBookingIT19067148 from './GenerateEventBookingIT19067148';
import ReactToPrint from 'react-to-print';
import './EventIT19067148.css';
export default class example extends Component {
    render() {
        return (
            <div>
                <div>
              <ReactToPrint
                trigger={() => {
                  // NOTE: could just as easily return <SomeComponent />. Do NOT pass an `onClick` prop
                  // to the root node of the returned component as it will be overwritten.
                  return  <button style={{marginLeft:965}} className="btn btn-danger" onClick={this.generatepdf} type='submit'>Generate PDF</button>;
                }}
                content={() => this.componentRef}
              />
              <GenerateEventBookingIT19067148 ref={el => (this.componentRef = el)} />
            </div>
            </div>
        )
    }
}