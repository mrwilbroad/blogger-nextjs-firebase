import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

  // bootstrap
  import "bootstrap/dist/css/bootstrap.min.css";


export const metadata: Metadata = {
  title: "Firebase With Nextjs",
  description: "Firebase with Nextjs",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
