import {
  Frame,
  Image,
  PanelTop,
  RectangleEllipsis,
  SquareSplitVertical,
  TextSelectionIcon,
  Twitter,
} from "lucide-react";
import {PropertyConstants} from "@/constants/PropertyConstants";
import {LayoutListsInterface} from "@/Data/LayoutLists";
import React from "react";


export interface ElementListInterface
  extends Omit<LayoutListsInterface, "numOfCol"> {
  content?: string;
  url?: string;
  style?:  React.CSSProperties,
  outerStyle?:React.CSSProperties,
  textarea?: string;
  imageUrl?: string;
  alt?: string;
  socialIcons?: Array<{ icon: string; url: string }>;
}
export type typeElementList = Record<string,any>|{style?:React.CSSProperties};
export const ElementLists:Array<ElementListInterface> = [
  {
    icon: RectangleEllipsis,
    label: "Button",
    type: PropertyConstants.button,
    content: "Sample Button",
    url: "#",
    style: {
      textAlign: "center",
      backgroundColor: "#007bff",
      color: "#ffffff",
      padding: "10px",
      paddingTop:'10px',
      paddingBottom:'10px',
      width: "auto",
      fontSize: "16px",
      borderRadius: "10px",
      fontWeight: "normal"
    },
    outerStyle: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      width: "100%",
    },
  },
  {
    icon: TextSelectionIcon,
    type: 'Text',
    label: 'Text',
    textarea: 'Sample Text',
    style: {
      backgroundColor: '#fff',
      color: '#000000',
      textAlign: 'center',
      textTransform: 'uppercase',
      fontWeight: 'normal',
      padding: '10px',
      fontSize: '22px',
      width: "100px",
    },
    outerStyle: {
      backgroundColor: '#fff',
      width: '100%'
    }
  },
  {
    icon: Image,
    type: PropertyConstants.image,
    label: "Image",
    imageUrl: "/image.png",
    alt: "Image",
    url: "#",
    style: {
      backgroundColor: "#ffffff",
      padding: "0px",
      height: "50%",
      width: "100%",
      margin: "0px",
      borderRadius: "0px",
      objectFit: "contain",
    },
    outerStyle: {
      display: "flex",
      width: "100%",
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: "#fff",
    },
  },
  {
    icon: Frame,
    type: PropertyConstants.logo,
    label: "Logo",
    imageUrl: "/logo.png",
    alt: "logo",
    url: "#",
    style: {
      backgroundColor: "#ffffff",
      padding: "10px",
      height: "50%",
      width: "50%",
    },
    outerStyle: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: "#fff",
      width: "100%",
    },
  },
  {
    icon: PanelTop,
    type: PropertyConstants.logo_header,
    label: "Logo Header",
    imageUrl: "/logo.png",
    alt: "logo",
    url: "#",
    style: {
      backgroundColor: "#ffffff",
      padding: "10px",
      height: "40%",
      width: "40%",
    },
    outerStyle: {
      display: "flex",
      justifyContent: "left",
      alignItems: "center",
      backgroundColor: "#fff",
      width: "100%",
    },
  },
  {
    icon: SquareSplitVertical,
    type: PropertyConstants.divider,
    label: "Divider",
    content: "",
    style: {
      color: "#000000",
      padding: "10px",
      width: "100%",
    },
  },
  {
    icon: Twitter,
    type: PropertyConstants.social_icons,
    label: "Social Icons",
    socialIcons: [
      {
        icon: "https://cdn-icons-png.flaticon.com/128/2111/2111463.png",
        url: "",
      },
      {
        icon: "https://cdn-icons-png.flaticon.com/128/5968/5968852.png",
        url: "",
      },
      {
        icon: "https://cdn-icons-png.flaticon.com/128/5968/5968756.png",
        url: "",
      },
    ],
    options: [
      {
        icon: "https://cdn-icons-png.flaticon.com/128/2111/2111463.png",
        url: "",
      },
      {
        icon: "https://cdn-icons-png.flaticon.com/128/5968/5968852.png",
        url: "",
      },
      {
        icon: "https://cdn-icons-png.flaticon.com/128/5968/5968756.png",
        url: "",
      },
    ],
    style: {
      width: 40,
      height: 40,
    },
    outerStyle: {
      display: "flex",
      gap: '15px',
    },
  },
];
export default ElementLists;