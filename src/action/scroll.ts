import { useEffect, useState } from "react";

export const getScrollView = (ref:React.RefObject<HTMLDivElement>) => {
    if(ref.current)
        ref.current.scrollIntoView({ behavior: 'smooth' });            
  };

  export interface scrollRef{
    [key: string]: React.RefObject<HTMLDivElement>
  }

  export const useScroll = () => {
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const isScrolled = window.scrollY > 500;
            setIsScrolled(isScrolled);
        };

        window.addEventListener('scroll', handleScroll);

        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return isScrolled;
};

export interface ScrollProps {
    scroll:(id:string) => void,
    refes?: scrollRef
}