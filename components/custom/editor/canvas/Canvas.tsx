"use client"
import React from 'react';
import {useScreenSize} from "@/context/hooks/useScreenSize";
import {Screen} from "@/constants/Screen";

const Canvas = () => {
    const {screenSize}=useScreenSize();
    return (
        <div className={'flex justify-center mt-20'}>
            <div className={`bg-white p-6 w-full ${screenSize===Screen.DeskTop?'max-w-2xl':"max-w-lg"}`}>

            </div>
        </div>
    );
};

export default Canvas;
