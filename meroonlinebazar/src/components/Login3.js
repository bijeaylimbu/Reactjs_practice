import React, { useState,useEffect } from 'react';
import axios from 'axios';
import { getUser, setUserSession } from './Common';
import {useCookies} from 'react-cookie';
import {useHistory} from 'react-router-dom';
import background from '../Image/unnamed.jpg'
import './Login.css';
function Login(props) {
  const [loading, setLoading] = useState(false);
  const username = useFormInput('');
  const password = useFormInput('');
  const [error, setError] = useState(null);
const user=getUser();
  let history=useHistory();
  function Register(){
history.push('./register')

  }


  if (user) {
    history.push('./login_home')
  }
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
    setUserSession(response.data.token,username.value);
    // localStorage.setItem('user',response.data.user)
     
    // setUserSession(response.data.username,response.data.user);

    

    // sessionStorage.setItem('UserName',response.data.username);
      //  localStorage.setItem( 'user',username)
      //  console.log(Use)
  
    
    
      // localStorage.setItem('session',JSON.stringify(token));
     
      props.history.push('/login_home');

    }).catch(error => {
      setLoading(false);
       if (error.response.status === 401) setError(error.response.data.message);
       else setError("username and password doesn't");
      
       if(error.toJSON().message === 'Network Error'){
        alert('no internet connection');
        dispatch({type: RELOAD});
    }

    });



    
  }

  return (
    <div className='login_main'>

  <div className='background_image' style={{ backgroundImage: `url(${background})`,
   
  

   backgroundSize: 'cover',
   backgroundRepeat: 'no-repeat',
 
  
 
    
    }}>   
  

    
    <div class="login_page"> 

<label>Login</label>
<br/>
 
<label>Username or Email</label>
    <br/>
    <input type = "text" placeholder="username" className = "username" {...username} />
    
    <br/>
  <label> Password </label>
     <br/>
     <input type = "password" placeholder="Enter password" className = "password" {...password}/>
    <br/>

    {/* { error &&
  <h5> { error } </h5> }<br/> */}
  
    {/* {error && <><small style={{ color: 'red' }}>{error}</small><br /></>}<br /> */}
    <br/>
    <br/>
    <button  onClick={handleLogin}  className='login_button'>Login</button>
    <button  onClick={Register}  className='login_button'>Register</button>

    { error &&
  <h5> { error } </h5> }<br/>
    

    
 </div>


  </div>
  

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