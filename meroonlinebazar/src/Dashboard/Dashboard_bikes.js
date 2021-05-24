import React, { Component } from 'react';
import {getUser} from '../components/Common';
import axios from 'axios'; 
import '../css/Dashboard.css'
import {useHistory} from 'react-router-dom';
class Dashboard_bikes extends Component{
	constructor(props) {
        super(props);
        // this.user= getUser();
     
		
    }
	

	state = { 
        details : [], 
	
	
		
        
        
     
       
    } 

	DeletePost(id, e){

		fetch(`https://djangowithreactjs.herokuapp.com/addpost_bikes/${id}/`, {
		
					method: 'DELETE',
		
					headers: {
			
						'Content-Type': 'application/json',
		
					},
		
				})
				window.open("/dashboard_bikes");
			
				
	}

	// state = {
	// 	showMessage: false
	//   };
	 

	componentDidMount() { 
        
  let user=getUser()
        let data ; 
  
        axios.get( `https://appwithdjangoandreact.herokuapp.com/bikes/${user}`) 
        .then(res => { 
           
            data = res.data; 
            data.sort((a,b) => new Date(a.created_at) < new Date(b.created_at) ? 1 : -1);
            this.setState({ 
                details : data   
              
            }); 
        }) 
		// let data_computer ; 
		// axios.get( `http://127.0.0.1:8000/computer/${user}`) 
        // .then(res_computer => { 
           
        //     data_computer = res_computer.data_computer; 
        //     // data_computer.sort((a,b) => new Date(a.created_at) < new Date(b.created_at) ? 1 : -1);
        //     this.setState({ 
        //         details : data_computer   
              
        //     }); 
        // }) 
        
       
        
    } 

render(){




return(

<>

<h1>Bikes</h1>
<br/>
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

</>

)

}

}

export default Dashboard_bikes;