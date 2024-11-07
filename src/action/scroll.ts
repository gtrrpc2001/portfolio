import { useEffect, useState } from "react";

export const getScrollView = (ref: React.RefObject<HTMLDivElement>) => {
    if (ref.current)
        ref.current.scrollIntoView({ behavior: 'smooth' });
};

export interface scrollRef {
    [key: string]: React.RefObject<HTMLDivElement>
}

type Props = {
    isMobile: boolean;
}

export const useScroll = ({ isMobile }: Props) => {
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const isScrolled = isMobile ? window.scrollY > 170 && window.scrollY < 2520 || window.scrollY > 3200 : window.scrollY > 500;
            setIsScrolled(isScrolled);
        };

        window.addEventListener('scroll', handleScroll);

        return () => window.removeEventListener('scroll', handleScroll);
    }, [isMobile]);

    return isScrolled;
};

export interface ScrollProps {
    scroll: (id: string) => void,
    refes?: scrollRef
}