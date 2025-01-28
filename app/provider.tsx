"use client";
import React, {ReactNode} from "react";
import {ConvexProvider, ConvexReactClient} from "convex/react";
import {GoogleOAuthProvider} from "@react-oauth/google";
import GlobalContext from "@/context/GlobalContext";

const Provider = ({ children }: { children: ReactNode }) => {
  const convex = new ConvexReactClient(process.env.NEXT_PUBLIC_CONVEX_URL!);
  return (
    <ConvexProvider client={convex}>
      <GoogleOAuthProvider clientId={process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID!}>
        <GlobalContext>
          <div>{children}</div>
        </GlobalContext>
      </GoogleOAuthProvider>
    </ConvexProvider>
  );
};

export default Provider;
