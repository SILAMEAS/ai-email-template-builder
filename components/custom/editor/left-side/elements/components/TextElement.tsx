import React from "react";
import { ElementListInterface } from "@/Data/ElementLists";

const TextElement = ({
  content,
  style,
}: Pick<ElementListInterface, "content" | "style">) => {
  return (
    <div>
      <h2 style={style}>{content}</h2>
    </div>
  );
};

export default TextElement;
