import "../css/globals.css";
import type { ReactNode } from "react";
import { Navigation } from "@/layouts/navigation";
import NextTopLoader from 'nextjs-toploader';
import { Geist } from "next/font/google";
import { cn } from "@/lib/utils";

const geist = Geist({subsets:['latin'],variable:'--font-sans'});


export default function RootLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <html lang="ru" className={cn("font-sans", geist.variable)}>
      <body className="bg-[#f3f3f3] text-[#1e1e1e]">
        <NextTopLoader />
        <Navigation />
        {children}
      </body>
    </html>
  );
}