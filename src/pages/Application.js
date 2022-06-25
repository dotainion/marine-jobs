import React, { useRef } from "react";
import { Page } from "../container/Page";
import { Layout } from "../Layout/Layout";
import { email } from "../utils/Email";


export const Application = () =>{
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
    return(
        <Layout cssBg={'application-bg'}>
            <div className="application-form">
                <div className="application-form-cc">
                    <h1>Apply Form</h1>
                    <seelect title={'PROGRAM'} inputRef={programRef} >

                    </seelect>
                    <input title={'NAME'} inputRef={nameRef} />
                    <input title={'EMAIL'} inputRef={emailRef} />
                    <input title={'PHONE'} inputRef={phoneNumberRef} />
                    <input inputRef={programRef} />
                    <button onClick={onEmail} title={'Send'} dark ></button>
                </div>
            </div>
        </Layout>
    )
}