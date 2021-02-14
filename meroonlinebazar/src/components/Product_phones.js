
import React from 'react'
import { useAxiosGet } from './HttpRequest';
import { useParams } from 'react-router-dom'

import './Product.css';
function Product_computer(){


    


    
    const { id } = useParams()
   
    const url =  `http://127.0.0.1:8000/addpost_phones/${id}/`
    
    let product = useAxiosGet(url)

    let content = null

    // if(product.error){
    //     content = <div>
       
    //         <div className="bg-red-300 p-3">
    //        {product.error}
	
    //         </div>
    //     </div>
    // }

  

    if(product.data){
        content = 
        <div className='product_main'>
            <h1 className="">
                {product.data.name}
            </h1>
     <center>       <div className='image'>
            <img src={product.data.image} />
           
                {/* <img
                    src={product.data.images[0].imageUrl}
                    alt={product.data.name}
                /> */}
            </div>
            </center>
            <div  className='data_div'>
                <br/>
                Descritpion: <b> {product.data.description}</b>
                <br/>
                <br/>

             Price: <b> {product.data.price}</b>
                <br/>
                <br/>
             Name:  <b>{product.data.username}</b>
                <br/>
                <br/>
             Used for: <b> {product.data.used_for}</b>
                <br/>
                <br/>
            Screen size:   <b>{product.data.screen_size}</b>
                <br/>
                <br/>
              Sim:<b> {product.data.sim}</b>
                <br/>
                <br/>
             RAM:  <b> {product.data.ram}</b>
                <br/>
                <br/>
              Back Camera:  {product.data.back_camera}
                <br/>
                <br/>
                Front Camera:  {product.data.front_camera}
                <br/>
                <br/>
                 CPU core:  {product.data.cpu_core}
                <br/>
                <br/>
                Internal Storage:  {product.data.internal_storage}
                <br/>
                <br/>
                Battery:  {product.data.battery}
                <br/>
                <br/>
              Home Delivery:  {product.data.home_delivery}
                <br/>
                <br/>
              Delivery Area:  {product.data.delivery_area}
                <br/>
                <br/>
               Warrenty: {product.data.warrenty}
                <br/>
                <br/>
              Warrenty Period:  {product.data.warrenty_period}
                <br/>
                <br/>
               Created at: {product.data.created_at}
               

            </div>
            <div>
               

            </div>
        </div>
    }

    return (
        <div className="container mx-auto">
            {content}
         
        </div>
    )
}

export default Product_computer;