import './Link.scss'

type Props = {
    scroll:(id:string) => void,
    src:string,
    id:string
}

export const Lint = ({src,scroll,id}:Props) => {    
    const imgClassName = `section_title_link ${id === "Project" && 'changeTop'} exception`
    return (
        <div className='section_title_link_wrapper' onClick={() => scroll(id)}>
            <img className={imgClassName} src={src} alt='link_img' />
        </div>
    );
}