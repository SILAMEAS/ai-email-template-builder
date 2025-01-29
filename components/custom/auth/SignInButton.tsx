"use client";
import React from "react";
import { useGoogleLogin } from "@react-oauth/google";
import axios from "axios";
import { Button } from "@/components/ui/button";
import { useMutation } from "convex/react";
import { api } from "@/convex/_generated/api";

const SignInButton = () => {
  const CreateUser = useMutation(api.users.CreateUser);
  const googleLogin = useGoogleLogin({
    onSuccess: async (tokenResponse) => {
      const userInfo = await axios.get(
        "https://www.googleapis.com/oauth2/v3/userinfo",
        { headers: { Authorization: "Bearer " + tokenResponse?.access_token } },
      );
      const user = userInfo?.data;
      /** =========================================== */
      /**              Save to database              */
      /** =========================================== */
      if (user) {
        const result = await CreateUser({
          name: user.name,
          email: user.email,
          picture: user.picture,
          credit: 3,
        });
        if (window) {
          localStorage.setItem(
            "userDetail",
            JSON.stringify({ ...user, _id: (result as any)?.id ?? result }),
          );
        }
      }
    },
    onError: (errorResponse) => console.log(errorResponse),
  });
  return (
    <div>
      <Button onClick={() => googleLogin()}>Get Started</Button>
    </div>
  );
};

export default SignInButton;
