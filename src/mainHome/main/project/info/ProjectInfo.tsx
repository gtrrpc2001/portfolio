import { Label } from '../label/Label';
import './ProjectInfo.scss';

type ProjectInfoProps = {
  label: string;
  value: string;
  link?: string;
};

export const ProjectInfo = ({ label, value, link }: ProjectInfoProps) => {
    return (
      <div className='project_info_wrapper'>
        <Label text={label} />
        <div id={`project_${label.toLowerCase()}`} className='project_value'>
          {link ? (
            <a href={link} className='project_link'>
              {value}
            </a>
          ) : (
            value
          )}
        </div>
      </div>
    );
  };