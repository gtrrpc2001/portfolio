import './Header.scss'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../store/store';
import whiteLink from '../../assets/image/white-link.png'
import blackLink from '../../assets/image/black-link.png'

export const Header = () => {
    const [menuVisible,setMenuVisible] = useState<boolean>(false)
    const width = useSelector<RootState,number>((state) => state.width)
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(()=>{
        if(Number(width) < 750)
            setMenuVisible(true)
        else
            setMenuVisible(false)
    },[width])
    
    useEffect(() => {
        const handleScroll = () => {          
          const isScrolled = window.scrollY > 500;
          setIsScrolled(isScrolled);
        };
    
        window.addEventListener('scroll', handleScroll);
    
        return () => {
          window.removeEventListener('scroll', handleScroll);
        };
      }, []);

    const itemClassName = `header_menu_item ${isScrolled ? 'scroll' : ''}`

    return (
        <header className={`header ${isScrolled ? 'scroll' : ''}`}>
            {menuVisible ? (
                <FontAwesomeIcon className='menuIcon' icon={faBars} size='2x'/>
            ) : (
                <div className='header_content'>
                    <div className={`header_title ${isScrolled ? 'scroll' : ''}`}>
                        <img className={`header_img ${isScrolled ? 'scroll' : ''}`} src={!isScrolled ? whiteLink : blackLink} alt='header_img'/>
                        Portfolio
                    </div>
                    <div className='header_menu'>
                        <div className={itemClassName}>About me</div>
                        <div className={itemClassName}>Skills</div>
                        <div className={itemClassName}>Archiving</div>
                        <div className={itemClassName}>Projects</div>
                        <div className={itemClassName}>Career</div>
                    </div>
                </div>
            )}
        </header>
    );
}


