import React, { useEffect, useRef } from "react";
import { FiSettings } from 'react-icons/fi';
import { Route, Routes, useLocation, useNavigate } from "react-router-dom";
import { Offers } from "./Offers";
import { routes } from "../../Routes/Routes";
import $ from 'jquery';
import { Page } from "../../container/Page";
import { Button } from "../../widgets/Buttons";
import { OurWork } from "./OurWork";
import { OurProcess } from "./OurProcess";


export const Home = () =>{
    const navigate = useNavigate();

    const navbarRef = useRef();
    const location = useLocation();

    const onNavigate = (route=null) =>{
        route && navigate(route);
        const top = $(navbarRef.current).offset().top;
        setTimeout(()=>window.scrollTo({top: top, behavior: 'smooth'}), 50);
    }

    useEffect(()=>{
        if (location.state === 'scrollTop'){
            onNavigate();
        }
    }, []);

    return(
        <Page cssBg={'home-bg'} hide>
            <div className="info-nav-container">
                <h1>SOLUTIONS</h1>
                <h2>WHAT YOU NEED</h2>
                <p>some info to some extentalsdflasdlfa</p>
                <div>
                    <Button onClick={()=>{}} title={'Read More'} />
                    <Button onClick={()=>onNavigate(routes.contact)} title={'Contact Us'} dark />
                </div>
            </div>
            <div className="info-card-container">
                <div className="info-card rounded-l">
                    <FiSettings/>
                    <h5>EASY TO USE</h5>
                    <div>____</div>
                    <p>A corporate website will not make a splash. Therefore, the best strategy is to minimize the headline to bring the content area higher.</p>
                    <h6>SOME INFO</h6>
                    <div>____</div>
                </div>
                <div className="info-card">
                    <FiSettings/>
                    <h5>EASY TO USE</h5>
                    <div>____</div>
                    <p>Therefore, the best strategy is to minimize the headline to bring the content area higher.</p>
                    <h6>SOME INFO</h6>
                    <div>____</div>
                </div>
                <div className="info-card rounded-r">
                    <FiSettings/>
                    <h5>EASY TO USE</h5>
                    <div>____</div>
                    <p>Therefore, the best strategy is to minimize the headline to bring the content area higher.</p>
                    <h6>SOME INFO</h6>
                    <div>____</div>
                </div>
            </div>
            <div ref={navbarRef} className="info-nav-btns-container">
                <div>hi tehre</div>
                <div className="info-nav-btns">
                    <span onClick={()=>onNavigate(routes.homeDefault)}>Offers</span>
                    <span onClick={()=>onNavigate(routes.application)}>Application</span>
                    <span onClick={()=>onNavigate(routes.contact)}>Contact</span>
                    <span onClick={()=>onNavigate(routes.ourWork)}>Our Work</span>
                    <span onClick={()=>onNavigate(routes.ourProcess)}>Our Process</span>
                    <span onClick={()=>onNavigate(routes.about)}>About Us</span>
                </div>
            </div>
            <Routes>
                <Route path={routes.homeDefault} element={<Offers/>} />
                <Route path={routes.ourWork} element={<OurWork/>} />
                <Route path={routes.ourProcess} element={<OurProcess/>} />
            </Routes>
        </Page>
    )
}