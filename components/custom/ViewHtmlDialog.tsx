"use client"
import React from 'react';
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import {Copy} from "lucide-react";

const ViewHtmlDialog = ({htmlCode,openDialog,closeDialog}:{htmlCode:string,openDialog:boolean,closeDialog: (open: boolean) => void}) => {
    return (
        <Dialog open={openDialog} onOpenChange={closeDialog}>
            <DialogTrigger>Open</DialogTrigger>
            <DialogContent>
                <DialogHeader>
                    <DialogTitle asChild>
                        <div className={'flex items-center gap-x-2'}>
                            <Copy className={'p-1 bg-gray-100 rounded-full h-8 w-8'} onClick={()=>{
                                navigator.clipboard.writeText(htmlCode);
                            }}/>
                            <h2>HTML Email Template Code</h2>
                        </div>
                    </DialogTitle>
                    <DialogDescription asChild>
                       <div className={'max-h-[400px] overflow-auto bg-black text-white rounded-lg'}>
                           <pre className={'whitespace-pre-wrap break-all'}>
                               <code>
                                    {htmlCode}
                               </code>
                           </pre>
                       </div>
                    </DialogDescription>
                </DialogHeader>
            </DialogContent>
        </Dialog>
    );
};

export default ViewHtmlDialog;
