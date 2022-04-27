import React, { useEffect, useRef } from "react";
import { FiSettings } from 'react-icons/fi';
import { Route, Routes, useNavigate } from "react-router-dom";
import { Information } from "../Informations/Information";
import { routes } from "../Routes/Routes";
import $ from 'jquery';
import { Information2 } from "../Informations/Information2";
import { Information3 } from "../Informations/Information3";
import { Information4 } from "../Informations/Information4";


export const Home = () =>{
    const navigate = useNavigate();

    const navbarRef = useRef();

    const onNavigate = (route) =>{
        const top = $(navbarRef.current).offset().top;
        window.scrollTo({top: top, behavior: 'smooth'});
        navigate(route);
    }

    useEffect(()=>{
        
    }, []);

    return(
        <div>
            <div className="info-main-container">
                <div className="info-nav-container">
                    <h1>SOLUTIONS</h1>
                    <h2>WHAT YOU NEED</h2>
                    <p>some info to some extentalsdflasdlfa</p>
                    <div>
                        <button>read more</button>
                        <button className="prim-bg">contact us</button>
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
                        <span onClick={()=>onNavigate(routes.application)}>Application</span>
                        <span onClick={()=>onNavigate('/')}>Contact</span>
                        <span onClick={()=>onNavigate('/test2')}>Our Work</span>
                        <span onClick={()=>onNavigate('/test3')}>Our Process</span>
                        <span onClick={()=>onNavigate('/test4')}>About Us</span>
                    </div>
                </div>
            </div>
            <div className="info-route-container">
                <Routes>
                    <Route path="/" element={<Information/>} />
                    <Route path="/test2" element={<Information2/>} />
                    <Route path="/test3" element={<Information3/>} />
                    <Route path="/test4" element={<Information4/>} />
                </Routes>
            </div>
        </div>
    )
}