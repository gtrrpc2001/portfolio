import './SpanColorText.scss'

type Props = {
    text:string
}

export const SpanColorText = ({text}:Props) => {
    return (
        <span className='text_strong'>{text}</span>
    );    
}