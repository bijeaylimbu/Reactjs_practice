import React from 'react'

function Add_fashion() {
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
                <label for="condition">User For(year/month): </label>
                <input type="text" id="condition" name="condition"/><br/>
                <label for="wear_for">Wear For: </label>
                <select name="for" id="for">
                        <option value="male">Male </option>
                        <option value="female">Female</option>
                        <option value="children">Children </option>
                        <option value="adult">Adult</option>
                        <option value="old_ages">Old People </option>
                        
                        </select><br/>
                <label for="type">Type: </label>
                <select name="type_clothes" id="type_clothes">
                        <option value="T-Shirt ">T-Shirt </option>
                        <option value="Polo<">Polo</option>
                        <option value="Shirt">Shirt </option>
                        <option value="Jeans">Jeans</option>
                        <option value="Trouser & Shorts ">Trouser & Shorts </option>
                        <option value="Tops">Tops</option>
                        <option value="Kurtha ">Kurtha </option>
                        <option value="Saries">Saries</option>
                        <option value="Dress&Skirt">Dress&Skirt </option>
                        <option value="Coat &Suits">Coat &Suits</option>
                        <option value="Jacket">Jacket </option>
                        <option value="Sweaters">Sweaters</option>
                        <option value="Hoodie & Sweetshirt">Hoodie & Sweetshirt </option>
                        <option value="Sport &Gym">Sport &Gym</option>
                        <option value="Undergarments">Undergarments </option>
                        <option value="others">Others</option>
                        </select><br/>
                <label for="size">Size: </label>
                <select name="size" id="size">
                        <option value="xs">XS </option>
                        <option value="s">S</option>
                        <option value="m">M </option>
                        <option value="l">L</option>
                        <option value="xl">XL </option>
                        
                        </select><br/>
                <label for="color">Color: </label>
                <input type="text" id="color" name="color"/><br/>
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

export default Add_fashion
