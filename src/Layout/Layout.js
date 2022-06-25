import React from "react";
import { NavigationBar } from "../components/NavigationBar";
import { Page } from "../container/Page";


export const Layout = ({children}) =>{
    return(
        <Page>
            <NavigationBar/>
            {children}
        </Page>
    )
}