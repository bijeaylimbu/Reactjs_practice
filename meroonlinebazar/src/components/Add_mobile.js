import React from 'react'

function Add_mobile() {
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
                <label for="screen_size">Screen Size: </label>
                <input type="number" id="screen_size" name="screen_size"/><br/>
                <label for="sim">Sim: </label>
                <input type="text" id="sim" name="sim"/><br/>
                <label for="RAM">RAM(GB): </label>
                <input type="number" id="RAM" name="RAM"/><br/>
                <label for="back_camera">Back Camera(mp): </label>
                <input type="number" id="back_camera" name="back_camera"/><br/>
                <label for="front_camera">Front Camera(mp): </label>
                <input type="number" id="front_camera" name="front_camera"/><br/>
                <label for="CPU_core">CPU Core: </label>
                <input type="text" id="CPU_core" name="CPU_core"/><br/>
                <label for="internal_storage">Internal Storage(GB): </label>
                <input type="number" id="internal_storage" name="internal_storage"/><br/>
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

export default Add_mobile
