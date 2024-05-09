import link from '../../../assets/image/white-link.png';
import github from '../../../assets/image/git-hub.png';
import './Archiving.scss'
import { Title } from '../title/Title';
import { ScrollProps } from '../../../action/scroll';

export const Archiving = ({scroll}:ScrollProps) => {
    return (
        <article className='archiving'>
            <div className='archiving_content'>
                <Title title='ARCHIVING' link={link} defaultColor={false} scroll={scroll} id='Archiving'/>  
                <div className='archiving_content_show'>
                    <a className='archiving_content_github' href='https://github.com/gtrrpc2001'>
                        <div className='archiving_img_wrapper'>
                            <img className='archiving_img' src={github} alt='archiving_github'/>
                        </div>
                        <div className='archiving_url'>
                            github.com/gtrrpc2001
                        </div>
                        <div className='archiving_description'>
                            <p>
                              <b>소스 코드 저장소</b>  
                              입니다.
                            </p>
                            <ul>
                                <li>현재 회사 프로젝트,프로그램, 앱,웹의 소스 코드</li>
                                <li>과거 회사 프로젝트,프로그램 소스 코드</li>
                                <li>과거 회사 과제 및 혼자 개발 한 프로그램 소스 코드</li>
                            </ul>
                        </div>
                    </a>                    
                </div>
            </div>
        </article>
    );
}