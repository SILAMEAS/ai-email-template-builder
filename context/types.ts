import { Dispatch, SetStateAction } from "react";

export type UserDetailContextType = {
  userDetail: any;
  setUserDetail: () => void;
};
export type IDtype = string | number;
export type recordType = Record<string, any>;
export type layoutType = recordType;
export type selectedSettingType = {
  layout: Array<layoutType> | recordType | IDtype; // Initialize layout as an empty array
  index: number; // Default index to a valid number
};
export type SelectedSettingContextType = {
  selectedSetting: selectedSettingType;
  setSelectedSetting: Dispatch<SetStateAction<selectedSettingType>>;
};
export type EmailTemplateContextType = {
  emailTemplate: any;
  setEmailTemplate: () => void;
};
export type ScreenSizeContextType = {
  screenSize: any;
  setScreenSize: () => void;
};
export type DragDropLayoutElementContextType = {
  dragElementLayout: any;
  setDragElementLayout: () => void;
};
