"use client";
import React from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Code } from "lucide-react";
import ButtonResponsive from "@/components/custom/button-change-device/ButtonResponsive";
import { EnumScreen } from "@/constants/EnumScreen";
import { useScreenSizeContext_ } from "@/context/global/ScreenSizeContext";
import Link from "next/link";

const EditorHeader = () => {
  const { screenSize } = useScreenSizeContext_();

  return (
    <div className={"p-4 shadow-sm flex justify-between items-center"}>
      <Link href={"/"}>
        <Image src={"/logo.png"} alt={"logo"} width={160} height={200} />
      </Link>
      <ButtonResponsive />
      <div
        className={`flex gap-3 ${![EnumScreen.DeskTop, EnumScreen.Laptop].includes(screenSize) && "flex-col-reverse"}`}
      >
        <Button
          variant={"ghost"}
          className={"hover:text-primary hover:bg-purple-100"}
        >
          <Code />
        </Button>
        <Button variant={"outline"}>Send Test Email</Button>
        <Button>Save Template</Button>
      </div>
    </div>
  );
};

export default EditorHeader;
