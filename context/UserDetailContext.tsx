import {createContext} from "react";

export type UserDetailContextType={
    id: string;
    name: string;
    email: string;
};
export const UserDetailContext=createContext<any>(undefined);