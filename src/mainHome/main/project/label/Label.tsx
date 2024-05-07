import './Label.scss';

type Props = {
    text:string
}

export const Label = ({text}:Props) => {
    return (
        <div className='label'>
            {text}
        </div>
    );
}