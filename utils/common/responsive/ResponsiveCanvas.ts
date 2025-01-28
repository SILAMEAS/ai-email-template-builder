import {EnumScreen} from "@/constants/EnumScreen";
import {useScreenSizeContext_} from "@/context/global/ScreenSizeContext";

export const ResponsiveCanvas=():string=>{
    const { screenSize } = useScreenSizeContext_();
    switch (screenSize){
        case EnumScreen.DeskTop:{
            return 'max-w-screen-xl'
        }
        case EnumScreen.Laptop:{
            return 'max-w-screen-lg'
        }
        case EnumScreen.Phone:{
            return 'max-w-screen-sm'
        }
        case EnumScreen.Tablet:{
            return 'max-w-screen-md'
        }
        default:{
            return 'auto'
        }
    }
}