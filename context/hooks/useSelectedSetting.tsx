"use client"
import {useContext} from 'react';
import {SelectedSettingContext} from "@/context/SelectedSettingContext";

const useSelectedSettingContext = () => {
    return useContext(SelectedSettingContext);
};
export const useSelectedSetting= () => {
    const {selectedSetting,setSelectedSetting}=useSelectedSettingContext();
    return {selectedSetting,setSelectedSetting}
};
