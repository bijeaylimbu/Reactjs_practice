import React from 'react';
import Header from './Header';
import Footer from './Footer';
import { Link } from 'react-router-dom';
import "./Computer.css"

function Computer() {
    return (
        <>
      
        <div className="computer-main">
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
            <a>Computer & Laptops </a>

<button><Link to="/Add_computer" className= 'addcar_post'>
                              Add Post
                              </Link></button>
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
        <Footer/>
        </>
    )
}

export default Computer
