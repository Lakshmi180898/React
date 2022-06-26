import React, { Component } from 'react'
import Axios from 'axios'
import ContactList from './ContactList'
import ContactDetails from './ContactDetails'
class ContactApp extends Component {
       constructor(props){
           super(props)
          this.state={
              Contacts:[],
              selectedContact:{}
            }
        }
        getselectedContact= (contact)=>{
            this.setState({selectedContact:contact})

        }

       componentDidMount(){
           Axios.get('https://gist.githubusercontent.com/narasimhareddyprostack/7e344f346f47bc53a889d78b5258d0c9/raw/56d531cb936d9c79e2417e5d0e5d8c9c876800f2/contactlist')
           .then((Response) =>{
               this.setState({Contacts:Response.data})
        })
           .catch()
       }
        
  render() {
    return (
      <div><pre>{JSON.stringify(this.state.Contacts)}</pre>
      <div className='Container'>
          <div className='row'>
              <div className='col-md-8'>
                   <ContactList mydata={this.state.Contacts} mydetails={this.getselectedContact}/>
              </div>
              <div className='col-md-4'>
                  <ContactDetails mylist={this.state.selectedContact}/>
              </div>
          </div>
     </div>
     </div>
    )
  }
}

export default ContactApp