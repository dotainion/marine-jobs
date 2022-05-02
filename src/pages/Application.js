import React from "react";
import { Page } from "../container/Page";
import { Button } from "../widgets/Buttons";
import { Input } from "../widgets/Input";


export const Application = () =>{
    return(
        <Page cssBg={'application-bg'}>
            <div className="application-form">
                <div className="application-form-cc">
                    <h1>Application Form</h1>
                    <Input title={'NAME'} />
                    <Input title={'EMAIL'} />
                    <Input title={'PHONE'} />
                    <Input />
                    <Button title={'Send'} dark />
                </div>
            </div>
        </Page>
    )
}