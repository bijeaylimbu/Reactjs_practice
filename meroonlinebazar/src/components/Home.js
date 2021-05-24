import React, { Component,useState,useEffect } from 'react';
import Header from '../Widget/Header';
import Footer from '../Widget/Footer';
import { Link,useHistory } from 'react-router-dom';

import '../css/Home.css'
import 'react-slideshow-image/dist/styles.css'

import { useAxiosGet ,useAxiosGet_bikes,useAxiosGet_land,useAxiosGet_fashion,useAxiosGet_computer,useAxiosGet_mobile} from './HttpRequest';
import ViewPost from '../ViewPost/ViewPost';

import Bikes from '../ViewProduct/Bikes_login';
import Land from '../ViewProduct/Land_login';
import Fashion from '../ViewProduct/Fashion_login';
import Computer from '../ViewProduct/Computer_login';
import Mobile from '../ViewProduct/Mobile_login';
import { getToken, getUser, removeUserSession } from './Common';

function Home () {
    const token = getToken();
    const user=getUser();
   

    let history=useHistory();

  
    
    const url = 'https://djangowithreactjs.herokuapp.com/addpost/'
    const url_land = 'https://djangowithreactjs.herokuapp.com/addpost_land/'
    const url_bikes = 'https://djangowithreactjs.herokuapp.com/addpost_bikes/'

    const url_computer = 'https://djangowithreactjs.herokuapp.com/addpost_computer/'
    const url_phones = 'https://djangowithreactjs.herokuapp.com/addpost_phones/'

    const url_fashion = 'https://djangowithreactjs.herokuapp.com/addpost_fashion/'

    const urlAdv="https://djangowithreactjs.herokuapp.com/advertise/"
    let products = useAxiosGet(url)
   

    let products_land = useAxiosGet_land(url_land)
    let products_bikes = useAxiosGet_bikes(url_bikes)
    let products_computer = useAxiosGet_computer(url_computer)

    let products_phones = useAxiosGet_mobile(url_phones)
    let products_fashion = useAxiosGet_fashion(url_fashion)

    let content = null;
    let content_land = null;
    let content_bikes = null
    let content_computer = null
    let content_phones = null
    let content_fashion = null
    let content_adv = null;


    

    
    



   
     







   
    if(products.error){
        content = <div>
           
            <div className="bg-red-300 p-3">
                There was an error please refresh or try again later.
            </div>
        </div>
    }
    

   

    if(products.data){
        content = 
        products.data.sort((a,b) => new Date(a.created_at) < new Date(b.created_at) ? 1 : -1).slice(0, 1).map((product) => 
            <div key={product.id} className="view_car">
                <ViewPost
                    product={product}
                    
                />
           
            </div>
        )

       

                   


    }

   

   
 


 
    

    if (user) {
        history.push('./login_home')
      }
   

 

    

    return (
        <>
            <div>
                <Header/>
            </div>
        
        
            <div className="page-main">
            <div className="home_main">
        
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
            <div className= "body_mid">
                <h2>Recent Upload</h2>
               

               
        <div>
                <div className='info'>
                 {/* {this.state.details.slice(0, 3).map((detail, id) =>  (  */}
               
              
  
                
               
<div className="md:flex flex-wrap md:-mx-3">
                { content } 
                <Land/>
                <Fashion/>
                <Bikes/>
                <Mobile/>
                <Computer/>
               {/* {content_bikes}
               {content_computer}
               {content_phones}
               {content_fashion} */}
            </div>
            
                 </div>
                 </div>
            </div>
            </div>
            {/* <div className="ad-main">
            <div className ="ad">AD1</div>
           
                <div className ="ad">AD2</div>
                <div className ="ad">AD3</div>
            </div>
                 */}
           
            </div>
           
            <div className="home_footer">
                <Footer/>
            </div>

        </>
    )
}


 export default Home
