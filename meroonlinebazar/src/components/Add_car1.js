import React,{ useState,useEffect, Component } from 'react'
import './Add_car.css'
import Header from './Header';
import axios from 'axios';
import {useCookies} from 'react-cookie';
import {useHistory} from 'react-router-dom';
import APIService from '../APIService'
import { getToken } from './Common';

 const token = getToken();
import { render } from 'react-dom';
class Add_car extends Component {
 
  
  state = { 
    post_detail_car : [], 
    pk:0,
    image: null, 
} 




handleImageChange = (e) => {
  this.setState({
    image: e.target.files[0]
  })
};

componentDidMount() { 

    let data ; 

    axios.post('http://localhost:8000/addpost/',
    
    this.state) 
    .then(res => { 
        data = res.data; 
        
        this.setState({ 
            post_detail_car : data     
        }); 
    },
    {
      headers: {
        // 'content-type': 'multipart/form-data'
      }
    }
    
    ) 
    .catch(err => {}) 
} 

handleInput = (e) => { 
  this.setState({ 
      [e.target.name]: e.target.value, 
  }); 
}; 

// handleImageChange = (e) => {
//   this.setState({
//     image: e.target.files[0]
//   })
// };


handleSubmit = (e) => { 
  
  e.preventDefault(); 

  axios 
      .post("http://localhost:8000/addpost/addpost/", { 
          image: this.state.image, 
          description: this.state.description,
          used_for:this.state.used_for,
          price:this.state.price ,
          zone:this.state.zone,
          lot_no:this.state.lot_no,
          color:this.state.color,
          engine:this.state.engine,
          milage:this.state.milage,
          km:this.state.km,
          home_delivery:this.state.home_delivery,
          delivery_area:this.state.delivery_area,
          warrenty:this.state.warrenty,
          warrenty_period:this.state.warrenty_period
      },
      {supportHeaderParams: true,
        headers: {
          // 'Authorization': `Basic ${token}` ,
          'content-type': 'multipart/form-data'
         
          // 'Content-Type': 'application/json,charset=UTF-8',
          // 'Accept': 'application/json'
         
          
        }
      }
      
      ) 
      
      .then((res) => { 
          this.setState({ 
              image: "", 
              description: "", 
              used_for: "", 
              price: "",
               
              zone: "", 
              lot_no: "", 
              color: "", 
              engine: "",

              milage: "", 
              km: "", 
              home_delivery: "", 
              delivery_area: "",
              warrenty:"",
              warrenty_period:""
               
               

          }); 
      }) 
      .catch((err) => {}); 
}; 

  
    render(){







 





  








    return (
        <>
        
           {/* <Header/> */}
           
           
        <div>
        <h1> Add Posts</h1>
        <form onSubmit={this.handleSubmit}> 
        
        <input type='file'   value={this.state.image} name="image"
                               onChange={this.handleInput}  />
        <br/>

                         
              
                    
                <label for="description"> Description :</label>
                
                <input type="text" value={this.state.description} name="description"
                               onChange={this.handleInput}  />
                     <br/>
                <label for="condition">User For(year/month) </label>
                <input type="text" value={this.state.used_for} name="used_for"
                               onChange={this.handleInput}  /><br/>
                 

                <label for="price"> Price :</label>
                <input type="text" value={this.state.price} name="price"
                               onChange={this.handleInput}  /><br/>
                
                <label for="zone">Zone: </label>
                <input type="text" value={this.state.zone} name="zone"
                               onChange={this.handleInput}  /><br/>
                <label for="lot_no">Lot No: </label>
                <input type="text"  value={this.state.lot_no} name="lot_no"
                               onChange={this.handleInput} /><br/>
                <label for="colour">Colour: </label>
                <input type="text" value={this.state.color} name="color"
                               onChange={this.handleInput} /><br/>
                <label for="engine">Engine(CC): </label>
                <input type="text" value={this.state.engine} name="engine"
                               onChange={this.handleInput} /><br/>
                <label for="mileage">Mileage </label>
                <input type="text"  value={this.state.milage} name="milage"
                               onChange={this.handleInput} /><br/>
                <label for="kilometer">Kilometers: </label>
                <input type="text"  value={this.state.km} name="km"
                               onChange={this.handleInput}  /><br/>
                <label for="home_delivery">Home_delivery: </label>
                {/* <input type="radio" value={this.state.home_delivery} name="home_delivery"
                               onChange={this.handleInput} value="Yes" label="YES" /><br/>
 */}

  <select 
       value={this.state.home_delivery}
       onChange={this.handleInput}
       name="home_delivery"
      >
       <option value="YES">YES</option>
        <option value="No">No</option>
        
      </select>
      <br/>






                <label for="delivery_area">Delivery Area: </label>
                <input type="text" value={this.state.delivery_area} name="delivery_area"
                               onChange={this.handleInput}  /><br/>
                <label for="warrenty">Warrenty : </label>
                {/* <input type="text" value={this.state.warrenty} name="warrenty"
                               onChange={this.handleInput} /><br/> */}


<select 
        value={this.state.warrenty} 
        onChange={this.handleInput}
       name="warrenty"
      >
       <option value="YES">YES</option>
        <option value="No">No</option>
        
      </select>
      <br/>
      
                
                <label for="warrenty_period">Warrenty Period: </label>
                <input type="text"  value={this.state.warrenty_period} name="warrenty_period"
                               onChange={this.handleInput}  /><br/>
             
                
                <button type='submit'>Add Post</button>

         </form>
        </div>
        </>
    )

                }
              
              }
  
export default Add_car
