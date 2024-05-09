import './Skills.scss';
import { Title } from "../title/Title";
import { Container } from './container/Container';
import { AnalysisImageList, AppImageList, BackendImageList, CloudImageList, CommunicationImageList, DbImageList, DeployImageList, MonitoringImageList, OsImageList, PipelineImageList, SoftwareImageList, TestImageList, VersionImageList, WebImageList, imagesType } from '../../../interface/Images';
import { SkillTitleList } from '../../../interface/Titles';
import link from '../../../assets/image/black-link.png';

type Props = {
    scroll:(id:string) => void,
}

export const Skills = ({scroll}:Props) => {    

    const ContainerList = () => {
        const titles:string[] = SkillTitleList
        return titles.map((t,index) => index !== (titles.length - 1) ? getContainer(t) : getContainer(t,true))        
    }

    return (
            <article className='skill_article'>
                <div className='skill_article_content'>
                    <Title title="SKILLS" link={link} scroll={scroll} id='Skills'/>                    
                    <div className='skill_basic_info'>
                        {ContainerList()}                        
                    </div>
                </div>
            </article>
    );
}

const getContainer = (title:string,last:boolean=false) => {
    let images:imagesType[]
    switch(title){            
        case "WEB":
            images = WebImageList
            break;
        case "APP":
            images = AppImageList
            break;
        case "BACKEND":
            images = BackendImageList
            break;
        case "CLOUD":
            images = CloudImageList
            break;
        case "DB":
            images = DbImageList
            break;
        case "Pipeline":
            images = PipelineImageList
            break;
        case "COMMUNITY":
            images = CommunicationImageList
            break;
        case "Analysis":
            images = AnalysisImageList
            break;
        case "Monitoring":
            images = MonitoringImageList
            break;
        case "DEPLOY":
            images = DeployImageList
            break;
        case "OS":
            images = OsImageList
            break;
        case "SOFTWARE":
            images = SoftwareImageList
            break;
        case "Test Tool":
            images = TestImageList
            break;
        case "Version Control":
            images = VersionImageList
            break;
                                    
        default:
            return (<></>)
    }
    return (<Container title={title} images={images} last={last}/>);
}