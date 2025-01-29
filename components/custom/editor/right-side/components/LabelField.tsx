import React from 'react';
import {IInput} from "@/components/custom/editor/right-side/components/types";

const LabelField = ({label,style}:Pick<IInput, "label">&{style?: React.CSSProperties}) => {
    return (
        <label style={{
            textTransform: "capitalize",
            ...style
        }}>{label}</label>
    );
};

export default LabelField;
