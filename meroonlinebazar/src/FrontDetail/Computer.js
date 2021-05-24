import React,{useState,useEffect, Component} from 'react';
import Header from '../Widget/Header';
import Header1 from '../Widget/Header1';

import '../css/Car.css'
import { Link, useHistory,useParams } from 'react-router-dom';
import {getUser} from '../components/Common';
import { useAxiosGet } from '../components/HttpRequest';
import { render } from 'react-dom';
import VeiwPost_computer from '../ViewPost/ViewPost_computer';

function Car()  {
    const user=getUser();
    let history=useHistory();
    
    const url = 'https://djangowithreactjs.herokuapp.com/addpost_computer/'
    let products = useAxiosGet(url)

    let content = null

    
    



    const button_add = () => {







        if ((user===undefined) || (user===null) ){
            console.log(user)
            alert('please log in or register')
            history.push('./login')
    
           
       }else  {
    
    history.push('/Add_computer')
    
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
                <VeiwPost_computer
                    product={product}
                    
                />
           
            </div>
        )
    }

    return (
        
        
        <div >
            {user===null?
       <Header/>
       :
       <Header1/>


       }
       <div>
       <h1> Computer </h1>
            <div className='addpost_div'>
             <button onClick={button_add} className= 'add_post'>  Add Post</button>
             </div>
             <div className="car-body">
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
            
            <h1 className="font-bold text-2xl mb-3">
               
               
            </h1>
            <div className="md:flex flex-wrap md:-mx-3">
                { content } 
               
            </div>
            </div>
            </div>
        </div>
    )
}


export default Car
