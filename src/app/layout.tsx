import type { Metadata } from "next";
import { Montserrat, Poppins } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
  display: "swap",
  weight: ["400", "500", "600", "700", "800"],
});

const poppins = Poppins({
  subsets: ["latin"],
  variable: "--font-poppins",
  display: "swap",
  weight: ["400", "500", "600"],
});

export const metadata: Metadata = {
  title: {
    default: "1Project.Co — Creative Production House",
    template: "%s - 1Project.Co",
  },
  description:
    "Creative content production made simple. 1Project connects you with top freelance creators and producers to deliver high-quality video, photo, and 3D content, on time, on budget, and without retainers.",
  icons: {
    icon: "/images/logos/Logo transparency_icon_small.png",
    apple: "/images/logos/Logo transparency_icon_small.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${montserrat.variable} ${poppins.variable}`}>
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
