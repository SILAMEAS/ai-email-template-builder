import React from 'react';
import {IInput} from "@/components/custom/editor/right-side/components/types";
import {Input} from "@/components/ui/input";

const ColorPickerField = ({value,label,onChange}:IInput) => {
    return (
        <div>
            <label>{label}</label>
            <Input type={'color'} value={value} onChange={onChange}/>
        </div>
    );
};

export default ColorPickerField;
