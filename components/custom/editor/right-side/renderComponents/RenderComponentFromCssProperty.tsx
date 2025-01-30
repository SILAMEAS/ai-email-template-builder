import React from 'react';
import ColorPickerField from "@/components/custom/editor/right-side/components/ColorPickerField";
import ToggleGroupField from "@/components/custom/editor/right-side/components/ToggleGroupField";
import SliderField from "@/components/custom/editor/right-side/components/SliderField";
import InputField from "@/components/custom/editor/right-side/components/InputField";
import {ElementListInterface} from "@/Data/ElementLists";

{/** ===================================================================================== **/}
{/**                             Style from Css Property                                   **/}
{/** ===================================================================================== **/}
const RenderComponentFromCssProperty = ({element,onHandleChangeStyle}:
                                            {element: ElementListInterface,onHandleChangeStyle: (fieldName: string, value: (string | Array<number>), percent?: boolean) => void}) => {
    return <div className={'flex flex-col space-y-3 mt-3'}>
        {
            element?.style&&Object.entries(element?.style).map(([key,value])=>{
                if(key.toLowerCase().includes('color')){
                    {/** ===================================================================================== **/}
                    {/**                             Color Or Background Color                                 **/}
                    {/** ===================================================================================== **/}
                    return <ColorPickerField
                        key={key}
                        label={key}
                        value={value}
                        onChange={(e) => {
                            onHandleChangeStyle(key, e.target.value)
                        }
                        }
                    />
                }else if(key.toLowerCase().includes('textalign')){
                    {/** ===================================================================================== **/}
                    {/**                             Text Align                                                **/}
                    {/** ===================================================================================== **/}
                    return <ToggleGroupField option={['left','center','right']} key={key} label={key} value={value}  onValueChange={(e) => {
                        onHandleChangeStyle(key, e);
                    }}/>

                } else if(key.toLowerCase().includes('border')||key.toLowerCase().includes('width')){
                    {/** ===================================================================================== **/}
                    {/**                             Width and border Property                                 **/}
                    {/** ===================================================================================== **/}
                    return <SliderField
                        key={key}
                        label={key}
                        value={value}
                        onValueChange={(e) =>{
                            onHandleChangeStyle(key,e,key.toLowerCase().includes('width'))
                        }}
                    />
                } else {
                    {/** ===================================================================================== **/}
                    {/**                             Input Normal                                              **/}
                    {/** ===================================================================================== **/}
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
};

export default RenderComponentFromCssProperty;
