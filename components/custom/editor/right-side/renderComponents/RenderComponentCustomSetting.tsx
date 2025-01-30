import React from 'react';
import InputField from "@/components/custom/editor/right-side/components/InputField";
import {ElementListInterface} from "@/Data/ElementLists";
import TextAreaField from "@/components/custom/editor/right-side/components/TextAreaField";
import ImagePreviewField from "@/components/custom/editor/right-side/components/ImagePreviewField";

{/** ===================================================================================== **/}
{/**                             Style from Custom Setting                                 **/}
{/** ===================================================================================== **/}
const RenderComponentCustomSetting = ({element,onHandleChange}:
                                            {element: ElementListInterface,onHandleChange: (fliedName: string, value: string) => void}) => {
    element?.imageUrl&& console.log('element',element?.style)
    return <div>
        {element?.imageUrl!==undefined&& (
            <ImagePreviewField
                label={"Image Preview"}
                value={element?.imageUrl}
                onChange={(e) => {
                    onHandleChange("imageUrl", e.target.value);
                }}
            />
        )}
        {element?.content!==undefined&& (
        <InputField
            label={"Content"}
            value={element?.content}
            onChange={(e) => {
                onHandleChange("content", e.target.value);
            }}
        />
        )}
        {/** ===================================================================================== **/}
        {/**                                        Url                                            **/}
        {/** ===================================================================================== **/}
        {element?.url!==undefined&& (
            <InputField
                label={"Url"}
                value={element?.url}
                onChange={(e) => {
                    onHandleChange("url", e.target.value);
                }}
            />
        )}
        {/** ===================================================================================== **/}
        {/**                                        Text Area                                      **/}
        {/** ===================================================================================== **/}
        {element?.textarea!==undefined&& (
            <TextAreaField
                label={"Text Area"}
                value={element?.textarea}
                onChangeArea={(e) => {
                    onHandleChange("textarea", e.target.value);
                }}
            />
        )}
    </div>
};

export default RenderComponentCustomSetting;
