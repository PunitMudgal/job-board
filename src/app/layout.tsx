import type { Metadata } from "next";
import { Roboto, IBM_Plex_Sans } from "next/font/google";
import "./globals.css";
import Header from "./components/Header";
import { ClerkProvider } from "@clerk/nextjs";

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-roboto",
});

const IBMPlex = IBM_Plex_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-ibm-plex",
});

export const metadata: Metadata = {
  title: "Job Board | Forever",
  description: "Job board application by forever",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html lang="en" className={`${roboto.variable} ${IBMPlex.variable}`}>
        <body className="antialiased">
          {/* <section className="h-screen px-6 bg-hero-bg"> */}
          {children}
          {/* </section> */}
        </body>
      </html>
    </ClerkProvider>
  );
}
