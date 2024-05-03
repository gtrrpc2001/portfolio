import './Skillimg.scss'

type Props = {
    src:string
    alt:string
    text:string
    last?:boolean
}

export const Skillimg = ({src,alt,text,last=false}:Props) => {

    const img_ClassName = `img ${text === '' ? 'img_size' : ''}`


    return (
        <div className={`skill_container_img_box ${!last ? 'bottom' : ''}`}>
            <div className='skill_container_img_wapper'>
                <img className={img_ClassName} src={src} alt={alt}/>                                
            </div>
            <text className='img_text'>
            {text}
            </text>
        </div>
    );
}