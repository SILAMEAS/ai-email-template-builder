import React from 'react';
import {IInput} from "@/components/custom/editor/right-side/components/types";
import {ToggleGroup, ToggleGroupItem} from "@/components/ui/toggle-group";
import {AlignCenter, AlignLeft, AlignRight, CaseLower, CaseSensitive, CaseUpper} from "lucide-react";
import LabelField from "@/components/custom/editor/right-side/components/LabelField";
import {EnumTextAlignValue, EnumTextTransformValue} from "@/Data/typeProperty";

const ToggleGroupField = ({label,option,onValueChange,value}:Pick<IInput, "label"|"option"|"onValueChange"|"value">) => {
    const icon=(item:string|EnumTextAlignValue|EnumTextTransformValue)=>{
        switch (item){
            case EnumTextAlignValue.center:{
                return  <AlignCenter/>
            }
            case EnumTextAlignValue.left:{
                return  <AlignLeft/>
            }
            case EnumTextAlignValue.right:{
                return  <AlignRight/>
            }
            case EnumTextTransformValue.uppercase:{
                return  <CaseUpper/>
            }
            case EnumTextTransformValue.lowercase:{
                return  <CaseLower/>
            }
            case EnumTextTransformValue.capitilized:{
                return  <CaseSensitive/>
            }
            default:{
                return <></>
            }
        }
    }
    return (
       <div>
           <LabelField label={label}/>
           <ToggleGroup type="single"
           defaultValue={String(value)}
                        onValueChange={onValueChange}
                        className={'flex justify-between'}
           >
               {
                   option?.map(item=>
                       <ToggleGroupItem key={item} value={item} className={'w-full mt-2'}>{icon(item)}</ToggleGroupItem>
                   )
               }
           </ToggleGroup>
       </div>
    );
};

export default ToggleGroupField;
