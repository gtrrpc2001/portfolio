import './Title.scss'
import link from '../../../assets/image/black-link.png'
import { Lint } from '../../../component/Link/Link';

type Props = {
    title:string
}

export const Title = ({title}:Props) => {
    return (
        <div className='aboutme_section_title'>
            <div className='section_title_text'>
                {title}
            </div>
            <Lint src={link}/>
        </div>
    );
}