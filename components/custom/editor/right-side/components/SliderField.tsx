import React from 'react';
import {IInput} from "@/components/custom/editor/right-side/components/types";
import {Slider} from "@/components/ui/slider";

const SliderField = ({label,value,onValueChange}:IInput) => {
    return (
        <div>
            <label>{label} {`(${value})`}</label>
            <Slider defaultValue={[Number(value)]} max={100} step={1} onValueChange={onValueChange}/>

        </div>
    );
};

export default SliderField;
