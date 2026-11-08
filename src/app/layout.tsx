import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://blood4life.vercel.app"),
  title: "Blood4Life | Connecting People. Supporting Lives.",
  description:
    "Discover Blood4Life, a mobile blood donation platform designed to connect donors, recipients, and blood banks through technology.",
  alternates: { canonical: "/" },
  openGraph: {
    title: "Blood4Life | Connecting People. Supporting Lives.",
    description:
      "A portfolio presentation of a mobile platform for more accessible blood donation coordination.",
    type: "website",
    url: "/",
    siteName: "Blood4Life",
  },
  twitter: {
    card: "summary_large_image",
    title: "Blood4Life | Connecting People. Supporting Lives.",
    description: "Technology with a purpose: explore the Blood4Life project.",
  },
  icons: { icon: "/app-icon.png", apple: "/app-icon.png" },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
