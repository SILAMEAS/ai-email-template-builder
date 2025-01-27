import {PropertyConstants} from "@/constants/PropertyConstants";
import ButtonElement from "@/components/custom/editor/left-side/elements/components/ButtonElement";
import TextElement from "@/components/custom/editor/left-side/elements/components/TextElement";
import ImageElement from "@/components/custom/editor/left-side/elements/components/ImageElement";
import LogoElement from "@/components/custom/editor/left-side/elements/components/LogoElement";
import DividerElement from "@/components/custom/editor/left-side/elements/components/DividerElement";
import {ElementListInterface} from "@/Data/ElementLists";

export const getElementComponent = (element: ElementListInterface) => {
  switch (element?.type) {
    case PropertyConstants.button: {
      return (
        <ButtonElement{...element}/>
      );
    }
    case PropertyConstants.text: {
      return <TextElement  {...element}/>;
    }
    case PropertyConstants.image: {
      return (
        <ImageElement{...element}/>
      );
    }
    case PropertyConstants.logo: {
      return (
        <LogoElement{...element}/>
      );
    }
    case PropertyConstants.divider: {
      return (
          <DividerElement{...element} />
      );
    }

    default: {
      return element?.type;
    }
  }
};
