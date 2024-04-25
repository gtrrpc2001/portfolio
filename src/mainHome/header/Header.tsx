import './Header.scss'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../store/store';
import link from '../../assets/image/white-link.png'

export const Header = () => {
    const [menuVisible,setMenuVisible] = useState<boolean>(false)
    const width = useSelector<RootState,number>((state) => state.width)

    useEffect(()=>{
        if(Number(width) < 750)
            setMenuVisible(true)
        else
            setMenuVisible(false)
    },[width])   

    return (
        <header className='header'>
            {menuVisible ? (
                <FontAwesomeIcon className='menuIcon' icon={faBars} size='2x'/>
            ) : (
                <div className='header_content'>
                    <div className='header_title'>
                        <img className='header_img' src={link} alt='header_img'/>
                        Portfolio
                    </div>
                    <div className='header_menu'>
                        <div className='header_menu_item'>About me</div>
                        <div className='header_menu_item'>Skills</div>
                        <div className='header_menu_item'>Archiving</div>
                        <div className='header_menu_item'>Projects</div>
                        <div className='header_menu_item'>Career</div>
                    </div>
                </div>
            )}
        </header>
    );
}


