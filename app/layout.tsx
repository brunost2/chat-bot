import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "BrunoGPT Chatbot",
  description: "O MELHOR CHATBOT DO MUNDO",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}></body>
      <main className="h-full text-white"> {children}</main>
    </html>
  );
}
