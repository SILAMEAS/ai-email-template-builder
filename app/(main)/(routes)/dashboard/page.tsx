"use client";
import React from "react";
import { Button } from "@/components/ui/button";
import EmailTemplateList from "@/components/custom/EmailTemplateList";
import Header from "@/components/custom/Header";
import Link from "next/link";
import { UserDetailContext_ } from "@/context/global/UserDetailContext";

const Dashboard = () => {
  const { userDetail } = UserDetailContext_();
  return (
    <div>
      <Header />
      <div className={"p-10 md:px-28 lg:px-40 xl:px-56 mt-16"}>
        <div className={"flex justify-between"}>
          <h2 className={"font-bold text-3xl"}>Hello, {userDetail?.name}</h2>
          <Link href={`/editor/12`}>
            <Button>+ Create new email template</Button>
          </Link>
        </div>
        <EmailTemplateList />
      </div>
    </div>
  );
};

export default Dashboard;
