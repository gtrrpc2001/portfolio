import './Footer.scss'
import github from '../../../src/assets/image/git-hub-icon.png';
import insta from '../../../src/assets/image/instagram.png';
import { FooterImage } from './img/FooterImage';

export const Footer = () => {
    return (
        <footer className='footer'>
            <div className='footer_icon'>
                <FooterImage src={github} addClass={true}/>
                <FooterImage src={insta} addClass={false}/>                
            </div>
            <div className='footerText'>
                {"© 2024. Lee Choong Heon. All rights reserved."}
            </div>
        </footer>
    );
}