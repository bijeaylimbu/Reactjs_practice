import React, { Component } from 'react';
import Header from './Header1';
import Footer from './Footer';
import { Link } from 'react-router-dom';
import './Home.css'
import axios from 'axios'; 
import { useAxiosGet1 ,useAxiosGet_bikes1,useAxiosGet_land1,useAxiosGet_fashion1,useAxiosGet_computer1,useAxiosGet_mobile1} from './HttpRequest_login';
import {  useHistory } from 'react-router-dom';
import ViewPost from './ViewPost';
import ViewPost_land from './ViewPost_land';
import ViewPost_bikes from './ViewPost_bikes';
import ViewPost_computer from './ViewPost_computer';
import ViewPost_phones from './ViewPost_phones';
import ViewPost_fashion from './ViewPost_fashion';
import { getToken, getUser, removeUserSession } from './Common';

import Login from './Login';
import Land from "./Land_login";
import Bikes from './Bikes_login';
import Fashion from './Fashion_login';
import Computer from './Computer_login';
import Mobile from './Mobile_login';
import Home from './Home';
function Home1(props)  {
    const token = getToken();
    const user=getUser();
   

    let history=useHistory();

    const url = 'http://127.0.0.1:8000/addpost/'
    const url_land = 'http://127.0.0.1:8000/addpost_land/'
    const url_bikes = 'http://127.0.0.1:8000/addpost_bikes/'

    const url_computer = 'http://127.0.0.1:8000/addpost_computer/'
    const url_phones = 'http://127.0.0.1:8000/addpost_phones/'

    const url_fashion = 'http://127.0.0.1:8000/addpost_fashion/'
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

    
    
  


    







    //     if ((user===undefined) || (user===null) ){
    //         console.log(user)
    //         alert('please log in or register')
    //         history.push('./login')
    
           
    //    }else  {
    
    // history.push('/Add_car')
    
    //    }
    
    
    // }

    // if(products.error){
    //     content = <div>
           
    //         <div className="bg-red-300 p-3">
            
    //         </div>
    //     </div>
    // }

   

    if(products.data){
        content = 
        products.data.sort((a,b) => new Date(a.created_at) < new Date(b.created_at) ? 1 : -1).slice(0, 1).map((product) => 
            <div key={product.id} className="view_car">
                <ViewPost
                    product={product}
                    
                />
           
            </div>
        )
        // content_land=
        // products_land.data.sort((a,b) => new Date(a.created_at) < new Date(b.created_at) ? 1 : -1).slice(0, 3).map((product) => 
        //          <div key={product.id} className="view_car">
        //             <ViewPost_land
        //                 product={product}
                        
        //             />
               
        //      </div>
        //     )
    //         content_bikes=
    //         products_bikes.data.sort((a,b) => new Date(a.created_at) < new Date(b.created_at) ? 1 : -1).slice(0, 3).map((product) => 
    //         <div key={product.id} className="view_car">
    //            <ViewPost_bikes
    //                product={product}
                   
    //            />
          
    //     </div>
    //    ),
    //    content_computer=
    //         products_computer.data.sort((a,b) => new Date(a.created_at) < new Date(b.created_at) ? 1 : -1).slice(0, 3).map((product) => 
    //         <div key={product.id} className="view_car">
    //            <ViewPost_computer
    //                product={product}
                   
    //            />
          
    //     </div>
    //    )
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

   


 
    
    // if(content===null){
    //   content=content = 
    //   products.data.sort((a,b) => new Date(a.created_at) < new Date(b.created_at) ? 1 : -1).slice(0, 3).map((product) => 
    //       <div key={product.id} className="view_car">
    //           <ViewPost
    //               product={product}
                  
    //           />
         
    //       </div>
    //   )
           
          
            
            
    // }

 
   

    
        
       
    
    
        


   

 

    // useEffect(() => {
    //     if(token!==null) {
          
    //         history.push('/login_home')
    //     }
    // }, [token])
   

   
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
