/**
 * @module       service
 * @file         user.js
 * @description  API
 * @author       Ritika <spk2ritika1911@gmail.com>
 * @since        15/08/2021  
-----------------------------------------------------------------------------------------------*/
import Axios from 'axios'
require('dotenv').config()
//Axios.defaults.baseURL = process.env.REACT_APP_BASE_URL
const BASE_URL = "http://localhost:4000";
export class User{
    userLogin = (loginDetails) =>{
        return Axios.post(BASE_URL+'/admin-login', loginDetails)
    }
}