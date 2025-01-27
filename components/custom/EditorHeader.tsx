"use client"
import React from 'react';
import Image from "next/image";
import {Button} from "@/components/ui/button";
import {Code} from "lucide-react";
import ButtonResponsive from "@/components/custom/button-change-device/ButtonResponsive";
import {EnumScreen} from "@/constants/EnumScreen";
import {useScreenSize} from "@/context/hooks/useScreenSize";

const EditorHeader = () => {
    const {screenSize}=useScreenSize();

    return (
        <div className={'p-4 shadow-sm flex justify-between items-center'}>
            <Image src={"/logo.png"} alt={"logo"} width={160} height={200}/>
            <ButtonResponsive/>
            <div className={`flex gap-3 ${![EnumScreen.DeskTop, EnumScreen.Laptop].includes(screenSize)&&'flex-col flex-col-reverse'}`}>
                <Button variant={'ghost'} className={'hover:text-primary hover:bg-purple-100'}>
                    <Code/>
                </Button>
                <Button variant={'outline'}>Send Test Email</Button>
                <Button>Save Template</Button>
            </div>
        </div>
    );
};

export default EditorHeader;
