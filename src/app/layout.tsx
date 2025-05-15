import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "EDM World | Svět elektronické hudby",
  description: "Váš průvodce světem elektronické taneční hudby. Objevujte nejlepší DJs, aktuální novinky a nadcházející akce z celého světa.",
  keywords: "EDM, elektronická hudba, DJs, festivaly, trance, house, techno",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="cs">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
      </head>
      <body>
        {children}
      </body>
    </html>
  );
}
