import React,{ useState,useEffect } from 'react'
import './Add_car.css'
import Header from './Header';
import axios from 'axios';
import {useCookies} from 'react-cookie';
import {useHistory} from 'react-router-dom';
import APIService from '../APIService'
import { getToken ,getUser} from './Common';

function Add_car(props) {
  const history = useHistory();

 
 const user=getUser();
 const [username, setUsername] = useState('')
  const [image, setImage] = useState('')
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

    uploadData.append('used_for', used_for);
    uploadData.append('price', price);
    uploadData.append('zone', zone);
    uploadData.append('lot_no', lot_no);
    uploadData.append('color', color);
    uploadData.append('engine', engine);
    uploadData.append('milage', milage);
    uploadData.append('km', km);
    uploadData.append('used_for', used_for);
    uploadData.append('price', price);
    uploadData.append('home_delivery', home_delivery);
    uploadData.append('delivery_area', delivery_area);
    uploadData.append('warrenty', warrenty);
    uploadData.append('warrenty_period', warrenty_period);
    fetch('http://127.0.0.1:8000/addpost/', {
      method: 'POST',
      body: uploadData,
      
    })
    .then( res => console.log(res))
    .catch(error => console.log(error))
    history.push('/login_home');
    // APIService.InsertAdd({image,description,used_for,price,zone,lot_no,color,engine,milage,km,home_delivery,delivery_area,warrenty,warrenty_period}, token)
    // .then(resp => props.insertedInformation(resp))
}
    







 





  








    return (
        <>
        
           {/* <Header/> */}
           
           
        <div>
        <h1> Add Posts</h1>
        
        
        <input type='file' onChange={(evt) => setImage(evt.target.files[0])}/>
        <br/>

                         
        <input type="text" id='username' value = {user} onChange={(evt) => setUsername(evt.target.value)} /><br/>
                
                    
                <label for="description"> Description :</label>
                
                <input type="text" id='description' value = {description} onChange={(evt) => setDescription(evt.target.value)} />
                     <br/>
                <label for="condition">User For(year/month) </label>
                <input type="text" id='used_for' value = {used_for} onChange={(evt) => setUsedfor(evt.target.value)}  /><br/>
                

                <label for="price"> Price :</label>
                <input type="number" id='price' value = {used_for} onChange={(evt) => setPrice(evt.target.value)} /><br/>
                
                <label for="zone">Zone: </label>
                <input type="text"  id='zone' value = {zone} onChange={(evt) => setzone(evt.target.value)} /><br/>
                <label for="lot_no">Lot No: </label>
                <input type="number"  id='lot_no' value = {lot_no} onChange={(evt) => setLotNO(evt.target.value)}/><br/>
                <label for="colour">Colour: </label>
                <input type="text"  id='color'  value = {color} setColor={(evt) => setColor(evt.target.value)}/><br/>
                <label for="engine">Engine(CC): </label>
                <input type="number" id='engine' value = {engine} onChange={(evt) => setEngine(evt.target.value)} /><br/>
                <label for="mileage">Mileage </label>
                <input type="number" id='milage' value = {milage} onChange={(evt) => setMilage(evt.target.value)}/><br/>
                <label for="kilometer">Kilometers: </label>
                <input type="text"  id='km' value = {km} onChange={(evt) => setKm(evt.target.value)} /><br/>
                <label for="home_delivery">Home_delivery: </label>
                <select 
     value = {home_delivery} onChange={(evt) => setHomeDelivery(evt.target.value)}
       name="home_delivery"
      >
       <option value="YES">YES</option>
        <option value="No">No</option>
        
      </select>
      <br/>
               
               
                {/* <input type="text" id='home_delivery' value = {home_delivery} onChange={(evt) => setHomeDelivery(evt.target.value)} /><br/> */}
                <label for="delivery_area">Delivery Area: </label>
                <input type="text" id='delivery_area' value = {delivery_area} onChange={(evt) => setDeliveryArea(evt.target.value)} /><br/>
                <label for="warrenty">Warrenty : </label>

                <select 
        value={warrenty} 
        onChange={(evt) => setWarrenty(evt.target.value)} 
       
      >
       <option value="YES">YES</option>
        <option value="No">No</option>
        
      </select>
      <br/>
      
               
                
                <label for="warrenty_period">Warrenty Period: </label>
                <input type="number" id='warrenty_period' value = {warrenty_period} onChange={(evt) => setWarrentyPeriod(evt.target.value)} /><br/>
             
                
                <button onClick={() => insertAdd()} >Add Post</button>

        
        </div>
        </>
    )

                }
              

  
export default Add_car
