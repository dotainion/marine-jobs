import React from "react";
import { Input } from "../widgets/Input";


export const ApplicationForm = () =>{
    return(
        <div>
            <div className="application-form">
                <h1>Application Form</h1>
                <Input title={'NAME'} />
                <Input title={'NAME'} />
                <Input title={'NAME'} />
            </div>
        </div>
    )
}