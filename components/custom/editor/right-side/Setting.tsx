"use client";
import React from "react";
import useOnChange from "@/components/custom/editor/right-side/hooks/useOnChange";
import RenderComponentFromCssProperty
  from "@/components/custom/editor/right-side/renderComponents/RenderComponentFromCssProperty";
import RenderComponentCustomSetting
  from "@/components/custom/editor/right-side/renderComponents/RenderComponentCustomSetting";

const Setting = () => {
const {element,onHandleChangeStyle,onHandleChange}=useOnChange();
  return (
    <div className={"p-5"}>
      <h2 className={"font-bold text-xl mb-4"}> Setting </h2>
        {/** ===================================================================================== **/}
        {/**                             Style from Custom Setting                                 **/}
        {/** ===================================================================================== **/}
        <RenderComponentCustomSetting element={element} onHandleChange={onHandleChange}/>
        {/** ===================================================================================== **/}
        {/**                             Style from Css Property                                   **/}
        {/** ===================================================================================== **/}
        <RenderComponentFromCssProperty onHandleChangeStyle={onHandleChangeStyle} element={element}/>
    </div>
  );
};

export default Setting;
