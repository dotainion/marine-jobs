import React, { useEffect, useRef, useState } from "react";
import { AiFillStar } from 'react-icons/ai';
import form from '../file/form.docx';
import $ from 'jquery';
import { useNavigate } from "react-router-dom";
import { routes } from "../Routes/Routes";
import { Layout } from "../Layout/Layout";
import { ShipImg } from "../Icons/ShipImg";
import ship from '../images/ship.png';
import { SecurityIcon } from "../Icons/SecurityIcon";


export const Home = () =>{
    const navigate = useNavigate();

    return(
        <Layout>
            <div data-home-head>
                <div>
                    <div data-larg-home-text>Get International Maritime</div>
                    <div data-larg-home-text>Certification for all seafearers</div>
                    <div onClick={()=>navigate(routes.application)} data-nav data-work-with-us-btn>Apply Now</div>
                </div>
                <div data-ship-container>
                    <img src={ship} alt="" />
                </div>
            </div>
            <div data-sub-text>Training</div>
            <div data-card-row>
                <div>
                    <div data-flex-center>
                        <div><SecurityIcon/></div>
                        <div>Standard of Training Certification and Watch keeping<div>(STCW)</div></div>
                    </div>
                </div>
                <div>
                    <div data-flex-center>
                        <div><SecurityIcon/></div>
                        <div>Security<div>Awareness</div></div>
                    </div>
                </div>
                <div>
                    <div data-flex-center>
                        <div><SecurityIcon/></div>
                        <div>Crowd<div>Management</div></div>
                    </div>
                </div>
            </div>
            <div data-sub-text>Services</div>
            <div data-card-row>
                <div>
                    <div data-flex-center>
                        <div><SecurityIcon/></div>
                        <div>Recruiting<div>(Agency)</div></div>
                    </div>
                </div>
                <div>
                    <div data-flex-center>
                        <div><SecurityIcon/></div>
                        <div>Professional<div>Maintenance</div><div>crew</div></div>
                    </div>
                </div>
                <div>
                    <div data-flex-center>
                        <div><SecurityIcon/></div>
                        <div>Vessle Audit<div>and Inspetion</div></div>
                    </div>
                </div>
            </div>
            <div style={{padding: '40px'}} />
        </Layout>
    )
}