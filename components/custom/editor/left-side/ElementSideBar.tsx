import React from 'react';
import LayoutListCards from "@/components/custom/editor/left-side/layout/LayoutListCards";
import ElementListCards from "@/components/custom/editor/left-side/elements/ElementListCards";

const ElementSideBar = () => {
    return (
        <div className={'p-5 flex flex-col gap-3 h-screen shadow-sm'}>
            {/** =============================================== */}
            {/**            List of layout                    */}
            {/** =============================================== */}
             <LayoutListCards/>
            {/** =============================================== */}
            {/**            List of Elements                    */}
            {/** =============================================== */}
            <ElementListCards/>

        </div>
    );
};

export default ElementSideBar;
