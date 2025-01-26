"use client"
import React from 'react';
import {useUserDetail} from "@/context/hooks/useUserDetail";
import {Button} from "@/components/ui/button";
import EmailTemplateList from "@/components/custom/EmailTemplateList";
import Header from "@/components/custom/Header";

const Dashboard = () => {
    const {userDetail}=useUserDetail();
    return (
        <div>
            <Header/>
            <div className={'p-10 md:px-28 lg:px-40 xl:px-56 mt-16'}>
                <div className={'flex justify-between'}>
                    <h2 className={'font-bold text-3xl'}>Hello, {userDetail?.name}</h2>
                    <Button>+ Create new email template</Button>
                </div>
                <EmailTemplateList/>
            </div>
        </div>
    );
};

export default Dashboard;
