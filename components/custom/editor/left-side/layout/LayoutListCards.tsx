"use client";
import React from "react";
import Layout, { LayoutListsInterface } from "@/Data/LayoutLists";
import { useDragDropLayoutElement } from "@/context/hooks/useDragDropLayoutElement";

const LayoutListCards = () => {
  const { setDragElementLayout, dragElementLayout } =
    useDragDropLayoutElement();
  const onDragLayoutStart = ({ layout }: { layout: LayoutListsInterface }) => {
    console.log("onDragLayoutStart");
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
            <h2 className={"text-sm group-hover:text-primary"}>
              {layout.label}
            </h2>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LayoutListCards;
