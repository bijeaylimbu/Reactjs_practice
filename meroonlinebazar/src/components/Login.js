import React, {useState, useEffect} from 'react'
import './Login.css'
import { Link ,Redirect} from 'react-router-dom';
import APIService from '../APIService';
import {useCookies} from 'react-cookie';
import {useHistory} from 'react-router-dom';
import { useForm } from "react-hook-form";
import { render } from 'react-dom';

function homepage(props){
history.push('/')

}

function loginpage(props){

  window.location.reload();
}

function Login(props) {

    
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [token, setToken] = useCookies(['mytoken'])
    const [isLogin, setLogin] = useState(true)
    const [message, setMessage] = useState();
    
    const {  errors } = useForm();

    let history = useHistory()
    

  

   

    const loginBtn = () => {
        APIService.LoginUser({username, password})
        .then(resp => setToken('mytoken',resp.token))
        // .then(
        //     resp => {
              
            
        //       if (token['mytoken']!==undefined){
        //         window.location.reload()
        //        console.log(token['mytoken'])
        //       //  history.push('/')
        
        //       }
        //       else{
    
        //        history.push('/')
        //       }
              

      
        //     // while(token['mytoken']===undefined){

        //     //   window.location.reload();

        //   // }

         
          

              
              
            
        //     })
      
       
        // .catch(error => console.log(error))

        
       
       
        
       // .catch(error => console.log(error))
        // this.isAuthenticated(true);
        // his.props.history.push("/");
        
    }

    // const RegisterBtn = () => {
    //     APIService.RegisterUser({username, password})
    //     .then(() =>  loginBtn())
    //     .catch(error =>console.log(error))

    // }

  




    return (
        <>
<div class="container-login"> 

<h1>Please Login </h1>
 
    Email Address <br/> 
    <input type = "text" placeholder="username" className = "username" id="username" value = {username} onChange = {e => setUsername(e.target.value)}/>
    <br/>
    Password <br/>
     <input type = "password" placeholder="Enter password" className = "password" id="password" value = {password} onChange = {e => setPassword(e.target.value)}/>
    <br/>
    <button className ="login-button" onClick = {loginBtn} >Login</button>
    

    
 
{/* 
  <br/>
  <a><Link to="/forget_password" >
        Forget Password
  </Link>      
  </a>
  <a><Link to="/register" >
        Register
  </Link>      
  </a>
  */}

{isLogin ? <h5>If You Don't Have Account, Please <button conClick = {() => setLogin(false)} > <Link to="/register" >Register</Link> </button>Here</h5>
            
            :  <h5>If You Have Account, Please <button className = "btn btn-primary" onClick = {() => setLogin(true)} >Login</button>Here</h5>
           }

  </div>
</>

    )
}

export default Login;
