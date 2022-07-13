import React, { useEffect, useRef, useState } from "react";
import { AiFillStar } from 'react-icons/ai';
import form from '../file/form.docx';
import $ from 'jquery';
import { useNavigate } from "react-router-dom";
import { routes } from "../Routes/Routes";
import { Layout } from "../Layout/Layout";
import ship from '../images/ship.png';
import { CardInfo } from "../components/CardInfo";
import security from '../images/security.png';
import AffiliateLogo from "../images/affiliate.png";
import crowd from "../images/crowd.png";
import people from "../images/people.png";
import shipPro from "../images/shipPro.png";
import vessle from "../images/vessle.png";


export const Home = () =>{
    const [trainingInfo, setTrainingInfo] = useState();
    const [serviceInfo, setServiceInfo] = useState();

    const navigate = useNavigate();

    const training = [
        {
            icon: <img src={AffiliateLogo} alt="" />,
            message: <div>Standard of Training Certification and Watch keeping<div>(STCW)</div></div>,
            info: `STCW sets minimum qualification standards for masters, 
            officers and watch personnel on seagoing merchant ships and large yachts. 
            STCW establishes minimum basic requirements on training, 
            certification and watchkeeping for seafarers. 
            The Convention is that it applies to ships of non-party states
             when visiting ports of States which are Parties to the Convention.`
        },{
            icon: <img src={security} alt="" />,
            message: <div>Security<div>Awareness</div></div>,
            info: `Maritime Security Awareness is a 4 hour USCG & STCW approved course 
            that will provide students with the knowledge required to perform 
            duties in connection with a security plan but are involved in the work of ports, 
            facilities, and vessels and are therefore affected by the requirements of the 
            Maritime Transportation Security`
        },{
            icon: <img src={crowd} alt="" />,
            message: <div>Crowd<div>Management</div></div>,
            info: `This course on Crowd Management focuses on assisting passengers in an emergency, 
            how to deal with large crowds, including their safe movement and discusses 
            human behaviour in an emergency. It is mandatory for all crew members who have a 
            duty to assist passengers in emergencies to have training.`
        }
    ];

    const services = [
        {
            icon: <img src={people} alt="" />,
            message: <div>Recruiting<div>(Agency)</div></div>,
            info: ``
        },{
            icon: <img src={shipPro} alt="" />,
            message: <div>Professional<div>Maintenance</div><div>crew</div></div>,
            info: `We are a consultant that offer services in 
            engine room inspectin and maintaince , tank cleaning painting chipping etc`
        },{
            icon: <img src={vessle} alt="" />,
            message: <div>Vessle Audit<div>and Inspetion</div></div>,
            info: `We are a team of Professionals with the ability to provide professional inspections`
        }
    ];

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
                {training.map((data, key)=>(
                    <CardInfo icon={data.icon} message={data.message} info={data.info} onSelect={setTrainingInfo} key={key}/>
                ))}
                <span className="d-block text-dark m-auto hide-on-mobile">{trainingInfo}</span>
            </div>
            <div data-sub-text>Services</div>
            <div data-card-row>
                {services.map((data, key)=>(
                    <CardInfo icon={data.icon} message={data.message} info={data.info} onSelect={setServiceInfo} key={key}/>
                ))}
                <span className="d-block text-dark m-auto hide-on-mobile">{serviceInfo}</span>
            </div>
            <div style={{padding: '40px'}} />
        </Layout>
    )
}