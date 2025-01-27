"use client";
import { useContext } from "react";
import { DragDropLayoutElementContext } from "@/context/DragDropLayoutElementContext";

const useDragDropLayoutElementContext = () => {
  return useContext(DragDropLayoutElementContext);
};
export const useDragDropLayoutElement = () => {
  const { dragElementLayout, setDragElementLayout } =
    useDragDropLayoutElementContext();
  return { dragElementLayout, setDragElementLayout };
};
