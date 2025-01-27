import {useEffect, useState} from "react";
import {EnumScreen} from "@/constants/EnumScreen";

const useEffectRedirectAfterLogin = () => {
  const [userDetail, setUserDetail] = useState<any>();
  const [screenSize, setScreenSize] = useState<any>();
  const [dragElementLayout, setDragElementLayout] = useState<any>();
  const [emailTemplate, setEmailTemplate] = useState<any>([]);
  const [selectedSetting, setSelectedSetting] = useState<any>({
    layout: [], // Initialize layout as an empty array
    index: 0,   // Default index to a valid number
  });
  useEffect(() => {
    if (typeof window !== undefined) {
      const storage = JSON.parse(localStorage.getItem("userDetail") as any);
      const storageEmailTemplate = JSON.parse(
        localStorage.getItem("emailTemplate") as any,
      );
      if (!storage?.email || !storage) {
        /** Redirect to home screen */
      } else {
        setUserDetail(storage);
        setEmailTemplate(storageEmailTemplate ?? []);
        setScreenSize(EnumScreen.DeskTop);
      }
    }
  }, []);
  useEffect(() => {
    if (typeof window !== undefined) {
      emailTemplate.length > 0 &&
        localStorage.setItem("emailTemplate", JSON.stringify(emailTemplate));
    }
  }, [emailTemplate]);
  useEffect(()=>{
    if(selectedSetting){
      let updateEmailTemplate=[];
      emailTemplate.forEach((item:any,index:number)=>{
        if(item.id===selectedSetting?.layout?.id){
          updateEmailTemplate.push(selectedSetting?.layout)
        }else {
          updateEmailTemplate.push(item);
        }
        setEmailTemplate(updateEmailTemplate);

      })
    }
  },[selectedSetting])
  return {
    userDetail,
    screenSize,
    dragElementLayout,
    emailTemplate,
    selectedSetting,
    setEmailTemplate,
    setSelectedSetting,
    setDragElementLayout,
    setUserDetail,
    setScreenSize
  };
};

export default useEffectRedirectAfterLogin;
