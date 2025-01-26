import React, {useState} from 'react';
import Image from "next/image";
import {Button} from "@/components/ui/button";

const EmailTemplateList = () => {
    const [emailList,setEmailList]=useState<Array<any>|[]>([]);
    return (
        <div >
            <h2 className={'font-bold text-xl text-primary mt-6'}>Workspace</h2>
            <div>
                {
                    emailList?.length==0&&
                    <div className={'flex justify-center items-center flex-col mt-10 gap-7'}>
                        <Image src={"/email.webp"} alt={"email"} width={250} height={250}/>
                        <Button>+ Create New</Button>
                    </div>
                }
            </div>
        </div>
    );
};

export default EmailTemplateList;
