import React, { Component } from 'react'

class ContactList extends Component {
    getContacts=(contact)=>{
        this.props.mydetails(contact)
    }
  render() {
    return (
      <div><h1>ContactList</h1>
      <pre>{JSON.stringify(this.props.mydata)}</pre>
      <table className='table table-hover'>
          <thead className='expand large bg-dark text-white'>
              <tr>
                  <th>ID</th>
              <th>NAME</th>
              <th>E-mail</th>
              </tr>
      
          </thead>
        <tbody>{
              this.props.mydata.map((contact)=>{
                 return <tr key={contact } onMouseOver={this.getContacts.bind(this,contact)}>
                      <td>{contact.login.uuid.substring(34)}</td>
                      <td>{contact.name.first}</td>
                      <td>{contact.email}</td>
                  </tr>

              })
            }</tbody>

      </table>
      </div>

    )
  }
}

export default ContactList