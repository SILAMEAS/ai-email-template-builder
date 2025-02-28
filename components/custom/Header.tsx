"use client"
import React from 'react';
import Image from "next/image";
import SignInButton from "@/components/custom/auth/SignInButton";
import {Button} from "@/components/ui/button";
import Link from "next/link";
import {Route} from "@/constants/Route";
import {UserDetailContext_} from "@/context/global/UserDetailContext";
import {useRouter} from "next/navigation";

const Header = () => {
    const {userDetail}=UserDetailContext_();
    const router=useRouter();
    return (
        <div className={'flex justify-between items-center py-4 px-10 shadow-sm'}>
           <Image src={"/logo.png"} alt={"logo"} width={130} height={100} onClick={()=>router.push("/")} className={'cursor-pointer'}/>
            <div>
                {
                    userDetail?.email?
                        <div className={"flex gap-3 items-center"}>
                            <Link href={Route.Dashboard}>
                                <Button>Dashboard</Button>
                            </Link>
                            <Image src={`${userDetail?.picture}`} alt={"user"} width={35} height={35} className={
                                'rounded-full'
                            }/>
                        </div>:
                        <SignInButton/>

                }
            </div>
        </div>
    );
};

export default Header;
