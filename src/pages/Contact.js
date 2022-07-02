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
        <Layout>
            <div className="container mt-4">
                <h2>We'd love to hear from you</h2>
                <p>Whether you have a question, pricing, need a job or just want to be edicated about working on different shipping vessels</p>
            </div>
            <div className="container d-md-flex bg-divider-opicity">
                <div className="col-md-6 m-4">
                    <label className="mt-3">First Name</label>
                    <input className="form-control form-text" ref={firstNameRef} placeholder="John" />
                    <label className="mt-3">Last Name</label>
                    <input className="form-control form-text" ref={lastNameRef} placeholder="Wick" />
                    <label className="mt-3">Email</label>
                    <input className="form-control form-text" ref={emailRef} placeholder="example@example.com" />
                    <label className="mt-3">Phone Number</label>
                    <input className="form-control form-text" ref={phoneNumberRef} placeholder="1 473 459 8999" />
                    <label className="mt-3">Program</label>
                    <select className="form-control form-select" ref={programRef} >

                    </select>
                    <label className="mt-3">Additional Information</label>
                    <textarea className="form-control form-text" ref={messageRef} />
                    <button className="btn btn-danger float-end mt-3 w-25" onClick={onEmail}>Send</button>
                </div>
                <div className="col-md-6 d-flex text-md-center align-items-center contact-bg">
                    <div className="m-auto">
                        <span className="">
                            <BsTelephoneInbound className="display-1 mt-5 mb-5 text-danger" />
                        </span>
                        <h3>Contact Information</h3>
                        <div className="d-flex">
                            <div>Company:</div>
                            <div className="ms-2 fw-bold">Some Company Name</div>
                        </div>
                        <div className="d-flex">
                            <div>Email:</div>
                            <div className="ms-2 fw-bold">Some Company Name</div>
                        </div>
                        <div className="d-flex">
                            <div>Phone Number:</div>
                            <div className="ms-2 fw-bold">Some Company Name</div>
                        </div>
                        <div className="d-flex">
                            <div>Address:</div>
                            <div className="ms-2 fw-bold">Some Company Name</div>
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    )
}