import React from 'react'
import './Add_car.css'
import Header from './Header';

function Add_car() {
    return (
        <>
        
           {/* <Header/> */}
           
           
        <div>
        <h1> Add Posts</h1>
        <form>
        
        <div className= "ad_images">
                         images
                    </div>
                    
                <label for="description"> Description :</label>
                
                <input type="text" id="description" className="description"/>
                     <br/>
                <label for="condition">User For(year/month) </label>
                <input type="text" id="condition" name="condition"/><br/>
                

                <label for="price"> Price :</label>
                <input type="number" id="price" name="price"/><br/>
                
                <label for="zone">Zone: </label>
                <input type="text" id="zone" name="zone"/><br/>
                <label for="lot_no">Lot No: </label>
                <input type="number" id="lot_no" name="lot_no"/><br/>
                <label for="colour">Colour: </label>
                <input type="text" id="colour" name="colour"/><br/>
                <label for="engine">Engine(CC): </label>
                <input type="number" id="engine" name="engine"/><br/>
                <label for="mileage">Mileage </label>
                <input type="number" id="mileage" name="mileage"/><br/>
                <label for="kilometer">Kilometers: </label>
                <input type="text" id="kilometer" name="kilometer"/><br/>
                <label for="home_delivery">Home_delivery: </label>
                <input type="text" id="home_delivery" name="home_delivery"/><br/>
                <label for="delivery_area">Delivery Area: </label>
                <input type="text" id="delivery_area" name="delivery_area"/><br/>
                <label for="warrenty">Warrenty : </label>
                <input type="text" id="warrenty" name="warrenty"/><br/>
                
                <label for="warrenty_period">Warrenty Period: </label>
                <input type="number" id="warrenty_area" name="warrenty_area"/><br/>
                
                
                <input type="submit" value="Submit"/>

            </form>  
        </div>
        </>
    )
}

export default Add_car
