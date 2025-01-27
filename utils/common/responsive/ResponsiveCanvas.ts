import {useScreenSize} from "@/context/hooks/useScreenSize";
import {EnumScreen} from "@/constants/EnumScreen";

export const ResponsiveCanvas=():string=>{
    const { screenSize } = useScreenSize();
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