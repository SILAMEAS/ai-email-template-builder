import React from 'react';
import Image from "next/image";
import {Button} from "@/components/ui/button";
import {Code, Monitor, Smartphone} from "lucide-react";

const EditorHeader = () => {
    return (
        <div className={'p-4 shadow-sm flex justify-between items-center'}>
            <Image src={"/logo.png"} alt={"logo"} width={160} height={200}/>
            <div>
            <Button variant={'ghost'}>
                <Monitor/> Desktop
            </Button >
                <Button variant={'ghost'}>
                    <Smartphone/> Mobile
                </Button>
            </div>
            <div className={'flex gap-3'}>
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
