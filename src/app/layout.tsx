import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Providers } from "./providers/providers";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "NavalRift",
  description: "La plateforme de commandement ultime pour les amiraux modernes",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html className="dark" lang="fr">
      <body className={inter.className}>
        <main className="text-foreground bg-background">
          <Providers>{children}</Providers>
        </main>
      </body>
    </html>
  );
}
