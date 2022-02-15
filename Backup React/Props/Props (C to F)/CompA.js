import React from "react";
import CompB from "./CompB";
class CompA extends React.Component{
    name="Rahul";
    empid=20;
    sal=50000;

    render()
    {
        return<>
        <CompB Ename={this.name}
        EmpId={this.empid}
        Salary={this.sal}/>
           
        
        </>
    }
}
export default CompA;