import { useEffect, useState } from "react"
import { Layout } from "./layout/Layout"
import { Main } from "./main/Main"
import { useDispatch } from "react-redux"
import { Width } from "../store/reducers"

export const Home = () => {
    const [width,setWidth] = useState<number>(window.innerWidth)
    const widthPatch = useDispatch()

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

    return (
        <Layout>
            <Main/>
        </Layout>
    )
}
