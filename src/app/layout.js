import  { inter } from "./fonts"
import "./globals.css";



export const metadata = {
  title: "Blog App",
  description: "A blog app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${inter.className}`}
      >
        {children}
      </body>
    </html>
  );
}
