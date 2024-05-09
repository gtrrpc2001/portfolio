import './Title.scss'
import { Lint } from '../../../component/Link/Link';

type Props = {
    title:string
    link:string
    defaultColor?:boolean,
    scroll:(id:string) => void
    id:string
}

export const Title = ({title,link,scroll,id,defaultColor=true}:Props) => {


    const titleClassName = `section_title_text ${defaultColor ? 'black' : 'white'}`

    return (
        <div className='aboutme_section_title'>
            <div className={titleClassName}>
                {title}
            </div>
            <Lint src={link} scroll={scroll} id={id}/>
        </div>
    );
}