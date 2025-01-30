"use client";
import React, {useEffect} from "react";
import {EnumScreen} from "@/constants/EnumScreen";
import {userDetailType} from "@/context/global/UserDetailContext";
import {emailTemplateType} from "@/context/global/EmailTemplateContext";
import {selectedSettingType} from "@/context/global/SelectedSettingContext";

type useEffectGlobalContextType = {
  setUserDetail: React.Dispatch<React.SetStateAction<userDetailType>>;
  setEmailTemplate: React.Dispatch<React.SetStateAction<emailTemplateType>>;
  setScreenSize: React.Dispatch<React.SetStateAction<EnumScreen>>;
  emailTemplate: emailTemplateType;
  setSelectedSetting: React.Dispatch<React.SetStateAction<selectedSettingType>>;
  selectedSetting: selectedSettingType;
};
const useEffectGlobalContext = ({
  selectedSetting,
  emailTemplate,
  setScreenSize,
  setEmailTemplate,
  setUserDetail,
}: useEffectGlobalContextType) => {
  useEffect(() => {
    if (window) {
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
    if (window) {
      emailTemplate &&
        emailTemplate?.length > 0 &&
        localStorage.setItem("emailTemplate", JSON.stringify(emailTemplate));
    }
  }, [emailTemplate]);
  useEffect(() => {
    if (selectedSetting) {
      let updateEmailTemplate = [];
      emailTemplate?.forEach((item) => {
        if (item?.id === selectedSetting?.layout?.id) {
          updateEmailTemplate.push(selectedSetting?.layout);
        } else {
          updateEmailTemplate.push(item);
        }
        setEmailTemplate(updateEmailTemplate);
      });
    }
  }, [selectedSetting]);
};

export default useEffectGlobalContext;
