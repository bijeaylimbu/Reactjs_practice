import React,{useState,useEffect, Component} from 'react';

import '../css/Car.css'
import { Link, useHistory,useParams } from 'react-router-dom';
import {getUser} from '../components/Common';
import { useAxiosGet } from '../components/HttpRequest';
import { render } from 'react-dom';
import ViewPost_fashion from '../ViewPost/ViewPost_fashion';

function Fashion()  {
    const user=getUser();
    let history=useHistory();
    
    const url = 'https://djangowithreactjs.herokuapp.com/addpost_fashion/'
    let products = useAxiosGet(url)

    let content = null

    
    



    


   
   

    if(products.data){
        content = 
        products.data.sort((a,b) => new Date(a.created_at) < new Date(b.created_at) ? 1 : -1).slice(0, 1).map((product) => 
            <div key={product.id} className="view_car">
                <ViewPost_fashion
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


export default Fashion;
