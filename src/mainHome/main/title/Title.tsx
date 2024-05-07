import './Title.scss'
import { Lint } from '../../../component/Link/Link';

type Props = {
    title:string
    link:string
    defaultColor?:boolean
}

export const Title = ({title,link,defaultColor=true}:Props) => {


    const titleClassName = `section_title_text ${defaultColor ? 'black' : 'white'}`

    return (
        <div className='aboutme_section_title'>
            <div className={titleClassName}>
                {title}
            </div>
            <Lint src={link}/>
        </div>
    );
}