import { useSelector } from "react-redux";
import { RootState } from "../store/store";
import { useEffect, useState } from "react";

export const useMenuVisible = () => {
    const width = useSelector<RootState, number>((state) => state.width);
    const [menuVisible, setMenuVisible] = useState<boolean>(false);

    useEffect(() => {
        setMenuVisible(Number(width) < 750);
    }, [width]);

    return menuVisible;
};