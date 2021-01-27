import React from 'react';
import Header from './Header';
import Footer from './Footer';
import { Link } from 'react-router-dom';
import './Home.css'


function Home() {


    

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
                <div className="popular_items">
                    <div className= "pop_items_topic"><b>Popular Items</b></div>
                    <div   className ="pop_items_items" >Items</div>
                </div>

                <div className="most_commented">
                    <div className= "most_commented_topic"><b>Most Commented Items </b> </div>
                    <div className ="most_commented_items" >Items</div>

                </div>
                
                <div className="recently_visited">
                    <div className= "recently_visited_topic"><b>Recently Visited</b></div>
                    <div className ="recently_visited_items" >Items</div>

                 </div>
            </div>
            </div>
            <div className="ad-main">
            <div className ="ad">AD1</div>
                <div className ="ad">AD2</div>
                <div className ="ad">AD3</div>
            </div>
                
            
            </div>
            <div className="home_footer">
                <Footer/>
            </div>
        </>
    )
}

export default Home;
