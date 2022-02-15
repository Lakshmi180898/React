import React from 'react'
class CompB extends React.Component{
    render()
    {
        return<>
        <h1>EmpName: {this.props.Ename}</h1>
        <h2>EmpID: {this.props.EmpId} </h2>
        <h3>EmpSal: {this.props.Salary}</h3>
        </>
    }
}
export default CompB;
