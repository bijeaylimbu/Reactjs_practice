import React,{useState,useEffect, Component} from 'react';
import Header from './Header';
import Footer from './Footer';
import './Car.css'
import { Link, useHistory,useParams } from 'react-router-dom';
import {getUser} from './Common';
import { useAxiosGet } from './HttpRequest';
import { render } from 'react-dom';

function Car()  {
 

  
    // const { id } = useParams()
    const user=getUser();
    let history=useHistory();
    // const url = 'http://127.0.0.1:8000/addpost/${id}'

    // let product = useAxiosGet(url)
    // let content = null


   

    // if(product.loading){
    //     // content = <Loader></Loader>
    // }

    // if(product.data){
    //     console.log(product.data)
    //     content = 
    //     <div>
    //         <h1 className="text-2xl font-bold mb-3">
    //             {product.data.username}
    //         </h1>
    //         <div>
    //             {/* <img
    //                 src={product.data.image}
    //                 alt={product.data.description}
    //             /> */}
    //         </div>
    //         <div className="font-bold text-xl mb-3">
    //             $ {product.data.price}
    //         </div>
    //         <div>
    //             {product.data.description}
    //         </div>
    //     </div>
    // }












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









        
            </div>

        
</div>


</div>
        <Footer/>

        {/* {content} */}
        </>
    )
}


export default Car
