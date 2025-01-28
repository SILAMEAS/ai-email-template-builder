import React, {createContext, useContext} from "react"

export type selectedSettingType=Record<string, any>|{index?:number,layout?:any};
export type SelectedSettingContent = {
    selectedSetting: selectedSettingType,
    setSelectedSetting: React.Dispatch<React.SetStateAction<selectedSettingType>>
}
export const SelectedSettingContext = createContext<SelectedSettingContent>({
    selectedSetting: {}, // set a default value
    setSelectedSetting:(p)=>p,
})
export const useSelectedSettingContext_ = () => useContext(SelectedSettingContext)