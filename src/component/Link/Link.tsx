import './Link.scss'

type Props = {
    src:string
}

export const Lint = ({src}:Props) => {
    return (
        <div className='section_title_link_wrapper'>
            <img className='section_title_link' src={src} alt='link_img'/>
        </div>
    );
}