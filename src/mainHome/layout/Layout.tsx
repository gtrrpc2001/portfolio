import { PropsWithChildren, useRef } from "react";
import { PageUp } from "../../component/pageup/PageUp";
import { Footer } from "../footer/Footer";
import { Header } from "../header/Header";
import './Layout.scss'

type Props = {
    scroll:(id:string) => void,
}

export const Layout = ({children,scroll}:PropsWithChildren & Props) => { 

    return (
        <div className="layout">        
            <Header scroll={scroll}/>
            {children}
            <PageUp/>            
            <Footer/>
        </div>
    );
}