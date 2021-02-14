import React,{useState,useEffect, Component} from 'react';
import Header from './Header';
import Footer from './Footer';
import './Car.css'
import { Link, useHistory,useParams } from 'react-router-dom';
import {getUser} from './Common';
import { useAxiosGet } from './HttpRequest';
import { render } from 'react-dom';
import ViewPost from './ViewPost';
import ViewPost_bikes from './ViewPost_bikes';

function Bikes()  {
    const user=getUser();
    let history=useHistory();
    
    const url = 'http://127.0.0.1:8000/addpost_bikes/'
    let products = useAxiosGet(url)

    let content = null

    
    



    const button_add = () => {







        if ((user===undefined) || (user===null) ){
            console.log(user)
            alert('please log in or register')
            history.push('./login')
    
           
       }else  {
    
    history.push('/Add_bikes')
    
       }
    
    
    }

    if(products.error){
        content = <div>
           
            <div className="bg-red-300 p-3">
                There was an error please refresh or try again later.
            </div>
        </div>
    }

   

    if(products.data){
        content = 
        products.data.map((product) => 
            <div key={product.id} className="view_car">
                <ViewPost_bikes
                    product={product}
                    
                />
           
            </div>
        )
    }

    return (
        
        
        <div >
                <div className = "category">
                <h2><b>Categories</b></h2>
                <li className = 'category_item'> 
                    <Link to = '/cars' className= 'nav-Links' >
                    Car
                    </Link>
                </li> 
                <li className = 'category_item'> 
                    <Link to = '/motobikes' className= 'nav-Links' >
                    Bike/Scooter
                    </Link>
                </li> 
                <li className = 'category_item'> 
                    <Link to = '/house$land' className= 'nav-Links' >
                    House/Land
                    </Link>
                </li> 
                <li className = 'category_item'> 
                    <Link to = '/mobilephones' className= 'nav-Links' >
                    Mobile/Phone/
                    Tablets
                    </Link>
                </li> 
                <li className = 'category_item'> 
                    <Link to = '/laptopComputers' className= 'nav-Links' >
                    Computer/
                    Laptop
                    </Link>
                </li>  
                <li className = 'category_item'> 
                    <Link to = '/fashion' className= 'nav-Links' >
                    Fashion
                    </Link>
                </li>  

            </div>
            <h1> Bikes </h1>
            <div className='addpost_div'>
             <button onClick={button_add} className= 'add_post'>  Add Post</button>
             </div>
            <h1 className="font-bold text-2xl mb-3">
               
               
            </h1>
            <div className="md:flex flex-wrap md:-mx-3">
                { content } 
               
            </div>
        </div>
    )
}


export default Bikes;
