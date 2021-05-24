import React from 'react';
import "../css/Footer.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faYoutube,
    faFacebook,
    faTwitter,
    faInstagram
  } from "@fortawesome/free-brands-svg-icons";
  import { Link } from 'react-router-dom';
// import { AiFillGmail } from 'react-icons/ai';

function Footer(){
    return(
         <div className="main-footer">
              <div className="col">

              <div class="social-container">
              <a href="https://www.facebook.com/ramita.shr"
        className=" social-media">
        <FontAwesomeIcon icon={faFacebook} size="1x" />
      </a>
      <a href="https://twitter.com/RamitaShresth14"
        className="social-media">
        <FontAwesomeIcon icon={faTwitter} size="1x" />
      </a>
      <a href="https://www.instagram.com/ramitashr/"
        className="social-media">
        <FontAwesomeIcon icon={faInstagram} size="1x" />
      </a>
      <a href="https://www.youtube.com/c/jamesqquick"
        className="social-media">
        <FontAwesomeIcon icon={faYoutube} size="1x" />
      </a>
</div>
              
              {/* <AiFillGmail/> */}

                 <h4>
                     <b>Contact Us</b>
                 </h4>
                 <p> Mero Online Bazar<br></br>
                    Boudhha,Kathmandu, Nepal<br></br>
                   
                 </p>
                    
                </div>

              
            </div>

        );
}

export default Footer