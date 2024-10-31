import Link from "next/link";
import { inter } from "./fonts";
import "./globals.css";
import { BlogProvider } from "@/context/blog-context";
import { Polkadot } from "iconsax-react";

export const metadata = {
  title: "Penned",
  description: "A journaling app experiment",
  openGraph: {
    title: 'Penned',
    description: 'A journaling app experiment by Hamida Mahama',
    type: "website",
    image:
    {
      url: "/images/open-graph-img.png",
      type: "image/png",
      width: "1200",
      heigth: "630"
    }
  }

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
