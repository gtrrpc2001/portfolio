import './Skillimg.scss'

type Props = {
    src:string
    alt:string
    text:string
    last?:boolean
}

export const Skillimg = ({src,alt,text,last=false}:Props) => {

    return (
        <div className={`skill_container_img_box ${!last ? 'bottom' : ''}`}>
            <img className='img' src={src} alt={alt}/>                                
            <text className='img_text'>
            {text}
            </text>
        </div>
    );
}