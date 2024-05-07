import './Logo.scss';
import logo from '../../../../assets/image/career/click.jpg';

export const Logo = () => {
    return (
        <div className='career_logo_container'>
            <div className='career_logo_wrapper'>
                <img className='career_logo' src={logo} alt='career_logo'/>
            </div>
        </div>
    );
}