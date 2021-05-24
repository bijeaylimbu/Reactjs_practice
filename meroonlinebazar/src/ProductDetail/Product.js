
import React from 'react'
import { useAxiosGet } from '../components/HttpRequest';
import { useParams } from 'react-router-dom'



function Product(){


    
    
    const { id } = useParams()
   
    const url =  `https://djangowithreactjs.herokuapp.com/addpost/${id}/`
    
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
        <div>
            <h1 className="">
                {product.data.name}
            </h1>
            <div>
            <img src={product.data.image} />
            <button>add to cart</button>
                {/* <img
                    src={product.data.images[0].imageUrl}
                    alt={product.data.name}
                /> */}
            </div>
            <div >
                
                $ {product.data.price}
            </div>
            <div>
                {product.data.description}
				{product.data.description}

				{product.data.description}


            </div>
        </div>
    }

    return (
        <div className="container mx-auto">
            {content}
        </div>
    )
}

export default Product