import { Space_Mono } from "next/font/google";
import "./globals.css";
import SmoothScrollWrapper from '@/components/SmoothScrollWrapper'
import Image from "next/image";

const spaceMono = Space_Mono({
  variable: "--font-space-mono",
  weight: ['400', '700'],
  subsets: ["latin"],
});

export const metadata = {
  title: "omniAI - This is not a Chatbot but your second brain.",
  description: "Get things done faster. Saatnya kerja bareng AI employee, bukan sekadar bot.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${spaceMono.variable} antialiased`}
      >
        <div className="fixed top-0 left-0 p-3 lg:p-8 z-20">
          <Image
            src="/images/logo.png"
            alt="omnia"
            className="w-[125px] lg:w-[150px]"
            width={154}
            height={56}
          />
        </div>
        {/* <div className="fixed top-0 left-0 w-full min-h-screen bg"></div> */}
        {/* <SmoothScrollWrapper> */}
          {children}
        {/* </SmoothScrollWrapper> */}
      </body>
    </html>
  );
}
