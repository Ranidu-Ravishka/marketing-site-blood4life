import type { Metadata } from "next";
import { Geist } from "next/font/google";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { site } from "@/lib/site";
import "./globals.css";

const geist = Geist({
  subsets: ["latin"],
  variable: "--font-geist",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: "Blood4Life — A little kindness. A lifetime of impact.",
    template: "%s — Blood4Life",
  },
  description:
    "Blood4Life connects blood donors, recipients, and blood banks through a thoughtfully designed mobile experience.",
  alternates: { canonical: "/" },
  openGraph: {
    title: "Blood4Life — A little kindness. A lifetime of impact.",
    description:
      "A premium presentation of Blood4Life, the mobile platform connecting donors, recipients, and blood banks.",
    type: "website",
    url: "/",
    siteName: "Blood4Life",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Blood4Life — A little kindness. A lifetime of impact.",
    description: "One donation. A world of difference.",
  },
  icons: {
    icon: [
      { url: "/brand/favicon.ico" },
      { url: "/brand/favicon-32.png", sizes: "32x32", type: "image/png" },
      { url: "/brand/icon-192.png", sizes: "192x192", type: "image/png" },
    ],
    apple: { url: "/brand/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={geist.variable}>
      <body className="min-h-screen bg-background font-sans text-foreground antialiased">
        <a className="skip-link" href="#content">
          Skip to content
        </a>
        <SiteHeader />
        {children}
        <SiteFooter />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "SoftwareApplication",
              name: site.name,
              applicationCategory: "HealthApplication",
              operatingSystem: "Android, iOS",
              description:
                "Blood4Life connects blood donors, recipients, and blood banks through a thoughtfully designed mobile experience.",
              image: `${site.url}/brand/icon-512.png`,
              url: site.url,
            }),
          }}
        />
      </body>
    </html>
  );
}
