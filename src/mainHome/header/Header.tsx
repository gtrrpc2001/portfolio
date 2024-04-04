import './Header.scss'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faUser, faTimes } from "@fortawesome/free-solid-svg-icons";
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../store/store';

export const Header = () => {
    const [menuVisible,setMenuVisible] = useState<boolean>(false)
    const width = useSelector<RootState,number>((state) => state.width)

    const widthHandler = () => {        
        if(Number(width) < 750)
            setMenuVisible(true)
        else
            setMenuVisible(false)
    }

    useEffect(()=>{
        widthHandler()
    },[width,widthHandler])    

    return (
        <header className='header'>
            {menuVisible ? (
                <FontAwesomeIcon className='menuIcon' icon={faBars} size='2x'/>
            ) : (
                <h2>protfolio</h2>
            )}
        </header>
    );
}


