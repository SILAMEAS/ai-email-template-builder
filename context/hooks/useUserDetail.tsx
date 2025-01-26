import {useContext} from 'react';
import {UserDetailContext} from "@/context/UserDetailContext";

const useUserDetail = () => {
    return useContext(UserDetailContext);
};

export default useUserDetail;
