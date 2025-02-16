import type { Metadata } from "next";
import { JetBrains_Mono } from "next/font/google";
import "./globals.css";

export const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
})

export const metadata: Metadata = {
  title: "Todo App",
  description: "developed by Master Mickey",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${jetbrainsMono.className} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
