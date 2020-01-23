import React from 'react'
import ContactForm from './Form'
import axios from 'axios'
import _ from 'lodash'
import {startEditContact} from '../../actions/contacts'
import {connect} from 'react-redux'

function ContactEdit(props){
    
    const handleSubmit=(formData)=>{
        props.dispatch(startEditContact(formData,props))
    }

    return(
        <div>
            {
                !_.isEmpty(props.contact)&&(
                    <div className="col-md-6 offset-md-3">
                    <div align="center"> 
                    <h2>Edit Contact-{props.contact.name}</h2>
                    </div>
                {
                    <ContactForm {...props.contact} handleSubmit={handleSubmit} />             
                }
                </div>
                )
            }
              
        </div>
    )
}

const mapStateToProps=(state,props)=>{
    return{
        contact:state.contacts.find(contact=>contact._id==props.match.params.id)
    }
}
export default connect(mapStateToProps)(ContactEdit)
