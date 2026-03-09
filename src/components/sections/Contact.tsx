'use client';

import React from 'react';

export default function Contact() {
    return (
        <section className="relative w-[1440px] mx-auto h-[528px]">
            <div className="absolute font-['HV_Harietta',sans-serif] font-normal leading-[normal] left-[calc(20.83%-63px)] text-[40px] text-white top-[0px] uppercase whitespace-nowrap whitespace-pre z-10">
                <p className="mb-0">{`Start a `}</p>
                <p>conversation</p>
            </div>
            <p className="absolute font-['Poppins',sans-serif] font-light leading-[32px] left-[calc(8.33%+119px)] text-[18px] text-white top-[115px] w-[354px] z-10">
                If your organization is facing key people, leadership, or structural decisions, we would be glad to talk.
            </p>
            <div className="absolute font-['Poppins',sans-serif] font-medium leading-[32px] left-[calc(8.33%+119px)] text-[18px] text-white top-[232px] w-[354px] z-10">
                <p className="mb-0">Email: info@adansonea.com</p>
                <p className="mb-0">Location: Angola / Denmark</p>
                <p>LinkedIn</p>
            </div>

            <form className="contents" onSubmit={(e) => e.preventDefault()}>
                <input
                    type="text"
                    placeholder="Name"
                    className="absolute bg-[#668b8a] h-[43px] left-[calc(50%+85px)] top-[0px] w-[508px] z-10 font-['Poppins',sans-serif] font-light text-[18px] text-white placeholder-white placeholder-opacity-80 px-4 py-2 border-none outline-none focus:ring-2 focus:ring-[#003f44] transition-all"
                    aria-label="Name"
                />

                <input
                    type="email"
                    placeholder="Email"
                    className="absolute bg-[#668b8a] h-[43px] left-[calc(50%+85px)] top-[58px] w-[508px] z-10 font-['Poppins',sans-serif] font-light text-[18px] text-white placeholder-white placeholder-opacity-80 px-4 py-2 border-none outline-none focus:ring-2 focus:ring-[#003f44] transition-all"
                    aria-label="Email"
                />

                <input
                    type="text"
                    placeholder="Subject"
                    className="absolute bg-[#668b8a] h-[43px] left-[calc(50%+85px)] top-[116px] w-[508px] z-10 font-['Poppins',sans-serif] font-light text-[18px] text-white placeholder-white placeholder-opacity-80 px-4 py-2 border-none outline-none focus:ring-2 focus:ring-[#003f44] transition-all"
                    aria-label="Subject"
                />

                <textarea
                    placeholder="Message"
                    className="absolute bg-[#668b8a] h-[229px] left-[calc(50%+85px)] top-[174px] w-[508px] z-10 font-['Poppins',sans-serif] font-light text-[18px] text-white placeholder-white placeholder-opacity-80 px-4 py-3 border-none outline-none focus:ring-2 focus:ring-[#003f44] transition-all resize-none"
                    aria-label="Message"
                ></textarea>

                <button
                    type="submit"
                    className="absolute bg-[#003f44] hover:bg-[#002f33] transition-colors h-[43px] left-[calc(83.33%-8px)] top-[418px] w-[121px] z-10 flex items-center justify-center font-['Poppins',sans-serif] font-medium text-[18px] text-[#fff8f6] cursor-pointer border-none outline-none focus:ring-2 focus:ring-offset-1 focus:ring-offset-[#f4eadc] focus:ring-[#003f44]"
                >
                    Send
                </button>
            </form>
        </section>
    );
}
