import './PageUp.scss'
import pageUp from '../../assets/image/page-up.svg';
import { ScrollProps } from '../../action/scroll';

export const PageUp = ({scroll}:ScrollProps) => {

    return (
        <div className="pageUp" onClick={()=>scroll('Head')}>
            <img className="pageImage" src={pageUp} alt="up"/>
        </div>
    );
}