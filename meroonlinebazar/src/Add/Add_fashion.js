import React,{ useState,useEffect } from 'react'

import '../css/Add_car.css';
import {useHistory} from 'react-router-dom';

import { getToken ,getUser} from '../components/Common';

function Add_fashion() {
    const history = useHistory();

 
 const user=getUser();
 const [username, setUsername] = useState('')
  const [image, setImage] = useState('')
  const [name, setName] = useState('')
  const [description, setDescription] = useState('')
  const [used_for, setUsedfor] = useState('')
  

  const [price, setPrice] = useState('')
  const [wearfor, setWearfor] = useState('')
  const [contact, setContact] = useState('')

  const [type, setType] = useState('')

  const [color, setColor] = useState('')

  const [size, setSize] = useState('')

  
  const [home_delivery, setHomeDelivery] = useState('')
  const [delivery_area, setDeliveryArea] = useState('')
  const [warrenty, setWarrenty] = useState('')
  const [warrenty_period, setWarrentyPeriod] = useState('')


  const token = getToken();


  const insertAdd = () => {
    
    const uploadData = new FormData();
    uploadData.append('username', user);
    uploadData.append('image', image);
    uploadData.append('description', description);

    uploadData.append('usedFor', used_for);
    uploadData.append('name', name);
    uploadData.append('price', price);
    uploadData.append('wearFor', wearfor);
    uploadData.append('type', type);
    uploadData.append('size', size);
    uploadData.append('color', color);
    uploadData.append('home_delivery', home_delivery);
    uploadData.append('delivery_area', delivery_area);
    uploadData.append('warrenty', warrenty);
    uploadData.append('warrenty_period', warrenty_period);
    uploadData.append('contact', contact);
    fetch('https://djangowithreactjs.herokuapp.com/addpost_fashion/', {
      method: 'POST',
      body: uploadData,
      
    })
    
    history.push('/login_home');
    
}
    return (
        <>
        <div>
        <h1> Add Posts</h1>
        <div className='main_add'>
        <input type="text" className='username_input' id='username' value = {user} onChange={(evt) => setUsername(evt.target.value)} disabled/><br/>
        <label for="condition" className='add_post_label' >Name: </label><br/>
                <input type="text" id='name' className='add_post_input' value = {name} onChange={(evt) => setName(evt.target.value)}  /><br/>
                <br/>
                <label for="image" className='add_post_label'> Upload Image :</label>
        <input type='file' onChange={(evt) => setImage(evt.target.files[0])} className='add_post_input'/><br/>
        <br/>
        <label for="description" className='add_post_label'> Description:</label>
        <input type="text" id='description' className='add_post_input' value = {description} onChange={(evt) => setDescription(evt.target.value)} /><br/>
                     <br/>
                     <label for="condition" className='add_post_label' >User For: </label><br/>
                <input type="text" id='used_for' className='add_post_input' value = {used_for} onChange={(evt) => setUsedfor(evt.target.value)}  /><br/>
                <br/>
               <label for="price" className='add_post_label'> Price :</label><br/>
                <input type="text" id='price' className='add_post_input' value = {price} onChange={(evt) => setPrice(evt.target.value)} /><br/>
                <br/>
              
                <label for="wear_for" className='add_post_label'>Wear For: </label><br/>
                <select  id="wear_for" className='add_post_input' value = {wearfor} onChange={(evt) => setWearfor(evt.target.value)}>
                <option value="">---</option>
                        <option value="male">Male </option>
                        <option value="female">Female</option>
                        <option value="children">Children </option>
                        <option value="adult">Adult</option>
                        <option value="old_ages">Old People </option>
                        
                        </select><br/><br/>
                <label for="type" className='add_post_label'>Type: </label><br/>
                <select className='add_post_input' value = {type} onChange={(evt) => setType(evt.target.value)}id="type_clothes">
                <option value="">---</option>
                        <option value="T-Shirt">T-Shirt </option>
                        <option value="Polo<">Polo</option>
                        <option value="Shirt">Shirt </option>
                        <option value="Jeans">Jeans</option>
                        <option value="Trouser & Shorts ">Trouser & Shorts </option>
                        <option value="Tops">Tops</option>
                        <option value="Kurtha">Kurtha </option>
                        <option value="Saries">Saries</option>
                        <option value="Dress & Skirt">Dress&Skirt </option>
                        <option value="Coat & Suits">Coat &Suits</option>
                        <option value="Jacket">Jacket </option>
                        <option value="Sweaters">Sweaters</option>
                        <option value="Hoodie & Sweetshirt">Hoodie & Sweetshirt </option>
                        <option value="Sport & Gym">Sport & Gym</option>
                        <option value="Undergarments">Undergarments </option>
                        <option value="others">Others</option>
                        </select><br/><br/>
                <label for="size" className='add_post_label'>Size: </label><br/>
                <select  id="size" className='add_post_input' value = {size} onChange={(evt) => setSize(evt.target.value)}>
                <option value="">---</option>
                        <option value="xs">XS </option>
                        <option value="s">S</option>
                        <option value="m">M </option>
                        <option value="l">L</option>
                        <option value="xl">XL </option>
                        
                        </select><br/><br/>
                <label for="color" className='add_post_label'>Color: </label><br/>
                <input type="text" id="color" className='add_post_input' value = {color} onChange={(evt) => setColor(evt.target.value)}/><br/><br/>
                <label for="home_delivery" className='add_post_label'>Home_delivery: </label>
                
                <select 
            value = {home_delivery} onChange={(evt) => setHomeDelivery(evt.target.value)}
            className='add_post_label'
         >
                 <option value="">---</option>
       <option value="YES">YES</option>
        <option value="No">No</option>
        
      </select>
      <br/>
               
               
      <br/>
      
               
      <label for="delivery_area" className='add_post_label'>Delivery Area: </label><br/>
    
                <input type="text" id='delivery_area' className='add_post_input' value = {delivery_area} onChange={(evt) => setDeliveryArea(evt.target.value)} /><br/>
                <br/>
                <label for="warrenty"className='add_post_label' >Warrenty : </label>

                <select 
        value={warrenty} 
        onChange={(evt) => setWarrenty(evt.target.value)} 
       
      >
              <option value="">---</option>
       <option value="YES">YES</option>
        <option value="No">No</option>
        
      </select>
      <br/>
      
               
      <br/>
                <label for="warrenty_period" className='add_post_label' >Warrenty Period: </label><br/>
                <input type="number" id='warrenty_period' className='add_post_input' value = {warrenty_period} onChange={(evt) => setWarrentyPeriod(evt.target.value)} /><br/>
             
<br/>
<label for="contact" className='add_post_label' >Contact Number: </label><br/>

                
<input type="number" id='contact' className='add_post_input' value = {contact} onChange={(evt) => setContact(evt.target.value)}  required/><br/><br/>

                <br/>
                <button onClick={() => insertAdd()} className='post_botton'>Post</button>
</div>
        </div>
        </>
    )
}

export default Add_fashion