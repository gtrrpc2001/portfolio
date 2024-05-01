import { imagesType } from '../../../../interface/Images';
import { Skillimg } from '../img/Skillimg';
import './Container.scss'

type Props = {
    title:string
    images:imagesType[]
    last?:boolean
}

export const Container = ({title,images,last=false}:Props) => {

    const skill_Image = () => {        
       return images.map((d,index) =>{
               return index !== (images.length - 1) ? (<Skillimg src={d.src} alt={d.alt} text={d.text}/>) : 
               (<Skillimg src={d.src} alt={d.alt} text={d.text} last={true}/>)
            } 
        )
    }

    return (
        <div className={`skill_container ${last ? '' : 'space'}`}>
            <div className='skill_container_title'>
                {title}
            </div>
            <div className='skill_container_img'>
                {skill_Image()}                                                              
            </div>
        </div>
    );
}