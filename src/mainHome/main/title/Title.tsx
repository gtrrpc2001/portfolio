import './Title.scss'
import { Lint } from '../../../component/Link/Link';

type Props = {
    title:string
    link:string
    defaultColor?:boolean,
    scroll:(id:string) => void
    id:string
}

export const Title = ({title,link,scroll,id,defaultColor=true}:Props) => {


    const titleClassName = `section_title_text ${defaultColor ? 'black' : 'white'}`
    const changeCssMargin = title === "PROJECTS"
    const sectionClass = `aboutme_section_title ${changeCssMargin && 'projectCSS'}`    

    return (
        <>
            <div className={sectionClass}>
                <div className={titleClassName}>
                    {title}                
                </div>
                <Lint src={link} scroll={scroll} id={id}/>
            </div>
            {changeCssMargin && (
                <>
                    <p/>
                    <div className='aboutme_section_notice_title'>
                        {'(보안상 이유로 한정된 프로젝트만 공개합니다.)'}
                    </div>
                </>
            )}
        </>
    );
}