import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Food App",
  description: "An online shopping store for foods.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
