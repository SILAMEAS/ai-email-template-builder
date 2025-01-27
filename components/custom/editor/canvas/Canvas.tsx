"use client";
import React, { useState } from "react";
import { useScreenSize } from "@/context/hooks/useScreenSize";
import { Screen } from "@/constants/Screen";
import { useDragDropLayoutElement } from "@/context/hooks/useDragDropLayoutElement";
import { useEmailTemplate } from "@/context/hooks/useEmailTemplate";
import { PropertyConstants } from "@/constants/PropertyConstants";
import ColumnLayout from "@/components/custom/editor/left-side/layout/components/ColumnLayout";
import { getLayoutComponent } from "@/components/custom/editor/left-side/functions/getLayoutComponent";

const Canvas = () => {
  const [dragOver, setDragOver] = useState<boolean>(false);
  const { screenSize } = useScreenSize();
  const { dragElementLayout } = useDragDropLayoutElement();
  const { emailTemplate, setEmailTemplate } = useEmailTemplate();
  const onDragOver = (e: any) => {
    e.preventDefault();
    setDragOver(true);
    console.log("over ...");
  };
  const onDropHandle = () => {
    setDragOver(false);
    const dragLayout = dragElementLayout?.dragLayout;
    if (dragLayout) {
      setEmailTemplate((pre: any) => [...pre, dragLayout]);
    }
  };
  return (
    <div className={"flex justify-center mt-20"}>
      <div
        className={` p-6 w-full ${screenSize === Screen.DeskTop ? "max-w-4xl" : "max-w-2xl"} ${dragOver ? "bg-purple-100 p-4" : "bg-white"}`}
        onDragOver={onDragOver}
        onDrop={onDropHandle}
      >
        {emailTemplate?.length > 0 ? (
          emailTemplate?.map((layout: any, index: number) => (
            <div key={index}>{getLayoutComponent(layout)}</div>
          ))
        ) : (
          <h2
            className={
              "p-4 text-center  bg-gray-100 border border-dashed rounded-lg"
            }
          >
            {" "}
            Create Layout Here
          </h2>
        )}
      </div>
    </div>
  );
};

export default Canvas;
