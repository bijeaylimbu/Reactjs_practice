
import React from 'react'
import { useAxiosGet } from '../components/HttpRequest';
import { useParams } from 'react-router-dom'

import '../css/Product.css';
function Product_bikes(){


    


    
    const { id } = useParams()
   
    const url =  `https://djangowithreactjs.herokuapp.com/addpost_bikes/${id}/`
    
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
             Price: <b> {product.data.price}</b>
                <br/>
                <br/>
             Name:  <b>{product.data.username}</b>
                <br/>
                <br/>
             Lot: <b> {product.data.lot}</b>
                <br/>
                <br/>
            Color:   <b>{product.data.color}</b>
                <br/>
                <br/>
              Engine:<b> {product.data.engine}</b>
                <br/>
                <br/>
             Milage:  <b> {product.data.milage}</b>
                <br/>
                <br/>
              Kilometers:  {product.data.kilometers}
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

export default Product_bikes;