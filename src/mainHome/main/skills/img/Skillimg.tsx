import './Skillimg.scss'

type Props = {
    src:string
    alt:string
    text:string
    last?:boolean
}

export const Skillimg = ({src,alt,text,last=false}:Props) => {
    const check = text === '' ? 'img_size' : ''
    const img_ClassName = `img ${check}`
    const img_wrapper = `skill_container_img_wapper ${check}`

    return (
        <div className={`skill_container_img_box ${!last ? 'bottom' : ''}`}>
            <div className={img_wrapper}>
                <img className={img_ClassName} src={src} alt={alt}/>                                
            </div>
            <text className={'img_text'}>
            {text}
            </text>
        </div>
    );
}