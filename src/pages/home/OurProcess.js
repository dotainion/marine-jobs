import React from "react";
import { useNavigate } from "react-router-dom";
import { routes } from '../../Routes/Routes';
import { Button } from "../../widgets/Buttons";


export const OurProcess = () =>{
    const navigate = useNavigate();
    return(
        <div style={{textAlign: 'center',color: 'red'}}>
            <h1>Our Process.</h1>
            <p style={{color: 'black', width: '90%', margin: 'auto'}}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                    Why do we use it?</p>
        </div>
    )
}