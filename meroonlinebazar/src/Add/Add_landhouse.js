import React,{ useState,useEffect } from 'react'

import '../css/Add_car.css';
import {useHistory} from 'react-router-dom';

import { getToken ,getUser} from '../components/Common';




function Add_landhouse() {
    const history = useHistory();

 
 const user=getUser();
 const [username, setUsername] = useState('')
 const [name, setName] = useState('')
  const [image, setImage] = useState('')
  const [description, setDescription] = useState('')

  const [price, setPrice] = useState('')
  const [contact, setContact] = useState('')
  const [fulllocation, setLocation] = useState('')

  const [propertytype, setPropertyType] = useState('')
  const [landsize, setLandSize] = useState('')

  const [roadsize, setRoadSize] = useState('')
  const [floor, setFloor] = useState('')

  const [builtup, setBuiltup] = useState('')
  const [bedroom, setBedroom] = useState('')
  const [bathroom, setBathroom] = useState('')


  const [livingroom, setLivingroom] = useState('')
  const [furnising, setFurniing] = useState('')
  const [extrafeatures, setExtrafeatures] = useState('')


  const token = getToken();


  const insertAdd = () => {
    
    const uploadData = new FormData();
    uploadData.append('username', user);
    uploadData.append('name', name);
    uploadData.append('image', image);
    uploadData.append('description', description);
    uploadData.append('price', price);
    uploadData.append('location', fulllocation);
    uploadData.append('propertyType', propertytype);
    uploadData.append('landSize', landsize);
    uploadData.append('roadSize', roadsize);
    uploadData.append('floor', floor);
    uploadData.append('builtUp', builtup);
    uploadData.append('bedroom', bedroom);
    uploadData.append('bathroom', bathroom);
    uploadData.append('livingRoom', livingroom);
    uploadData.append('furnishing', furnising);
    uploadData.append('extraFeatures', extrafeatures);
    uploadData.append('contact', contact);
    
    fetch('https://djangowithreactjs.herokuapp.com/addpost_land/', {
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
        
        <label for="image" className='add_post_label'> Upload Image :</label>
<input type='file' onChange={(evt) => setImage(evt.target.files[0])} className='add_post_input'/><br/>
<br/>
<label for="image" className='add_post_label'> Name :</label><br/>



<input type="text" id='name' className='add_post_input' value = {name} onChange={(evt) => setName(evt.target.value)} /><br/>
             <br/>
    
             <label for="location" className='add_post_label'>Description: </label>  <br/>
                <input type="text" id="description" className='add_post_input' value = {description} onChange={(evt) => setDescription(evt.target.value)}/><br/><br/>


       <label for="price" className='add_post_label'> Price :</label>  <br/>
        <input type="text" id='price' className='add_post_input' value = {price} onChange={(evt) => setPrice(evt.target.value)} /><br/>
        <br/><label for="extra_features" className='add_post_label'>Contact Number: </label>  <br/>
                <input type="text" id="contact" className='add_post_input' value = {contact} onChange={(evt) => setContact(evt.target.value)}/><br/><br/>
                
                <label for="location" className='add_post_label'>Full Location: </label>  <br/>
                <input type="text" id="location" className='add_post_input' value = {fulllocation} onChange={(evt) => setLocation(evt.target.value)}/><br/><br/>
                <label for="property_type" className='add_post_label'>Property Type: </label>  <br/>
                <input type="text" id="property_type" className='add_post_input' value = {propertytype} onChange={(evt) => setPropertyType(evt.target.value)}/><br/><br/>
                <label for="land_size" className='add_post_label'>Land Size(anna/dhur): </label>  <br/>
                <input type="number" id="land_size" className='add_post_input' value = {landsize} onChange={(evt) => setLandSize(evt.target.value)}/><br/><br/>
                <label for="road_size" className='add_post_label'>Road Size: </label>  <br/>
                <input type="text" id="road_size" className='add_post_input' value = {roadsize} onChange={(evt) => setRoadSize(evt.target.value)}/><br/><br/>
                <label for="floor" className='add_post_label'>Floor: </label>  <br/>
                <input type="number" id="floor" className='add_post_input' value = {floor} onChange={(evt) => setFloor(evt.target.value)}/><br/><br/>
                <label for="built_up " className='add_post_label'>Built Up(sq.ft): </label>  <br/>
                <input type="text" id="built_up" className='add_post_input' value = {builtup} onChange={(evt) => setBuiltup(evt.target.value)}/><br/><br/>
                <label for="bedrooms" className='add_post_label'>Bedrooms: </label>  <br/>
                <input type="number" id="bedrooms" className='add_post_input' value = {bedroom} onChange={(evt) => setBedroom(evt.target.value)}/><br/><br/>
                <label for="living_room" className='add_post_label'>Living Room: </label>  <br/>
                <input type="text" id="living_rooms" className='add_post_input' value = {livingroom} onChange={(evt) => setLivingroom(evt.target.value)}/><br/><br/>
                <label for="bathroom" className='add_post_label'>Bathroom: </label>  <br/>
                <input type="number" id="bathroom" className='add_post_input' value = {bathroom} onChange={(evt) => setBathroom(evt.target.value)}/><br/><br/>
                <label for="furnising" className='add_post_label'>Furnising: </label>  <br/>
                <input type="text" id="furnising" className='add_post_input' value = {furnising} onChange={(evt) => setFurniing(evt.target.value)}/><br/><br/>
                <label for="extra_features" className='add_post_label'>Extra Features: </label>  <br/>
                <input type="text" id="extra_features" className='add_post_input' value = {extrafeatures} onChange={(evt) => setExtrafeatures(evt.target.value)}/><br/><br/>
                
                <label for="extra_features" className='add_post_label'>Contact Number: </label>  <br/>
                <input type="text" id="contact" className='add_post_input' value = {contact} onChange={(evt) => setContact(evt.target.value)}/><br/><br/>
              <br/>
                
                <button onClick={() => insertAdd()} className='post_botton'>Post</button>

        
</div>
           
        </div>
        </>
    )
}

export default Add_landhouse