import {Columns2, Columns3, Columns4, LucideProps, RectangleHorizontal,} from "lucide-react";
import {ForwardRefExoticComponent, RefAttributes} from "react";
import {PropertyConstants} from "@/constants/PropertyConstants";

export interface LayoutListsInterface extends Record<string, any> {
  label: string;
  type: PropertyConstants;
  numOfCol: number;
  icon: ForwardRefExoticComponent<
    Omit<LucideProps, "ref"> & RefAttributes<SVGSVGElement>
  >;
}
const LayoutLists: Array<LayoutListsInterface> = [
  {
    label: 'Column',
    type: 'column' as any,
    numOfCol: 1,
    icon: RectangleHorizontal
  },
  {
    label: '2 Column',
    type: 'column'  as any,
    numOfCol: 2,
    icon: Columns2
  },
  {
    label: '3 Column',
    type: 'column'  as any,
    numOfCol: 3,
    icon: Columns3
  },
  {
    label: '4 Column',
    type: 'column'  as any,
    numOfCol: 4,
    icon: Columns4
  }
];

export default LayoutLists;
