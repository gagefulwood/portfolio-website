import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Gage Fulwood | Portfolio",
  description:
    "Software engineering portfolio focused on full-stack web applications, backend APIs, and project evidence.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
