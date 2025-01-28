import {createContext, useContext} from "react"

export type dragElementLayoutType=Record<string, any>|{dragLayout?:any,dragElement?:any};
export type DragDropLayoutElementContent = {
    dragElementLayout: dragElementLayoutType,
    setDragElementLayout:(c: dragElementLayoutType) => void
}
export const DragDropLayoutElementContext = createContext<DragDropLayoutElementContent>({
    dragElementLayout: {}, // set a default value
    setDragElementLayout: (p)=>p,
})
export const useDragDropLayoutElementContext_ = () => useContext(DragDropLayoutElementContext)