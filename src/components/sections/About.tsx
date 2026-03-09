import React from 'react';

const imgCoworkersDiscussionPhoto1 = "/assets/c6b3f1e737f9780e53df2c42e250b275e88d5fe6.svg";
const imgCoworkersDiscussionPhoto2 = "/assets/2044750e2a9ccd7df90b5e14b39b9da0b6382c2b.png";

export default function About() {
    return (
        <section className="relative w-full max-w-[1440px] mx-auto h-[1403px] bg-[#f4eadc]">
            <div className="absolute font-['Poppins',sans-serif] font-light h-[393px] leading-[32px] left-[calc(50%-330px)] text-[#003f44] text-[18px] top-[148px] w-[661px] whitespace-pre-wrap">
                <p className="mb-0">We partner with organisations and leadership teams to design people strategies that strengthen performance, align HR with business priorities, and support confident, sustainable decision-making.</p>
                <p className="mb-0">&nbsp;</p>
                <p className="mb-0">Adansonea works with organisations across different stages of maturity, helping them build robust people foundations, develop effective leadership capability, and create structures that support long-term performance. Our approach is pragmatic, human-centred, and grounded in real organisational context.</p>
                <p className="mb-0">&nbsp;</p>
                <p className="font-['Poppins',sans-serif] font-semibold">Thoughtful people strategy. Clear structures. Confident leadership.</p>
            </div>

            <div className="absolute bg-[#9d9d9d] h-[2px] left-0 top-[654px] w-[1487px]" />
            <div className="absolute bg-[#003f44] h-[355px] left-[-140px] rounded-[36px] top-[853px] w-[850px]" />

            <div className="absolute font-['HV_Harietta',sans-serif] font-normal leading-[normal] left-[calc(50%+63px)] text-[#003f44] text-[43.06px] top-[851px] uppercase whitespace-nowrap whitespace-pre">
                <p className="mb-0">Clarity over</p>
                <p>{`    complexity`}</p>
            </div>

            <div className="absolute font-['Poppins',sans-serif] font-light h-[224px] leading-[28px] left-[calc(58.33%+12px)] text-[#003f44] text-[18px] top-[982px] w-[396px] whitespace-pre-wrap">
                <p className="mb-0">During periods of growth or change, organisations don’t need more noise. They need perspective, structured thinking, and clear direction.</p>
                <p className="mb-0">&nbsp;</p>
                <p>Adansonea supports leaders at moments where people, leadership, and organisational decisions carry real weight.</p>
            </div>

            <div className="absolute contents left-[98px] top-[654px]">
                <div
                    className="absolute h-[2184px] left-[-805px] top-[584px] w-[1456px]"
                    style={{
                        maskImage: `url('${imgCoworkersDiscussionPhoto1}')`,
                        maskSize: '544px 752px',
                        maskPosition: '903px 927px',
                        maskRepeat: 'no-repeat',
                        WebkitMaskImage: `url('${imgCoworkersDiscussionPhoto1}')`,
                        WebkitMaskSize: '544px 752px',
                        WebkitMaskPosition: '903px 927px',
                        WebkitMaskRepeat: 'no-repeat'
                    }}>
                    <div className="absolute inset-0 overflow-hidden pointer-events-none">
                        <img alt="Coworkers Discussion" className="absolute h-[168.16%] left-[-34.12%] max-w-none top-[-40.36%] w-[168.22%]" src={imgCoworkersDiscussionPhoto2} />
                    </div>
                </div>
            </div>
        </section>
    );
}
