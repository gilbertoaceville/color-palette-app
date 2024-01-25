import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "@/styles/global.scss";

const poppins = Poppins({ subsets: ["latin"], weight: ["400", "600", "700"] });

export const metadata: Metadata = {
  title: "Color Palette App",
  description: "Simple image color palette parser",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={poppins.className}>{children}</body>
    </html>
  );
}
