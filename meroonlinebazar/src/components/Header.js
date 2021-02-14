import React  from 'react';
import { Link } from 'react-router-dom';
import './Header.css'
import addtocart from './addtocart.png'
import logo_header from '../Image/logo.png'
import { getToken, getUser, removeUserSession } from './Common';
import {useState, useEffect} from 'react'
import {useHistory} from 'react-router-dom';
import { FcSearch } from "react-icons/fc";
import { useAxiosGet } from './HttpRequest';
import ViewPost from './ViewPost';
import { useParams } from 'react-router-dom'
function Header(props) {
//    const { search_word } = useFormInput('')

const [search_word, setSearchWord] = useState({ data:'' });
 
    console.log(search_word)

   
    //   const url=`http://127.0.0.1:8000/addpost/?search=${search_word}`

      
function Search() {
  fetch(`http://127.0.0.1:8000/addpost/?search=${search_word}`, {
    method: "GET",
    dataType: "JSON",
    headers: {
      "Content-Type": "application/json; charset=utf-8",
    }
  })
  .then((resp) => {
    return resp.json()
  }) 
  .then((data) => {
    // this.setState({ data: data })  
    setSearchWord(data)                  
  })
 
}
   
    
   


 

    
    
    
    


    

    
 
   
  
//   `http://127.0.0.1:8000/bikes/${user}`
   
    
  
   

   

    

    
  
    
  
    
  
    
  
    

      
      return (
          <>


       
   
   
 
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

                               
                               
                               {/* <div className = "search_input">
                               <input type= "text" placeholder ="Search..."  className='search1' id="search_word" value = {search_word} onChange = {e => setSearchWord(e.target.value)}  ></input>
                               <button className='submit_button' onClick={Search}><FcSearch /></button>
                                                             
                                 </div>
                                */}

                               
                            </ul> 
                        </nav>

                        
                        {/* { content }  */}
                        {search_word.name}
                    </div>
                    
                            
          </>
        
      );
    }
  
    const useFormInput = initialValue => {
        const [value, setValue] = useState(initialValue);
      
        const handleChange = e => {
          setValue(e.target.value);
        }
        return {
          value,
          onChange: handleChange
        }
      }

export default Header;