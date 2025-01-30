import React, {FormEventHandler} from "react";

export type IDType=string|number;
export type IInput={
    label:IDType,value:IDType,
    onChange?: React.ChangeEventHandler<HTMLInputElement>,
    onChangeImage?:FormEventHandler<HTMLImageElement>,
    onValueChange?:(value: number[]|string)=> void,
    onChangeArea?: React.ChangeEventHandler<HTMLTextAreaElement> ,
    option?:Array<string>,
    onClick?: React.MouseEventHandler<HTMLButtonElement>}

