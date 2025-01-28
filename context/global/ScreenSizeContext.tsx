import React, {createContext, useContext} from "react"
import {EnumScreen} from "@/constants/EnumScreen";

export type ScreenSizeContent = {
    screenSize: EnumScreen,
    setScreenSize: React.Dispatch<React.SetStateAction<EnumScreen>>
}
export const ScreenSizeContext = createContext<ScreenSizeContent>({
    screenSize: EnumScreen.DeskTop, // set a default value
    setScreenSize:(p)=>p,
})
export const useScreenSizeContext_ = () => useContext(ScreenSizeContext)