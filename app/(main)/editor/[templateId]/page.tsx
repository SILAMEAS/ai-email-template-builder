"use client"
import React, {useEffect, useState} from "react";
import EditorHeader from "@/components/custom/EditorHeader";
import ElementSideBar from "@/components/custom/editor/left-side/ElementSideBar";
import Canvas from "@/components/custom/editor/canvas/Canvas";
import Setting from "@/components/custom/editor/right-side/Setting";
import {useParams} from "next/navigation";
import {useConvex} from "convex/react";
import {api} from "@/convex/_generated/api";
import {UserDetailContext_} from "@/context/global/UserDetailContext";
import {useEmailTemplateContext_} from "@/context/global/EmailTemplateContext";

const Editor = () => {
    const [viewHTMLCode,setViewHTMLCode]=useState<boolean>(false);
    const {templateId}=useParams();
    const {userDetail}=UserDetailContext_()
    const convex=useConvex();
    const {setEmailTemplate}=useEmailTemplateContext_();
    const [loading,setLoading]=useState<boolean>(false);
    const GetTemplateData=async ()=>{
        setLoading(true);
        if(typeof templateId!=='string'){
            console.log('templateId not string');
            setLoading(false);
            return;
        }
      try {
          const res=await convex.query(api.emailTemplate.GetTemplateById,{tid:templateId,email:userDetail?.email});
          if(res){
              setEmailTemplate(JSON.parse(res.design));
          }
          setLoading(false)
      }catch (e){
            console.error(e);
            setLoading(false)
      }

    };
    useEffect(()=>{
        if(userDetail){
            GetTemplateData().then(r => r);
        }
    },[userDetail]);
    if(loading){
        return <h2>loading ...</h2>
    }
  return (
    <div className={'w-full'}>
      <EditorHeader onClick={()=>setViewHTMLCode(true)} />
      <div className={"grid grid-cols-5"}>
        <ElementSideBar />
        <div className={"col-span-3 bg-gray-200 mt-12"}>
          <Canvas viewHTMLCode={viewHTMLCode} closeDialog={()=>setViewHTMLCode(false)}/>
        </div>
        <Setting />
      </div>
    </div>
  );
};

export default Editor;
