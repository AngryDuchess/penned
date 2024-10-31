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
      width: "1200",
      height: "630"
    }
  }

};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta property="og:title" content="Penned" />
        <meta property="og:description" content="A journaling app experiment by Hamida Mahama" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="/images/open-graph-img.png" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
      </head>
      <body className={`${inter.className}`}>
      <Link href="/" className="flex items-center justify-center py-9">
        <Polkadot size="32" color="#FF8A65" />
      </Link>
        <BlogProvider>{children}</BlogProvider>
      </body>
    </html>
  );
}
