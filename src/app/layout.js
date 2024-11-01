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
      url: "/images/opengraph-image.png",
      width: "1200",
      height: "630"
    }
  },
  twitter: {
    card: "summary_large_image",
    title: "Penned",
    description: "A journaling app experiment by Hamida Mahama",
    creator: "@hamida_mahama",
    images: [
      {
        url: "you_url_here",
        blurDataURL: "https://res.cloudinary.com/dn5ks1ljf/image/upload/v1730476263/Portfolio%20assets/twitter-image_ck5kwj.png",
        width: 1200,
        height: 630,
        alt: "twitter card image",
      },
    ],
  },
};



export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        {/* OPEN GRAPH META TAGS */}
        <meta property="og:title" content="Penned" />
        <meta property="og:description" content="A journaling app experiment by Hamida Mahama" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="/images/opengraph-image.png" />
        <meta property="og:image:type" content="" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />

        {/* TWITTER CARD */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@hamida_mahama" />
        <meta name="twitter:title" content="Penned" />
        <meta name="twitter:description" content="A journaling app experiment by Hamida Mahama" />
        <meta name="twitter:image" content="https://res.cloudinary.com/dn5ks1ljf/image/upload/v1730476263/Portfolio%20assets/twitter-image_ck5kwj.png" />
        <meta name="twitter:image:width" content="1200" />
        <meta name="twitter:image:height" content="630" />
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
