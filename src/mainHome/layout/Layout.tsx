import { PropsWithChildren } from "react";
import { PageUp } from "../../component/pageup/PageUp";
import { Footer } from "../footer/Footer";
import { Header } from "../header/Header";
import './Layout.scss'
import { ScrollProps } from "../../action/scroll";

export const Layout = ({children,scroll}:PropsWithChildren & ScrollProps) => { 

    return (
        <div className="layout">        
            <Header scroll={scroll}/>
            {children}
            <PageUp scroll={scroll}/>            
            <Footer/>
        </div>
    );
}