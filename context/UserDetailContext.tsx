import { createContext } from "react";
import { UserDetailContextType } from "@/context/types";

export const UserDetailContext = createContext<UserDetailContextType>({
  userDetail: [],
  setUserDetail: () => {},
});
