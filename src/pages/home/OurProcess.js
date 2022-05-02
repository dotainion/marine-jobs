import React from "react";
import { useNavigate } from "react-router-dom";
import { routes } from '../../Routes/Routes';
import { Button } from "../../widgets/Buttons";


export const OurProcess = () =>{
    const navigate = useNavigate();
    return(
        <div style={{textAlign: 'center',color: 'red'}}>
            <h1>Our Process.</h1>
        </div>
    )
}