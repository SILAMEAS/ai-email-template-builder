"use client";
import React, {useState} from "react";
import InputField from "@/components/custom/editor/right-side/components/InputField";
import {selectedSettingType, useSelectedSettingContext_,} from "@/context/global/SelectedSettingContext";
import {ElementListInterface} from "@/Data/ElementLists";
import ColorPickerField from "@/components/custom/editor/right-side/components/ColorPickerField";

const Setting = () => {
  const { selectedSetting, setSelectedSetting } = useSelectedSettingContext_();
  const [element, setElement] = useState<ElementListInterface>(selectedSetting?.layout?.[selectedSetting?.index]);
  React.useEffect(() => {
    setElement(selectedSetting?.layout?.[selectedSetting?.index]);
  }, [selectedSetting]);
  const onHandleChange = (fliedName: string, value: string) => {
    const updateData = { ...selectedSetting };
    updateData.layout[selectedSetting.index][fliedName] = value;
    setSelectedSetting(updateData);
  };
  const onHandleChangeStyle = (fieldName: string, value: string) => {
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
    layoutItem.style[fieldName] = value;

    // Replace the updated item back in the layout array
    updateData.layout[updateData.index] = layoutItem;

    // Update the state
    setSelectedSetting(updateData);
  };

  return (
    <div className={"p-5"}>
      <h2 className={"font-bold text-xl mb-4"}> Setting </h2>
      {!selectedSetting && <p>select layout to setting property</p>}
      {/** Input Field */}
      {element?.content&& (
        <InputField
          label={"Content"}
          value={element?.content}
          onChange={(e) => {
            onHandleChange("content", e.target.value);
          }}
        />
      )}
    <div className={'flex flex-col space-y-3 mt-3'}>
      {
          element?.style&&Object.entries(element?.style).map(([key,value],index)=>{
            console.log('item',key,value,key.toString().includes('color'));
            const C= key.toLowerCase().includes('color');
            if(C){
              return <ColorPickerField
                  key={key}
                  label={key}
                  value={value}
                  onChange={(e) =>
                      onHandleChangeStyle(key, e.target.value)
                  }
              />
            }
            return <InputField
                key={key}
                label={key}
                value={value}
                onChange={(e) => {
                  onHandleChangeStyle(key, e.target.value);
                }}
            />
          })
      }
    </div>
    </div>
  );
};

export default Setting;
