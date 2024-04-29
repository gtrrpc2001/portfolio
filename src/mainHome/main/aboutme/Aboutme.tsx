import './Aboutme.scss'
import person from '../../../assets/svg/person-fill.svg'
import calendar from '../../../assets/svg/calendar-fill.svg'
import envelope from '../../../assets/svg/envelope-fill.svg'
import geo from '../../../assets/svg/geo-alt-fill.svg'
import telephone from '../../../assets/svg/telephone-fill.svg'
import pencil from '../../../assets/svg/pencil-fill.svg'
import { ImgText } from './img/ImgText'
import { Title } from '../title/Title'

export const Aboutme = () => {
    return (
        <div className='aboutme'>
                <article className='aboutme_article'>
                    <div className='aboutme_article_content'>
                        <Title title='ABOUT ME'/>                    
                        <div className='aboutme_basic_info'>
                            <div className='aboutme_basic_info_wrapper' id='up'>
                                <ImgText src={person} label={'이름'} text={'이충헌'}/>                                
                                <ImgText src={calendar} label={'생년월일'} text={'97.05.12'}/>
                                <ImgText src={geo} label={'주소지'} text={'대전광역시 대덕구'}/>
                            </div>
                            <div className='aboutme_basic_info_wrapper' id='down'>
                                <ImgText src={telephone} label={'연락처'} text={'010-9063-3548'}/>
                                <ImgText src={envelope} label={'이메일'} text={'cbdgjs3548@gmail.com'}/>
                                <ImgText src={pencil} label={'학력'} text={'한밭대학교\n(응용소프트웨어)'}/>  
                            </div>    
                        </div>
                    </div>
                </article>
            </div>
    );
}