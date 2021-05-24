import React, { Component }  from 'react';
import { Link } from 'react-router-dom';
import '../css/Header.css'

import logo_header from '../Image/logo.png'


class Header extends Component {

  


 


    


    
    

    


    render(){

    
 
   
  

   
    
  
   

   

    

    
  
    
  
    
  
    
  
    

      
      return (
          <>


{/* {search_word===null?
 <SearchResult name={search_word}/>  
       :
       

       <SearchResult name={''}/>    
       }     */}
                    
   
   
 
                    <div className= "nav_div">
                 
                        <nav className ="navbar">
                        

                           <ul>
                           <li className = 'nav-item'>
                           <Link to="/" className= ''>
                                   <img src={logo_header}  className ="img_logo" alt="Logo" />
                               
                                   </Link>
                               </li>

                          
                               <li className = 'nav-item'>
                                   <Link to="/" className= 'nav_header'>
                                   Home
                               
                                   </Link>
                               </li>

                               
                               <li className = 'nav-item'  >
                                   <Link to="/register" className= 'nav_header'>
                                   Register
                                   </Link>
                               </li>
                               
                               <li className = 'nav-item'>
                                   <Link to="/login" className= 'nav_header'   >
                                    Login
                                   </Link>
                               </li>

                               <li className='nav-item'>

                               
                               </li>

                               
                               
                                {/* <div className = "search_input">
                               <input type= "text" placeholder ="Search..."  className='search1' id="search_word" value = {search_word} onChange = {e => setSearchWord(e.target.value)}  ></input>
                               <button className='submit_button' onClick={SearchWord}><FcSearch /></button>
                                                             
                                 </div> */}
                                 {/* <SearchResult name={search_word}/>    */}

                               
                            </ul> 
                        </nav>

                        <div className="md:flex flex-wrap md:-mx-3">
              
               
            </div>

          
                       
                    </div>
                    
                            
          </>
        
      );
    }
  
}

export default Header;