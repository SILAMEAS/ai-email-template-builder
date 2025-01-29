"use client";
import React from "react";
import ElementLists, {typeElementList} from "@/Data/ElementLists";
import {EnumScreen} from "@/constants/EnumScreen";
import {useScreenSizeContext_} from "@/context/global/ScreenSizeContext";
import {useDragDropLayoutElementContext_} from "@/context/global/DragDropLayoutElementContext";

const ElementListCards = () => {
  const { setDragElementLayout } = useDragDropLayoutElementContext_();
  const { screenSize } = useScreenSizeContext_();
  const onDragElementStart = ({ element }: { element: typeElementList }) => {
    setDragElementLayout({
      dragElement: {
        ...element,
        id: Date.now(),
      },
    });
  };
  return (
    <div className={"mt-6"}>
      <h2 className={"font-bold text-lg"}>Elements</h2>
      <div className={"grid grid-cols-1 md:grid-cols-2 gap-5"}>
        {ElementLists.map((element,index) => (
          <button
            key={`${index}`}
            className="flex justify-center items-center flex-col border border-dashed rounded-xl p-3 group hover:shadow-md hover:border-primary cursor-pointer"
            draggable
            onDragStart={() => onDragElementStart({ element })}
          >
            <div>
              {
                <element.icon
                  className={"group-hover:text-primary h-9 w-9 p-2"}
                />
              }
            </div>
            {[EnumScreen.DeskTop, EnumScreen.Laptop].includes(screenSize) && (
              <h2 className={"text-sm group-hover:text-primary"}>
                {element.label}
              </h2>
            )}
          </button>
        ))}
      </div>
    </div>
  );
};

export default ElementListCards;
