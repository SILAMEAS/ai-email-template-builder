import React from "react";
import {ElementListInterface} from "@/Data/ElementLists";

const ButtonElement = ({
  content,
  style,
  url,
                           outerStyle
}: Pick<ElementListInterface, "content" | "style" | "url"|"outerStyle">) => {
  return (
    <div style={outerStyle}>
        <a href={url} style={style}>
            {content}
        </a>
    </div>
  );
};

export default ButtonElement;
