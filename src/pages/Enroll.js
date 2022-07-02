import React, { useEffect, useRef } from "react";
import { Page } from "../container/Page";
import { Layout } from "../Layout/Layout";
import { email } from "../utils/Email";
import $ from 'jquery';


export const Enroll = () =>{
    const programRef = useRef();
    const nameRef = useRef();
    const emailRef = useRef();
    const phoneNumberRef = useRef();
    const messageRef = useRef();

    const onEmail = () =>{
        email.send(
            nameRef.current.value, 
            'CCA', 
            phoneNumberRef.current.value, 
            emailRef.current.value, 
            programRef.current.value, 
            messageRef.current.value
        )
    }

    useEffect(()=>{
        
    }, []);
    return(
        <Layout>
            <div className="container mt-4 mb-md-5">
                <h1>Apply Form</h1>
            </div>
            <div className="container d-md-flex bg-divider-opicity">
                <div className="col-md-6 m-4 pps">
                    <label className="mt-3">FULL NAME</label>
                    <input className="form-control form-text" ref={nameRef} placeholder="John Wick" />
                    <label className="mt-3">EMAIL</label>
                    <input className="form-control form-text" ref={emailRef} placeholder="example@example.com" />
                    <label className="mt-3">PHONE NUMBER</label>
                    <input className="form-control form-text" ref={phoneNumberRef} placeholder="1 473 459 8999" />
                    <label className="mt-3">PROGRAM</label>
                    <select className="form-control form-select" ref={programRef} >
                        <option value="3">Three</option>
                    </select>
                    <button className="btn btn-danger float-end mt-3 w-25" onClick={onEmail}>Enroll</button>
                </div>
                <div className="col-md-6 contact-bg" style={{height: '440px'}}>

                </div>
            </div>
        </Layout>
    )
}