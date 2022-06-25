import React, { useEffect, useRef, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Logo } from "../Icons/Logo";
import { routes } from "../Routes/Routes";
import { IoMdMenu } from 'react-icons/io';
import $ from 'jquery';


export const NavigationBar = () =>{
    const [active, setActive] = useState();

    const navigate = useNavigate();
    const location = useLocation();

    const navRef = useRef();
    const backdropRef = useRef();

    const onShowNavOnMobile = (e) =>{
        $(navRef.current).addClass('show-nav')
        $(backdropRef.current).addClass('show-nav');
    }

    const onHideNavOnMobile = (e) =>{
        $(navRef.current).removeClass('show-nav')
        $(backdropRef.current).removeClass('show-nav');
    }

    useEffect(()=>{
        setActive(location.pathname);
    }, []);
    return(
        <div className="nav-container">
            <div>
                <Logo/>
                <div data-catch-phrase>Safy At Sea</div>
                <IoMdMenu data-menu onClick={onShowNavOnMobile} />
            </div>
            <div ref={navRef} data-nav-link-container>
                <div onClick={()=>navigate(routes.homeDefault)} data-nav-underline data-nav data-nav-active={active == routes.homeDefault}>Home</div>
                <div onClick={()=>navigate(routes.application)} data-nav-underline data-nav data-nav-active={active == routes.application}>Enroll</div>
                <div onClick={()=>navigate(routes.about)} data-nav-underline data-nav data-nav-active={active == routes.about}>About Us</div>
                <div onClick={()=>navigate(routes.contact)} data-work-with-us-btn data-nav data-nav-active={active == routes.contact}>Work With Us</div>
            </div>
            <div ref={backdropRef} data-backdrop onClick={onHideNavOnMobile} />
        </div>
    )
}