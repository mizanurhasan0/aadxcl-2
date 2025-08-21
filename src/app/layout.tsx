import type { Metadata } from "next";
import { Outfit,Playfair_Display ,Red_Hat_Display} from "next/font/google";
import "./globals.css";

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
});

const redHat = Red_Hat_Display({
  subsets: ["latin"],
  variable: "--font-red-hat",
});

export const metadata: Metadata = {
  title: "Design Monks - Leading UI/UX Design Agency",
  description: "We design products that drive results. Expert UI/UX design, web development, and branding services to transform your business.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${outfit.variable} ${playfair.variable} ${redHat.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
