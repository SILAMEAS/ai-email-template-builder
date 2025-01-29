import React from 'react';
import {IInput} from "@/components/custom/editor/right-side/components/types";
import {Textarea} from "@/components/ui/textarea";
import LabelField from "@/components/custom/editor/right-side/components/LabelField";

const TextAreaField = ({label,value,onChangeArea}:Pick<IInput, "label"|"value"|"onChangeArea">) => {
    return (
        <div>
            <LabelField label={label}/>
            <Textarea value={value} onChange={onChangeArea}/>
        </div>
    );
};
export default TextAreaField;
