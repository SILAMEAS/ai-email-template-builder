import React, {createContext, useContext} from "react"

export type userDetailType={email?:string,picture?: string,name?:string}|undefined|Record<string, any>;
export type UserDetailContent = {
    userDetail: userDetailType,
    setUserDetail: React.Dispatch<React.SetStateAction<userDetailType>>
}
export const UserDetailContext = createContext<UserDetailContent>({
    userDetail: {}, // set a default value
    setUserDetail:(p)=>p,
})
export const UserDetailContext_ = () => useContext(UserDetailContext)