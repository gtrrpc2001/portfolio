import { useEffect, useRef, useState } from "react"
import { Layout } from "./layout/Layout"
import { Main } from "./main/Main"
import { useDispatch } from "react-redux"
import { Width } from "../store/reducers"
import { getScrollView, scrollRef } from "../action/scroll"

export const Home = () => {
    const [width,setWidth] = useState<number>(window.innerWidth)
    const widthPatch = useDispatch()
    const aboutme = useRef<HTMLDivElement>(null);
    const skills = useRef<HTMLDivElement>(null);
    const archiving = useRef<HTMLDivElement>(null);
    const projects = useRef<HTMLDivElement>(null);
    const career = useRef<HTMLDivElement>(null);   
    const header = useRef<HTMLDivElement>(null);
      

    const resizeHandler = () => {
        setWidth(window.innerWidth)
    }

    useEffect(()=> {
        window.addEventListener('resize', resizeHandler)
        return () => window.removeEventListener('resize',resizeHandler)
    },[])

    useEffect(()=>{
        widthPatch(Width(width))    
    },[width,widthPatch])       

    const scrollToRef = (id:string) => {          
        switch(id){
            case "Aboutme":
                getScrollView(aboutme)                
                break;
            case "Skills":
                getScrollView(skills)
                break;
            case "Archiving":
                getScrollView(archiving)
                break;
            case "Projects":
                getScrollView(projects)
                break;
            case "Career":
                getScrollView(career)
                break;
            default :
                getScrollView(header)
                break;
        }        
    };       

    const getRefes = ():scrollRef => {
        const refes:scrollRef = {["Aboutme"]:aboutme,["Skills"]:skills,["Archiving"]:archiving,["Project"]:projects,["Career"]:career,["Head"]:header}        
        return refes
    }

    return (
        <Layout scroll={scrollToRef}>
            <Main scroll={scrollToRef} refes={getRefes()}/>
        </Layout>
    )
}
