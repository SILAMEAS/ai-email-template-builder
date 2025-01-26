import React from 'react';
import ElementLists from "@/Data/ElementLists";

const ElementListCards = () => {
    return (
        <div className={'mt-6'}>
            <h2 className={"font-bold text-lg"}>Elements</h2>
            <div className={'grid grid-cols-1 md:grid-cols-2 gap-5'}>
                {
                    ElementLists.map((layout =>
                        <div key={layout.type}
                             className={'flex justify-center items-center flex-col border border-dashed rounded-xl p-3 group hover:shadow-md hover:border-primary cursor-pointer'}>
                            <div>{<layout.icon className={'group-hover:text-primary h-9 w-9 p-2'}/>}</div>
                            <h2 className={"text-sm group-hover:text-primary"}>{layout.label}</h2>
                        </div>))
                }
            </div>
        </div>
    )
};

export default ElementListCards;
