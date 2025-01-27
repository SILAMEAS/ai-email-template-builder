import React from 'react';
import {Input} from "@/components/ui/input";
import {IInput} from "@/components/custom/editor/right-side/components/types";

const InputField = ({label,value,onChange}:IInput) => {
    return (
        <div>
         <label>{label}</label>
            <Input value={value} onChange={onChange}/>
        </div>
    );
};

export default InputField;
