import React from 'react';
import {IInput} from "@/components/custom/editor/right-side/components/types";
import {Input} from "@/components/ui/input";

const ColorPickerField = ({value,label,onChange}:IInput) => {
    return (
        <div className={'flex items-center'}>
            <label className={'w-[50%]'}>{label}</label>
           <div className={'flex flex-grow'}>
               <Input type={'color'} value={value} onChange={onChange}/>
           </div>
        </div>
    );
};

export default ColorPickerField;
