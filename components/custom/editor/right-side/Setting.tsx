"use client"
import React, {useState} from 'react';
import InputField from "@/components/custom/editor/right-side/components/InputField";
import {checkProperty} from "@/components/custom/editor/right-side/utils/common/checkProperty";
import ColorPickerField from "@/components/custom/editor/right-side/components/ColorPickerField";
import {selectedSettingType, useSelectedSettingContext_} from "@/context/global/SelectedSettingContext";

const Setting = () => {
    const {selectedSetting,setSelectedSetting}=useSelectedSettingContext_();
    const [element,setElement]=useState<any>();
    React.useEffect(()=>{
        setElement(selectedSetting?.layout?.[selectedSetting?.index])
    },[selectedSetting]);
    const onHandleChange=(fliedName:string,value:string)=>{
        const updateData={...selectedSetting};
        updateData.layout[selectedSetting.index][fliedName]=value;
        setSelectedSetting(updateData)
    };
    const onHandleChangeStyle = (fieldName: string, value: string) => {
        // Ensure selectedSetting has a layout property and initialize it if missing
        const updateData: selectedSettingType = {
            ...selectedSetting,
            layout: selectedSetting.layout || [], // Default to an empty array
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
        layoutItem.style[fieldName] = value;

        // Replace the updated item back in the layout array
        updateData.layout[updateData.index] = layoutItem;

        // Update the state
        setSelectedSetting(updateData);
    };

    return (
        <div className={'p-5'}>
            <h2 className={'font-bold text-xl'}> Setting </h2>
            {
                !selectedSetting&&<p>select layout to setting property</p>
            }
            {/** Input Field */}
            {
                checkProperty(element)?.content &&
                <InputField label={"Content"} value={ element?.content} onChange={(e)=>{
                 onHandleChange('content',e.target.value);
                }}/>
            }
            {/** Input Field */}
            {
                checkProperty(element)?.backgroundColor &&
                <ColorPickerField label={"Background"}
                                  value={element?.style?.backgroundColor} onChange={(e)=>onHandleChangeStyle('backgroundColor',e.target.value)}/>
            }
            {/*{*/}
            {/*    ColorPickerField*/}
            {/*}*/}
        </div>
    );
};

export default Setting;
