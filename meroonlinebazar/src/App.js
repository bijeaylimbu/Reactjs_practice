
import React, { useState, useEffect } from "react";
import './App.css';
import header from './components/Header'
import "./components/Home";
import "./components/AddPost";
import Home from './components/Home';
import Home1 from './components/Home1';
import ViewPost from './components/ViewPost';
import ViewPost_computer from './components/ViewPost_computer';
import ViewPost_fashion from './components/ViewPost_fashion';
import ViewPost_phones from './components/ViewPost_phones';
import "./components/Login";
import Login from './components/Login3';
import Car from './components/Car2';
import Product from './components/Product1';
import Product_computer from './components/Product_computer';
import Product_fashion from './components/Product_fashion';
import Product_land from './components/Product_land';
import Product_phones from './components/Product_phones';
import Product_bikes from './components/Product_bikes';
import Bikes from './components/Bikes';
import Mobile from './components/Mobile';
import Computer from './components/Computer';
import Fashion from './components/Fashion';
import "./components/Register";
import Register from './components/Register1';
import Cart from './components/Cart';
// import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import { BrowserRouter, Switch,Route } from 'react-router-dom';
import AddPost from "./components/AddPost";
import "./components/Header"
import Land from "./components/Land";
import ForgetPassword from "./components/ForgetPassword";
import "./components/ForgetPassword";
import VerificationCode from "./components/VerificationCode";
import "./components/VerificationCode";
import Add_car from "./components/Add_car2";
import Add_bikes from "./components/Add_bikes";
import Add_computer from "./components/Add_computer";
import Add_fashion from "./components/Add_fashion";
import Add_mobile from "./components/Add_mobile";
import Add_landhouse from "./components/Add_landhouse";

import Dashboard from "./components/Dashboard";
import Dashboard_fashion from "./components/Dashboard_fashion";
import Dashboard_bikes from "./components/Dashboard_bikes";
import Dashboard_car from "./components/Dashboard_car";
import Dashboard_computer from "./components/Dashboard_computer";
import Dashboard_land from "./components/Dashboard_land";
import Dashboard_phones from "./components/Dashboard_phones";
import PrivateRoute from './components/PrivateRoute';
import PublicRoute from './components/PublicRoute';
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
   
 
     

    <BrowserRouter>
        
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
        <Route path='/ViewPost' component={ViewPost} />
        <Route path='/ViewPost_computer' component={ViewPost_computer} />
        <Route path='/dashboard' component={Dashboard} />
        <Route path='/dashboard_fashion' component={Dashboard_fashion} />
        <Route path='/dashboard_phones' component={Dashboard_phones} />
        <Route path='/dashboard_car' component={Dashboard_car} />
        <Route path='/dashboard_land' component={Dashboard_land} />
        <Route path='/dashboard_bikes' component={Dashboard_bikes} />  
        <Route path='/dashboard_computer' component={Dashboard_computer} />     
        <Route path='/products/:id' component={Product} />
        <Route path='/products_computer/:id' component={Product_computer} />
        <Route path='/products_fashion/:id' component={Product_fashion} />
        <Route path='/products_land/:id' component={Product_land} />

        <Route path='/products_phones/:id' component={Product_phones} />

        <Route path='/products_bikes/:id' component={Product_bikes} />
        <PublicRoute restricted={false} component={Home} path="/" exact />
          <PublicRoute restricted={true} component={Login} path="/login" exact />
          <PublicRoute restricted={true} component={Home1} path="/login_home" exact />
          <PrivateRoute component={Dashboard} path="/dashboard" exact />
          <PrivateRoute component={Home1} path="/login_home" exact />

      </Switch>

      </BrowserRouter>
    
      
    
    </>
  );
}

export default App;
