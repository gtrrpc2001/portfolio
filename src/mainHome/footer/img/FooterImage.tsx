import './FooterImage.scss'

type Props = {
    src:string
    addClass:boolean
}

export const FooterImage = ({src,addClass}:Props) => {
    return (
        <div className={`footer_icon_wrapper ${addClass ? 'bgcolor' : ''}`}>
            <img className='image' src={src} alt='img'/>
        </div>
    );
}