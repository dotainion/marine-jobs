import React from "react";
import { useNavigate } from "react-router-dom";
import { Page } from "../container/Page";
import about from '../images/about.jpg';
import { Layout } from "../Layout/Layout";
import { routes } from '../Routes/Routes';


export const About = () =>{
    const navigate = useNavigate();
    return(
        <Layout cssBg={'about-page'} dark>
            <div className="about-container">
                <div className="about-us">
                    <h1>ABOUT US <span style={{marginRight: '20px'}} /></h1>
                    <div>Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</div>
                    <button onClick={()=>navigate(routes.contact)} title={'Learn More'} dark ></button>
                </div>
                <div className="about-image">
                    <img src={about} alt='' />
                </div>
            </div>
            <div className="about-bottom-container">
                <h5>Lorem Ipsum is simply</h5>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting</p>
            </div>
        </Layout>
    )
}