import React from 'react';
import {Input} from "@/components/ui/input";
import {IInput} from "@/components/custom/editor/right-side/components/types";
import LabelField from "@/components/custom/editor/right-side/components/LabelField";

const InputField = ({label,value,onChange}:Pick<IInput, "label"|"value"|"onChange">) => {
    return (
        <div>
            <LabelField label={label}/>
            <Input value={value} onChange={onChange}/>
        </div>
    );
};

export default InputField;
