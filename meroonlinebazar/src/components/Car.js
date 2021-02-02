import React,{useState,useEffect} from 'react';
import Header from './Header';
import Footer from './Footer';
import './Car.css'
import { Link, useHistory } from 'react-router-dom';
import {getUser} from './Common';

function Car() {
    const user=getUser();
    let history=useHistory();



    const [data,setData]=useState([]);
  const getData=()=>{
    fetch('http://127.0.0.1:8000/addpost/'
    ,{
      headers : { 
        'Content-Type': 'application/json',
        'Accept': 'application/json'
       }
    }
    )
      .then(function(response){
        console.log(response)
        return response.json();
      })
      .then(function(myJson) {
        console.log(myJson);
        setData(myJson)
      });

      useEffect(()=>{
        getData()
      },[])

   
   
}



const button_add = () => {
    if ((user===undefined) || (user===null) ){
        console.log(user)
        alert('please log in or register')
        history.push('./login')

       
   }else  {

history.push('/Add_car')

   }


}
    return (
        <>
       
        <div className ="Car-main">
        <div className="category-main">
        <div className = "category">
                <h2><b>Categories</b></h2>
                <li className = 'categorys_item'> 
                    <Link to = '/cars' className= 'nav-Links' >
                    Car
                    </Link>
                </li> 
                <li className = 'categorys_item'> 
                    <Link to = '/motobikes' className= 'nav-Links' >
                    Bike/Scooter
                    </Link>
                </li> 
                <li className = 'categorys_item'> 
                    <Link to = '/house$land' className= 'nav-Links' >
                    House/Land
                    </Link>
                </li> 
                <li className = 'categorys_item'> 
                    <Link to = '/mobilephones' className= 'nav-Links' >
                    Mobile/Phone/
                    Tablets
                    </Link>
                </li> 
                <li className = 'categorys_item'> 
                    <Link to = '/laptopComputers' className= 'nav-Links' >
                    Computer/
                    Laptop
                    </Link>
                </li>  
                <li className = 'categorys_item'> 
                    <Link to = '/fashion' className= 'nav-Links' >
                    Fashion
                    </Link>
                </li>  

            </div>
            
            
            <div className="category-part">
                
                <a>Cars</a>
           
                <button onClick={button_add} className= 'addcar_post'>  Add Post</button>
                                            
                                            
               </div>


<div className="container-part">
<div className="contain1">
        <p>Items Name</p>
        <div className= "images">
             images
        </div>
         <p>Description</p>
           <button type = "submit"> View Post</button>
</div>
<div className="contain1">
        <p>Items Name</p>
        <div className= "images">
             images
        </div>
         <p>Description</p>
           <button type = "submit"> View Post</button>
</div>

<div className="contain1">
        <p>Items Name</p>
        <div className= "images">
             images
        </div>
         <p>Description</p>
           <button type = "submit"> View Post</button>
</div>

<div className="contain1">
        <p>Items Name</p>
        <div className= "images">
             images
        </div>
         <p>Description</p>
           <button type = "submit"> View Post</button>
</div>
<div className="contain1">
        <p>Items Name</p>
        <div className= "images">
             images
        </div>
         <p>Description</p>
           <button type = "submit"> View Post</button>
</div>
<div className="contain1">
        <p>Items Name</p>
        <div className= "images">
             images
        </div>
         <p>Description</p>
           <button type = "submit"> View Post</button>




            </div>
            </div>

        
</div>
 <div className="App">
     {
       data && data.length>0 && data.map((item)=><p>{item.username}</p>)
       
     }
     console.log(item.username)
    </div>

</div>
        <Footer/>
        </>
    )
}

export default Car
