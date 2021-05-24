import React, { Component } from 'react';
import Header from '../Widget/Header1';
import Footer from '../Widget/Footer';
import { Link } from 'react-router-dom';
import '../css/Home.css'

import { useAxiosGet1 ,useAxiosGet_bikes1,useAxiosGet_land1,useAxiosGet_fashion1,useAxiosGet_computer1,useAxiosGet_mobile1} from './HttpRequest_login';
import {  useHistory } from 'react-router-dom';
import ViewPost from '../ViewPost/ViewPost';

import { getToken, getUser, removeUserSession } from './Common';

import Bikes from '../ViewProduct/Bikes_login';
import Land from '../ViewProduct/Land_login';
import Fashion from '../ViewProduct/Fashion_login';
import Computer from '../ViewProduct/Computer_login';
import Mobile from '../ViewProduct/Mobile_login';

function Home1(props)  {
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
    let products = useAxiosGet1(url)
    let products_land = useAxiosGet_land1(url_land)
    let products_bikes = useAxiosGet_bikes1(url_bikes)
    let products_computer = useAxiosGet_computer1(url_computer)

    let products_phones = useAxiosGet_mobile1(url_phones)
    let products_fashion = useAxiosGet_fashion1(url_fashion)

    let content = null
    let content_land = null
    let content_bikes = null
    let content_computer = null
    let content_phones = null
    let content_fashion = null

    
    
  


    







   

  

   

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

   


 
    
  
   
           
          
            
            
   

 
   

    
        
       
    
    
        


   

 


   
    if (!user) {
            history.push('./login')
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
                {/* <div className="md:flex flex-wrap md:-mx-3"> */}
                
                { content } 
                <Fashion/>
                <Bikes/>
                <Mobile/>
                <Computer/>
                {content_land}
               {content_bikes}
               {content_computer}
               {content_phones}
               {content_fashion}
            {/* </div>  */}
              
<Land/>
                 </div>
                 </div>
            </div>
            </div>
            {/* <div className="ad-main">
            <div className ="ad">AD1</div>
                <div className ="ad">AD2</div>
                <div className ="ad">AD3</div>
            </div> */}
                
            
            </div>
            <div className="home_footer">
                <Footer/>
            </div>
        </>
    )

}



export default Home1;
