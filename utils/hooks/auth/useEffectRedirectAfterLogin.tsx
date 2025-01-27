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
      if (!storage?.email || !storage) {
        /** Redirect to home screen */
      } else {
        setUserDetail(storage);
        setScreenSize(Screen.DeskTop);
      }
    }
  }, []);
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
