import React, { Component,useState,useEffect } from 'react';
import Header from './Header';
import Footer from './Footer';
import { Link,useHistory } from 'react-router-dom';

import './Home.css'
import 'react-slideshow-image/dist/styles.css'
import axios from 'axios'; 
import { useAxiosGet ,useAxiosGet_bikes,useAxiosGet_land,useAxiosGet_fashion,useAxiosGet_computer,useAxiosGet_mobile} from './HttpRequest';
import ViewPost from './ViewPost';
import ViewPost_land from './ViewPost_land';
import ViewPost_bikes from './ViewPost_bikes';
import ViewPost_computer from './ViewPost_computer';
import ViewPost_phones from './ViewPost_phones';
import ViewPost_fashion from './ViewPost_fashion';
import { useParams } from "react-router-dom";
import Bikes from './Bikes_login';
import Land from './Land_login';
import Fashion from './Fashion_login';
import Computer from './Computer_login';
import Mobile from './Mobile_login';
import { getToken, getUser, removeUserSession } from './Common';
import {useAxiosGetAdd} from './HttpRequest_advertise';
import Advertise from './Addvertise';
function Home () {
    const token = getToken();
    const user=getUser();
   

    let history=useHistory();

  
    
    const url = 'http://127.0.0.1:8000/addpost/'
    const url_land = 'http://127.0.0.1:8000/addpost_land/'
    const url_bikes = 'http://127.0.0.1:8000/addpost_bikes/'

    const url_computer = 'http://127.0.0.1:8000/addpost_computer/'
    const url_phones = 'http://127.0.0.1:8000/addpost_phones/'

    const url_fashion = 'http://127.0.0.1:8000/addpost_fashion/'

    const urlAdv="http://127.0.0.1:8000/advertise/"
    let products = useAxiosGet(url)
    let advertise = useAxiosGetAdd(url)

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


    

    
    



    // if (content==null ){
        //clearInterval(content);

    //     const [state, setState] = useState([])
    //  useEffect(() => {
    //         fetch("http://127.0.0.1:8000/addpost/").then(
    //             res => setState(res.data)
    //         )
    //     })
           
       
    //     console.log(content)
       
    //   }

     







    //     if ((user===undefined) || (user===null) ){
    //         console.log(user)
    //         alert('please log in or register')
    //         history.push('./login')
    
           
    //    }else  {
    
    // history.push('/Add_car')
    
    //    }
    
    
    // }

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

        // ,
        // content_land=
        // products_land.data.sort((a,b) => new Date(a.created_at) < new Date(b.created_at) ? 1 : -1).slice(0, 3).map((product) => 
        //          <div key={product.id} className="view_car">
        //             <ViewPost_land
        //                 product={product}
                        
        //             />
               
        //      </div>
        //     )
//             content_bikes=
//             products_bikes.data.sort((a,b) => new Date(a.created_at) < new Date(b.created_at) ? 1 : -1).slice(0, 3).map((product) => 
//             <div key={product.id} className="view_car">
//                <ViewPost_bikes
//                    product={product}
                   
//                />
          
//         </div>
//        ),
//        content_computer=
//             products_computer.data.sort((a,b) => new Date(a.created_at) < new Date(b.created_at) ? 1 : -1).slice(0, 3).map((product) => 
//             <div key={product.id} className="view_car">
//                <ViewPost_computer
//                    product={product}
                   
//                />
          
//         </div>
//        ),
//        content_phones=
//        products_phones.data.sort((a,b) => new Date(a.created_at) < new Date(b.created_at) ? 1 : -1).slice(0, 3).map((product) => 
//        <div key={product.id} className="view_car">
//           <ViewPost_phones
//               product={product}
              
//           />
     
//    </div>
//   ),
//   content_fashion=
//        products_fashion.data.sort((a,b) => new Date(a.created_at) < new Date(b.created_at) ? 1 : -1).slice(0, 3).map((product) => 
//        <div key={product.id} className="view_car">
//           <ViewPost_fashion
//               product={product}
              
//           />
     
//    </div>
//   )
    }

    // if(products.data){
    //     content_fashion=
    //            products_fashion.data.sort((a,b) => new Date(a.created_at) < new Date(b.created_at) ? 1 : -1).slice(0, 3).map((product) => 
    //            <div key={product.id} className="view_car">
    //               <ViewPost_fashion
    //                   product={product}
                      
    //               />
             
    //        </div>
    //       )
    // }

   
    // if(products.data){
    //     content = 
    //     products_land.data.slice(0, 3).map((product) => 
    //         <div key={product.id} className="view_car">
    //             <ViewPost_land
    //                 product={product}
                    
    //             />
           
    //         </div>
    //     )
    // }


 
    

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
