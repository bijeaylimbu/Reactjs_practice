import React from 'react'

function Add_computer() {
    return (
        <>
        <div>
        <div >
                <h1> Add Posts</h1>
        <form>
                <div className= "ad_images">
                         images
                    </div>
                <label for="description"> Description :</label>                
                <input type="text" id="description" className="description"/>                  <br/>
                <label for="price"> Price :</label>                
                <input type="number" id="price" className="price"/><br/> 
                <label for="condition">User For(year/month) </label>
                <input type="text" id="condition" name="condition"/><br/>
                <label for="processor">Professor: </label>
                <input type="text" id="processor" name="processor"/><br/>
                <label for="processor_generation">Property Type: </label>
                <input type="text" id="processor_generation" name="processor_generation"/><br/>
                <label for="RAM">RAM(GB): </label>
                <input type="number" id="RAM" name="RAM"/><br/>
                <label for="video_card">Video Card: </label>
                <input type="number" id="video_card" name="video_card"/><br/>
                <label for="HDD">HDD(GB/TB): </label>
                <input type="number" id="HDD" name="HDD"/><br/>
                <label for="screen_type">Screen Type: </label>
                <input type="text" id="screen_type" name="screen_type"/><br/>
                <label for="screen_size">Screen Size: </label>
                <input type="number" id="screen_size" name="screen_size"/><br/>
                <label for="battery">Battery: </label>
                <input type="time" id="battery" name="battery"/><br/>
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
        </div>
        </>
    )
}

export default Add_computer
