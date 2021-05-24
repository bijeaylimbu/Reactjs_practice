import React,{ useState,useEffect } from 'react'

import '../css/Add_car.css';
import {useHistory} from 'react-router-dom';

import { getToken ,getUser} from '../components/Common';

function Add_car(props) {
  const history = useHistory();

  
 const user=getUser();
 const [username, setUsername] = useState('')
 const [name, setName] = useState('')
  const [image, setImage] = useState('')
  const [description, setDescription] = useState('')
  const [used_for, setUsedfor] = useState('')
  

  const [price, setPrice] = useState('')
  const [zone, setzone] = useState('')

  const [lot, setLot] = useState('')
  const [color, setColor] = useState('')

  const [engine, setEngine] = useState('')
  const [milage, setMilage] = useState('')

  const [kilometers, setKm] = useState('')
  const [home_delivery, setHomeDelivery] = useState('')
  const [delivery_area, setDeliveryArea] = useState('')


  const [warrenty, setWarrenty] = useState('')
  const [warrenty_period, setWarrentyPeriod] = useState('')
  const [contact, setContact] = useState('')


  const token = getToken();


  //   useEffect(() => {
  //     setImage(props.image)
  //     setDescription(props.description)
      
  //     setUsedfor(props.used_for)
  //     setPrice(props.price)
      
  //     setzone(props.zone)
  //     setLotNO(props.lot_no)
  //     setColor(props.color)
  //     setEngine(props.engine)
  //     setMilage(props.milage)
  //     setKm(props.km)
  //     setHomeDelivery(props.home_delivery)
  //     setDeliveryArea(props.home_delivery)
      
  //     setWarrenty(props.warrenty)
  //     setWarrentyPeriod(props.warrenty_period)
      
      
      
      
      

  // }, [props.article])

  const insertAdd = () => {
    
    const uploadData = new FormData();
    uploadData.append('username', user);
    uploadData.append('image', image);
    uploadData.append('description', description);
    uploadData.append('name', name);

    uploadData.append('used_for', used_for);
    uploadData.append('price', price);
    uploadData.append('zone', zone);
    uploadData.append('lot', lot);
    uploadData.append('color', color);
    uploadData.append('engine', engine);
    uploadData.append('milage', milage);
    uploadData.append('kilometers', kilometers);
    uploadData.append('used_for', used_for);
    uploadData.append('price', price);
    uploadData.append('home_delivery', home_delivery);
    uploadData.append('delivery_area', delivery_area);
    uploadData.append('warrenty', warrenty);
    uploadData.append('warrenty_period', warrenty_period);
    uploadData.append('contact', contact);
    fetch('https://djangowithreactjs.herokuapp.com/addpost/', {
      method: 'POST',
      body: uploadData,
      
    })
    .then( res => console.log(res))
   
     history.push('/login_home');
    
}
    







 





  








    return (
        <>
        
           {/* <Header/> */}
           
           
        <div classname='add_car_main'>
          <div className='main_add'>
        <h1> Add Posts</h1>
        <input type="text" className='username_input' id='username' value = {user} onChange={(evt) => setUsername(evt.target.value)} disabled/><br/>
        
        <label for="image" className='add_post_label'> Upload Image :</label>
        <input type='file' onChange={(evt) => setImage(evt.target.files[0])} className='add_post_input'/><br/>
        <br/>

        
                <label for='name'  className='add_post_label' > Product name :</label>
                
                <input type="text" id='name' className='add_post_input' value = {name} onChange={(evt) => setName(evt.target.value)} />
                     <br/>  
        {/* <input type="text" id='username' value = {user} onChange={(evt) => setUsername(evt.target.value)} disabled/><br/> */}
                
        <br/>
                <label for="description" className='add_post_label' > Description :</label>
                
                <input type="text" id='description' className='add_post_input' value = {description} onChange={(evt) => setDescription(evt.target.value)} /><br/>
                     <br/>
                <label for="condition" className='add_post_label' >User For </label>
               
                <input type="text" id='used_for' className='add_post_input' value = {used_for} onChange={(evt) => setUsedfor(evt.target.value)}  /><br/>
                <br/>

                <label for="price" className='add_post_label'> Price :</label>
                <input type="text" id='price' className='add_post_input' value = {price} onChange={(evt) => setPrice(evt.target.value)} /><br/>
                <br/>
                

                
                <label for="zone" className='add_post_label' >Zone: </label>
                <input type="text"  id='zone' className='add_post_input' value = {zone} onChange={(evt) => setzone(evt.target.value)} /><br/>
                <br/>
                <label for="lot_no" className='add_post_label'>Lot No: </label>
                <input type="text"  id='lot' className='add_post_input' value = {lot} onChange={(evt) => setLot(evt.target.value)}/><br/>
                <br/>
                <label for="colour" className='add_post_label'>Colour: </label>
                <input type="text"  id='color' className='add_post_input' value = {color} onChange={(evt) => setColor(evt.target.value)}/><br/>
                <br/>
                <label for="engine" className='add_post_label'>Engine(CC): </label>
                <input type="text" id='engine' className='add_post_input' value = {engine} onChange={(evt) => setEngine(evt.target.value)} /><br/>
                <br/>
                <label for="mileage" className='add_post_label'>Mileage </label>
                <input type="text" id='milage' className='add_post_input' value = {milage} onChange={(evt) => setMilage(evt.target.value)}/><br/>
                <br/>
                <label for="km" className='add_post_label'>Kilometers: </label>
                <input type="text"  id='kilometers' className='add_post_input' value = {kilometers} onChange={(evt) => setKm(evt.target.value)} /><br/>
                <br/>
                <label for="home_delivery" className='add_post_label'>Home_delivery: </label>
                
                <select 
     value = {home_delivery} onChange={(evt) => setHomeDelivery(evt.target.value)}
       name="home_delivery"
      
          >
              <option value="">-----</option>
       <option value="YES">YES</option>
        <option value="NO" selected>NO</option>
        
      </select>
      <br/><br/>
               
               
                {/* <input type="text" id='home_delivery' value = {home_delivery} onChange={(evt) => setHomeDelivery(evt.target.value)} /><br/> */}
                <label for="delivery_area" className='add_post_label'>Delivery Area: </label>
                <input type="text" id='delivery_area' className='add_post_input' value = {delivery_area} onChange={(evt) => setDeliveryArea(evt.target.value)} /><br/>
                <br/>
                <label for="warrenty"className='add_post_label' >Warrenty : </label>

                <select 
        value={warrenty} 
        onChange={(evt) => setWarrenty(evt.target.value)} 
       
      >
        
            
        <option value="">-----</option>    
       <option value="YES">YES</option>
        <option value="NO"  >NO</option>
        
      </select>
      <br/>
      
               
      <br/>
                <label for="warrenty_period" className='add_post_label' >Warrenty Period: </label>
                <input type="text" id='warrenty_period' className='add_post_input' value = {warrenty_period} onChange={(evt) => setWarrentyPeriod(evt.target.value)} /><br/>
             
             <br/>
             <label for="contact" className='add_post_label'>Contact Number: </label>
                <input type="text"  id='contact' className='add_post_input' value = {contact} onChange={(evt) => setContact(evt.target.value)} /><br/>
                <br/>
             <br/>
                
                <button onClick={() => insertAdd()} className='post_botton'>Post</button>

        </div>
        </div>
        </>
    )

                }
              

  
export default Add_car
