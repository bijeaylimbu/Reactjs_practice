import React from 'react'

import './Add_landhouse.css'


function Add_landhouse() {
    return (
        <>
        <div>
        <h1> Add Posts</h1> 
        <form>
        
            <div className= "ad_images">
                         images
                    </div>
                <label for="description"> Description :</label>                
                <input type="text" id="description" className="description"/>                  <br/>
                <label for="price"> Price :</label>                
                <input type="number" id="price" className="price"/><br/> 
                <label for="location">Full Location: </label>
                <input type="text" id="location" name="location"/><br/>
                <label for="property_type">Property Type: </label>
                <input type="text" id="property_type" name="property_type"/><br/>
                <label for="land_size">Land Size(anna/dhur): </label>
                <input type="number" id="land_size" name="land_size"/><br/>
                <label for="road_size">Road Size: </label>
                <input type="text" id="road_size" name="road_size"/><br/>
                <label for="floor">Floor: </label>
                <input type="number" id="floor" name="floor"/><br/>
                <label for="built_up ">Built Up(sq.ft): </label>
                <input type="text" id="built_up" name="built_up"/><br/>
                <label for="bedrooms">Bedrooms: </label>
                <input type="number" id="bedrooms" name="bedrooms"/><br/>
                <label for="living_room">Living Room: </label>
                <input type="text" id="living_rooms" name="living_room"/><br/>
                <label for="bathroom">Bathroom: </label>
                <input type="number" id="bathroom" name="bathroom"/><br/>
                <label for="furnising">Furnising: </label>
                <input type="text" id="furnising" name="furnising"/><br/>
                <label for="extra_features">Extra Features: </label>
                <input type="text" id="extra_features" name="extra_features"/><br/>
                
                <input type="submit" value="Submit"/>

            </form>  
        </div>
        </>
    )
}

export default Add_landhouse
