import './Header.scss'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import whiteLink from '../../assets/image/white-link.png'
import blackLink from '../../assets/image/black-link.png'
import { ScrollProps, useScroll } from '../../action/scroll';
import { useMenuVisible } from '../../action/menu';

export const Header = ({scroll}:ScrollProps) => {
    const isScrolled = useScroll();
    const menuVisible = useMenuVisible();
    const menuItems = ['Aboutme', 'Skills', 'Archiving', 'Projects', 'Career'];
    const itemClassName = `header_menu_item ${isScrolled ? 'scroll' : ''}`;   

    return (
        <header className={`header ${isScrolled ? 'scroll' : ''}`} >
            {menuVisible ? (
                <FontAwesomeIcon className='menuIcon' icon={faBars} size='2x'/>
            ) : (
                <div className='header_content'>
                    <div className={`header_title ${isScrolled ? 'scroll' : ''}`} onClick={()=>scroll('')}>
                        <img className={`header_img ${isScrolled ? 'scroll' : ''}`} src={!isScrolled ? whiteLink : blackLink} alt='header_img'/>
                        Portfolio
                    </div>
                    <div className='header_menu'>
                        {menuItems.map(item => (                            
                            <div className={itemClassName} onClick={() => scroll(item)}>{item == "Aboutme" ? "About me" : item}</div>
                        ))}
                    </div>
                </div>
            )}
        </header>
    );
}


