import React from 'react'
import {Link} from 'react-router-dom'
import _ from 'lodash';
import './ViewPost.css'
function ViewPost_phones(props){
	return (
	
		<div className='view_post'>
			
				
			{props.product.name}
	<br/>
			
		
					<h3 className="font-bold text-xl mb-3">
						<Link to={`/products_phones/${props.product.id}`}>
							
							
						</Link>    
					</h3>
					<div className="font-bold mb-3">
						
					</div>
					
					<div className= "images">
            <img src={props.product.image} />
  
			{props.product.description}
	<br/>
     
        </div>
					
					
				
					<Link  target={"_blank"}
						to={`/products_phones/${props.product.id}`} className="">
						View
					
					</Link>
				</div>
		
		)
	
				}
export default ViewPost_phones