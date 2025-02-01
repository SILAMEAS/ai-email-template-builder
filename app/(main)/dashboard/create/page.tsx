import React from 'react';
import {Tabs, TabsContent, TabsList, TabsTrigger} from "@/components/ui/tabs"
import {Sparkles} from "lucide-react";
import InputAIBox from "@/components/custom/create/InputAIBox";

const Create = () => {
    return (
        <div className={'px-10 md:px-28 lg:px-48 xl:px-56'}>
            <div>
                <h2 className={'font-bold text-3xl'}>Create New Email Template</h2>
                <p className={'text-lg text-gray-400'}>Effortlessly design and customize professional AI-powered email template with ease</p>
            </div>
            <Tabs defaultValue="AI" className="w-[500px] mt-10">
                <TabsList>
                    <TabsTrigger value="AI">Creat with AI <Sparkles className={'h-5 w-5 ml-2'}/></TabsTrigger>
                    <TabsTrigger value="Scratch">Start from Scratch</TabsTrigger>
                </TabsList>
                <TabsContent value="AI">
                    <InputAIBox/>
                </TabsContent>
                <TabsContent value="Scratch">Change your password here.</TabsContent>
            </Tabs>

        </div>
    );
};

export default Create;
