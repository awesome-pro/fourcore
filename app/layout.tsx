import type { Metadata } from "next";
import { Inter, Raleway } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/header";
import Footer from "@/components/footer";
import Validate from "@/components/validate";

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
});

const raleway = Raleway({
  subsets: ['latin'],
  variable: '--font-raleway',
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${inter.variable} ${raleway.variable} antialiased bg-black text-slate-200 w-screen`}
      >
         <Header />
        {children}
        <Validate />
        <Footer />
      </body>
    </html>
  );
}
