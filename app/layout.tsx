import type { Metadata } from "next";

import "./globals.css";
import Header from "@/components/Header";
import SideBar from "@/components/SideBar";
import { ClerkProvider } from "@clerk/nextjs";



export const metadata: Metadata = {
  title: "Notion Clone",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className=""
      >
          <ClerkProvider>
        <Header />
      <div className="flex  min-h-screen items-center ">
     <div className="">
       <SideBar />
     </div>
        <div className="flex-1 bg-gray-100">
        {children}
        </div>
      </div>
      </ClerkProvider>
      </body>
    </html>
  );
}
