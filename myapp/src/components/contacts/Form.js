import React from 'react'
import axios from 'axios'
import {Link} from 'react-router-dom'

export default class ContactForm extends React.Component{
    constructor(props){
        super(props)
        this.state={
            name:props.name?props.name:'',
            phonenumber:props.phonenumber?props.phonenumber:'',
            contacts:[]
        }
    }
componentDidMount(){
    axios.get('http://localhost:3025/contacts',{
        headers:{'x-auth':localStorage.getItem('authToken')}
    })
    .then((response)=>{
        const contacts=response.data
        this.setState({contacts})
    })
    .catch((err)=>{
        console.log(err)
    })
}
handleSubmit=(e)=>{
    e.preventDefault()
const formData={
     name:this.state.name,
     phonenumber:this.state.phonenumber
}
this.props.handleSubmit(formData)
}

handleChange=(e)=>{
   this.setState({[e.target.name]:e.target.value})
}

render(){
    return(
        <div>
            <form onSubmit={this.handleSubmit} className="form-group">
                <label htmlFor="name">Name
                   
                </label>
                <input type="text" value={this.state.name} onChange={this.handleChange} id="name" name="name" className="form-control"/>
                <br/>
                <label htmlFor="mobile">Mobile
                    
                </label>
                <input type="text" value={this.state.phonenumber} onChange={this.handleChange} id="mobile" name="phonenumber" className="form-control"/>
                <br/>
                <input type="Submit" class="btn btn-primary btn-lg btn-block"/>
            </form>
        </div>
    )
}
}
