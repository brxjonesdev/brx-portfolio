import type { Metadata } from 'next';
import './globals.css';
import { Space_Grotesk, Space_Mono } from 'next/font/google';
import { ThemeProvider } from '@/components/themes/theme-provider';

const spaceGrotesk = Space_Grotesk({
  variable: '--space-grotesk',
  subsets: ['latin'],
});

const spaceMono = Space_Mono({
  subsets: ['latin'],
  weight: ['400', '700'],
  variable: '--space-mono',
});

export const metadata: Metadata = {
  title: 'Braxton Jones',
  description: `
  I am a software engineer with a passion for building products that make a difference. `,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${spaceGrotesk.variable} ${spaceMono.variable} antialiased`}
        
      >
        <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            {children}
          </ThemeProvider>
      </body>
    </html>
  );
}
