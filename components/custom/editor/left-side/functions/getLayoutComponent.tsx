import {PropertyConstants} from "@/constants/PropertyConstants";
import ColumnLayout from "@/components/custom/editor/left-side/layout/components/ColumnLayout";
import {LayoutListsInterface} from "@/Data/LayoutLists";

export const getLayoutComponent = (layout: LayoutListsInterface) => {
  return layout?.type === PropertyConstants.column ? (<ColumnLayout layout={layout} />
  ) : (
    <></>
  );
};
