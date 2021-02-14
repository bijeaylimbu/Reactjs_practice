import React from 'react';
import {Link} from 'react-router-dom'
import _ from 'lodash';
import './ViewPost.css'

function ViewPost_computer(props) {
    return (
        <div className='view_post'>
			
					
		{props.product.name}
	<br/>
				<Link to={`/products_computer/${props.product.id}`}>
					<div 
						
						className="w-full h-64 bg-blue bg-cover"
					>
						
					</div>
				</Link>
				<div className="p-3">
					<h3 className="font-bold text-xl mb-3">
						{/* <Link to={`/products_computer/${props.product.id}`}>
							{ props.product.name }
							
						</Link>     */}
					</h3>
					<div className="font-bold mb-3">
					
					</div>
					<div className="mb-3">
					<div className= "images">
        <img src={props.product.image} />
  
        
		
	<br/>
        </div>
						
						{ props.product.description }
						{ props.product.price }
					</div>
					<Link  target={"_blank"}
						to={`/products_computer/${props.product.id}`}
						className=""
					>
						View
					</Link>
				</div>
			</div>

		
    )
}

export default ViewPost_computer;