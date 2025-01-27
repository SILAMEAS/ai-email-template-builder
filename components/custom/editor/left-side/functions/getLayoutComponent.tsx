import { PropertyConstants } from "@/constants/PropertyConstants";
import ColumnLayout from "@/components/custom/editor/left-side/layout/components/ColumnLayout";
import { LayoutListsInterface } from "@/Data/LayoutLists";

export const getLayoutComponent = (layout: LayoutListsInterface) => {
  switch (layout?.type) {
    case PropertyConstants.column: {
      return <ColumnLayout layout={layout} />;
    }
    case PropertyConstants.logo: {
      return <ColumnLayout layout={layout} />;
    }
    default: {
      return <></>;
    }
  }
};
