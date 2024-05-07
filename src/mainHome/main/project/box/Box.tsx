import './Box.scss';
import './Carousel.scss';
// import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import { useState } from 'react';
import { Label } from '../label/Label';
import { ProjectList } from '../../../../interface/ProjectList';

export const Box = ({title,time,people,work,imageList,borderRadius,descripttion,mainFunction,github,frontend,backend,db,deploy}:ProjectList) => {
    const [moveIndex, setMoveIndex] = useState(0);    

    const handleChange = (index:number) => {
        setMoveIndex(index);
    }

    const githubCheck = github.includes('github')

    const renderSliders = imageList.map(m => (
        <div key={m.id}>
            <img src={m.url} alt={m.alt} style={{width:`97%`,borderRadius:borderRadius}}/>
        </div>
    ))

    return (
        <div className='container_wrapper'>
            <div className='container_title'>
                {title}
            </div>
            <div className='container_time'>
                {time}&nbsp;
                <span className='project_people'>
                    {`(${people}人 ${work ? '회사' : '개인'} 프로젝트)`}
                </span>
            </div>
            <div className='project_info'>
                <div className='project_img'>
                    <Carousel
                    showArrows={false}
                    autoPlay={false}
                    infiniteLoop={true}
                    showThumbs={false}
                    emulateTouch={true}
                    showIndicators={false}
                    selectedItem={moveIndex}                
                    onChange={handleChange}
                    showStatus={true}
                    >
                        {renderSliders}
                    </Carousel>
                </div>
                <div className='project_descriptions'>
                    <div className='descripttion'>
                        {descripttion}
                    </div>
                    <div className='project_info_wrapper'>
                        <Label text='주요 기능'/>
                        <div id='project_mainFunction' className='project_value'>                        
                                {mainFunction}
                        </div>
                    </div>

                    <div className='project_info_wrapper'>
                        <Label text='GitHub'/>
                        <div id='project_github' className='project_value'>
                            <a className='project_github_url'href={githubCheck ? github : ''}>
                                { githubCheck ? github.split('//')[1] : github}
                            </a>
                        </div>
                    </div>

                    <div className='project_info_wrapper'>
                        <Label text='Frontend'/>
                        <div id='project_frontend' className='project_value'>
                            {frontend}
                        </div>
                    </div>
                    <div className='project_info_wrapper'>
                        <Label text='Backend'/>
                        <div id='project_backend' className='project_value'>
                            {backend}
                        </div>
                    </div>

                    <div className='project_info_wrapper'>
                        <Label text='Database'/>
                        <div id='project_db' className='project_value'>
                            {db}
                        </div>
                    </div>

                    <div className='project_info_wrapper'>
                        <Label text='Deployment'/>
                        <div id='project_deploy' className='project_value'>
                            {deploy}
                        </div>
                    </div>
                </div>
            </div>            
        </div>
    );
}