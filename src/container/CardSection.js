import React from "react";
import img from '../images/ship2.avif';


export const CardSection = ({animate, children}) =>{
    return(
        <div className="card-section" data-aos={animate}>
            <img src={img} alt="" />
            <div className="card-section-contents">{children}</div>
        </div>
    )
}