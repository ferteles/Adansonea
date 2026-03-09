import React from 'react';

const imgHeroGettyImages1 = "/assets/58b6c32330faeb5e4a8396a07703ddb6d77103bf.png";
const imgGroup = "/assets/d22257e89f714ed9db8a60fb79a9bd9416135588.svg";

export default function Hero() {
    return (
        <section className="relative w-full max-w-[1440px] mx-auto h-[857px]">
            {/* Background Image and Overlay */}
            <div className="absolute inset-0 w-full h-full overflow-hidden">
                <div className="absolute h-[2119px] left-[-401px] top-[-1262px] w-[3178px]">
                    <img alt="Hero Base" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgHeroGettyImages1} />
                </div>
                <div className="absolute bg-[rgba(30,30,30,0.6)] h-[862px] left-0 top-[-5px] w-full" />
            </div>

            <div className="absolute font-['HV_Harietta',sans-serif] font-normal leading-[normal] left-[137px] text-[71.01px] text-white top-[314px] uppercase whitespace-nowrap whitespace-pre">
                <p className="mb-0">A Boutique</p>
                <p>People Advisory</p>
            </div>

            <p className="absolute font-['Poppins',sans-serif] font-light h-[58px] leading-[30px] left-[140px] text-[20px] text-white top-[509px] w-[608px]">
                Strategic clarity for organisations navigating growth, transition, and complex decision-making.
            </p>

            {/* Spilling Graphic Component */}
            <div className="absolute h-[592.672px] left-[calc(8.33%+160px)] top-[570px] w-[880.631px] z-10 pointer-events-none">
                <img alt="Abstract Graphic" className="absolute block max-w-none size-full" src={imgGroup} />
            </div>
        </section>
    );
}
