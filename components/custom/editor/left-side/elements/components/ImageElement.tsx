import React from "react";
import { ElementListInterface } from "@/Data/ElementLists";

const ImageElement = ({
  imageUrl,
  style,
  outerStyle,
}: Pick<ElementListInterface, "imageUrl" | "style" | "outerStyle">) => {
  return (
    <div style={outerStyle}>
      <img src={imageUrl} alt={"image" + imageUrl} style={style} />
    </div>
  );
};

export default ImageElement;
