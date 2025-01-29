import React from "react";

export type IDType=string|number;
export type IInput={label:IDType,value:IDType, onChange?: React.ChangeEventHandler<HTMLInputElement>,
    onValueChange?:(value: number[])=> void,
    onChangeArea?: React.ChangeEventHandler<HTMLTextAreaElement> }