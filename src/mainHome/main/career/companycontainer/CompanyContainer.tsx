import { CompanyInfo } from '../../../../interface/Careeres';
import { Company } from '../company/Company';
import { Introduction } from '../company/Introduction/Introduction';
import './CompanyContainer.scss';

export const CompanyContainer = ({logo,title,time,language,tool,db,deploy,work,description,careers}:CompanyInfo) => {
    return (
        <div className='career_company'>
            <Company 
                logo={logo} 
                title={title} 
                time={time}
                language={language}
                tool={tool}
                db={db}
                deploy={deploy}
                work={work}
                description={description}
            >
                <Introduction item={careers ? careers : []}/>
            </Company>
                                                
        </div>
    );
}