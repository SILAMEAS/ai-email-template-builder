import React from "react";
import { ElementListInterface } from "@/Data/ElementLists";

const ButtonElement = ({
  content,
  style,
  url,
}: Pick<ElementListInterface, "content" | "style" | "url">) => {
  return (
    <div>
      <a href={url}>
        <button style={style}>{content}</button>
      </a>
    </div>
  );
};

export default ButtonElement;
