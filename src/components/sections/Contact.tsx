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

            <div className="absolute bg-[#668b8a] h-[43px] left-[calc(50%+85px)] top-[0px] w-[508px] z-10" data-name="Name input" />
            <p className="absolute font-['Poppins',sans-serif] font-light leading-[32px] left-[calc(58.33%-15px)] text-[18px] text-white top-[6px] w-[354px] z-20 pointer-events-none">
                Name
            </p>

            <div className="absolute bg-[#668b8a] h-[43px] left-[calc(50%+85px)] top-[58px] w-[508px] z-10" data-name="Email input" />
            <p className="absolute font-['Poppins',sans-serif] font-light leading-[32px] left-[calc(58.33%-15px)] text-[18px] text-white top-[65px] w-[354px] z-20 pointer-events-none">
                Email
            </p>

            <div className="absolute bg-[#668b8a] h-[43px] left-[calc(50%+85px)] top-[116px] w-[508px] z-10" data-name="Subject input" />
            <p className="absolute font-['Poppins',sans-serif] font-light leading-[32px] left-[calc(58.33%-15px)] text-[18px] text-white top-[127px] w-[354px] z-20 pointer-events-none">
                Subject
            </p>

            <div className="absolute bg-[#668b8a] h-[229px] left-[calc(50%+85px)] top-[174px] w-[508px] z-10" data-name="Message input" />
            <p className="absolute font-['Poppins',sans-serif] font-light leading-[32px] left-[calc(58.33%-15px)] text-[18px] text-white top-[186px] w-[354px] z-20 pointer-events-none">
                Message
            </p>

            <div className="absolute bg-[#003f44] h-[43px] left-[calc(83.33%-8px)] top-[418px] w-[121px] z-10" data-name="Send button" />
            <p className="absolute font-['Poppins',sans-serif] font-medium leading-[32px] left-[calc(91.67%-94px)] text-[#fff8f6] text-[18px] top-[423px] whitespace-nowrap z-20 pointer-events-none">
                Send
            </p>
        </section>
    );
}
