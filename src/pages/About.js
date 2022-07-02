import React from "react";
import { useNavigate } from "react-router-dom";
import { Page } from "../container/Page";
import { Layout } from "../Layout/Layout";
import { routes } from '../Routes/Routes';


export const About = () =>{
    const navigate = useNavigate();
    return(
        <Layout>
            <div className="container bg-white text-dark mt-5 mb-5 p-4">
                <h5>Maritime Training Certificate Program offer by Grenada Maritime Training Center</h5>
                <h5>What is a STCW course certificate?</h5>
                <p>STCW stands for (Standards of Training, Certification and Watchkeeping). It is a worldwide convention that ensures a lateral standard of training is achieved across all countries in the world.</p>
                <h5>Why is STCW important to seafarers?</h5>
                <p>An STCW training gives the students real life experience of what being onboard really feels like before they even board their first real ship. This makes them confident enough to do their job because they already have the background knowledge and skills which can help you be at par with other maritime practitioners.</p>
                <h5>Why Grenada Maritime Training Center?</h5>
                <p>Grenada Maritime Training Center has partnered with SeaView Corporate Inc. from Panama to provide training and certification to persons interested in obtaining a STCW Certificate. Presently persons wishing to obtain an STCW certificate must travel to Trinidad and Tobago to complete the training and examination now it's being done right here.</p>
                <h5>We also offer a Recertification examination at Grenada Maritime Training Center.</h5>
                <p>To obtain an STCW endorsement on the rating or license that you hold, you'll need to meet the minimum requirements such as age, sea-service, training and onboard assessment. </p>
                <p>To receive STCW endorsements, you need to complete U.S. Coast Guard-approved maritime training courses that prove your competency. This course is offered by Grenada Maritime Training Center under the Panama Flag.</p>
                <p>Since February 1, 2002, you must fully comply with STCW-95 and now STCW 2010 and obtain an STCW international endorsement on your Medical Mariner Credential (MMC). You must fully comply with all of the requirements of STCW-2010 to be issued your first MMC valid for service on a seagoing vessel.</p>
                <p className="w-50">STCW 2010 Basic Safety Training
                    Elementary First Aid (EFA)
                    Fire Prevention and Fire Fighting (FPFF)
                    Personal Survival Techniques (PST)
                    Personal Safety and Social Responsibility (PSSR)
                    Proficiency in Security Awareness (PSA)
                    LIST OF STCW MANDATORY TRAINING COURSES. ANNEX I TO THE STCW CIRCULAR 2018-02. ...
                    Safety Training for. Personnel Providing. ...
                    Passenger Ship Crowd. Management Training. ...
                    Passenger Ship Crisis. Management and. ...
                    Passenger Safety, ...
                    Elementary First Aid. ...
                    LIST OF STCW MANDATORY TRAINING COURSES. ...
                    Passenger Ship Crowd</p>
                <h5>Who needs STCW training?</h5>
                <p>STCW training courses, also known as the Ship training, certification and watchkeeping courses are one of the basic necessities for any person to qualify as a mariner or to work on a Cruise Liner. A seafarer must be well trained in STCW courses before it can be deemed safe for him to be out on high waters.</p>
                <h5>List of Courses</h5>
                <p className="w-50">Basic Training (BT)
                    Proficiency in Survival Craft & Rescue Boat (PSCRB)
                    Proficiency in Fast Rescue Boat (PFRB, 
                    Advanced in fire fighting</p>
            </div>
        </Layout>
    )
}