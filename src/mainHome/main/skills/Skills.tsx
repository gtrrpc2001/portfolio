import './Skills.scss';
import { Title } from "../title/Title";
import { Container } from './container/Container';
import { 
    AnalysisImageList, 
    AppImageList, 
    BackendImageList, 
    CloudImageList, 
    CommunicationImageList, 
    DbImageList, 
    DeployImageList, 
    MonitoringImageList, 
    OsImageList, 
    PipelineImageList, 
    SoftwareImageList, 
    TestImageList, 
    VersionImageList, 
    WebImageList, 
    imagesType 
} from '../../../interface/Images';
import { SkillTitleList } from '../../../interface/Titles';
import link from '../../../assets/image/black-link.png';

type Props = {
    scroll:(id:string) => void,
}

export const Skills = ({scroll}:Props) => {    

    const imageListMap: { [key: string]: imagesType[] } = {
        "WEB": WebImageList,
        "APP": AppImageList,
        "BACKEND": BackendImageList,
        "CLOUD": CloudImageList,
        "DB": DbImageList,
        "Pipeline": PipelineImageList,
        "COMMUNITY": CommunicationImageList,
        "Analysis": AnalysisImageList,
        "Monitoring": MonitoringImageList,
        "DEPLOY": DeployImageList,
        "OS": OsImageList,
        "SOFTWARE": SoftwareImageList,
        "Test Tool": TestImageList,
        "Version Control": VersionImageList,
    };

    return (
            <article className='skill_article'>
                <div className='skill_article_content'>
                    <Title title="SKILLS" link={link} scroll={scroll} id='Skills'/>                    
                    <div className='skill_basic_info'>
                        {SkillTitleList.map((title,index) => (
                            <Container 
                            title={title} 
                            images={imageListMap[title]} 
                            last={index === SkillTitleList.length - 1}
                            />
                        ))}
                    </div>
                </div>
            </article>
    );
}