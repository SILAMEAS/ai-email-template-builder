"use client";
import React, {useState} from "react";
import InputField from "@/components/custom/editor/right-side/components/InputField";
import {selectedSettingType, useSelectedSettingContext_,} from "@/context/global/SelectedSettingContext";
import {ElementListInterface} from "@/Data/ElementLists";
import ColorPickerField from "@/components/custom/editor/right-side/components/ColorPickerField";
import SliderField from "@/components/custom/editor/right-side/components/SliderField";
import TextAreaField from "@/components/custom/editor/right-side/components/TextAreaField";

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
React.useEffect(()=>{
  console.log('selectedSetting',selectedSetting);
  console.log('textarea',element?.textarea )
},[selectedSetting])
  return (
    <div className={"p-5"}>
      <h2 className={"font-bold text-xl mb-4"}> Setting </h2>
      {!selectedSetting && <p>select layout to setting property</p>}
      {/** Input Field */}
      {element?.content!==undefined&& (
        <InputField
          label={"Content"}
          value={element?.content}
          onChange={(e) => {
            onHandleChange("content", e.target.value);
          }}
        />
      )}
      {element?.url!==undefined&& (
          <InputField
              label={"Url"}
              value={element?.url}
              onChange={(e) => {
                onHandleChange("url", e.target.value);
              }}
          />
      )}
      {element?.textarea!==undefined&& (
          <TextAreaField
              label={"Text Area"}
              value={element?.textarea}
              onChangeArea={(e) => {
                onHandleChange("textarea", e.target.value);
              }}
          />
      )}
    {/** Style from Css Property **/}
    <div className={'flex flex-col space-y-3 mt-3'}>
      {
          element?.style&&Object.entries(element?.style).map(([key,value])=>{
            if(key.toLowerCase().includes('color')){
              return <ColorPickerField
                  key={key}
                  label={key}
                  value={value}
                  onChange={(e) =>
                      onHandleChangeStyle(key, e.target.value)
                  }
              />
            }else if(key.toLowerCase().includes('border')||key.toLowerCase().includes('width')){
              return <SliderField
                  key={key}
                  label={key}
                  value={value}
                  onValueChange={(e) =>{
                    onHandleChangeStyle(key,e,key.toLowerCase().includes('width'))
                  }}
              />
            } else {
              return <InputField
                  key={key}
                  label={key}
                  value={value}
                  onChange={(e) => {
                    onHandleChangeStyle(key, e.target.value);
                  }}
              />
            }
          })
      }
    </div>
    </div>
  );
};

export default Setting;
