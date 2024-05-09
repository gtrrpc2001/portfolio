import { Title } from '../title/Title';
import './Career.scss';
import link from '../../../assets/image/black-link.png';
import { Logo } from './logo/Logo';

type Props = {
    scroll:(id:string) => void,
}

export const Career = ({scroll}:Props) => {
    return (
        <article className='career_article'>
            <div className='career_content'>
                <Title title='CAREER' link={link} scroll={scroll} id='Career'/>
                <div className='career_area'>
                    <div className='career_company'>
                        <Logo/>
                        <div className='career_info'>
                            <div className='career_title'>
                                test
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </article>
    );
}