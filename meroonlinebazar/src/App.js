
import React, { useState, useEffect } from "react";
import './App.css';

import "./components/Home";
import "./Add/AddPost";
import Home from './components/Home';
import Home1 from './components/Home1';
import ViewPost from './ViewPost/ViewPost';
import ViewPost_computer from './ViewPost/ViewPost_computer';


import Login from './components/Login';
import Car from './FrontDetail/Car';
import Product from './ProductDetail/Product1';
import Product_computer from './ProductDetail/Product_computer';
import Product_fashion from './ProductDetail/Product_fashion';
import Product_land from './ProductDetail/Product_land';
import Product_phones from './ProductDetail/Product_phones';
import Product_bikes from './ProductDetail/Product_bikes';
import Bikes from './FrontDetail/Bikes';
import Mobile from './FrontDetail/Mobile';
import Computer from './FrontDetail/Computer';
import Fashion from './FrontDetail/Fashion';

import Register from './components/Register1';
import Cart from './components/Cart';
// import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import { BrowserRouter, Switch,Route } from 'react-router-dom';
import AddPost from "./Add/AddPost";

import Land from "./FrontDetail/Land";


import Add_car from "./Add/Add_car2";
import Add_bikes from "./Add/Add_bikes";
import Add_computer from "./Add/Add_computer";
import Add_fashion from "./Add/Add_fashion";
import Add_mobile from "./Add/Add_mobile";
import Add_landhouse from "./Add/Add_landhouse";

import Dashboard from "./Dashboard/Dashboard";
import Dashboard_fashion from "./Dashboard/Dashboard_fashion";
import Dashboard_bikes from "./Dashboard/Dashboard_bikes";
import Dashboard_car from "./Dashboard/Dashboard_car";
import Dashboard_computer from "./Dashboard/Dashboard_computer";
import Dashboard_land from "./Dashboard/Dashboard_land";
import Dashboard_phones from "./Dashboard/Dashboard_phones";




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
       
          

      </Switch>

      </BrowserRouter>
    
      
    
    </>
  );
}

export default App;
