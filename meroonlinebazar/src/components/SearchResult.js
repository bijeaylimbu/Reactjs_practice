import React from 'react';
import {useAxiosGet} from './HttpRequest';
import ViewPost_Search from './ViewPost_Search';
const SearchResult=(props)=> {

	const url=`http://127.0.0.1:8000/addpost/?search=${props.name}`
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
        products.data.map((product) => 
            <div key={product.id} className="view_car">
                <ViewPost_Search
                    product={product}
                    
                />
           
            </div>
        )
    }

	return(

<>

{ content } 
               
</>

	);
};

export default SearchResult;