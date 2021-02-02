import React,{ useState,useEffect } from 'react'
import './Add_car.css'
import Header from './Header';
import axios from 'axios';
import {useCookies} from 'react-cookie';
import {useHistory} from 'react-router-dom';
import APIService from '../APIService'
import { getToken } from './Common';
function Add_car(props) {



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


    useEffect(() => {
      setImage(props.image)
      setDescription(props.description)
      
      setUsedfor(props.used_for)
      setPrice(props.price)
      
      setzone(props.zone)
      setLotNO(props.lot_no)
      setColor(props.color)
      setEngine(props.engine)
      setMilage(props.milage)
      setKm(props.km)
      setHomeDelivery(props.home_delivery)
      setDeliveryArea(props.home_delivery)
      
      setWarrenty(props.warrenty)
      setWarrentyPeriod(props.warrenty_period)
      
      
      
      
      

  }, [props.article])

  const insertAdd = () => {
    APIService.InsertAdd({image,description,used_for,price,zone,lot_no,color,engine,milage,km,home_delivery,delivery_area,warrenty,warrenty_period}, token)
    .then(resp => props.insertedInformation(resp))
}
    







 





  








    return (
        <>
        
           {/* <Header/> */}
           
           
        <div>
        <h1> Add Posts</h1>
        <form> 
        
        <input type='file' className= "" multiple label='image' id="image" value = {image} onChange = {e => setImage(e.target.value)}/>
        <br/>

                         
              
                    
                <label for="description"> Description :</label>
                
                <input type="text" id='description' value = {description} onChange = {e => setDescription(e.target.value)} />
                     <br/>
                <label for="condition">User For(year/month) </label>
                <input type="text" id='used_for' value = {used_for} onChange = {e => setUsedfor(e.target.value)}  /><br/>
                

                <label for="price"> Price :</label>
                <input type="number" id='price' value = {used_for} onChange = {e => setUsedfor(e.target.value)} /><br/>
                
                <label for="zone">Zone: </label>
                <input type="text"  id='zone' value = {zone} onChange = {e => setzone(e.target.value)} /><br/>
                <label for="lot_no">Lot No: </label>
                <input type="number"  id='lot_no' value = {lot_no} onChange = {e => setLotNO(e.target.value)}/><br/>
                <label for="colour">Colour: </label>
                <input type="text"  id='color'  value = {color} onChange = {e => setColor(e.target.value)}/><br/>
                <label for="engine">Engine(CC): </label>
                <input type="number" id='engine' value = {engine} onChange = {e => setEngine(e.target.value)} /><br/>
                <label for="mileage">Mileage </label>
                <input type="number" id='milage' value = {milage} onChange = {e => setMilage(e.target.value)} /><br/>
                <label for="kilometer">Kilometers: </label>
                <input type="text"  id='km' value = {km} onChange = {e => setKm(e.target.value)} /><br/>
                <label for="home_delivery">Home_delivery: </label>
                <input type="text" id='home_delivery' value = {home_delivery} onChange = {e => setHomeDelivery(e.target.value)} /><br/>
                <label for="delivery_area">Delivery Area: </label>
                <input type="text" id='delivery_area' value = {delivery_area} onChange = {e => setDeliveryArea(e.target.value)} /><br/>
                <label for="warrenty">Warrenty : </label>
                <input type="text" id='warrenty' value = {warrenty} onChange = {e => setWarrenty(e.target.value)} /><br/>
                
                <label for="warrenty_period">Warrenty Period: </label>
                <input type="number" id='warrenty_period' value = {warrenty_period} onChange = {e => setWarrentyPeriod(e.target.value)} /><br/>
             
                
                <button onClick={insertAdd} >Add Post</button>

         </form>
        </div>
        </>
    )

                }
              

  
export default Add_car
