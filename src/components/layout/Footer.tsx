import React from 'react';
import Link from 'next/link';

const imgGroup5 = "/assets/108df02de255db2fed288b1e0ba2c39ceb665ec1.svg";
const imgGroup6 = "/assets/03690f856508a40c68018c937f84d6ee7fc085ae.svg";
const imgImage = "/assets/f991bb0780b1a6abfc0cccd576def4da7b45003a.png";

export default function Footer() {
    return (
        <footer className="relative w-[1440px] mx-auto h-[630px] overflow-hidden">
            {/* Background Block for Footer from top-[4703px] in the original absolute layout */}
            <div className="absolute bg-[#003f44] inset-0 w-[1534px] left-[-30px]" data-name="Frosted overlay" />

            {/* Footer Image Overlay from top-[4699px] */}
            <div className="absolute inset-0 w-[1534px] left-[-30px] mix-blend-luminosity opacity-5" data-name="Image">
                <div aria-hidden="true" className="absolute inset-0 pointer-events-none">
                    <div className="absolute bg-[#003f44] inset-0" />
                    <img alt="" className="absolute max-w-none object-cover size-full" src={imgImage} />
                </div>
            </div>

            {/* Footer Logo equivalent from top-[4943px] in original (240px offset from 4703px) */}
            <div className="absolute h-[149.874px] left-[133px] overflow-clip top-[240px] w-[347px]">
                <div className="absolute inset-[82.14%_0_0_0]">
                    <img alt="" className="absolute block max-w-none size-full" src={imgGroup5} />
                </div>
                <div className="absolute inset-[0_27.55%_30.11%_27.56%]">
                    <img alt="" className="absolute block max-w-none size-full" src={imgGroup6} />
                </div>
            </div>

            <Link href="#about" className="absolute font-['Gotham',sans-serif] font-light leading-[27.521px] left-[calc(50%+17px)] text-[16.189px] text-white top-[262px] uppercase whitespace-nowrap hover:opacity-80 transition-opacity">
                about
            </Link>
            <div className="absolute font-['Gotham',sans-serif] font-light leading-[27.521px] left-[calc(75%-38px)] text-[16.189px] text-white top-[252px] uppercase whitespace-nowrap">
                <p className="mb-0">luanda - angola</p>
                <p>Copenhagen - Denmark</p>
            </div>
            <Link href="#services" className="absolute font-['Gotham',sans-serif] font-light leading-[27.521px] left-[calc(50%+17px)] text-[16.189px] text-white top-[319px] uppercase whitespace-nowrap hover:opacity-80 transition-opacity">
                SERVICES
            </Link>
            <Link href="https://linkedin.com" target="_blank" className="absolute font-['Gotham',sans-serif] font-light leading-[27.521px] left-[calc(75%-38px)] text-[16.189px] text-white top-[319px] uppercase whitespace-nowrap hover:opacity-80 transition-opacity">
                linkedIn
            </Link>
            <Link href="#contact" className="absolute font-['Gotham',sans-serif] font-light leading-[27.521px] left-[calc(50%+17px)] text-[16.189px] text-white top-[376px] uppercase whitespace-nowrap hover:opacity-80 transition-opacity">
                CONTACT
            </Link>
            <Link href="#about" className="absolute font-['Gotham',sans-serif] font-light leading-[27.521px] left-[calc(50%+10px)] text-[16.189px] text-white top-[209px] uppercase whitespace-nowrap hover:opacity-80 transition-opacity">
                How we work
            </Link>
        </footer>
    );
}
