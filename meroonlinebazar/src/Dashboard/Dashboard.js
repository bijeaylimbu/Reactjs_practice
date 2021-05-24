import React, { Component } from 'react';
import {getUser} from '../components/Common';
import axios from 'axios'; 
import '../css/Dashboard.css'
import {useHistory} from 'react-router-dom';
import Dashboard_fashion, {dashboard_fashion} from './Dashboard_fashion';
import { Link,useParams } from 'react-router-dom';
function Dashboard(){
 const user=getUser();

 let history=useHistory();
	// constructor(props) {
    //     super(props);
       
       
      
     
		
    // }
	
    
    

	// state = { 
    //     details : [], 
	
	
		
        
        
     
       
    // } 

	// DeletePost(id, e){

	// 	fetch(`http://127.0.0.1:8000/addpost/${id}/`, {
		
	// 				method: 'DELETE',
		
	// 				headers: {
			
	// 					'Content-Type': 'application/json',
		
	// 				},
		
	// 			})
	// 		window.location.reload(false);
			
				
	// }

	// state = {
	// 	showMessage: false
	//   };
	 

// 	componentDidMount() { 
        
//   let user=getUser()
//         let data ; 
  
//         axios.get( `http://127.0.0.1:8000/cars/${user}`) 
//         .then(res => { 
           
//             data = res.data; 
//             data.sort((a,b) => new Date(a.created_at) < new Date(b.created_at) ? 1 : -1);
//             this.setState({ 
//                 details : data   
              
//             }); 
//         }) 
		// let data_computer ; 
		// axios.get( `http://127.0.0.1:8000/computer/${user}`) 
        // .then(res_computer => { 
           
        //     data_computer = res_computer.data_computer; 
        //     // data_computer.sort((a,b) => new Date(a.created_at) < new Date(b.created_at) ? 1 : -1);
        //     this.setState({ 
        //         details : data_computer   
              
        //     }); 
        // }) 
        
        if (!user) {
            history.push('./login')
          }
       
        
     






return(

<>
<div className = "">
                <h2><b>Categories</b></h2>
                <li className = 'categorys_item'> 
                    <Link to = '/dashboard_car' className= 'nav-Links' >
                    Car
                    </Link>
                </li> 
                <li className = 'categorys_item'> 
                    <Link to = '/dashboard_bikes' className= 'nav-Links' >
                    Bike/Scooter
                    </Link>
                </li> 
                <li className = 'categorys_item'> 
                    <Link to = '/dashboard_land' className= 'nav-Links' >
                    House/Land
                    </Link>
                </li> 
                <li className = 'categorys_item'> 
                    <Link to = '/dashboard_phones' className= 'nav-Links' >
                    Mobile/Phone/
                    Tablets
                    </Link>
                </li> 
                <li className = 'categorys_item'> 
                    <Link to = '/dashboard_computer' className= 'nav-Links' >
                    Computer/
                    Laptop
                    </Link>
                </li>  
                <li className = 'categorys_item'> 
                    <Link to = '/dashboard_fashion' className= 'nav-Links' >
                    Fashion
                    </Link>
                </li>  

            </div>
{/* 

{this.state.details.map((detail, id) =>  ( 
               
			   //    <div key={id}> 
			   <div key={id}>
				  <div > 
				 
		 
		   
		  
		
		   <div className= "images_dash">
		   {detail.id}
		   <br/>
		   <img src={detail.image} />
	 
		   {detail.description}
		
		  
			<p>{detail.username} </p>
			
			<button onClick={this.DeletePost.bind(this, detail.id)} >Delete</button>
   </div> 
			
   </div>	  </div> 
				
				  ) 
			  )} 





{this.state.details.map((detail, id) =>  ( 
               
			   //    <div key={id}> 
			   <div key={id}>
				  <div > 
				 
		 
		   
		  
		
		   <div className= "images_dash">
		   {detail.id}
		   <br/>
		   <img src={detail.image} />
	 
		   {detail.description}
		
		  
			<p>{detail.username} </p>
			
			<button onClick={this.DeletePost.bind(this, detail.username)} >Delete</button>
   </div> 
			
   </div>	  </div> 
				
				  ) 
			  )} 
<br/>

{/* <h1>Dashboard fashion</h1>
<br/> */}
			  {/* <Dashboard_fashion/> */} 

</>

)

}



export default Dashboard;