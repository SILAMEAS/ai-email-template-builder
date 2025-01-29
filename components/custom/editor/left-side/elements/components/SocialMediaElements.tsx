import React from "react";
import { ElementListInterface } from "@/Data/ElementLists";
import ImageElement from "@/components/custom/editor/left-side/elements/components/ImageElement";
import Link from "next/link";

const SocialMediaElements = ({
  socialIcons,
  outerStyle,
  style,
}: Pick<ElementListInterface, "socialIcons" | "outerStyle" | "style">) => {
  return (
    <div style={outerStyle}>
      {socialIcons?.map((item) => (
        <Link key={item.icon} href={item.url}>
          <ImageElement imageUrl={item.icon} style={style} />
        </Link>
      ))}
    </div>
  );
};

export default SocialMediaElements;
