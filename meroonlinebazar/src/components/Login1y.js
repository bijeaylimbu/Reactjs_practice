import React, {useState, Component} from 'react'
import './Login.css'
import { Link } from 'react-router-dom';
import { Redirect ,} from 'react-router';
import {useCookies} from 'react-cookie';
import {useHistory} from 'react-router-dom';
// import { useHistory } from "react-router-dom";

// import { connect } from "react-redux";
import { setUserSession } from './Common';
import { createHashHistory } from 'history'

export const history = createHashHistory()

class Login extends Component {

  
  // myFunction() {
  //   this.props.history.push("/");
  // }
  
  
    // redirectToHome = () => {
    //     const { history } = this.props;
    //     if(history) history.push('/home');
    //    }
    
    state = {
        credentials: {username: '', password: '', redirect: false}
      }
    
     
      
      

  login = event => {
    fetch('http://127.0.0.1:8000/auth/', {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify(this.state.credentials)
    })
    .then( data => data.json())
    .then(
      data => {
        this.props.userLogin(data.token);
        console.log(data.token)
      
        if (data.token!==undefined){
          
         
          History.push('/register')

         
        }
        else{

          alert('error')
        }
        

        
      
      }

      
    )
  
    .catch( error => console.error(error))
  }
    

  
     
      inputChanged = event => {
        const cred = this.state.credentials;
        cred[event.target.name] = event.target.value;
        this.setState({credentials: cred});
        
        
      }
      render(){

        // if (token!==undefined) {
        //   return <Redirect to="/" />;
        // }
        // else{

        //   alert('error')
        // }
         
       
    return (
        
        <>
<div class="container-login"> 
  
<h1>Please Login </h1>
 
    username <br/> 
    <input type = "text" placeholder="username" className = "username"  name="username"
           value={this.state.credentials.username}
           onChange={this.inputChanged} />
    <br/>
    Password <br/>
     <input type = "password" placeholder="Enter password" className = "password" name="password"
           value={this.state.credentials.password}
           onChange={this.inputChanged}  />
    <br/>
    <button  onClick={this.login}>Login</button>
    

    
 

  </div>
</>

    );
}


}

const mapStateToProps = state => {
    return {
      loading: state.auth.loading,
      error: state.auth.error,
      token: state.auth.token
    };
  };
  
//   const mapDispatchToProps = dispatch => {
//     return {
//       login: (username, password) => dispatch(authLogin(username, password))
//     };
//   };
  
//   export default connect(
//     mapStateToProps,
//     mapDispatchToProps
//   )(Login);
export default Login