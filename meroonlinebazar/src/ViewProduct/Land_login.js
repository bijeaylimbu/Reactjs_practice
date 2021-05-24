import React,{useState,useEffect, Component} from 'react';

import '../css/Car.css'
import { Link, useHistory,useParams } from 'react-router-dom';
import {getUser} from '../components/Common';
import { useAxiosGet } from '../components/HttpRequest';
import { render } from 'react-dom';
import ViewPost_land from '../ViewPost/ViewPost_land';

function Land()  {
    const user=getUser();
    let history=useHistory();
    
    const url = 'https://djangowithreactjs.herokuapp.com/addpost_land/'
    let products = useAxiosGet(url)

    let content = null

    
    



    

    if(products.error){
        content = <div>
           
            <div className="bg-red-300 p-3">
                There was an error please refresh or try again later.
            </div>
        </div>
    }

   

    if(products.data){
        content = 
        products.data.sort((a,b) => new Date(a.created_at) < new Date(b.created_at) ? 1 : -1).slice(0, 1).map((product) => 
            <div key={product.id} className="view_car">
                <ViewPost_land
                    product={product}
                    
                />
           
            </div>
        )
    }

    return (
        <>
        
        
           
          
          
               
               
        
            
           
                { content } 
               
         
        </>
    )
}


export default Land;
