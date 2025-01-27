"use client";
import React, { ReactNode } from "react";
import { ConvexProvider, ConvexReactClient } from "convex/react";
import { GoogleOAuthProvider } from "@react-oauth/google";
import { UserDetailContext } from "@/context/UserDetailContext";
import useEffectRedirectAfterLogin from "@/utils/hooks/auth/useEffectRedirectAfterLogin";
import { ScreenSizeContext } from "@/context/ScreenSizeContext";
import { DragDropLayoutElementContext } from "@/context/DragDropLayoutElementContext";
import { EmailTemplateContext } from "@/context/EmailTemplateContext";

const Provider = ({ children }: { children: ReactNode }) => {
  const convex = new ConvexReactClient(process.env.NEXT_PUBLIC_CONVEX_URL!);
  const {
    userDetail,
    setUserDetail,
    setScreenSize,
    screenSize,
    setDragElementLayout,
    dragElementLayout,
    setEmailTemplate,
    emailTemplate,
  } = useEffectRedirectAfterLogin();
  return (
    <ConvexProvider client={convex}>
      <GoogleOAuthProvider clientId={process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID!}>
        <UserDetailContext.Provider value={{ userDetail, setUserDetail }}>
          <ScreenSizeContext.Provider value={{ screenSize, setScreenSize }}>
            <DragDropLayoutElementContext.Provider
              value={{ dragElementLayout, setDragElementLayout }}
            >
              <EmailTemplateContext.Provider
                value={{ emailTemplate, setEmailTemplate }}
              >
                <div>{children}</div>
              </EmailTemplateContext.Provider>
            </DragDropLayoutElementContext.Provider>
          </ScreenSizeContext.Provider>
        </UserDetailContext.Provider>
      </GoogleOAuthProvider>
      ;
    </ConvexProvider>
  );
};

export default Provider;
