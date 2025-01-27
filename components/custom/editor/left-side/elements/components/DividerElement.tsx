import React from 'react';
import {ElementListInterface} from "@/Data/ElementLists";

const DividerElement = ({style}:Pick<ElementListInterface,'style'>) => {
    return (
        <hr style={style}/>
    );
};

export default DividerElement;
