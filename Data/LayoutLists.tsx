import {Columns2, Columns3, Columns4, LucideProps, RectangleHorizontal} from "lucide-react";
import {ForwardRefExoticComponent, RefAttributes} from "react";

export interface LayoutListsInterface{
    label:string,
    type:string,
    numOfCol:number,
    icon:ForwardRefExoticComponent<Omit<LucideProps, "ref"> & RefAttributes<SVGSVGElement>>
}
const LayoutLists:Array<LayoutListsInterface>=[

    {
        label:"1 Column",
        type:"column-1",
        numOfCol:1,
        icon:RectangleHorizontal
    },
    {
        label:"2 Column",
        type:"column-2",
        numOfCol:2,
        icon:Columns2
    },
    {
        label:"3 Column",
        type:"column-3",
        numOfCol:3,
        icon:Columns3
    },
    {
        label:"4 Column",
        type:"column-4",
        numOfCol:4,
        icon:Columns4
    }
]

export default LayoutLists