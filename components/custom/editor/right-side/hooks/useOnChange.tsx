"use client"
import React, {useState} from 'react';
import {selectedSettingType, useSelectedSettingContext_} from "@/context/global/SelectedSettingContext";
import {ElementListInterface} from "@/Data/ElementLists";

const useOnChange = () => {
    const { selectedSetting, setSelectedSetting } = useSelectedSettingContext_();
    const [element, setElement] = useState<ElementListInterface>(selectedSetting?.layout?.[selectedSetting?.index]);
    React.useEffect(() => {
        setElement(selectedSetting?.layout?.[selectedSetting?.index]);
    }, [selectedSetting]);
    {/** ===================================================================================== **/}
    {/**                             onHandleChange for custom setting                         **/}
    {/** ===================================================================================== **/}
    const onHandleChange = (fliedName: string, value: string) => {
        const updateData = { ...selectedSetting };
        updateData.layout[selectedSetting.index][fliedName] = value;
        setSelectedSetting(updateData);
    };
    {/** ===================================================================================== **/}
    {/**                           css property                                                **/}
    {/** ===================================================================================== **/}
    const onHandleChangeStyle = (fieldName: string, value: string|Array<number>,percent?:boolean) => {
        // Ensure selectedSetting has a layout property and initialize it if missing
        const updateData: selectedSettingType = {
            ...selectedSetting
        };

        // Ensure the index exists and is valid
        if (updateData?.index >= updateData.layout.length) {
            return; // Exit if the index is invalid
        }

        // Clone the specific layout item and its style
        const layoutItem = {
            ...updateData.layout[updateData?.index],
            style: {
                ...updateData.layout[updateData?.index]?.style,
            },
        };

        // Update the style dynamically
        if(Array.isArray(value)){
            layoutItem.style[fieldName] =`${value[0]}${percent?'%': 'px'}`;
        }else {
            layoutItem.style[fieldName] = value;
        }

        // Replace the updated item back in the layout array
        updateData.layout[updateData.index] = layoutItem;

        // Update the state
        setSelectedSetting(updateData);
    };
    {/** ===================================================================================== **/}
    {/**                           outStyle css property                                                **/}
    {/** ===================================================================================== **/}
    const onHandleChangeOutStyle = (fieldName: string, value: string|Array<number>,percent?:boolean) => {
        // Ensure selectedSetting has a layout property and initialize it if missing
        const updateData: selectedSettingType = {
            ...selectedSetting
        };

        // Ensure the index exists and is valid
        if (updateData?.index >= updateData.layout.length) {
            return; // Exit if the index is invalid
        }

        // Clone the specific layout item and its style
        const layoutItem = {
            ...updateData.layout[updateData?.index],
            outerStyle: {
                ...updateData.layout[updateData?.index]?.outerStyle,
            },
        };

        // Update the style dynamically
        if(Array.isArray(value)){
            layoutItem.outerStyle[fieldName] =`${value[0]}${percent?'%': 'px'}`;
        }else {
            layoutItem.outerStyle[fieldName] = value;
        }

        // Replace the updated item back in the layout array
        updateData.layout[updateData.index] = layoutItem;

        // Update the state
        setSelectedSetting(updateData);
    };
    return {element,selectedSetting,onHandleChange,onHandleChangeStyle,onHandleChangeOutStyle}
};

export default useOnChange;
