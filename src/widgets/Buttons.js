import React from "react";


export const Button = ({title, dark, onClick}) =>{
    return(
        <button onClick={onClick} className={`btn ${dark && 'btn-dark'}`}>{title}</button>
    )
}