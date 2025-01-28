import { PropertyConstants } from "@/constants/PropertyConstants";
import ButtonElement from "@/components/custom/editor/left-side/elements/components/ButtonElement";
import TextElement from "@/components/custom/editor/left-side/elements/components/TextElement";
import ImageElement from "@/components/custom/editor/left-side/elements/components/ImageElement";
import LogoElement from "@/components/custom/editor/left-side/elements/components/LogoElement";
import DividerElement from "@/components/custom/editor/left-side/elements/components/DividerElement";
import { ElementListInterface } from "@/Data/ElementLists";
import SocialMediaElements from "@/components/custom/editor/left-side/elements/components/SocialMediaElements";

export const getElementComponent = (element: ElementListInterface) => {
  switch (element?.type) {
    case PropertyConstants.button: {
      return <ButtonElement {...element} />;
    }
    case PropertyConstants.text: {
      return <TextElement {...element} />;
    }
    case PropertyConstants.image: {
      return <ImageElement {...element} />;
    }
    case PropertyConstants.logo:
    case PropertyConstants.logo_header: {
      return <LogoElement {...element} />;
    }
    case PropertyConstants.divider: {
      return <DividerElement {...element} />;
    }
    case PropertyConstants.social_icons: {
      return <SocialMediaElements {...element} />;
    }
    default: {
      return element?.type;
    }
  }
};
