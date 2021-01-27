import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css'
import addtocart from './addtocart.png'
import logo5 from './logo5.PNG'
import { getToken, getUser, removeUserSession } from './Common';
import {useState, useEffect} from 'react'
import {useHistory} from 'react-router-dom';


function Header(props) {
    const history = useHistory()
    // const { isLoggedIn } = this.state;
   const user=getUser();  
   const isLoggedIn = props.isLoggedIn;
    const token = getToken();

    // handle click event of logout button
    const handleLogout = () => {
       
      removeUserSession();
    history.push('/')

      
    }

   
  
  
    
  
   
    
  
    
  
    
  
    
  
    
    

      
      return (
          <>


       
   Welcome {token}!<br /><br /> 
   Welcome {user}!<br /><br /> 
   
 
                    <div className= "nav_div">
                    <div className="logo">
                    <img src={logo5}  className ="img_logo" alt="Logo" />
                    </div>
                        <nav className ="navbar">
                            <div className = "menu-icon"></div>
                           <ul><li className = 'nav-item'>
                                   <Link to="/login_home" className= 'nav-Links'>
                                   Home
                               
                                   </Link>
                               </li>
                               <br/>
                               <li className = 'nav-item'>
                                   <Link to="/" className= 'nav-Links'>
                                   
                                   <input type="button" onClick={handleLogout} value="Logout" />
                                   </Link>
                               </li>

                               
                               
                               
                               

                               
                               {/* <li className = 'nav-item'>
                                   <Link to="/AddPost" className= 'nav-Links'>
                                   Add Post
                                   </Link>
                               </li> */}
                               
                               <div className = "search_input">
                               <input type= "text" placeholder ="Search..."></input>
                               <button type = "submit">Search</button>
                                                             
                                 </div>
                                 <div className = 'addcart'>
                                
                                     <Link to="/cart" >
                                     <img src={addtocart} alt="addtocart icon"/>
                                   </Link></div>

                               
                            </ul> 
                        </nav>
                    </div>
                    
                            
          </>
        
      );
    }
  
  

export default Header;