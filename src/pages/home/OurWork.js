import React from "react";
import { useNavigate } from "react-router-dom";
import { routes } from '../../Routes/Routes';
import { Button } from "../../widgets/Buttons";


export const OurWork = () =>{
    const navigate = useNavigate();
    return(
        <div style={{textAlign: 'center', color: 'green'}}>
            <h1>Our Work</h1>
        </div>
    )
}