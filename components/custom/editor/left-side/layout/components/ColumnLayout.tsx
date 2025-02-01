"use client"
import React, {useState} from "react";
import {getElementComponent} from "@/components/custom/editor/left-side/functions/getElementComponent";
import {ElementListInterface} from "@/Data/ElementLists";
import {useEmailTemplateContext_} from "@/context/global/EmailTemplateContext";
import {useDragDropLayoutElementContext_} from "@/context/global/DragDropLayoutElementContext";
import {useSelectedSettingContext_} from "@/context/global/SelectedSettingContext";
import {ArrowDown, ArrowUp, Trash} from "lucide-react";
import {LayoutListsInterface} from "@/Data/LayoutLists";

interface ColumnLayoutInterface {
  layout:  LayoutListsInterface;
}
const ColumnLayout = ({ layout }: ColumnLayoutInterface) => {
    const {selectedSetting, setSelectedSetting}=useSelectedSettingContext_();
  const {emailTemplate, setEmailTemplate } = useEmailTemplateContext_();
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
            return col?.id === layout?.id
                ? {...col, [index ?? 0]: dragElementLayout?.dragElement}
                : col;
        }));
    setDragOver(undefined);
  };
  const deleteLayout=(layout:LayoutListsInterface)=>{
      const updateEmailTemplate=emailTemplate?.filter(item=>item?.id!==layout?.id);
      setEmailTemplate(updateEmailTemplate);
      setSelectedSetting({});
  }
  const moveItemUp=(layout:LayoutListsInterface)=>{
      const index=emailTemplate.findIndex((item)=>item?.id===layout?.id);
      if(index>0){
         const updateItems=[...emailTemplate];
         // Swap current item with above item
          [updateItems[index],updateItems[index-1]]=[updateItems[index-1],updateItems[index]]
          setEmailTemplate(updateItems);
      }

  }
    const moveItemDown=(layout:LayoutListsInterface)=>{
        const index=emailTemplate.findIndex((item)=>{
            return item?.id===layout?.id
        });
        const updateItems=[...emailTemplate];
        // Swap current item with above item
        [updateItems[index],updateItems[index+1]]=[updateItems[index+1],updateItems[index]]
        setEmailTemplate(updateItems);

    }
  return (
    <div className={'relative'}>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: `repeat(${layout.numOfCol},1fr)`,
          gap: "0px",
        }}
        className={`${selectedSetting?.layout?.id===layout?.id&&'border border-dashed border-blue-500'}`}
      >
        {Array.from({ length: layout.numOfCol }).map((_, index) => {
          return (
            <div
              key={index}
              onClick={()=>{
                  setSelectedSetting({layout:layout,index:index})
              }}
              className={`p-0 flex items-center py-2
              ${!layout?.[index]?.type && "bg-gray-100 border border-dashed"} justify-center 
              ${index === dragOver?.index && dragOver?.columId && "bg-green-100"} cursor-pointer
              ${(selectedSetting?.layout?.id===layout?.id&& selectedSetting?.index===index)&&'border-2 border-blue-500'}`}
              onDragOver={(event) => onDragOverHandle(event, index)}
              onDrop={onDropHandle}

            >
                {getElementComponent(layout?.[index] as ElementListInterface) ?? (
                    <h2 className={'py-5'}>Drag Element here</h2>
                )}
            </div>
          );
        })}
          {
              selectedSetting?.layout?.id===layout?.id&&
              <div className={'absolute -right-11 flex gap-2 flex-col'}>
                  <div
                      className={'cursor-pointer rounded-full hover:shadow-md transition-all hover:scale-105 bg-purple-100 p-2'}
                      onClick={() => moveItemUp(layout)}>
                      <ArrowUp className={'text-red-600'}/>
                  </div>
                  <div
                      className={'cursor-pointer rounded-full hover:shadow-md transition-all hover:scale-105 bg-purple-100 p-2'}
                      onClick={() => deleteLayout(layout)}>
                      <Trash className={'text-red-600'}/>
                  </div>
                  <div
                      className={'cursor-pointer rounded-full hover:shadow-md transition-all hover:scale-105 bg-purple-100 p-2'}
                      onClick={() => moveItemDown(layout)}>
                      <ArrowDown className={'text-red-600'}/>
                  </div>

              </div>
          }
      </div>
    </div>
  );
};

export default ColumnLayout;
