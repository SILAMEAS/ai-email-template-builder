"use client";
import React from "react";
import Layout, {LayoutListsInterface} from "@/Data/LayoutLists";
import {EnumScreen} from "@/constants/EnumScreen";
import {useScreenSizeContext_} from "@/context/global/ScreenSizeContext";
import {useDragDropLayoutElementContext_} from "@/context/global/DragDropLayoutElementContext";

const LayoutListCards = () => {
  const { setDragElementLayout } = useDragDropLayoutElementContext_();
  const {screenSize}=useScreenSizeContext_();
  const onDragLayoutStart = ({ layout }: { layout: LayoutListsInterface }) => {
    setDragElementLayout({
      dragLayout: {
        ...layout,
        id: Date.now(),
      },
    });
  };
  return (
    <div>
      <h2 className={"font-bold text-lg"}>Layout</h2>
      <div className={"grid grid-cols-1 md:grid-cols-2 gap-5"}>
        {Layout.map((layout, index) => (
          <div
            key={index}
            className={
              "flex justify-center items-center flex-col border border-dashed rounded-xl p-3 group hover:shadow-md hover:border-primary cursor-pointer"
            }
            draggable
            onDragStart={() => onDragLayoutStart({ layout })}
          >
            <div>
              {
                <layout.icon
                  className={"group-hover:text-primary h-9 w-9 p-2"}
                />
              }
            </div>
              {
                  [EnumScreen.DeskTop, EnumScreen.Laptop].includes(screenSize) &&
                  <h2 className={"text-sm group-hover:text-primary"}>
                      {layout.label}
                  </h2>
              }

          </div>
        ))}
      </div>
    </div>
  );
};

export default LayoutListCards;
