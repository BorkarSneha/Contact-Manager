import React from 'react'
import axios from 'axios'
import {Link} from 'react-router-dom'
import _ from 'lodash'
import {connect} from 'react-redux'

function ContactShow (props){
     
    
    return(
        <div>
        {
              !_.isEmpty(props.contact)&&(
                <div align="center">
                    <h2>Name-{props.contact.name}</h2>
                    <h2>Mobile-{props.contact.phonenumber}</h2>
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
export default connect(mapStateToProps)(ContactShow)