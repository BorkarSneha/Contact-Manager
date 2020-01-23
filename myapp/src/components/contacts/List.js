import React from 'react'
import axios from 'axios'
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'
import {startRemoveContact} from '../../actions/contacts'

function ContactList (props){
   
const handleRemove = (id)=>{
    props.dispatch(startRemoveContact(id))
}


    return(
        <div>
        <div align="center">
            <h2>Listing Contacts-{props.contacts.length}</h2>
        </div>
            <table class="table table-striped">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>PhoneNumber</th>
                        <th>Action</th>
                        <th>Edit</th>
                        <th>Remove</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        props.contacts.map((contact)=>{
                             return(
                                 <tr key={contact._id}>
                                     <td>{contact.name}</td>
                                     <td>{contact.phonenumber}</td>
                                     <td><Link to={`/contacts/${contact._id}`} className="btn btn-secondary">Show</Link></td>
                                     <td> <Link to={`/contacts/edit/${contact._id}`} className="btn btn-primary">Edit</Link><br/></td>
                                     <td><button onClick={()=>{  
                                      const confirmRemove=window.confirm('Are you sure?')
                                      if(confirmRemove){
                                        handleRemove(contact._id)
                                      }}} className="btn btn-danger">Remove</button></td>
                                 </tr>
                             )
                        })
                    }
                </tbody>
            </table>
            <Link to="/contacts/new" className="btn btn-primary">Add Contacts</Link>
        </div>
    )
}
const mapStateToProps=(state)=>{
    return{
        contacts:state.contacts
    }
}
export default connect(mapStateToProps)(ContactList)
