import React,{ useState,useEffect } from 'react'

import './Add_car.css';
import {useHistory} from 'react-router-dom';

import { getToken ,getUser} from './Common';

function Add_bikes() {
    const history = useHistory();
 const user=getUser();
 const [username, setUsername] = useState('')
  const [image, setImage] = useState('')
  const [type, setType] =useState('')
  const [description, setDescription] = useState('')
  const [used_for, setUsedfor] = useState('')
  

  const [price, setPrice] = useState('')
  const [zone, setzone] = useState('')

  const [lot_no, setLotNO] = useState('')
  const [color, setColor] = useState('')

  const [engine, setEngine] = useState('')
  const [milage, setMilage] = useState('')

  const [km, setKm] = useState('')
  const [home_delivery, setHomeDelivery] = useState('')
  const [delivery_area, setDeliveryArea] = useState('')


  const [warrenty, setWarrenty] = useState('')
  const [warrenty_period, setWarrentyPeriod] = useState('')


  const token = getToken();


  const insertAdd = () => {
    
    const uploadData = new FormData();
    uploadData.append('username', user);
    uploadData.append('image', image);
    uploadData.append('type_bike', type);
    uploadData.append('description', description);

    uploadData.append('used_for', used_for);
    uploadData.append('price', price);
    uploadData.append('zone', zone);
    uploadData.append('lot_no', lot_no);
    uploadData.append('color', color);
    uploadData.append('engine', engine);
    uploadData.append('milage', milage);
    uploadData.append('km', km);
    uploadData.append('home_delivery', home_delivery);
    uploadData.append('delivery_area', delivery_area);
    uploadData.append('warrenty', warrenty);
    uploadData.append('warrenty_period', warrenty_period);
    fetch('http://127.0.0.1:8000/addpost_bikes/', {
      method: 'POST',
      body: uploadData,
      
    })
    .then( res => console.log(res))
    .catch(error => console.log(error))
    history.push('/login_home');
    
}
    return (
        <>
         <div>
        <h1> Add Posts</h1>
         
       
        <input type="text" className='username_input' id='username' value = {user} onChange={(evt) => setUsername(evt.target.value)} disabled/><br/>
        
        <label  for="type" className='add_post_label' >Type(Motorbike/Scoter) :  </label><br/>
              
   
              <select name="type_bike" id="type_bike"
              onChange={(evt) => setType(evt.target.value)} value = {type}>
                <br/>
                   <option value="">----</option>
                      <option value="scooter">Scooter </option>
                      <option value="bikes">Bikes</option>
                      </select><br/>
         <label for="image" className='add_post_label'> Upload Image :</label><br/>
        <input type='file' onChange={(evt) => setImage(evt.target.files[0])} className='add_post_input'/>
      
      <br/>

                    
    
            
                
                {/* <label  for="type" className='add_post_label' >Type(Motorbike/Scoter) :  </label><br/>
              
   
                <select name="type_bike" id="type_bike"
                onChange={(evt) => setType(evt.target.value)} value = {type}>
                  <br/>
                     <option value="">----</option>
                        <option value="scooter">Scooter </option>
                        <option value="bikes">Bikes</option>
                        </select><br/> */}
                        <br/>
                <label for="description" className='add_post_label' > Description :</label><br/>
                
                <input type="text" id='description' className='add_post_input' value = {description} onChange={(evt) => setDescription(evt.target.value)} /><br/>
                     <br/>
                <label for="condition" className='add_post_label' >User For </label><br/>
               
                <input type="text" id='used_for' className='add_post_input' value = {used_for} onChange={(evt) => setUsedfor(evt.target.value)}  /><br/>
                <br/>
               <label for="price" className='add_post_label'> Price :</label>
                <input type="text" id='price' className='add_post_input' value = {price} onChange={(evt) => setPrice(evt.target.value)} /><br/>
                <br/>
                
                <label for="zone" className='add_post_label' >Zone: </label><br/>
                <input type="text"  id='zone' className='add_post_input' value = {zone} onChange={(evt) => setzone(evt.target.value)} /><br/>
                <br/>
                <label for="lot_no" className='add_post_label'>Lot No: </label><br/>
                <input type="text"  id='lot_no' className='add_post_input' value = {lot_no} onChange={(evt) => setLotNO(evt.target.value)}/><br/>
                <br/>
                <label for="colour" className='add_post_label'>Colour: </label><br/>
                <input type="text"  id='color' className='add_post_input' value = {color} setColor={(evt) => setColor(evt.target.value)}/><br/>
                <br/>
                <label for="engine" className='add_post_label'>Engine(CC): </label><br/>
                <input type="text" id='engine' className='add_post_input' value = {engine} onChange={(evt) => setEngine(evt.target.value)} /><br/>
                <br/>
                <label for="mileage" className='add_post_label'>Mileage </label><br/>
                <input type="text" id='milage' className='add_post_input' value = {milage} onChange={(evt) => setMilage(evt.target.value)}/><br/>
                <br/>
                <label for="kilometer" className='add_post_label'>Kilometers: </label><br/>
                <input type="text"  id='km' className='add_post_input' value = {km} onChange={(evt) => setKm(evt.target.value)} /><br/>
                <br/>
                <label for="home_delivery" className='add_post_label'>Home_delivery: </label><br/>
                <br/>
                <select 
     value = {home_delivery} onChange={(evt) => setHomeDelivery(evt.target.value)}
       name="home_delivery"
      >
           <option value="">----</option>
       <option value="YES">YES</option>
        <option value="No">No</option>
        
      </select>
      <br/>
               
               
                
                <label for="delivery_area" className='add_post_label'>Delivery Area: </label><br/>
                <input type="text" id='delivery_area' className='add_post_input' value = {delivery_area} onChange={(evt) => setDeliveryArea(evt.target.value)} /><br/>
                <br/>
                <label for="warrenty"className='add_post_label' >Warrenty : </label><br/>

                <select 
        value={warrenty} 
        onChange={(evt) => setWarrenty(evt.target.value)} 
       
      >
         <option value="">----</option>
       <option value="YES">YES</option>
        <option value="No">No</option>
        
      </select>
      <br/>
      
               
      <br/>
                <label for="warrenty_period" className='add_post_label' >Warrenty Period: </label>
                <input type="number" id='warrenty_period' className='add_post_input' value = {warrenty_period} onChange={(evt) => setWarrentyPeriod(evt.target.value)} /><br/>
             
                
                <button onClick={() => insertAdd()} className='post_botton'>Post</button>

        
        </div>
        </>
    )
}

export default Add_bikes