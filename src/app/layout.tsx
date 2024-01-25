import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "@/styles/global.scss";

const poppins = Poppins({ subsets: ["latin"], weight: ["400", "600", "700"] });

export const metadata: Metadata = {
  title: "Color Palette App",
  description: "Generate color palette based on uploaded image",
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
