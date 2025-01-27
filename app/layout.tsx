import type { Metadata } from "next";
import "./globals.css";
import Provider from "@/app/provider";

export const metadata: Metadata = {
  title: "SILA AI Email Template Builder",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Provider>{children}</Provider>
      </body>
    </html>
  );
}
