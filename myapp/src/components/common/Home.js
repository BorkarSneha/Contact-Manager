import React from 'react'
import contact from './contact.png'
export default function Home(){
    return(
        <div align="center">
            <h2>WELCOME TO CONTACT MANAGER APP!!!</h2>
            <br/><br/><br/>
            <div className="offset-md-12 pb4">
            <img src={contact} width="350" length="350" className="img-rounded"/>
            </div>
        </div>
    )
}