import React from 'react'
import axios from 'axios'
import {connect} from 'react-redux'
import ContactForm from './Form'
import {startAddContact} from '../../actions/contacts'


function ContactNew(props){
    const handleSubmit=(formData)=>{
        props.dispatch(startAddContact(formData,props)) 
    }
 
        return(
            <div className="row">
            <div className="col-md-6 offset-md-3">
            <h2>Add Contact</h2>
                <ContactForm handleSubmit={handleSubmit}></ContactForm>
            </div>
            </div>
        )
    }
    export default connect()(ContactNew)