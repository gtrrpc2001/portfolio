import { PropsWithChildren } from "react";
import { Footer } from "../footer/Footer";
import { Header } from "../header/Header";
import './Layout.scss'

export const Layout = ({children}:PropsWithChildren) => {
    return (
        <div className="layout">        
            <Header/>
            {children}
            <Footer/>
        </div>
    );
}