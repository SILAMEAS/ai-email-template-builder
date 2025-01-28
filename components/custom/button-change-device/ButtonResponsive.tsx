"use client"
import ButtonDevice from "@/components/custom/button-change-device/utils/ButtonDevice";
import React from 'react';
import {EnumScreen} from "@/constants/EnumScreen";
import {Laptop, Monitor, Smartphone, TabletSmartphone} from "lucide-react";
import {useScreenSizeContext_} from "@/context/global/ScreenSizeContext";

const ButtonResponsive = () => {
    const {screenSize}=useScreenSizeContext_();
    return (
        <div className={`flex justify-center gap-1 ${![EnumScreen.DeskTop, EnumScreen.Laptop].includes(screenSize)&&'flex-col'}`}>
            <ButtonDevice currentScreen={EnumScreen.DeskTop} device={EnumScreen.DeskTop} icon={<Monitor/> }/>
            <ButtonDevice currentScreen={EnumScreen.Laptop} device={EnumScreen.Laptop} icon={<Laptop/> }/>
            <ButtonDevice currentScreen={EnumScreen.Tablet} device={EnumScreen.Tablet} icon={<TabletSmartphone/> }/>
            <ButtonDevice currentScreen={EnumScreen.Phone} device={EnumScreen.Phone} icon={<Smartphone/> }/>
        </div>
    );
};

export default ButtonResponsive;
