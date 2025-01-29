"use client";
import React, { useState } from "react";
import { getLayoutComponent } from "@/components/custom/editor/left-side/functions/getLayoutComponent";
import { ResponsiveCanvas } from "@/utils/common/responsive/ResponsiveCanvas";
import { useDragDropLayoutElementContext_ } from "@/context/global/DragDropLayoutElementContext";
import { useEmailTemplateContext_ } from "@/context/global/EmailTemplateContext";
import { LayoutListsInterface } from "@/Data/LayoutLists";

const Canvas = () => {
  const [dragOver, setDragOver] = useState<boolean>(false);
  const { dragElementLayout } = useDragDropLayoutElementContext_();
  const { emailTemplate, setEmailTemplate } = useEmailTemplateContext_();
  const onDragOver = (e: any) => {
    e.preventDefault();
    setDragOver(true);
  };
  const onDropHandle = () => {
    setDragOver(false);
    if (dragElementLayout?.dragLayout) {
      setEmailTemplate((pre) => {
        return [...pre, dragElementLayout?.dragLayout];
      });
    }
  };
  return (
    <div className={"flex justify-center mt-20"}>
      <button
        className={` p-6 w-full ${ResponsiveCanvas()} ${dragOver ? "bg-purple-100 p-4" : "bg-white"}`}
        onDragOver={onDragOver}
        onDrop={onDropHandle}
      >
        {emailTemplate && emailTemplate?.length > 0 ? (
          emailTemplate?.map((layout) => (
            <div key={layout?.id}>
              {getLayoutComponent(layout as LayoutListsInterface)}
            </div>
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
      </button>
    </div>
  );
};

export default Canvas;
