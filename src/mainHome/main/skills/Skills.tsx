import './Skills.scss';
import { Title } from "../title/Title";


export const Skills = () => {
    return (
            <article className='skill_article'>
                <div className='skill_article_content'>
                    <Title title="SKILLS"/>                    
                    <div className='skill_basic_info'>
                        <div className='skill_container'>
                            <div className='skill_container_title'>

                            </div>
                            <img className='skill_container_img' src='' />
                        </div> 
                    </div>
                </div>
            </article>
    );
}