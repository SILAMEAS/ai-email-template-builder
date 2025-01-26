import {useContext} from 'react';
import {UserDetailContext} from "@/context/UserDetailContext";

const useUserDetailContext = () => {
    return useContext(UserDetailContext);
};
export const useUserDetail= () => {
    const {userDetail,setUserDetail}=useUserDetailContext();
  return {userDetail,setUserDetail}
};
