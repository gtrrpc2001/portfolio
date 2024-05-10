import { Title } from '../title/Title';
import './Career.scss';
import link from '../../../assets/image/black-link.png';
import { ScrollProps } from '../../../action/scroll';
import { containerItems } from '../../../interface/Careeres';
import { Divider } from './divider/Divider';
import { CompanyContainer } from './companycontainer/CompanyContainer';

export const Career = ({scroll}:ScrollProps) => {

    

    return (
        <article className='career_article'>
            <div className='career_content'>
                <Title title='CAREER' link={link} scroll={scroll} id='Career'/>
                <div className='career_area'>
                    {
                        containerItems.map((c,index) => {
                            
                            return(
                                <>
                                    <CompanyContainer
                                    logo={c.logo}
                                    title={c.title}
                                    time={c.time}
                                    language={c.language}
                                    tool={c.tool}
                                    db={c.db}
                                    deploy={c.deploy}
                                    work={c.work}
                                    description={c.description}
                                    careers={c.careers}
                                    />
                                    {index !== containerItems.length - 1 && (<Divider/> )}
                                </>
                                )
                            }
                        )
                    }                   
                </div>
            </div>
        </article>
    );
}