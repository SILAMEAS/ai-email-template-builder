import React from 'react';
import ColorPickerField from "@/components/custom/editor/right-side/components/ColorPickerField";
import {arrayFontWeightValue, arrayTextAlignValue, arrayTextTransformValue} from "@/Data/typeProperty";
import ToggleGroupField from "@/components/custom/editor/right-side/components/ToggleGroupField";
import SliderField from "@/components/custom/editor/right-side/components/SliderField";
import SelectedField from "@/components/custom/editor/right-side/components/SelectedField";
import InputField from "@/components/custom/editor/right-side/components/InputField";
import {
    IRenderComponentFromCssProperty
} from "@/components/custom/editor/right-side/renderComponents/RenderComponentFromCssProperty";

const ComponentsRenderCss = ({KEY,value,onHandleChangeStyle,onHandleChangeOutStyle}:Omit<IRenderComponentFromCssProperty, 'element'>&{KEY:string,value:string}) => {
    switch (KEY){
        case 'color':
        case 'backgroundColor':{
            return <ColorPickerField
                key={KEY}
                label={KEY}
                value={value}
                onChange={(e) => {
                    onHandleChangeStyle&& onHandleChangeStyle(KEY, e.target.value);
                    onHandleChangeOutStyle&& onHandleChangeOutStyle(KEY, e.target.value)
                }
                }
            />
        }
        case "textAlign":
        case "justifyContent":
        case "textTransform":{
            const handleOptionToggleGroupField=()=>{
                let option=[''];
                switch (KEY){
                    case 'textAlign':
                    case 'justifyContent':{
                        return  option=arrayTextAlignValue
                    }
                    case 'textTransform':{
                        return  option=arrayTextTransformValue
                    }
                    default:{
                        return  option
                    }
                }
            }
            return <ToggleGroupField option={handleOptionToggleGroupField()} key={KEY} label={KEY} value={value}  onValueChange={(e) => {
                onHandleChangeStyle&&onHandleChangeStyle(KEY, e);
                onHandleChangeOutStyle&&onHandleChangeOutStyle(KEY, e);
            }}/>
        }
        case "borderRadius":
        case "width":{
            return <SliderField
                key={KEY}
                label={KEY}
                value={value}
                onValueChange={(e) =>{
                    onHandleChangeStyle&&onHandleChangeStyle(KEY,e,KEY.toLowerCase().includes('width'));
                    onHandleChangeOutStyle&&onHandleChangeOutStyle(KEY,e,KEY.toLowerCase().includes('width'))
                }}
            />
        }
        case 'fontWeight':{
            const handleOptionSelectedField=()=>{
                let option=[''];
                switch (KEY){
                    case 'fontWeight':{
                        return  option=arrayFontWeightValue
                    }
                    default:{
                        return  option
                    }
                }
            }
            return <SelectedField
                key={KEY}
                label={KEY}
                value={value}
                option={handleOptionSelectedField()}
                onValueChange={(e) =>{
                    onHandleChangeStyle&&onHandleChangeStyle(KEY,e)
                    onHandleChangeOutStyle&&onHandleChangeOutStyle(KEY,e)
                }
            }
            />
        }
        default:{
            return  <InputField
                key={KEY}
                label={KEY}
                value={value}
                onChange={(e) => {
                    onHandleChangeStyle&&onHandleChangeStyle(KEY, e.target.value);
                    onHandleChangeOutStyle&&onHandleChangeOutStyle(KEY, e.target.value);
                }}
            />
        }


    }
};

export default ComponentsRenderCss;
