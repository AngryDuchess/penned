import { inter } from "./fonts";
import "./globals.css";
import { BlogProvider } from "@/context/blog-context";

export const metadata = {
  title: "Blog App",
  description: "A blog app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className}`}>
        <BlogProvider>{children}</BlogProvider>
      </body>
    </html>
  );
}
