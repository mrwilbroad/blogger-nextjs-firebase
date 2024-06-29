import type { Metadata } from "next";
import "./globals.css";

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
      <body>
        <section className="container">
          <p className="my-3 bg-primary text-light p-2">
            News from Firestore Database
          </p>
          {children}
        </section>
      </body>
    </html>
  );
}
