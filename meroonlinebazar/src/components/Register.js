import React, { Component } from 'react';
import './Register.css';
import { Link, Redirect } from 'react-router-dom';

import {useHistory} from 'react-router-dom';


const initialState = {
  username: "",
  email: "",
  password: "",
  usernameError: "",
  emailError: "",
  passwordError: ""
};

 class  Register extends Component {
  state = initialState;
  validate = () => {
    let usernameError = "";
    let emailError = "";
    // let passwordError = "";

    if (!this.state.username) {
      usernameError = "name cannot be blank";
    }

    if (!this.state.email.includes("@")) {
      emailError = "invalid email";
    }

    if (emailError || nameError) {
      this.setState({ emailError, nameError });
      return false;
    }

    return true;
  };

  
    state = {
        credentials: {username: '', password: '',password2: "" ,error:'',first_name:'',last_name:''},
    
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

          let nam = event.target.name;
          let val = event.target.value;
    let err = '';
    if (nam === "email") {
      if (val =="" ) {
        err = <strong>email cannot be empty</strong>;
      }
    }
    this.setState({errormessage: err});
    this.setState({[nam]: val});


    let nam_username = event.target.name;
    let val_username = event.target.value;
    let err_username = '';

    if (nam_username === "username") {
      if (val_username =="" ) {
        err_username = <strong>username cannot be empty</strong>;
      }
    }
    this.setState({errormessage: err_username});
    this.setState({[nam_username]: val_username});


   

        
      }


      handleSubmit = e => {
        e.preventDefault();
        const { username, email, password1, password2 ,first_name,last_name} = this.state;
        this.props.signup(username, email, password1, password2,first_name,last_name);
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

 Last Name    <br/> <input type = "text" placeholder="" className = "reg" name="last_name"
           value={this.state.credentials.last_name}
           onChange={this.inputChanged}></input>
           <br/>
 First Name    <br/> <input type = "text" placeholder="" className = "reg" name="first_name"
           value={this.state.credentials.first_name}
           onChange={this.inputChanged}></input>
 <br/>    
 username    <br/> <input type = "text" placeholder="username" className = "reg" name="username"
           value={this.state.credentials.username}
           onChange={this.inputChanged}></input>
           <br/>
           {this.state.errormessage}
         
 <br/>
 Email Address <br/> <input type = "text" placeholder="Enter Email Address" className = "reg" name="email"
           value={this.state.credentials.email}
           onChange={this.inputChanged}></input>
           <br/>
           {this.state.errormessage}
 <br/>
 Password <br/> <input type = "password" placeholder="Enter password" className = "reg" name="password"
           value={this.state.credentials.password}
           onChange={this.inputChanged}></input>
           
 <br/>
 Confirm Password <br/> <input type = "password" placeholder="Repeat password" className = "reg" name="password2"
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
