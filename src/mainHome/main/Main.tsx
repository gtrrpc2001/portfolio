import './Main.scss'
import link from '../../assets/image/black-link.png'
import person from '../../assets/svg/person-fill.svg'
import calendar from '../../assets/svg/calendar-fill.svg'
import envelope from '../../assets/svg/envelope-fill.svg'
import geo from '../../assets/svg/geo-alt-fill.svg'
import telephone from '../../assets/svg/telephone-fill.svg'
import pencil from '../../assets/svg/pencil-fill.svg'


export const Main = () => {
    return (
        <main className="main">
            <div className='head'>                
                <div className='head_content'>
                    <div className='head_content_title'>
                        - 이충헌 -<br/>
                        
                        백엔드 개발자 포트폴리오                        
                    </div>
                    <hr className='head_content_divier'/>
                    <div className='head_content_description'>
                        안녕하세요.<br/>
                        풀 스택 백엔드 개발자 입니다.<br/>
                        꼼꼼한 성격, 자기개발을 밥 먹듯이 하는 습관이 저의 장점입니다.
                    </div>
                    <div className='head_content_find-out-more'>더 알아보기 ↓</div>
                </div>
            </div>
            <div className='aboutme'>
                <article className='aboutme_article'>
                    <div className='aboutme_article_content'>
                        <div className='aboutme_section_title'>
                            <div className='section_title_text'>
                                ABOUT ME
                            </div>
                            <div className='section_title_link_wrapper'>
                                <img className='section_title_link' src={link} alt='title_img'/>
                            </div>
                        </div>
                    </div>
                    <div className='aboutme_basic_info'>
                        <div className='aboutme_basic_info_wrapper'>
                            <div className='aboutme_basic_info_wrapper_'>
                                <div className='aboutme_basic_info_wrapper__'>
                                    <img className='aboutme_basic_info_img' src={person} alt='aboutme_info_img'/>
                                </div>
                                <div className='aboutme_basic_info_text'>
                                    <div className='aboutme_basic_info_text_label'>
                                        이름
                                    </div>
                                    <div className='aboutme_basic_info_text_name'>
                                        이충헌
                                    </div>
                                </div>
                            </div>
                            <div className='aboutme_basic_info_wrapper_'>
                                <div className='aboutme_basic_info_wrapper__'>
                                    <img className='aboutme_basic_info_img' src={calendar} alt='aboutme_info_img'/>
                                </div>
                                <div className='aboutme_basic_info_text'>
                                    <div className='aboutme_basic_info_text_label'>
                                        생년월일
                                    </div>
                                    <div className='aboutme_basic_info_text_name'>
                                        97.05.12
                                    </div>
                                </div>
                            </div>
                            <div className='aboutme_basic_info_wrapper_'>
                                <div className='aboutme_basic_info_wrapper__'>
                                    <img className='aboutme_basic_info_img' src={envelope} alt='aboutme_info_img'/>
                                </div>
                                <div className='aboutme_basic_info_text'>
                                    <div className='aboutme_basic_info_text_label'>
                                        주소지
                                    </div>
                                    <div className='aboutme_basic_info_text_name'>
                                        대전광역시 대덕구
                                    </div>
                                </div>
                            </div>
                            <div className='aboutme_basic_info_wrapper_'>
                                <div className='aboutme_basic_info_wrapper__'>
                                    <img className='aboutme_basic_info_img' src={geo} alt='aboutme_info_img'/>
                                </div>
                                <div className='aboutme_basic_info_text'>
                                    <div className='aboutme_basic_info_text_label'>
                                        연락처
                                    </div>
                                    <div className='aboutme_basic_info_text_name'>
                                        010-9063-3548
                                    </div>
                                </div>
                            </div>
                            <div className='aboutme_basic_info_wrapper_'>
                                <div className='aboutme_basic_info_wrapper__'>
                                    <img className='aboutme_basic_info_img' src={telephone} alt='aboutme_info_img'/>
                                </div>
                                <div className='aboutme_basic_info_text'>
                                    <div className='aboutme_basic_info_text_label'>
                                        이메일
                                    </div>
                                    <div className='aboutme_basic_info_text_name'>
                                        cbdgjs3548@gmail.com
                                    </div>
                                </div>
                            </div>
                            <div className='aboutme_basic_info_wrapper_'>
                                <div className='aboutme_basic_info_wrapper__'>
                                    <img className='aboutme_basic_info_img' src={pencil} alt='aboutme_info_img'/>
                                </div>
                                <div className='aboutme_basic_info_text'>
                                    <div className='aboutme_basic_info_text_label'>
                                        학력
                                    </div>
                                    <div className='aboutme_basic_info_text_name'>
                                        한밭대학교<br/>
                                        {"(응용소프트웨어)"}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </article>
            </div>            
        </main>
    );
}