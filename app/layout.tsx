import Header from "@/components/ui/Header";
import "./globals.css";
import type { Metadata } from "next";
import { Merriweather, Open_Sans } from "next/font/google";
import Footer from "@/components/ui/Footer";
import icon from "../public/Vector.svg";

const merriweather = Merriweather({
  subsets: ["latin"],
  weight: ["400", "300", "700", "900"],
  variable: "--font-merriweather",
});

const openSans = Open_Sans({
  subsets: ["latin"],
  variable: "--font-open_sans",
});
export const metadata: Metadata = {
  title: "Real Estate App",
  description:
    "Real Estate application to show available houses for rent accross Nigeria",
  icons: {
    icon: "/Vector.svg",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${merriweather.className} ${openSans} tracking-tight `}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
