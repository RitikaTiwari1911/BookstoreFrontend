/**
 * @module       service
 * @file         user.js
 * @description  API
 * @author       Ritika <spk2ritika1911@gmail.com>
 * @since        15/08/2021  
-----------------------------------------------------------------------------------------------*/
import Axios from 'axios'
require('dotenv').config()
//Axios.defaults.baseURL = 
const BASE_URL = "http://localhost:4000";
console.log('url',BASE_URL)
let token = localStorage.getItem('token')
export class User{
    userLogin = (loginDetails) =>{
        return Axios.post(BASE_URL+'/admin-login', loginDetails)
    }

    getAllBooks  = () =>{
        return Axios.get(BASE_URL+'/books/getAllBooks',{
            headers:{
                'token':token
            }
        })
    }
}