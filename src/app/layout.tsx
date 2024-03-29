import { GeistSans } from "geist/font/sans";
import type { Metadata } from "next";
import "./globals.css";
import Providers from "@/app/providers";

export const metadata: Metadata = {
  title: "Weather forecast",
  description: "Get the weather forecasted for your city",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <Providers>
        <body className={GeistSans.className}>
          <div
            className={`fixed -z-50 w-screen h-screen bg-gradient-to-t from-[#a40eb0] to-[#fe6565] ${GeistSans.className}`}
          ></div>
          {children}
        </body>
      </Providers>
    </html>
  );
}
