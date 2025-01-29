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
    onSuccess: (tokenResponse) => {
      axios
        .get("https://www.googleapis.com/oauth2/v3/userinfo", {
          headers: { Authorization: "Bearer " + tokenResponse?.access_token },
        })
        .then((r) => {
          const user = r.data;
          if (user) {
            /** =========================================== */
            /**              Save to database              */
            /** =========================================== */
            CreateUser({
              name: user.name,
              email: user.email,
              picture: user.picture,
              credit: 3,
            }).then((result) => {
              if (window) {
                localStorage.setItem(
                  "userDetail",
                  JSON.stringify({
                    ...user,
                    _id: (result as any)?.id ?? result,
                  }),
                );
              }
            });
          }
        });
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
