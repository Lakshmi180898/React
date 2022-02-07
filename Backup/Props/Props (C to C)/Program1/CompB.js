import React from 'react';

class CompB extends React.Component{
    render()
        {
        return <>
        <h1>Test</h1>
        <pre>{JSON.stringify(this.props)}</pre>
        <h2>Name:{this.props.name}</h2>
        <h3>Age:{this.props.age}</h3>
        <h4>Email-ID:{this.props.email}</h4>
    </>}
}
export default CompB;
