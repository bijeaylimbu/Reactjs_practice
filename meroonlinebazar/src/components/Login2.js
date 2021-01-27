import React, {useState, useEffect} from 'react'
import './Login.css'
import { Link ,Redirect} from 'react-router-dom';
import APIService from '../APIService';
import {useCookies} from 'react-cookie';
import {useHistory} from 'react-router-dom';
import { useForm } from "react-hook-form";
import { render } from 'react-dom';
import axios from 'axios';
import { setUserSession } from './Common';
const UNAUTHORIZED = 401;
function Login(props) {

    
    
    const [loading, setLoading] = useState(false);
    const username = useFormInput('');
    const password = useFormInput('');
    const [error, setError] = useState(null);


  
    // handle button click of login form
    const handleLogin = () => {
        setError(null);
        setLoading(true);
        axios.post('http://127.0.0.1:8000/auth/', 
        { username: username.value, password: password.value })
        .then(response => {
          setLoading(false);
          
          setUserSession(response.data.token, response.data.user);
         
          props.history.push('/');
        }).catch( error => console.error(error))
      }

    return (
        <>
<div class="container-login"> 

<h1>Please Login </h1>
 
    Email Address <br/> 
    <input type = "text" placeholder="username" className = "username" {...username} />
    <br/>
    Password <br/>
     <input type = "password" placeholder="Enter password" className = "password"  {...password} />
    <br/>
    {error && <><small style={{ color: 'red' }}>{error}</small><br /></>}<br />
    <button  onClick={handleLogin}  > Login</button>
    

    


  </div>
</>

    )
}

const useFormInput = initialValue => {
    const [value, setValue] = useState(initialValue);
  
    const handleChange = e => {
      setValue(e.target.value);
    }
    return {
      value,
      onChange: handleChange
    }
  }
  
export default Login;
