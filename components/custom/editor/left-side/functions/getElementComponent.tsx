import { PropertyConstants } from "@/constants/PropertyConstants";
import ButtonElement from "@/components/custom/editor/left-side/elements/components/ButtonElement";
import TextElement from "@/components/custom/editor/left-side/elements/components/TextElement";
import ImageElement from "@/components/custom/editor/left-side/elements/components/ImageElement";
import LogoElement from "@/components/custom/editor/left-side/elements/components/LogoElement";

export const getElementComponent = (element: any) => {
  switch (element?.type) {
    case PropertyConstants.button: {
      return (
        <ButtonElement
          content={element?.content}
          style={element?.style}
          url={element?.url}
        />
      );
    }
    case PropertyConstants.text: {
      return <TextElement content={element?.content} style={element?.style} />;
    }
    case PropertyConstants.image: {
      return (
        <ImageElement
          imageUrl={element?.imageUrl}
          style={element?.style}
          outerStyle={element?.outerStyle}
        />
      );
    }
    case PropertyConstants.logo: {
      return (
        <LogoElement
          imageUrl={element?.imageUrl}
          style={element?.style}
          outerStyle={element?.outerStyle}
        />
      );
    }

    default: {
      return element?.type;
    }
  }
};
