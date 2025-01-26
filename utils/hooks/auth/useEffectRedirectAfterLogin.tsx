import {useEffect, useState} from 'react';

const useEffectRedirectAfterLogin = () => {
    const [userDetail,setUserDetail]=useState<any>();
    useEffect(() => {
        if(typeof window!==undefined){
            const storage=JSON.parse(localStorage.getItem("userDetail")??'');
            if(!storage?.email||!storage){
            /** Redirect to home screen */

            }else {
                setUserDetail(storage);
            }
        }
    }, []);
    return {userDetail,setUserDetail}
};

export default useEffectRedirectAfterLogin;
