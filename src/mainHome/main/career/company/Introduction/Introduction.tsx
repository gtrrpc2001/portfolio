import { Careers } from '../../../../../interface/Careeres';
import './Introduction.scss';

type Props = {
    item:Careers[]
}

export const Introduction = ({item}:Props) => {
    return (
        <ul className='Introduction_List'>
            {item.map(career => {
                const item = career.items
               return (
                    <>
                        <h4 className='introduction_title'>{item.h4}</h4>
                        <h5 className='introduction_period'>{item.h5}</h5>
                        {item.li.map(l => (
                            <li className='introduction_li'>
                                {l}
                            </li>
                        ))}
                    </>
    
                )
            })}
        </ul>
    );
}