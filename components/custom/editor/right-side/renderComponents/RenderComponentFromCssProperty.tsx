import React from 'react';
import {ElementListInterface} from "@/Data/ElementLists";
import ComponentsRenderCss from "@/components/custom/editor/right-side/renderComponents/ComponentsRenderCss";

export type IRenderComponentFromCssProperty= {element: ElementListInterface,onHandleChangeOutStyle?: (fieldName: string, value: (string | Array<number>), percent?: boolean) => void,onHandleChangeStyle?: (fieldName: string, value: (string | Array<number>), percent?: boolean) => void}
{/** ===================================================================================== **/}
{/**                             Style from Css Property                                   **/}
{/** ===================================================================================== **/}
const RenderComponentFromCssProperty = ({element,onHandleChangeStyle,onHandleChangeOutStyle}:IRenderComponentFromCssProperty) => {
    return <div className={'flex flex-col space-y-3 mt-3'}>
        {
            element?.style&&Object.entries(element?.style).map(([key,value])=>{
               return  onHandleChangeStyle&&<ComponentsRenderCss key={key} value={value} KEY={key} onHandleChangeStyle={onHandleChangeStyle}/>
            })
        }
        {
            element?.outerStyle &&
            <h2 className={'text-center py-5 border bg-blue-400 text-white'}> Container Style</h2>
        }
        {
            element?.outerStyle&&Object.entries(element?.outerStyle).map(([key,value])=>{
                return  onHandleChangeOutStyle&&<ComponentsRenderCss key={key} value={value} KEY={key} onHandleChangeOutStyle={onHandleChangeOutStyle}/>
            })
        }
    </div>
};

export default RenderComponentFromCssProperty;
