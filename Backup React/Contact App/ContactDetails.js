import React, { Component } from 'react'

 class ContactDetails extends Component {
  render() {
    return (
      <div>ContactDetails
          <pre>{JSON.stringify(this.props.mylist)}</pre>
          <div className='container'>
              <div className='row'>
                  <div className='col'>
                      <div className='card'>
                          <div className='card-header'>
                          </div>
                          <div className='card-body'>
                              <ul>
                                  <li>
                                      {this.props.mylist.email}

                                  </li>
                                  <li>{this.props.mylist.gender}</li>
                              </ul>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
          
      </div>
    )
  }
}

export default ContactDetails