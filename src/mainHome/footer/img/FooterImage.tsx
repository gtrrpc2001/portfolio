import './FooterImage.scss'

type Props = {
    src:string
    addClass:boolean
}

export const FooterImage = ({src,addClass}:Props) => {

    const handlerClick = () => {
        if(addClass){
            window.open('https://github.com/gtrrpc2001','_blank')
        }else{
            window.open('https://www.instagram.com/choong_heon','_blank')
            
        }   
    }
    const text = addClass ? 'GitHub' : 'Instagram'
    return (
        <div className={`footer_icon_wrapper ${addClass ? 'bgcolor' : ''}`}>
            <img className='image' src={src} alt='img' onClick={handlerClick}/>
            <span className="tooltip">{text}</span>
        </div>
    );
}