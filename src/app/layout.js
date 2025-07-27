import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header1 from "@/components/headers/header/page";
import products from "./products";
import { toLinkFormat } from "@/helpers/helpers";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased relative`}
      >
        <Header1 />
        <main className="max-w-2xl lg:max-w-4xl px-10 m-auto">
          {children}
        </main>
      </body>
    </html>
  );
}
