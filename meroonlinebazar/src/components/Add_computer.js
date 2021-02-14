import React,{ useState,useEffect } from 'react'

import './Add_car.css';
import {useHistory} from 'react-router-dom';

import { getToken ,getUser} from './Common';

function Add_computer() {
    const history = useHistory();

 
 const user=getUser();
 const [username, setUsername] = useState('')
  const [image, setImage] = useState('')
  const [description, setDescription] = useState('')
  const [used_for, setUsedfor] = useState('')
  

  const [price, setPrice] = useState('')
  const [processor, setProcessor] = useState('')

  const [processor_generation, setProcessorGeneration] = useState('')
  const [ram, setRam] = useState('')

  
  const [videocard, setVideocard] = useState('')
  const [hdd, setHdd] = useState('')

  const [screentype, setScreentype] = useState('')
  const [screensize, setScreensize] = useState('')
  const [battery, setBattery] = useState('')
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

    uploadData.append('used_for', used_for);
    uploadData.append('price', price);
    uploadData.append('processor', processor);
    uploadData.append('processor_generation', processor_generation);
    uploadData.append('RAM', ram);
    uploadData.append('video_card', videocard);
    uploadData.append('HDD', hdd);
    uploadData.append('screen_type', screentype);
    uploadData.append('screen_size', screensize);
    uploadData.append('battery', battery);
    uploadData.append('home_delivery', home_delivery);
    uploadData.append('delivery_area', delivery_area);
    uploadData.append('warrenty', warrenty);
    uploadData.append('warrenty_period', warrenty_period);
    fetch('http://127.0.0.1:8000/addpost_computer/', {
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
                <br/>
                <input type="text" className='username_input' id='username' value = {user} onChange={(evt) => setUsername(evt.target.value)} disabled/><br/>
                <br/>
                <label for="image" className='add_post_label'> Upload Image :</label>
                <br/>
        <input type='file' onChange={(evt) => setImage(evt.target.files[0])} className='add_post_input'/><br/>
        <br/>
        <label for="image" className='add_post_label'> Description:</label>
        <br/>
        <input type="text" id='description' className='add_post_input' value = {description} onChange={(evt) => setDescription(evt.target.value)} /><br/>
                     <br/>
                     <label for="condition" className='add_post_label' >User For </label>
                     <input type="text" id='used_for' className='add_post_input' value = {used_for} onChange={(evt) => setUsedfor(evt.target.value)}  /><br/>
                <br/>
               <label for="price" className='add_post_label'> Price :</label>
               <br/>
                <input type="text" id='price' className='add_post_input' value = {price} onChange={(evt) => setPrice(evt.target.value)} /><br/>
                <br/>
                <label for="processor" className='add_post_label' >Professor: </label>
                <br/>
                <input type="text" id="processor" className="add_post_input" value = {processor} onChange={(evt) => setProcessor(evt.target.value)}/><br/>
                <label for="processor_generation" className='add_post_label'>Processor Generation: </label>
                <br/>
                <input type="text" id="processor_generation" className='add_post_input' value = {processor_generation} onChange={(evt) => setProcessorGeneration(evt.target.value)}/><br/>
                <label for="RAM" className='add_post_label'>RAM(GB): </label>
                <br/>
                <input type="number" id="RAM" className='add_post_input' value = {ram} onChange={(evt) => setRam(evt.target.value)}/><br/>
                <label for="video_card" className='add_post_label'>Video Card: </label>
                <br/>
                <input type="number" id="video_card" className='add_post_input' value = {videocard} onChange={(evt) => setVideocard(evt.target.value)}/><br/>
                <label for="HDD" className='add_post_label'>HDD(GB/TB): </label>

                <br/>
                <input type="number" id="HDD" className='add_post_input' value = {hdd} onChange={(evt) => setHdd(evt.target.value)}/><br/>
                <label for="screen_type" className='add_post_label'>Screen Type: </label>
                <br/>
                <input type="text" id="screen_type" className='add_post_input' value = {screentype} onChange={(evt) => setScreentype(evt.target.value)}/><br/>
                <label for="screen_size" className='add_post_label'>Screen Size: </label>
                <br/>
                <input type="number" id="screen_size" className='add_post_input' value = {screensize} onChange={(evt) => setScreensize(evt.target.value)}/><br/>
                <label for="battery" className='add_post_label'>Battery: </label>
                <br/>
                <input type="time" id="battery" className='add_post_input' value = {battery} onChange={(evt) => setBattery(evt.target.value)}/><br/>
                <label for="home_delivery" className='add_post_label'>Home_delivery: </label>

                <br/>
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
      <br/>
      <br/>

               
      <label for="delivery_area" className='add_post_label'>Delivery Area: </label>
    <br/>

    
    
                <input type="text" id='delivery_area' className='add_post_input' value = {delivery_area} onChange={(evt) => setDeliveryArea(evt.target.value)} /><br/>
                <br/>
                <label for="warrenty"className='add_post_label' >Warrenty : </label>
                <br/>

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
                <label for="warrenty_period" className='add_post_label' >Warrenty Period: </label>
                <input type="number" id='warrenty_period' className='add_post_input' value = {warrenty_period} onChange={(evt) => setWarrentyPeriod(evt.target.value)} /><br/>
             <br/>
             <br/>
                
                <button onClick={() => insertAdd()} className='post_botton'>Post</button>

        


            
        </div>
       
        </>
    )
}

export default Add_computer