import React from "react";
import { LayoutListsInterface } from "@/Data/LayoutLists";
interface ColumnLayoutInterface {
  layout: LayoutListsInterface;
}
const ColumnLayout = ({ layout }: ColumnLayoutInterface) => {
  return (
    <div>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: `repeat(${layout.numOfCol},1fr)`,
          gap: "0px",
        }}
      >
        {Array.from({ length: layout.numOfCol }).map((_, index) => (
          <div
            key={index}
            className={
              "p-2 flex items-center bg-gray-100 border border-dashed justify-center"
            }
          >
            {index + 1}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ColumnLayout;
