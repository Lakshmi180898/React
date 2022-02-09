import React from 'react'
class EventBinding extends React.Component{
    state={
        emp_sal:30000
    }

    btnHandler=(value)=>{
        console.log("Reading button data.....", value);//(Console.log in React is used for debugging.)
        this.setState({
            emp_sal: 30000 + value
        })
    }
    render(){
        return(
        <>
        <h1>Employee Sal: {this.state.emp_sal}</h1>
        <button onClick={this.btnHandler.bind(this, 50000)}> Hike 50k </button>
        <hr/>
        <button onClick={this.btnHandler.bind(this, 100000)}> Hike 100k </button>
        <hr/>
        <button onClick={this.btnHandler.bind(this, 0)}> Hike 0 </button>   
        </>
        )

    }

}
export default EventBinding;