import type { Metadata } from "next";
import localFont from "next/font/local";
import Header from "./components/Header";
import "./globals.css";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "VSCode Symbols Documentation",
  description: "Get any symbol easily, especially those that aren't on your keyboard. It could be your native currency, degree symbols, greek alphabets, HTML5 entities, or even crypto currency. All you have to do is type the name.",
};

export default function RootLayout({ children, }: Readonly<{ 
  children: React.ReactNode; 
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <Header />
        {children}
      </body>
    </html>
  );
}
