"use client";
import React, {useState} from "react";
import {useDragDropLayoutElement} from "@/context/hooks/useDragDropLayoutElement";
import {useEmailTemplate} from "@/context/hooks/useEmailTemplate";
import {getLayoutComponent} from "@/components/custom/editor/left-side/functions/getLayoutComponent";
import {ResponsiveCanvas} from "@/utils/common/responsive/ResponsiveCanvas";

const Canvas = () => {
  const [dragOver, setDragOver] = useState<boolean>(false);
  const { dragElementLayout } = useDragDropLayoutElement();
  const { emailTemplate, setEmailTemplate } = useEmailTemplate();
  const onDragOver = (e: any) => {
    e.preventDefault();
    setDragOver(true);
  };
  const onDropHandle = () => {
    setDragOver(false);
    if (dragElementLayout?.dragLayout) {
      setEmailTemplate((pre: any) => [...pre, dragElementLayout?.dragLayout]);
    }
  };
  return (
    <div className={"flex justify-center mt-20"}>
      <div
        className={` p-6 w-full ${ResponsiveCanvas()} ${dragOver ? "bg-purple-100 p-4" : "bg-white"}`}
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
