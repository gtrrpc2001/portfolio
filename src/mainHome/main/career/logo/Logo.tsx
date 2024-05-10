import './Logo.scss';


type Props = {
    logo:string
}

export const Logo = ({logo}:Props) => {
    return (
        
        <div className='career_logo_container'>
            <div className='career_logo_wrapper'>
                <img className='career_logo' src={logo} alt='career_logo'/>                
            </div>
        </div>
        
    );
}