import React, {ReactNode} from 'react';
import {EnumScreen} from "@/constants/EnumScreen";
import {Button} from "@/components/ui/button";
import {useScreenSize} from "@/context/hooks/useScreenSize";

const ButtonDevice = ({currentScreen,device,icon}:{currentScreen:EnumScreen,device:string,icon:ReactNode}) => {
    const {screenSize,setScreenSize}=useScreenSize();
    return (
        <Button variant={'ghost'} onClick={() => {
            setScreenSize(currentScreen)
        }} className={`${screenSize === currentScreen && 'bg-purple-100 text-primary'}`}>
            {icon} {device}
        </Button>
    );
};

export default ButtonDevice;
