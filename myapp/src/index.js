import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {Provider} from 'react-redux'
import 'bootstrap/dist/css/bootstrap.css'
import App from './App';

import configureStore from './store/configureStore'

import {startSetContacts} from './actions/contacts'

import {startGetUser} from './actions/user'


const store=configureStore()

console.log(store.getState())

store.subscribe(()=>{
    console.log(store.getState())
})

if(localStorage.getItem('authToken')){ //if token dan make api call
    store.dispatch(startSetContacts())
    store.dispatch(startGetUser())
}
const ele=(
    <Provider store = {store}>
        <App/>
    </Provider>
)


ReactDOM.render(ele, document.getElementById('root'));


