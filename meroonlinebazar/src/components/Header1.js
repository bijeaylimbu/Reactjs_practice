import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css'

import logo_header from '../Image/logo.png'
import { getToken, getUser, removeUserSession } from './Common';
import {useState, useEffect} from 'react'
import {useHistory} from 'react-router-dom';

import { FcSearch } from "react-icons/fc";

function Header(props) {
    const history = useHistory()
    // const { isLoggedIn } = this.state;
//    const user=getUser();


   const isLoggedIn = props.isLoggedIn;
    const token = getToken();
    const user=getUser();
   

    // handle click event of logout button
    const handleLogout = () => {
       
    //   removeUserSession();
    removeUserSession(); 
     
    history.push('/')

      
    }

    useEffect(() => {
        if(token!==null) {
          
            history.push('/login_home')
        }
    }, [token])

   
  
  
    
  
   
    
  
    
  
    
  
    
  
    
    

      
      return (
          <>


{/*        
   Welcome {token}! <br /><br />  */}
   {/* Welcome {user}!<br /><br />  */}
   
{/*  
                    <div className= "nav_div">
                    
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
                               
                               {/* <div className = "search_input">
                               <input type= "text" placeholder ="Search..."></input>
                               <button type = "submit">Search</button>
                                                             
                                 </div>
                                

                               
                            </ul> 
                        </nav>
                    </div> */}
                     {/* } */}
                            

                     <div className= "nav_div">
                    
                 <nav className ="navbar">
                 
                 <h3>Welcome {user} !!</h3> 
                    <ul>
                    <li className = 'nav-item'>
                    <Link to="/login_home" className= ''>
                            <img src={logo_header}  className ="img_logo" alt="Logo" />
                        
                            </Link>
                        </li>

                   
                        <li className = 'nav-item'>
                            <Link to="/login_home" className= 'nav_header'>
                            Home
                        
                            </Link>
                        </li>

                        <li className = 'nav-item'>
                            <Link to="/dashboard" className= 'nav_header'>
                            Dashboard
                        
                            </Link>
                        </li>

                     
                         
                         
                        
                       
                        
                        
                        

                        
                        
                        {/* <div className = "search_input">
                        <input type= "text" placeholder ="Search..." className='search'></input>
                        <button type = "submit" className='submit_button'><FcSearch /></button>
                                                      
                          </div>
                          <br/> */}
                        
                        <Link to="/" className= 'link-logout'>
                       
                                   <button className='logout_button' onClick={handleLogout} value="Logout" >Logout</button>
                                   </Link>
                        
                        

                        
                     </ul> 
                 </nav>
             </div>
             
          </>
        
      );
    }
  
  

export default Header;