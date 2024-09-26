import Link from "next/link";
import { inter } from "./fonts";
import "./globals.css";
import { BlogProvider } from "@/context/blog-context";
import { Polkadot } from "iconsax-react";

export const metadata = {
  title: "Penned",
  description: "A blog app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className}`}>
      <Link href="/" className="flex items-center justify-center py-9">
        <Polkadot size="32" color="#FF8A65" />
      </Link>
        <BlogProvider>{children}</BlogProvider>
      </body>
    </html>
  );
}
