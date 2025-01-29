import React from "react";
import {ElementListInterface} from "@/Data/ElementLists";

const ButtonElement = ({
  content,
  style,
  url,
}: Pick<ElementListInterface, "content" | "style" | "url">) => {
  return (
    <div style={style}>
        <a href={url}>
            {content}
        </a>
    </div>
  );
};

export default ButtonElement;
