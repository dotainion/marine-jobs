import React, { useRef } from "react";
import { Page } from "../container/Page";
import { BsTelephoneInbound } from 'react-icons/bs';
import { email } from "../utils/Email";
import { Layout } from "../Layout/Layout";


export const Contact = () =>{
    const programRef = useRef();
    const firstNameRef = useRef();
    const lastNameRef = useRef();
    const emailRef = useRef();
    const phoneNumberRef = useRef();
    const messageRef = useRef();

    const onEmail = () =>{
        email.send(
            firstNameRef.current.value + ' ' + firstNameRef.current.value, 
            'CCA', 
            phoneNumberRef.current.value, 
            emailRef.current.value, 
            programRef.current.value, 
            messageRef.current.value
        )
    }
    return(
        <Layout cssBg={'contact-bg'} dark>
            <div className="contact-container">
                <h2>We'd love to hear from you</h2>
                <p>Whether you have a question, pricing, need a job or just want to be edicated about working on different shipping vessels</p>
            </div>
            <div className="contact-form">
                <div>
                    <span>
                        <BsTelephoneInbound/>
                    </span>
                    <h3>Contact Information</h3>
                    <div className="flex">
                        <div><b>Company:</b></div>
                        <div>Some Company Name</div>
                    </div>
                    <div className="flex">
                        <div><b>Email:</b></div>
                        <div>Some Company Name</div>
                    </div>
                    <div className="flex">
                        <div><b>Phone Number:</b></div>
                        <div>Some Company Name</div>
                    </div>
                    <div className="flex">
                        <div><b>Address:</b></div>
                        <div>Some Company Name</div>
                    </div>
                </div>
                <div className="application-form-cc" style={{boxShadow: 'none',}}>
                    <select title={'Program'} inputRef={programRef} >

                    </select>
                    <input title={'First Name'} inputRef={firstNameRef} />
                    <input title={'Last Name'} inputRef={lastNameRef} />
                    <input title={'Email'} inputRef={emailRef} />
                    <input title={'Phone Number'} inputRef={phoneNumberRef} />
                    <input inputRef={messageRef} />
                    <button onClick={onEmail} title={'Send'} dark ></button>
                </div>
            </div>
        </Layout>
    )
}