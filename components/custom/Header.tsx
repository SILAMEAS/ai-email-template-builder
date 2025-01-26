"use client"
import React from 'react';
import Image from "next/image";
import SignInButton from "@/components/custom/auth/SignInButton";

const Header = () => {
    return (
        <div className={'flex justify-between items-center py-4 px-10 shadow-sm'}>
           <Image src={"/SILA_AI.png"} alt={"logo"} width={200} height={100}/>
            <div>
            <SignInButton/>;
            </div>
        </div>
    );
};

export default Header;
