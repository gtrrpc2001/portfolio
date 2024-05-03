import { Lint } from '../../../component/Link/Link';
import link from '../../../assets/image/white-link.png';
import github from '../../../assets/image/git-hub.png';
import './Archiving.scss'

type Props = {

}

export const Archiving = ({}:Props) => {
    return (
        <article className='archiving'>
            <div className='archiving_content'>
                <div className='section_title'>
                    <div className='section_title_text'>
                    ARCHIVING
                    </div>
                    <Lint src={link}/>
                </div>
                <div className='archiving_content_show'>
                    <a className='archiving_content_github' href='https://github.com/gtrrpc2001'>
                        <div className='archiving_img_wrapper'>
                            <img className='archiving_img' src={github}/>
                        </div>
                        <div className='archiving_url'>
                            github.com/gtrrpc2001
                        </div>
                        <div className='archiving_description'>
                            <p>
                              <b>소스 코드 저장소</b>  
                              "입니다."
                            </p>
                            <ul>
                                <li></li>
                                <li></li>
                                <li></li>
                            </ul>
                        </div>
                    </a>                    
                </div>
            </div>
        </article>
    );
}