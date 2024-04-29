import './ImgText.scss'

type Props = {
    src:string
    label:string
    text:string
}

export const ImgText = ({src,label,text}:Props) => {
    return (
        <div className='aboutme_basic_info_wrapper_'>
            <div className='aboutme_basic_info_wrapper__'>
                <img className='aboutme_basic_info_img' src={src} alt='aboutme_info_img'/>
            </div>
            <div className='aboutme_basic_info_text'>
                <div className='aboutme_basic_info_text_label'>
                    {label}
                </div>
                <div className='aboutme_basic_info_text_name'>
                    {text}
                </div>
            </div>
        </div>
    );
}