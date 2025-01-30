import React from "react";
import {ElementListInterface} from "@/Data/ElementLists";

const TextElement = ({
                         textarea,
  style,
                         outerStyle
}: Pick<ElementListInterface, "textarea" | "style"|"outerStyle">) => {
  return (
    <div style={{
        wordWrap:"break-word",
        overflowWrap:'break-word',
        whiteSpace:"normal",
        ...outerStyle
    }} className={'w-full'}>
      <h2 style={style}>{textarea}</h2>
    </div>
  );
};

export default TextElement;
