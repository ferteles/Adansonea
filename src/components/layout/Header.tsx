import React from 'react';
import Link from 'next/link';

const imgGroup1 = "/assets/b5b4a9cc92c7e35a017ecdf316fdc41addf2b968.svg";
const imgGroup2 = "/assets/f4b103284425bd45f9ca195fbf79c34448594cdc.svg";

export default function Header() {
  return (
    <header className="relative w-[1440px] mx-auto h-[100px] z-50">
      <div className="absolute h-[31.054px] left-[121px] overflow-clip top-[40px] w-[284px]">
        <div className="absolute inset-[16.72%_0_27.23%_20.56%]">
          <img alt="Adansonea Logo Part 1" className="absolute block max-w-none size-full" src={imgGroup1} />
        </div>
        <div className="absolute inset-[0.01%_83.75%_-0.01%_0.01%]">
          <img alt="Adansonea Logo Part 2" className="absolute block max-w-none size-full" src={imgGroup2} />
        </div>
      </div>
      <Link href="#about" className="absolute font-['Gotham',sans-serif] font-light leading-[27.521px] left-[calc(58.33%-28px)] text-[16.189px] text-white top-[38px] uppercase whitespace-nowrap hover:opacity-80 transition-opacity">
        How we work
      </Link>
      <Link href="#about" className="absolute font-['Gotham',sans-serif] font-light leading-[27.521px] left-[calc(66.67%+10.65px)] text-[16.189px] text-white top-[38px] uppercase whitespace-nowrap hover:opacity-80 transition-opacity">
        about
      </Link>
      <Link href="#services" className="absolute font-['Gotham',sans-serif] font-light leading-[27.521px] left-[calc(75%-25.98px)] text-[16.189px] text-white top-[38px] uppercase whitespace-nowrap hover:opacity-80 transition-opacity">
        SERVICES
      </Link>
      <Link href="#contact" className="absolute font-['Gotham',sans-serif] font-light leading-[27.521px] left-[calc(83.33%-41.56px)] text-[16.189px] text-white top-[38px] uppercase whitespace-nowrap hover:opacity-80 transition-opacity">
        CONTACT
      </Link>
      <button className="absolute font-['Gotham',sans-serif] font-bold leading-[27.521px] left-[calc(91.67%-56.56px)] text-[16.189px] text-white top-[36px] uppercase whitespace-nowrap hover:opacity-80 transition-opacity">
        pt/en
      </button>
    </header>
  );
}
