import React from 'react';
import {IInput} from "@/components/custom/editor/right-side/components/types";
import {Textarea} from "@/components/ui/textarea";

const TextAreaField = ({label,value,onChangeArea}:Pick<IInput, "label"|"value"|"onChangeArea">) => {
    return (
        <div>
            <label>{label}</label>
            <Textarea value={value} onChange={onChangeArea}/>
        </div>
    );
};
export default TextAreaField;
