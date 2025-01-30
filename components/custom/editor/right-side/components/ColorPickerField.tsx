import React from 'react';
import {IInput} from "@/components/custom/editor/right-side/components/types";
import {Input} from "@/components/ui/input";
import LabelField from "@/components/custom/editor/right-side/components/LabelField";

const ColorPickerField = ({value,label,onChange}:IInput) => {
    return (
        <div className={'flex items-center gap-x-10'}>
            <LabelField label={label} style={{width:"50%"}}/>
           <div className={'flex flex-grow'}>
               <Input type={'color'} value={value} onChange={onChange}/>
           </div>
        </div>
    );
};

export default ColorPickerField;
