import React from 'react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'EDM Community',
  description: 'A web platform for the EDM community',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
} 