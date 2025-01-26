"use client"
import {useContext} from 'react';
import {ScreenSizeContext} from "@/context/ScreenSizeContext";

const useScreenSizeContext = () => {
    return useContext(ScreenSizeContext);
};
export const useScreenSize= () => {
    const {screenSize,setScreenSize}=useScreenSizeContext();
    return {screenSize,setScreenSize}
};
