import type { Metadata } from "next";
import { Noto_Serif, Manrope, Inter } from "next/font/google";
import "./globals.css";

const notoSerif = Noto_Serif({ 
  subsets: ["latin"],
  variable: '--font-noto-serif',
  weight: ['400', '700'],
  style: ['normal', 'italic']
});
const manrope = Manrope({ 
  subsets: ["latin"],
  variable: '--font-manrope',
  weight: ['300', '400', '600']
});
const inter = Inter({ 
  subsets: ["latin"],
  variable: '--font-inter',
  weight: ['300', '400', '500']
});

export const metadata: Metadata = {
  title: "deqoin | Design Studio",
  description: "Mimari, Tasarım, Uygulama. Fikirlerden Gerçekliğe.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="tr" className="dark">
      <head>
        <link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap" rel="stylesheet" />
      </head>
      <body className={`${notoSerif.variable} ${manrope.variable} ${inter.variable} antialiased overflow-x-hidden`}>
        {children}
      </body>
    </html>
  );
}
