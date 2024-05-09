export const getScrollView = (ref:React.RefObject<HTMLDivElement>) => {
    if(ref.current)
        ref.current.scrollIntoView({ behavior: 'smooth' });            
  };

  export interface scrollRef{
    Aboutme:React.RefObject<HTMLDivElement>; 
    Skills:React.RefObject<HTMLDivElement>;
    Archiving:React.RefObject<HTMLDivElement>;
    Project:React.RefObject<HTMLDivElement>;
    Career:React.RefObject<HTMLDivElement>;    
    Head:React.RefObject<HTMLDivElement>;
  }