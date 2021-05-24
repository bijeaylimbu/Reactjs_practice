
import React from 'react'
import { useAxiosGet } from '../components/HttpRequest';
import { useParams } from 'react-router-dom'

import '../css/Product.css';
function Product_land(){


    


    
    const { id } = useParams()
   
    const url =  `https://djangowithreactjs.herokuapp.com/addpost_land/${id}/`
    
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
            Description: <b> {product.data.description}</b>
            <br/>
            <br/>
         Price: <b> {product.data.price}</b>
            <br/>
            <br/>
         Name:  <b>{product.data.username}</b>
            <br/>
            <br/>
         Full location: <b> {product.data.location}</b>
            <br/>
            <br/>
        Property Type:   <b>{product.data.propertyType}</b>
            <br/>
            <br/>
        Land Size:<b> {product.data.landSize}</b>
            <br/>
            <br/>
         Road Size:  <b> {product.data.roadSize}</b>
            <br/>
            <br/>
          Floor:  {product.data.floor}
            <br/>
            <br/>
          Built Up:  {product.data.builtUp}
            <br/>
            <br/>
          Bedroom:  {product.data.bedroom}
            <br/>
            <br/>
           Living Room: {product.data.livingRoom}
            <br/>
            <br/>
          Bathroom:  {product.data.bathroom}
            <br/>
            <br/>
        Furnising: {product.data.furnishing}
            <br/>
            <br/>
          Extra Features:  {product.data.extraFeatures}
            <br/>
            <br/>
           Created at: {product.data.created_at}
           <br/>
                <br/>
               Contact at: {product.data.contact}
           

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

export default Product_land;