import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import NextTopLoader from "nextjs-toploader";
import Navbar from "@/components/Navbar";
import ThemeProvider from "@/components/ThemeProvider";
import ThreeBackground from "@/components/ThreeBackground";
import CustomCursor from "@/components/CustomCursor";
import LoadingScreen from "@/components/LoadingScreen";
import Footer from "@/components/Footer";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Rahin Haque | Full-Stack MERN Developer",
    template: "%s | Rahin Haque",
  },
  description:
    "Portfolio of Rahin Haque — Full-Stack MERN Developer building fast, scalable web apps with React, Next.js, and Node.js.",
  keywords: [
    "Rahin Haque",
    "Full-Stack Developer",
    "MERN Stack",
    "React",
    "Next.js",
    "Node.js",
    "Portfolio",
    "Web Developer",
  ],
  authors: [{ name: "Rahin Haque" }],
  creator: "Rahin Haque",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://portfolio-seven-weld-psi.vercel.app/",
    siteName: "Rahin Haque Portfolio",
    title: "Rahin Haque | Full-Stack MERN Developer",
    description:
      "Portfolio of Rahin Haque — Full-Stack MERN Developer building fast, scalable web apps with React, Next.js, and Node.js.",
    images: [
      {
        url: "/heroMain.jpg",
        width: 1200,
        height: 630,
        alt: "Rahin Haque — Full-Stack MERN Developer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Rahin Haque | Full-Stack MERN Developer",
    description:
      "Portfolio of Rahin Haque — Full-Stack MERN Developer building fast, scalable web apps with React, Next.js, and Node.js.",
    images: ["/heroMain.jpg"],
  },
  icons: {
    icon: "/favicon.ico",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <NextTopLoader
          color="#818cf8"
          height={3}
          showSpinner={false}
          easing="cubic-bezier(0.4, 0, 0.2, 1)"
          speed={200}
          shadow={false}
        />
        <ThemeProvider>
          <LoadingScreen />
          <ThreeBackground />
          <CustomCursor />
          <Navbar />
          <main className="flex-1">{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
