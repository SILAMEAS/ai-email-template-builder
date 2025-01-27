import React from "react";
import ImageElement from "@/components/custom/editor/left-side/elements/components/ImageElement";
import { ElementListInterface } from "@/Data/ElementLists";

const LogoElement = (
  props: Pick<ElementListInterface, "imageUrl" | "style" | "outerStyle">,
) => {
  return <ImageElement {...props} />;
};

export default LogoElement;
