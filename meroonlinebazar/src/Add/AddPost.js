import React from 'react'
import '../css/AddPost.css'
import Header from '../Widget/Header'
// import { Link } from 'react-router-dom';



function AddPost(){
    
    
        return (
        
        
            <>
           <div>
           <Header/>
           </div>
            
            <div className ="post">
                <h1> Add Posts</h1>
                
                <form>
                    <div className= "ad_images">
                         images
                    </div>
                    <label for="fname">Full Name: </label>
                    <input type="text" id="fname" name="fname"/><br/>
                    <label for="address">Address: </label>
                    <input type="text" id="address" name="address"/><br/>
                    <label for="number">Phone Number: </label>
                    <input type="number" id="number" name="number"/><br/>
                    
                    <label for="fname">Category: </label>
                    <select name="categories" id="categories">
                        <option value="house_land">House/Land</option>
                        <option value="car">Cars</option>
                        <option value="bike_scooter">Bikes/Scooter</option>
                        <option value="mobiles">Mobiles/Phones/Tablets</option>
                        <option value="mobiles">Fashion</option>
                        <option value="mobiles">Computer/Laptop</option>
                    </select><br/>
                    <input type="submit" value="Submit"/>
    
                </form>
                
                
            </div>
            </>
        );
    }


    

export default AddPost
