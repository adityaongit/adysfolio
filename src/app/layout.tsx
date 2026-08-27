import { Content, PageLayout } from "@/components/layouts/page";
import { AmbientOrbitals } from "@/components/shared/ambient-orbitals";
import { Footer } from "@/components/shared/footer";
import { Header } from "@/components/shared/header";
import { JsonLd } from "@/components/shared/json-ld";
import { MouseGlow } from "@/components/shared/mouse-glow";
import { OrbitBuddy } from "@/components/shared/orbit-buddy";
import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { accentInitScript } from "@/lib/accent";
import { siteConfig } from "@/lib/config";
import { RootProvider } from "fumadocs-ui/provider/next";
import type { Metadata, Viewport } from "next";
import Script from "next/script";
import { NuqsAdapter } from "nuqs/adapters/next/app";

import "./global.css";

export const metadata: Metadata = {
  title: {
    default: `${siteConfig.name} — ${siteConfig.role}`,
    template: `%s — ${siteConfig.name}`,
  },
  description: siteConfig.description,
  metadataBase: new URL(siteConfig.baseUrl),
  verification: {
    google: "yXWP2ROf6pbob9yDAh7kBDPfEeGmfMIEFSiB1RLW3sM",
  },
  icons: {
    icon: [
      { url: "/favicon-96x96.png", type: "image/png", sizes: "96x96" },
      { url: "/favicon.svg", type: "image/svg+xml" },
    ],
    shortcut: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
  appleWebApp: {
    title: "Aditya",
  },
  manifest: "/site.webmanifest",
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#09090b" },
  ],
};

export default function Layout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className="antialiased" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: accentInitScript }} />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link
          href="https://fonts.googleapis.com/css2?family=Google+Sans:ital,opsz,wght@0,17..18,400..700;1,17..18,400..700&family=Google+Sans+Code:ital,wght,MONO@0,300..800,1;1,300..800,1&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="relative flex flex-col min-h-screen">
        {process.env.NODE_ENV === "production" && (
          <Script
            src="/stats/script.js"
            data-website-id="0d1b8f7f-10f7-4d13-913c-013ed24c08a4"
            data-host-url="/stats"
            strategy="afterInteractive"
          />
        )}
        <JsonLd type="person" />
        <JsonLd type="website" />
        <RootProvider>
          <NuqsAdapter>
            <PageLayout>
              <AmbientOrbitals />
              <Header />
              <Content className="scroll-smooth pt-14">
                <TooltipProvider>
                  {children}
                  <Toaster />
                </TooltipProvider>
              </Content>
              <Footer />
            </PageLayout>
          </NuqsAdapter>
        </RootProvider>
        <MouseGlow />
        <OrbitBuddy />
      </body>
    </html>
  );
}
