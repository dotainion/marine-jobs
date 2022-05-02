import React from "react";
import { useNavigate } from "react-router-dom";
import { Page } from "../container/Page";
import about from '../images/about.jpg';
import { routes } from '../Routes/Routes';
import { Button } from "../widgets/Buttons";


export const About = () =>{
    const navigate = useNavigate();
    return(
        <Page cssBg={'about-page'} dark>
            <div className="about-container">
                <div className="about-us">
                    <h1>ABOUT US</h1>
                    <div>Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</div>
                    <Button onClick={()=>navigate(routes.contact)} title={'Learn More'} dark />
                </div>
                <div className="about-image">
                    <img src={about} alt='' />
                </div>
            </div>
            <div className="about-bottom-container">
                <h5>Lorem Ipsum is simply</h5>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting</p>
            </div>
        </Page>
    )
}