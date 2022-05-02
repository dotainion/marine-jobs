import React from "react";
import { Page } from "../container/Page";
import { Input } from "../widgets/Input";
import { BsTelephoneInbound } from 'react-icons/bs';
import { Button } from "../widgets/Buttons";


export const Contact = () =>{
    return(
        <Page cssBg={'contact-bg'} dark>
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
                    <Input title={'First Name'} />
                    <Input title={'Last Name'} />
                    <Input title={'Email'} />
                    <Input title={'Phone Number'} />
                    <Input />
                    <Button title={'Send'} dark />
                </div>
            </div>
        </Page>
    )
}