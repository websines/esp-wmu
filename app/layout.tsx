import "./globals.css";
import type { Metadata } from "next";
import { Josefin_Sans } from "next/font/google";
import Head from "next/head";

const josefin = Josefin_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Club Esports at WMU",
  description: "",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <body className={josefin.className}>{children}</body>
    </html>
  );
}
