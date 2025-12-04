import type { Metadata } from "next";
import '@/styles/globals.css';
import { Open_Sans, Edu_TAS_Beginner } from "next/font/google";

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
      <body>
        {children}
      </body>
    </html>
  );
}
