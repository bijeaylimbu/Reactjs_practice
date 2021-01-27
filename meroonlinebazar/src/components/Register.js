import React, { Component } from 'react';
import './Register.css';
import { Link, Redirect } from 'react-router-dom';

import {useHistory} from 'react-router-dom';



var token="";
 class  Register extends Component {

  
    state = {
        credentials: {username: '', password: '',password2: "",username:'' ,error:''},
    
      }
      

    
  
      
    register = event => {
        fetch('http://localhost:8000/api/register/', {
          method: 'POST',
          headers: {'Content-Type': 'application/json'},
          body: JSON.stringify(this.state.credentials)
        })
        .then( data => data.json())
        // .then(
        //   data => {
        //     if (data.token !==undefined){

        //       return <Redirect push to="/register"/>;
        //     }
        //   }
        // )
        
     
       
       

      }
      inputChanged = event => {
        const cred = this.state.credentials;
        cred[event.target.name] = event.target.value;
        this.setState({credentials: cred});

          // if (token) {
          //   return <Redirect to="/" />;
          // }
      }


      handleSubmit = e => {
        e.preventDefault();
        const { username, email, password1, password2 } = this.state;
        this.props.signup(username, email, password1, password2);
      };
    
    
    
    render(){
      const { username, email, password1, password2 } = this.state;
      const { error, loading, token } = this.props;
        if (token) {
            return <Redirect to="/" />;
          }
     
    return (
        <>
        <div className="container-register">
       

 <h2>Registration</h2>
 <p>
 

     Please fill in the form to create an account
 </p>

 <br/>    
 username    <br/> <input type = "text" placeholder="username" className = "username" name="username"
           value={this.state.credentials.username}
           onChange={this.inputChanged}></input>
 <br/>
 Email Address <br/> <input type = "text" placeholder="Enter Email Address" className = "email_address" name="email"
           value={this.state.credentials.email}
           onChange={this.inputChanged}></input>
 <br/>
 Password <br/> <input type = "password" placeholder="Enter password" className = "password" name="password"
           value={this.state.credentials.password}
           onChange={this.inputChanged}></input>
 <br/>
 Confirm Password <br/> <input type = "password" placeholder="Repeat password" className = "repeat_password" name="password2"
           value={this.state.credentials.password2}
           onChange={this.inputChanged}></input>
 <br/>
 <p>By creating an account you agree to our <Link to="/terms" >
 Terms & Privacy
  </Link> 
  </p>
  
<button type = "submit" className="submit" onClick={this.register}> Register</button>
 
</div>
        </>
    )
}

 }

export default Register
