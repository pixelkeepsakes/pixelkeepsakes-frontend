import type { Metadata } from "next";
import '@/styles/globals.css';
import { Open_Sans, Edu_TAS_Beginner } from "next/font/google";
import Script from "next/script";

const eduTASBeginner = Edu_TAS_Beginner({
  subsets: ['latin'],
  display: 'swap',
  weight: ['400', '500', '600', '700'],
  variable: "--font-edu-tas-beginner",
});

const openSans = Open_Sans({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-open-sans",
});

export const metadata: Metadata = {
  title: "Pixel Keepsakes | Custom Personalized Storybooks",
  description: "See yourself in the story. Custom keepsake books that turn your favorite people into the characters.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${eduTASBeginner.variable} ${openSans.variable}`}
    >
      <head>
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-2BCVLHC8GB"
          strategy="beforeInteractive"
        />
        <Script id="ga4-init" strategy="beforeInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-2BCVLHC8GB', {
              page_path: window.location.pathname,
            });
          `}
        </Script>
      </head>
      <body>
        {children}
      </body>
    </html>
  );
}
