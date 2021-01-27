import React, { useState,useEffect } from 'react';
import axios from 'axios';
import { setUserSession } from './Common';
import {useCookies} from 'react-cookie';
import {useHistory} from 'react-router-dom';
function Login(props) {
  const [loading, setLoading] = useState(false);
  const username = useFormInput('');
  const password = useFormInput('');
  const [error, setError] = useState(null);

 
  

  //   useEffect(() => {
  //       if(token) {
  //           history.push('/')
  //       }
  //   }, [token])

  // handle button click of login form
  const handleLogin = () => {
    setError(null);
    setLoading(true);
    axios.post(' http://127.0.0.1:8000/auth/',
     { username: username.value, password: password.value })
     .then(response => {
      setLoading(false);
    setUserSession(response.data.token,response.data.username);
    
    
      // localStorage.setItem('session',JSON.stringify(token));
      props.history.push('/login_home');
    }).catch(error => {
      setLoading(false);
      if (error.response.status === 401) setError(error.response.data.message);
       else setError("username and password doesnt");
      

    });
  }

  return (
    <div class="container-login"> 

<h1>Please Login </h1>
 
    Username <br/> 
    <input type = "text" placeholder="username" className = "username" {...username} />
    
    <br/>
    Password <br/>
     <input type = "password" placeholder="Enter password" className = "password" {...password}/>
    <br/>

    { error &&
  <h3 className="error"> { error } </h3> }
  
    {/* {error && <><small style={{ color: 'red' }}>{error}</small><br /></>}<br /> */}
    <button  onClick={handleLogin} >Login</button>
    

    
 



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

export default Login;