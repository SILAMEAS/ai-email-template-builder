import React from "react";
import {ElementListInterface} from "@/Data/ElementLists";

const TextElement = ({
                         textarea,
  style
}: Pick<ElementListInterface, "textarea" | "style">) => {
  return (
    <div style={{
        wordWrap:"break-word",
        overflowWrap:'break-word',
        whiteSpace:"normal",
    }} className={'w-full'}>
      <h2 style={style}>{textarea}</h2>
    </div>
  );
};

export default TextElement;
