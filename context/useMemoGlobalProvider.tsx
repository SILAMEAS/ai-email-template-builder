import React, { useMemo, useState } from "react";
import { userDetailType } from "@/context/global/UserDetailContext";
import { EnumScreen } from "@/constants/EnumScreen";
import { dragElementLayoutType } from "@/context/global/DragDropLayoutElementContext";
import { emailTemplateType } from "@/context/global/EmailTemplateContext";
import { selectedSettingType } from "@/context/global/SelectedSettingContext";

const useMemoGlobalProvider = () => {
  const [userDetail, setUserDetail] = useState<userDetailType>();
  const [screenSize, setScreenSize] = useState<EnumScreen>(EnumScreen.DeskTop);
  const [dragElementLayout, setDragElementLayout] =
    useState<dragElementLayoutType>({});
  const [emailTemplate, setEmailTemplate] = useState<emailTemplateType>([]);
  const [selectedSetting, setSelectedSetting] = useState<selectedSettingType>({
    layout: [],
    index: 0,
  });
  /** ================================== ============================  */
  /**                       Provider Memo                              */
  /** ===============================================================  */
  const ProviderUserDetail = useMemo(
    () => ({ userDetail, setUserDetail }),
    [userDetail, setUserDetail],
  );
  const ProviderScreenSize = useMemo(
    () => ({ screenSize, setScreenSize }),
    [screenSize, setScreenSize],
  );
  const ProviderDragElementLayout = useMemo(
    () => ({ dragElementLayout, setDragElementLayout }),
    [dragElementLayout, setDragElementLayout],
  );
  const ProviderEmailTemplate = useMemo(
    () => ({ emailTemplate, setEmailTemplate }),
    [emailTemplate, setEmailTemplate],
  );
  const ProviderSelectedSetting = useMemo(
    () => ({ selectedSetting, setSelectedSetting }),
    [selectedSetting, setSelectedSetting],
  );
  return {
    ProviderUserDetail,
    ProviderScreenSize,
    ProviderDragElementLayout,
    ProviderEmailTemplate,
    ProviderSelectedSetting,
  };
};

export default useMemoGlobalProvider;
