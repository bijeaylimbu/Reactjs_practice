import React from 'react'
import './Mobile.css'
import Header from './Header';
import Footer from './Footer';
import { Link } from 'react-router-dom';

function Mobile() {
    return (
        <>
        
        <div className="mobile-main">
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
            <a>Mobile & Phones & Tablets</a>

<button><Link to="/Add_mobile" className= 'addcar_post'>
                              Add Post
                              </Link></button></div>

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

export default Mobile
