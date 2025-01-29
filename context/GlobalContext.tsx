"use client";
import React, { ReactNode } from "react";
import { UserDetailContext } from "@/context/global/UserDetailContext";
import { ScreenSizeContext } from "@/context/global/ScreenSizeContext";
import { DragDropLayoutElementContext } from "@/context/global/DragDropLayoutElementContext";
import { EmailTemplateContext } from "@/context/global/EmailTemplateContext";
import { SelectedSettingContext } from "@/context/global/SelectedSettingContext";
import useEffectGlobalContext from "@/context/useEffectGlobalContext";
import useMemoGlobalProvider from "@/context/useMemoGlobalProvider";

const GlobalContext = ({ children }: { children: ReactNode }) => {
  /** ===============================================================  */
  /**                       useMemo Provider                           */
  /** ===============================================================  */
  const {
    ProviderUserDetail,
    ProviderScreenSize,
    ProviderDragElementLayout,
    ProviderSelectedSetting,
    ProviderEmailTemplate,
  } = useMemoGlobalProvider();
  /** ===============================================================  */
  /**                       use effect                                 */
  /** ===============================================================  */
  useEffectGlobalContext({
    ...ProviderScreenSize,
    ...ProviderUserDetail,
    ...ProviderSelectedSetting,
    ...ProviderEmailTemplate,
    ...ProviderDragElementLayout,
  });

  return (
    <UserDetailContext.Provider value={ProviderUserDetail}>
      <ScreenSizeContext.Provider value={ProviderScreenSize}>
        <DragDropLayoutElementContext.Provider
          value={ProviderDragElementLayout}
        >
          <EmailTemplateContext.Provider value={ProviderEmailTemplate}>
            <SelectedSettingContext.Provider value={ProviderSelectedSetting}>
              <div>{children}</div>
            </SelectedSettingContext.Provider>
          </EmailTemplateContext.Provider>
        </DragDropLayoutElementContext.Provider>
      </ScreenSizeContext.Provider>
    </UserDetailContext.Provider>
  );
};

export default GlobalContext;
