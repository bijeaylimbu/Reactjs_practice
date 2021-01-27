import React from 'react';
import ReactDOM from 'react-dom';
// import './index.css';
import App from './App';
// import reportWebVitals from './reportWebVitals';
import Login from './components/Login'
import {CookiesProvider} from 'react-cookie';
import {Route, BrowserRouter} from 'react-router-dom';

// function Router() {
   
//   return(
//     <CookiesProvider>
//     <BrowserRouter>

//     <Route exact path = "/" component = {Login}/>
    


//     </BrowserRouter>
//     </CookiesProvider>
//   )

// }




ReactDOM.render(
 
    <App />,
 
  document.getElementById('root')
);


