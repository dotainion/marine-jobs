import React, { useEffect, useRef } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import { routes } from "../Routes/Routes";
import { MdMenu } from 'react-icons/md';
import $ from 'jquery';


export const Page = ({children}) =>{
    const navigate = useNavigate();

    useEffect(()=>{
        
    }, []);

    return(
        <div className="page">
            {children}
        </div>
    )
}