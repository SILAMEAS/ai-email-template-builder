export const checkProperty=(element:any)=>{
    return {content:element?.content!==undefined,backgroundColor:element?.style?.backgroundColor!==undefined}

}