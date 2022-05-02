import React, { useEffect, useRef } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import { routes } from "../Routes/Routes";
import { MdMenu } from 'react-icons/md';
import $ from 'jquery';


export const Page = ({cssBg, dark, hide, children}) =>{
    const navigate = useNavigate();

    const manuOptionRef = useRef();
    const backdropRef = useRef();

    const onToggle = () =>{
        if ($(manuOptionRef.current).hasClass('show-md')){
            $(backdropRef.current).removeClass('show-md');
            $(manuOptionRef.current).removeClass('show-md');
        }else{
            $(backdropRef.current).addClass('show-md');
            $(manuOptionRef.current).addClass('show-md');
        }
    }

    const onNavigate = (route, thenScrollTop) =>{
        navigate(route, thenScrollTop ? {state: 'scrollTop'} : {});
        onToggle();
    }

    return(
        <div className={`page ${cssBg || ''}`}>
            <div className={`${hide && 'hide'}`}>
                <MdMenu onClick={onToggle} className="navigate-menu-btn" style={{color: dark && 'black'}} />
                <div className="navigate-logo">MARINE JOB</div>
                <div ref={manuOptionRef} className="navigate-header">
                    <div onClick={()=>onNavigate(routes.homeDefault, true)}>home</div>
                    <div onClick={()=>onNavigate(routes.application)}>Application</div>
                    <div onClick={()=>onNavigate(routes.contact)}>Contact</div>
                    <div onClick={()=>onNavigate(routes.ourWork, true)}>Our Work</div>
                    <div onClick={()=>onNavigate(routes.ourProcess, true)}>Our Process</div>
                    <div onClick={()=>onNavigate(routes.about)}>About Us</div>
                </div>
                <div ref={backdropRef} onClick={onToggle} className="navigate-md-backdrop" />
            </div>
            {children}
        </div>
    )
}