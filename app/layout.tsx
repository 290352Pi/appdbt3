import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "BigBikeTH | Buy • Sell • Ride",
  description: "ตลาดซื้อขายบิ๊กไบค์มือสอง",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="th"><body>{children}</body></html>;
}
