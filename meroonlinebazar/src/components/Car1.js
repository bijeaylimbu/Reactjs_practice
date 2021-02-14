import React,{useState,useEffect, Component} from 'react';
import Header from './Header';
import Footer from './Footer';
import './Car.css'
import { Link, useHistory,useParams,withRouter ,Redirect} from 'react-router-dom';
import {getUser} from './Common';
import { useAxiosGet } from './HttpRequest';
import { render } from 'react-dom';
import axios from 'axios'; 

import {
    Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button
  } from 'reactstrap';
import ViewPost from './ViewPost';
class Car extends Component  {

    // constructor(props) {
    //     super(props);
    //     this.state = {
    //       detail: [],
    //       isLoaded: false,
    //       index: 0
    //     };
    //     this.handleIndex = this.handleIndex.bind(this)
    //   }
    
    state = { 
        details : [], 
        
        
     
       
    } 

    viewpost(){
    
        window.open("/ViewPost");

    }
    constructor(props) {
        super(props);
        this.user= getUser();
     
       
    }


    checkUser=()=> {

        
        if ((this.user===undefined) || (this.user===null) ) {
        
            alert('please login for posting')
            window.open("/login");
           

        }else{
            window.open("/Add_car");
        }
    }

    componentDidMount() { 
        
  
        let data ; 
  
        axios.get('http://127.0.0.1:8000/addpost/') 
        .then(res => { 
           
            data = res.data; 
            data.sort((a,b) => new Date(a.created_at) < new Date(b.created_at) ? 1 : -1);
            this.setState({ 
                details : data   
              
            }); 
        }) 
        
       
        .catch(err => {}) 
    } 
        





render(){

 
   
    return (
        <>

<div> 
           
      </div> 

       
        <div className ="Car-main">
        <div className="category-main">
        <div className = "category">
                <h2><b>Categories</b></h2>
                <li className = 'categorys_item'> 
                    <Link to = '/cars' className= 'nav-Links' >
                    Car
                    </Link>
                </li> 
                <li className = 'categorys_item'> 
                    <Link to = '/motobikes' className= 'nav-Links' >
                    Bike/Scooter
                    </Link>
                </li> 
                <li className = 'categorys_item'> 
                    <Link to = '/house$land' className= 'nav-Links' >
                    House/Land
                    </Link>
                </li> 
                <li className = 'categorys_item'> 
                    <Link to = '/mobilephones' className= 'nav-Links' >
                    Mobile/Phone/
                    Tablets
                    </Link>
                </li> 
                <li className = 'categorys_item'> 
                    <Link to = '/laptopComputers' className= 'nav-Links' >
                    Computer/
                    Laptop
                    </Link>
                </li>  
                <li className = 'categorys_item'> 
                    <Link to = '/fashion' className= 'nav-Links' >
                    Fashion
                    </Link>
                </li>  

            </div>
            
            
            <div className="category-part">
                
                <a>Cars</a>
           
                <button  className= 'addcar_post' onClick={this.checkUser}>  Add Post</button>
                                            
                                            
               </div>


               <div>

               {this.state.details.map((detail, id) =>  ( 
               
            //    <div key={id}> 
            <div key={id}>
               <div > 
               <div className="contain1">
        <p>Car</p>
        
        <ViewPost
        detail={detail}
        />
        {detail.id}
        <div className= "images">
        <img src={detail.image} />
  
        {detail.description}
     
        </div>
         <p>{detail.username} </p>
           <button type = "submit" onClick={this.viewpost}> View Post</button>
</div> 
               </div> 
               </div> 
               ) 
           )} 














            </div>

        
</div>


</div>
        <Footer/>

       
        </>
    )
}

}

export default Car
