import { useEffect, useState } from "react";
import { Screen } from "@/constants/Screen";

const useEffectRedirectAfterLogin = () => {
  const [userDetail, setUserDetail] = useState<any>();
  const [screenSize, setScreenSize] = useState<any>();
  const [dragElementLayout, setDragElementLayout] = useState<any>();
  const [emailTemplate, setEmailTemplate] = useState<any>([]);
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
        setScreenSize(Screen.DeskTop);
      }
    }
  }, []);
  useEffect(() => {
    if (typeof window !== undefined) {
      emailTemplate.length > 0 &&
        localStorage.setItem("emailTemplate", JSON.stringify(emailTemplate));
    }
  }, [emailTemplate]);
  return {
    userDetail,
    setUserDetail,
    screenSize,
    setScreenSize,
    dragElementLayout,
    setDragElementLayout,
    emailTemplate,
    setEmailTemplate,
  };
};

export default useEffectRedirectAfterLogin;
