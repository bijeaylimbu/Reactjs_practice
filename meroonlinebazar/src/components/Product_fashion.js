
import React from 'react'
import { useAxiosGet } from './HttpRequest';
import { useParams } from 'react-router-dom'

import './Product.css';
function Product_computer(){


    


    
    const { id } = useParams()
   
    const url =  `http://127.0.0.1:8000/addpost_fashion/${id}/`
    
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
            Wear For:   <b>{product.data.wear_for}</b>
                <br/>
                <br/>
            Type:<b> {product.data.type}</b>
                <br/>
                <br/>
             Size:  <b> {product.data.size}</b>
                <br/>
                <br/>
            Color:  {product.data.color}
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