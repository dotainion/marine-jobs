import React from "react";


export const CardSection = ({image, animate, children}) =>{
    return(
        <div className="card-section" data-aos={animate}>
            <img src={image} alt="" />
            <div className="card-section-contents">{children}</div>
        </div>
    )
}