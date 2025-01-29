import React from "react";

export type IDType=string|number;
export type IInput={label:IDType,value:IDType, onChange?: React.ChangeEventHandler<HTMLInputElement>,
    onValueChange?:(value: number[]|string)=> void,
    onChangeArea?: React.ChangeEventHandler<HTMLTextAreaElement> ,
option?:Array<string>,onClick?: React.MouseEventHandler<HTMLButtonElement>}

