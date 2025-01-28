"use client"
import React, {ReactNode, useState} from 'react';
import {UserDetailContext, userDetailType} from "@/context/global/UserDetailContext";
import {ScreenSizeContext} from "@/context/global/ScreenSizeContext";
import {DragDropLayoutElementContext, dragElementLayoutType} from "@/context/global/DragDropLayoutElementContext";
import {EmailTemplateContext, emailTemplateType} from "@/context/global/EmailTemplateContext";
import {SelectedSettingContext, selectedSettingType} from "@/context/global/SelectedSettingContext";
import {EnumScreen} from "@/constants/EnumScreen";
import useEffectGlobalContext from "@/context/useEffectGlobalContext";

const GlobalContext = ({children}:{children:ReactNode}) => {
    const [userDetail, setUserDetail] = useState<userDetailType>();
    const [screenSize, setScreenSize] = useState<EnumScreen>(EnumScreen.DeskTop);
    const [dragElementLayout, setDragElementLayout] = useState<dragElementLayoutType>({});
    const [emailTemplate, setEmailTemplate] = useState<emailTemplateType>([]);
    const [selectedSetting, setSelectedSetting] = useState<selectedSettingType>({
        layout: [],
        index: 0,
    });
    /**                       use effect                                 */
    useEffectGlobalContext({emailTemplate,setEmailTemplate,
        setScreenSize,setUserDetail,setSelectedSetting,selectedSetting});
    /** ===============================================================  */
    return   <UserDetailContext.Provider value={{ userDetail, setUserDetail }}>
        <ScreenSizeContext.Provider value={{ screenSize, setScreenSize }}>
            <DragDropLayoutElementContext.Provider value={{ dragElementLayout, setDragElementLayout }}>
                <EmailTemplateContext.Provider value={{ emailTemplate, setEmailTemplate }}>
                    <SelectedSettingContext.Provider value={{selectedSetting, setSelectedSetting}}>
                        <div>{children}</div>
                    </SelectedSettingContext.Provider>
                </EmailTemplateContext.Provider>
            </DragDropLayoutElementContext.Provider>
        </ScreenSizeContext.Provider>
    </UserDetailContext.Provider>
};

export default GlobalContext;
