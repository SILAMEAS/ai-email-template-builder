import React from 'react';
import {IInput} from "@/components/custom/editor/right-side/components/types";
import LabelField from "@/components/custom/editor/right-side/components/LabelField";

const ImagePreviewField = ({label,onChange,value}:Pick<IInput, "label"|"option"|"onChange"|"value">)  => {
    return (
        <div>
            <LabelField label={label}/>
            <img src={String(value)} alt={String(value)} className={'w-full h-[auto] object-cover border rounded-xl'}/>
            <input value={value} onChange={onChange} className={'mt-2 border p-2 rounded-xl w-full'}/>

        </div>
    );
};

export default ImagePreviewField;
