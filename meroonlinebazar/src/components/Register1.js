import React, { Component,useEffect,useState } from 'react';
import './Register.css';
import { Link, Redirect } from 'react-router-dom';
import axios from 'axios';
import { setUserSession } from './Common';
import {useCookies} from 'react-cookie';
import {useHistory} from 'react-router-dom';

function Register(props) {
  const [loading, setLoading] = useState(false);
  const username = useFormInput('');
  const password = useFormInput('');
  const email = useFormInput('');
  const password2 = useFormInput('');
  const first_name = useFormInput('');
  const last_name = useFormInput('');
 
  const [error, setError] = useState(null);

  const history = useHistory()


  //   useEffect(() => {
  //       if(token) {
  //           history.push('/')
  //       }
  //   }, [token])

  // handle button click of login form
  const handleRegister = () => {
    setError(null);
    setLoading(true);
    axios.post(' http://127.0.0.1:8000/api/register/',
     { username: username.value, password: password.value,email:email.value,password2:password2.value ,first_name:first_name.value,last_name:last_name.value})
     .then(response => {
      setLoading(false);
    
    
      // localStorage.setItem('session',JSON.stringify(token));
      // history.push('/');
    }).catch(error => {
      setLoading(false);
      if (error.response.status === 401) setError(error.response.data.message);
      else setError(error.message);
    });
  }

  return (
    <div class="container-login"> 

<h1>Please Register </h1>

First Name:
 <br/> 
    <input type = "text" placeholder="" className = "username" {...first_name} />
    <br/>
    Last Name:
 <br/> 
    <input type = "text" placeholder="" className = "username" {...last_name} />
    <br/>
 username
 <br/> 
    <input type = "text" placeholder="username" className = "username" {...username} />
    <br/>


    email <br/> 
    <input type = "text" placeholder="email" className = "email" {...email} />
    <br/>
    Password <br/>
     <input type = "password" placeholder="Enter password" className = "password" {...password}/>
    <br/>

    Re-Password <br/>
     <input type = "password" placeholder="Enter password" className = "password2" {...password2}/>
    <br/>
    {error && <><small style={{ color: 'red' }}>{error}</small><br /></>}<br />
    <button  onClick={handleRegister} >Register</button>
    

    
 



  </div>
  );
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

export default Register;
