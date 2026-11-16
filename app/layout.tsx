
import type { Metadata } from "next";
import { TooltipProvider } from "@/components/ui/tooltip";
import "./globals.css";

export const metadata: Metadata = {
  title: "Bakso Lintang",
  description: "Dashboard Smart Purchasing dan Forecasting",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id">
      <body>
        <TooltipProvider>
          {children}
        </TooltipProvider>
      </body>
    </html>
  );
}
