import Image from "next/image";
import Link from 'next/link';
import HeroSection2 from '@/components/HeroSection2'

export default function Home() {
  return (
    <main className="font-mono">
      <HeroSection2 />
      {/* <main className="flex flex-col items-center justify-center min-h-screen">
        <Image
          src="/images/ai-employees.png"
          alt="omnia"
          className="w-[80%] lg:w-[50%] animate-pulse"
          width={897}
          height={520}
        />
        <div className="text-center lg:mt-[-7rem] z-20">
          <p className="text-xl lg:text-[32px]">This is not a</p>
          <h2 className="text-6xl lg:text-[90px] font-bold leading-[1]">Chatbot</h2>
          <h5 className="text-xl lg:text-[42px]">but your second brain.</h5>
        </div>


      <footer className="row-start-3 flex gap-[24px] flex-wrap items-center justify-center mt-6">
        <Link
          href="/privacy-policy"
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
        >
          <Image
            aria-hidden
            src="/file.svg"
            alt="Globe icon"
            width={16}
            height={16}
          />
          Privacy Policy →
        </Link>
      </footer>
      </main> */}
    </main>
  );
}
