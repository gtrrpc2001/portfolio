import './PageUp.scss'
import pageUp from '../../assets/image/page-up.svg';

export const PageUp = () => {

    return (
        <div className="pageUp">
            <img className="pageImage" src={pageUp} alt="up"/>
        </div>
    );
}