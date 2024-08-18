import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Header from '@/components/header';
import { ClerkProvider, ClerkLoaded, ClerkLoading } from '@clerk/nextjs';
import Loader from '@/components/loader';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Next Clerk Mongodb App',
  description: 'Authentication in Nextjs 14 with Clerk and Mongodb',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={inter.className}>
          <ClerkLoading>
            <Loader />
          </ClerkLoading>
          <ClerkLoaded>
            <Header />
            {children}
          </ClerkLoaded>
        </body>
      </html>
    </ClerkProvider>
  );
}
