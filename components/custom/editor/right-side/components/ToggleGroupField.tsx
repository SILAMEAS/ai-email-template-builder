import React from 'react';
import {IInput} from "@/components/custom/editor/right-side/components/types";
import {ToggleGroup, ToggleGroupItem} from "@/components/ui/toggle-group";
import {AlignCenter, AlignLeft, AlignRight} from "lucide-react";
import LabelField from "@/components/custom/editor/right-side/components/LabelField";

const ToggleGroupField = ({label,option,onValueChange,value}:Pick<IInput, "label"|"option"|"onValueChange"|"value">) => {
    const icon=(item:string)=>{
        switch (item){
            case 'center':{
                return  <AlignCenter/>
            }
            case 'left':{
                return  <AlignLeft/>
            }
            case 'right':{
                return  <AlignRight/>
            }
            default:{
                return <></>
            }
        }
    }
    return (
       <div className={'flex items-center gap-x-10'}>
           <LabelField label={label}/>
           <ToggleGroup type="single"
           defaultValue={String(value)}
                        onValueChange={onValueChange}
           >
               {
                   option?.map(item=>
                       <ToggleGroupItem key={item} value={item}>{icon(item)}</ToggleGroupItem>
                   )
               }
           </ToggleGroup>
       </div>
    );
};

export default ToggleGroupField;
