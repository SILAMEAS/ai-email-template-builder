import React from "react";
import EditorHeader from "@/components/custom/EditorHeader";
import ElementSideBar from "@/components/custom/editor/left-side/ElementSideBar";
import Canvas from "@/components/custom/editor/canvas/Canvas";
import Setting from "@/components/custom/editor/right-side/Setting";

const Editor = () => {
  return (
    <div className={'w-full'}>
      <EditorHeader />
      <div className={"grid grid-cols-5"}>
        <ElementSideBar />
        <div className={"col-span-3 bg-gray-200 mt-12"}>
          <Canvas />
        </div>
        <Setting />
      </div>
    </div>
  );
};

export default Editor;
