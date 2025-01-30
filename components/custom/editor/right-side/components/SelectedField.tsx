import React from 'react';
import {IInput} from "@/components/custom/editor/right-side/components/types";
import LabelField from "@/components/custom/editor/right-side/components/LabelField";
import {Select, SelectContent, SelectGroup, SelectItem, SelectTrigger, SelectValue,} from "@/components/ui/select"

const SelectedField = ({label,option,onValueChange,value}:Pick<IInput, "label"|"option"|"onValueChange"|"value">) => {
    return (
        <div>
            <LabelField label={label}/>
            <Select onValueChange={onValueChange}>
                <SelectTrigger className="w-full capitalize">
                    <SelectValue placeholder={value}/>
                </SelectTrigger>
                <SelectContent>
                    <SelectGroup>
                        {
                            option?.map(item=>
                                <SelectItem value={item} className={'capitalize'}>{item}</SelectItem>
                            )
                        }
                    </SelectGroup>
                </SelectContent>
            </Select>

        </div>
    );
};

export default SelectedField;
