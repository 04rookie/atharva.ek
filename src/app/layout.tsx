import "./globals.css";
import type { Metadata } from "next";

// const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: "atharva's portfolio",
  description: "",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className="overflow-hidden scroll-smooth"
      style={{ scrollBehavior: "smooth" }}
    >
      <body>{children}</body>
    </html>
  );
}
