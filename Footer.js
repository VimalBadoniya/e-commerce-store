import React from "react";
import "./Footer.css"
import {AiFillYoutube} from "react-icons/ai"; 
import {ImFacebook2} from "react-icons/im"; 
import {BsSpotify} from "react-icons/bs"; 

const Footer = ()=>{
    return (
        <div className="footerdiv">
            <span>The Generics</span>
            <span>Follow Us On
                <button className="btn"><AiFillYoutube/></button>
                <button className="btn"><ImFacebook2/></button>
                <button className="btn"><BsSpotify/></button>
            </span>
        </div>
    )
};

export default Footer;