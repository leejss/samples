import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import WagmiProvider from "./components/WagmiProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "WalletConnect v2 DApp",
  description: "Hello world",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <WagmiProvider>{children}</WagmiProvider>
      </body>
    </html>
  );
}
