import React, { Component } from 'react'

import PayrollService from '../adapters/PayrollService';
import jsPDF from 'jspdf';  
import html2canvas from 'html2canvas';  

export default class ViewPayslip extends Component {

    constructor(props){
        super(props)
        
        this.state={
            id:this.props.match.params.id,
            payrolls:{}

           
        }
    }

    componentDidMount(){
        PayrollService.getypayrollById(this.state.id).then((res)=>{
            this.setState({payrolls:res.data});
           

        });
        console.log(this.state.id);
    }

    printDocument() {  
        const input = document.getElementById('dowload');  
        html2canvas(input)  
          .then((canvas) => {  
            var imgWidth = 180;  
            var pageHeight = 290;  
            var imgHeight = canvas.height * imgWidth / canvas.width;  
            var heightLeft = imgHeight;  
            const imgData = canvas.toDataURL('image/png');  
            const pdf = new jsPDF('p', 'mm', 'a4')  
            var position = 14;  
            var heightLeft = imgHeight;  
            pdf.addImage(imgData, 'JPEG', 14, position, imgWidth, imgHeight);  
            pdf.save("payslip.pdf");  
          });  
    }  
    render() {
        return (
            <div>
                
                 <button className="downloadpayslip" onClick={this.printDocument}>Download PaySlip</button>
                <div className="payslipnavcontainer" id="dowload">

                    <div>
                        <h4 className="textalign1">Vila Access Green</h4>
                        <h6 className="textalign">No:25</h6>
                        <h6 className="textalign">Rathmahera watha</h6>
                        <h6 className="textalign">Waulagala</h6>
                        <h6 className="textalign">Hikkaduwa</h6>
                    </div>
                    <hr></hr>
                    <div >
                        <div className="row">
                                <label className="label1">Salary Slip for... </label>
                                <div>{ this.state.payrolls.month}</div>
                                <label>,   2021 </label>
                        </div>
                    </div>
                      <hr></hr>     
                    <div >
                        <div className="row">
                            <label className="label1">Employee Id:</label>
                            <div>{this.state.payrolls.employeeId}</div>
                        </div>
                        

                    </div>

                    <div>
                    <div className="payslipcontainer">
                    <div className="row">
                            <label className="label1">Basic Salary:</label>
                            <div style={{marginLeft:"280px"}}>{this.state.payrolls.basicSalary}</div>
                            <label>.00</label>
                        </div>
                        <div className="row">
                            
                            <label className="label1">Total Earning:</label>           
                            <div style={{marginLeft:"280px"}}>{this.state.payrolls.totalEran}</div>
                            <label>.00</label>
                        </div>
            
                           
                        <div className="row">
                            <label className="label1">Deduction:</label>
                            <div style={{marginLeft:"305px"}}>{this.state.payrolls.totalDeduction}</div>
                            <label>.00</label>
                        </div>
                        <hr></hr>
                        <div className="row">
                            <label className="label1">Total Salary:</label>
                            <div style={{marginLeft:"285px"}}>{this.state.payrolls.totalSalary}</div>
                            <label>.00</label>
                        </div>
                       

                    </div>

                     
                        <ul className="payrollList">
                            <li><label className="label2">Date: ..........................</label></li>
                            <li><label className="label2">Employee Signature:  ............................</label></li>
                            <li><label className="label2">Director: ..........................</label></li>
                        </ul>
                        

                    </div>

                    
                    
                </div>
    

                

            </div>
        )
    }
}
