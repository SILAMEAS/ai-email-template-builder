"use client"
import React, {useEffect, useState} from "react";
import Image from "next/image";
import {Button} from "@/components/ui/button";
import {useRouter} from "next/navigation";
import {useConvex} from "convex/react";
import {api} from "@/convex/_generated/api";
import {UserDetailContext_} from "@/context/global/UserDetailContext";
import {emailTemplateType} from "@/context/global/EmailTemplateContext";
import {Edit, Loader2} from "lucide-react";

const EmailTemplateList = () => {
  const [emailTemplateList,setEmailTemplateList] = useState<Array<{tid:string,design:emailTemplateType,date:string}> | []>([]);
  const route=useRouter();
  const convex=useConvex();
  const {userDetail}=UserDetailContext_();
  const router=useRouter();
  const [loading,setLoading]=useState<boolean>(false);
  const GetListTemplate=async ()=>{
      setLoading(true);
      try {
         const res= await convex.query(api.emailTemplate.GetAllTemplate,{email:userDetail?.email});
         const convertDataMatchEmailTemplateList= res?.map(item=>{
             const df=new Date(item._creationTime)
             return {tid:item.tid,design:JSON.parse(item.design),date:new Date(item._creationTime).toString()}
         })
          convertDataMatchEmailTemplateList &&  setEmailTemplateList(convertDataMatchEmailTemplateList);
          setLoading(false);
      }catch (e){
          setLoading(false);
      }
  }
    useEffect(() => {
        if(userDetail)
        GetListTemplate().then(r=>r);
    }, [userDetail]);

  return (
    <div>
      <h2 className={"font-bold text-xl text-primary mt-6"}>Workspace</h2>
      <div className={'flex flex-col gap-5 mt-10 '}>
          {
              loading&&<div className={'w-full flex justify-between items-center'}> <Loader2 className={'spin-in'}/> </div>
          }
          {
              emailTemplateList?.map(item=>
                  <div key={item.tid} className={'flex  justify-between p-10 border border-blue-500 rounded-lg'}>
                     <div>
                         {item.date}  {item.tid}
                     </div>
                      <Edit className={'h-5 w-5'} onClick={()=>router.push('/editor/'+item.tid)}/>
                  </div>
              )
          }
        {emailTemplateList?.length == 0 && !loading&&(
          <div
            className={"flex justify-center items-center flex-col mt-10 gap-7"}
          >
            <Image src={"/email.webp"} alt={"email"} width={250} height={250} />
            <Button onClick={()=>route.push("/create")}>+ Create New</Button>
          </div>
        )}
      </div>
    </div>
  );
};

export default EmailTemplateList;
