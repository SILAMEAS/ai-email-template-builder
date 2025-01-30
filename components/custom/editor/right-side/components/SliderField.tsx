import React from 'react';
import {IInput} from "@/components/custom/editor/right-side/components/types";
import {Slider} from "@/components/ui/slider";

const SliderField = ({label,value,onValueChange}:IInput) => {
    return (
        <div>
            <label>{label} {`(${value})`}</label>
            <div className={'flex p-2'}>
                <Slider defaultValue={[Number(value)]} max={100} step={1} onValueChange={onValueChange}/>
            </div>
        </div>
    );
};

export default SliderField;
