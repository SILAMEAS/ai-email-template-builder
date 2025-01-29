"use client"
import React, {useState} from "react";
import {getElementComponent} from "@/components/custom/editor/left-side/functions/getElementComponent";
import {ElementListInterface} from "@/Data/ElementLists";
import {useEmailTemplateContext_} from "@/context/global/EmailTemplateContext";
import {useDragDropLayoutElementContext_} from "@/context/global/DragDropLayoutElementContext";
import {useSelectedSettingContext_} from "@/context/global/SelectedSettingContext";

interface ColumnLayoutInterface {
  layout: any;
}
const ColumnLayout = ({ layout }: ColumnLayoutInterface) => {
    const {selectedSetting, setSelectedSetting}=useSelectedSettingContext_();
  const { setEmailTemplate } = useEmailTemplateContext_();
  const { dragElementLayout } = useDragDropLayoutElementContext_();
  const [dragOver, setDragOver] = useState<
    | {
        index: number;
        columId: number;
      }
    | undefined
  >(undefined);
  const onDragOverHandle = (event: any, index: number) => {
    event.preventDefault();
    setDragOver({
      index: index,
      columId: layout?.id,
    });
  };
  const onDropHandle = () => {
    const index = dragOver?.index;
    setEmailTemplate((prevItem) =>
        prevItem?.map((col) => {
            return col.id === layout?.id
                ? {...col, [index ?? 0]: dragElementLayout?.dragElement}
                : col;
        }));
    setDragOver(undefined);
  };
  return (
    <div>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: `repeat(${layout.numOfCol},1fr)`,
          gap: "0px",
        }}
      >
        {Array.from({ length: layout.numOfCol }).map((_, index) => {
          return (
            <div
              key={index}
              onClick={()=>{
                  setSelectedSetting({layout:layout,index:index})
              }}
              className={`p-0 flex items-center 
              ${!layout?.[index]?.type && "bg-gray-100 border border-dashed"} justify-center 
              ${index === dragOver?.index && dragOver?.columId && "bg-green-100"} cursor-pointer
              ${(selectedSetting?.layout?.id===layout?.id&& selectedSetting?.index===index)&&'border-2 border-blue-500 p-10'}`}
              onDragOver={(event) => onDragOverHandle(event, index)}
              onDrop={onDropHandle}

            >
                {getElementComponent(layout?.[index] as ElementListInterface) ?? (
                    <h2>Drag Element here</h2>
                )}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ColumnLayout;
