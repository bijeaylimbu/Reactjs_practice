
import React, { useState, useEffect } from "react";
import './App.css';
import header from './components/Header'
import "./components/Home";
import "./components/AddPost";
import Home from './components/Home';
import Home1 from './components/Home1';

import "./components/Login";
import Login from './components/Login3';
import Car from './components/Car';
import Bikes from './components/Bikes';
import Mobile from './components/Mobile';
import Computer from './components/Computer';
import Fashion from './components/Fashion';
import "./components/Register";
import Register from './components/Register1';
import Cart from './components/Cart';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import AddPost from "./components/AddPost";
import "./components/Header"
import Land from "./components/Land";
import ForgetPassword from "./components/ForgetPassword";
import "./components/ForgetPassword";
import VerificationCode from "./components/VerificationCode";
import "./components/VerificationCode";
import Add_car from "./components/Add_car";
import Add_bikes from "./components/Add_bikes";
import Add_computer from "./components/Add_computer";
import Add_fashion from "./components/Add_fashion";
import Add_mobile from "./components/Add_mobile";
import Add_landhouse from "./components/Add_landhouse";
import axios from 'axios';
import { getToken, removeUserSession, setUserSession } from './components/Common';
import Header from "./components/Header";

function  App(){
  // const [authLoading, setAuthLoading] = useState(true);

  // useEffect(() => {
  //   const token = getToken();
  //   if (!token) {
  //     return;
  //   }

  //   axios.get(`http://localhost:8000/verifyToken?token=${token}`).then(response => {
  //     setUserSession(response.data.token, response.data.user);
  //     setAuthLoading(false);
  //   }).catch(error => {
  //     removeUserSession();
  //     setAuthLoading(false);
  //   });
  // }, []);

  // if (authLoading && getToken()) {
  //   return <div className="content">Checking Authentication...</div>
  // }
  


  const [token, setToken] = useState('');

  // const userLogin = (tok) => {
  //   setToken(tok);
  // }





  return (
    <>
   


    <Router>
        
      <Switch>
      <Route path='/'   exact component = {Home} />  
      <Route path='/login_home'   exact component = {Home1} />  
        <Route path='/AddPost' component={AddPost} />
        {/* <Login userLogin={userLogin}/> */}
        <Route path='/login' component={Login}/>
        <Route path='/register' component={Register}/>
        <Route path='/cart' component={Cart}/>
        <Route path='/cars' component={Car}/>
        <Route path='/motobikes' component={Bikes}/>
        <Route path='/mobilephones' component={Mobile}/>
        <Route path='/laptopComputers' component={Computer}/>
        <Route path='/fashion' component={Fashion}/>
        <Route path='/house$land' component={Land}/>
        <Route path='/forget_password' component={ForgetPassword}/>
        <Route path='/VerificationCode' component={VerificationCode}/>
        <Route path='/Add_car' component={Add_car} />
        <Route path='/Add_bikes' component={Add_bikes} />
        <Route path='/Add_computer' component={Add_computer} />
        <Route path='/Add_fashion' component={Add_fashion} />
        <Route path='/Add_landhouse' component={Add_landhouse} />
        <Route path='/Add_mobile' component={Add_mobile} />

      </Switch>

      </Router>
   
    
    </>
  );
}

export default App;
