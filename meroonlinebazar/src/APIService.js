import { Component } from "react";



export default class APIService {
   
    // handleChange(event) {
    //     this.setState({
    //       [event.target.name]: event.target.value
    //     });
    //   }
    

    // state = {
    //     isAuthenticated: false
    //   };
   

    static LoginUser(body) {

      return fetch('http://localhost:8000/auth/', {
        'method':'POST',
        headers: {
            'Content-Type':'application/json',
            
          }, 
          body:JSON.stringify(body)

      }).then(resp => resp.json())
      
      
      
      
      



        //   this.userHasAuthenticated(true);
      
        //   this.props.history.push("/dashboard");
    //   .then(data => {
    //     if ( data.user) {
    //         history.push("/");
          
    //     } else {
    //        alert('error')
    //     }
    //  });
    //   ?.catch( error => console.error(error))

    }



    static RegisterUser(body) {

      return fetch('http://localhost:8000/api/register/', {
        'method':'POST',
        headers: {
            'Content-Type':'application/json',
            
          }, 
          body:JSON.stringify(body)

      }).then(resp => resp.json())

    }



    static InsertAdd(body, token) {

      return fetch('http://127.0.0.1:8000/addpost/addpost/', {
        'method':'POST',
        headers: {
            'Content-Type':'application/json',
            'Authorization':`Token ${token}` ,
            'Content-type': 'multipart/form-data'
          }, 
          body:JSON.stringify(body)

      }).then(resp => resp.json())

    }


}

