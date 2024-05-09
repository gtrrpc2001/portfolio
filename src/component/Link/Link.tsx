import './Link.scss'

type Props = {
    scroll:(id:string) => void,
    src:string,
    id:string
}

export const Lint = ({src,scroll,id}:Props) => {    
    return (
        <div className='section_title_link_wrapper' onClick={() => scroll(id)}>
            <img className='section_title_link' src={src} alt='link_img' />
        </div>
    );
}