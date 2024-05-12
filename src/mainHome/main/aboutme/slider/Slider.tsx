import './Slider.scss';
import '../../project/box/Carousel.scss';
import {useState } from 'react';
import { Carousel } from 'react-responsive-carousel';
import { IntroImageList } from '../../../../interface/Images';

type Props = {
    ele:JSX.Element
}

export const Slider = ({ele}:Props) => {
    const [moveIndex, setMoveIndex] = useState(0);     
   
    const handleChange = (index:number) => {
        setMoveIndex(index);
    }

    const renderSliders = IntroImageList.map((m,index) => {
        return index === 0 ?
            ele : 
            (<img className='img' src={m.url} alt={m.alt} 
            style={{width:'auto',height: index === 4 || index === 3 ? '20rem' :'25rem'}}/>
            )
        }
    )

      return (
        <div className='slider'>
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
      );
}