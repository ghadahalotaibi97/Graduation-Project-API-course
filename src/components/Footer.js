import React from 'react';
import '../App.css';
import { AiOutlineFacebook, AiOutlineRetweet, AiOutlineInstagram } from "react-icons/ai";

function Footer() {
    return (<div className="footer">
        <i><AiOutlineFacebook /> </i>
        <i><AiOutlineRetweet /> </i>
        <i><AiOutlineInstagram /> </i>
    </div>);
}


export default Footer