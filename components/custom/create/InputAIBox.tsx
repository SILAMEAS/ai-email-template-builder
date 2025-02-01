"use client"
import React, {useState} from 'react';
import LabelField from "@/components/custom/editor/right-side/components/LabelField";
import {Textarea} from "@/components/ui/textarea";
import {Button} from "@/components/ui/button";
import Prompt from "@/Data/Prompt";
import axios from "axios";
import {useMutation} from "convex/react";
import {api} from "@/convex/_generated/api";
import {v4 as uuidv4} from 'uuid';
import {UserDetailContext_} from "@/context/global/UserDetailContext";
import {useRouter} from "next/navigation";

const InputAIBox = () => {
    const [userInput,setUserInput]=useState<string>('');
    const [loading,setLoading]=useState<boolean>(false);
    const SaveTemplateDb=useMutation(api.emailTemplate.SaveTemplate);
    const {userDetail}=UserDetailContext_();
    const router=useRouter();
    const OnGenerate=async ()=>{
        const PROMPT=Prompt.EMAIL_PROMPT+'/n-'+userInput;
        setLoading(true);
        try {
           const res= await axios.post('/api/ai-email-generate',{
                prompt:PROMPT
            });
            const tid=uuidv4();
            // Save data in DB
            await SaveTemplateDb({
                tid,
                design:res.data,
                email:userDetail?.email
            });
            setLoading(false);
            router.push('/editor/'+tid);
        }catch (e){
            setLoading(false);
        }
    }
    return (
        <div className={'mt-5 flex gap-y-5 flex-col'}>
            <LabelField label={`Provide details about the email template you'd like to create`}/>
            <Textarea placeholder={'Start writing here'} rows={5} className={''}
                      onChange={(e) => setUserInput(e.target.value)}/>
            <Button disabled={userInput === '' || loading}
                    onClick={OnGenerate}>{`${loading ? "loading ..." : 'Generate Email Template'}`}</Button>
            <p className={'text-sm text-gray-400'}><span className={'font-bold text-black'}>Example</span> : Generate
                the Email template for Notify people with pricing model for website</p>
        </div>
    );
};

export default InputAIBox;
