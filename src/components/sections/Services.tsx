import React from 'react';

const imgRectangle30 = "/assets/a6d5052e8a6c2e5fb959eee17869b11ae18fdb20.png";
const imgLine3 = "/assets/832a35bfdbd681bf50db31acf08f188ee2a14dd2.svg";
const imgGroup4 = "/assets/3c49f75402ada1dc9d741c521eb89840c608b98c.svg";
const imgArrow1 = "/assets/b7f1229dd635144ff7ffd1d66ee817413fb40495.svg";
const imgArrow2 = "/assets/9188ed0711dddb58b37c8c1f303ffe01fbd974a2.svg";
const imgLine4 = "/assets/7404db6fd8b5a8862713b22288bc2a76c2e2a40d.svg";
const imgLine5 = "/assets/4454a80798db19e8322fc9e2a2586eb0c879bc07.svg";
const imgLine6 = "/assets/9545eb265b82da3b2185eada73ed763e863e92d1.svg";
const imgRectangle38 = "/assets/f484f38f1580fd6ffd90347392fb46e8ac85589e.svg";
const imgLine8 = "/assets/4f701ed5ef63bcea0ee298902f85228b0300a9ee.svg";
const imgGroup3 = "/assets/030fcfce957e70f27266fed09266da814c87e4a7.svg";
const imgEllipse1 = "/assets/ff07b25983765e90fa16eb8e6d0d6003d9abdfed.svg";

export default function Services() {
    return (
        <section className="relative w-full max-w-[1440px] mx-auto h-[1915px]">
            <div className="absolute h-[763px] left-[-180px] mix-blend-luminosity opacity-15 top-[-1px] w-[1770px]">
                <div aria-hidden="true" className="absolute inset-0 pointer-events-none">
                    <div className="absolute bg-[#003f44] inset-0" />
                    <img alt="Services Background" className="absolute max-w-none object-cover size-full" src={imgRectangle30} />
                </div>
            </div>
            <div className="absolute bg-[#9d9d9d] h-[2px] left-0 top-[-1px] w-[1487px]" />

            <div className="absolute font-['HV_Harietta',sans-serif] font-normal leading-[normal] left-[calc(12.5%-13px)] text-[#003f44] text-[40px] top-[200px] uppercase whitespace-nowrap whitespace-pre">
                <p className="mb-0">{`What `}</p>
                <p>{`   we do`}</p>
            </div>

            <p className="absolute font-['Poppins',sans-serif] font-light leading-[28px] left-[172px] text-[#003f44] text-[18px] top-[329px] w-[335px]">
                Adansonea operates with a boutique mindset, delivering focused engagements, depth of attention, and thoughtful execution. We don’t rely on generic frameworks—only relevant, considered work.
            </p>

            {/* Services List */}
            <p className="absolute font-['HV_Harietta',sans-serif] font-normal leading-[normal] left-[calc(70.83%-379px)] text-[#656363] text-[26px] top-[224px] w-[643px]">
                Market Entry Local Advisory (Angola)
            </p>
            <div className="absolute font-['Poppins',sans-serif] font-light leading-[22px] left-[calc(70.83%-379px)] text-[#686868] text-[16px] top-[265px] w-[642px]">
                <p className="mb-0">Strategic people and organisational advisory grounded in the Angolan context.</p>
                <p>Each engagement is senior-led and tailored to the organisation’s reality.</p>
            </div>
            <p className="absolute font-['HV_Harietta',sans-serif] font-normal leading-[normal] left-[calc(70.83%-369px)] text-[#656363] text-[26px] top-[380px] w-[716px]">{`Leadership & Organisational Development`}</p>
            <p className="absolute font-['HV_Harietta',sans-serif] font-normal leading-[normal] left-[calc(70.83%-369px)] text-[#656363] text-[26px] top-[439px] w-[716px]">{`HR Foundations & Governance`}</p>
            <p className="absolute font-['HV_Harietta',sans-serif] font-normal leading-[normal] left-[calc(70.83%-369px)] text-[#656363] text-[26px] top-[498px] w-[716px]">{`People Strategy & Advisory`}</p>

            {/* Service Lines & Arrows */}
            <div className="absolute h-0 left-[calc(41.67%+28px)] top-[330px] w-[687px]">
                <div className="absolute inset-[-0.5px_0_0_0]">
                    <img alt="" className="block max-w-none size-full" src={imgLine3} />
                </div>
            </div>
            <div className="absolute flex h-[20px] items-center justify-center left-[calc(41.67%+18px)] top-[232px] w-0">
                <div className="flex-none rotate-90">
                    <div className="h-0 relative w-[20px]">
                        <div className="absolute inset-[-3.68px_-2.5%_-3.68px_0]">
                            <img alt="" className="block max-w-none size-full" src={imgArrow1} />
                        </div>
                    </div>
                </div>
            </div>
            <div className="absolute h-0 left-[calc(41.67%+8px)] top-[396px] w-[20px]">
                <div className="absolute inset-[-3.68px_-2.5%_-3.68px_0]">
                    <img alt="" className="block max-w-none size-full" src={imgArrow2} />
                </div>
            </div>
            <div className="absolute h-0 left-[calc(41.67%+8px)] top-[455px] w-[20px]">
                <div className="absolute inset-[-3.68px_-2.5%_-3.68px_0]">
                    <img alt="" className="block max-w-none size-full" src={imgArrow2} />
                </div>
            </div>
            <div className="absolute h-0 left-[calc(41.67%+8px)] top-[514px] w-[20px]">
                <div className="absolute inset-[-3.68px_-2.5%_-3.68px_0]">
                    <img alt="" className="block max-w-none size-full" src={imgArrow2} />
                </div>
            </div>

            <div className="absolute flex h-[832.497px] items-center justify-center left-[136.43px] mix-blend-overlay top-[350px] w-[1166.246px] pointer-events-none">
                <div className="flex-none rotate-[3.97deg] skew-x-[-2.34deg]">
                    <div className="h-[762.027px] relative w-[1085.198px]">
                        <img alt="Graphic" className="absolute block max-w-none size-full" src={imgGroup4} />
                    </div>
                </div>
            </div>

            {/* Who do we work with */}
            <div className="absolute font-['HV_Harietta',sans-serif] font-normal leading-[normal] left-[calc(20.83%-108px)] text-[#003f44] text-[40px] top-[1203px] uppercase whitespace-nowrap whitespace-pre">
                <p className="mb-0">who do we</p>
                <p>{`    work with`}</p>
            </div>

            <div className="absolute h-0 left-[calc(50%-10px)] top-[974px] w-[610px]">
                <div className="absolute inset-[-0.5px_0_0_0]">
                    <img alt="Line" className="block max-w-none size-full" src={imgLine4} />
                </div>
            </div>
            <div className="absolute flex h-[592px] items-center justify-center left-[calc(75%-64px)] top-[974px] w-0">
                <div className="flex-none rotate-90">
                    <div className="h-0 relative w-[592px]">
                        <div className="absolute inset-[-0.5px_0_0_0]">
                            <img alt="Line" className="block max-w-none size-full" src={imgLine5} />
                        </div>
                    </div>
                </div>
            </div>
            <div className="absolute h-0 left-[calc(50%-10px)] top-[1270px] w-[610px]">
                <div className="absolute inset-[-0.5px_0_0_0]">
                    <img alt="Line" className="block max-w-none size-full" src={imgLine4} />
                </div>
            </div>
            <div className="absolute h-0 left-[calc(50%-10px)] top-[1566px] w-[469px]">
                <div className="absolute inset-[-1px_0_0_0]">
                    <img alt="Line" className="block max-w-none size-full" src={imgLine6} />
                </div>
            </div>

            <div className="-translate-x-1/2 absolute font-['HV_Harietta',sans-serif] font-normal leading-[28px] left-[calc(75%+99.5px)] text-[#003f44] text-[22px] text-center top-[1080px] w-[281px] whitespace-pre-wrap">
                <p className="mb-0">{`Companies entering `}</p>
                <p className="mb-0">or</p>
                <p>{` operating in Angola`}</p>
            </div>
            <p className="-translate-x-1/2 absolute font-['HV_Harietta',sans-serif] font-normal leading-[28px] left-[calc(50%+154px)] text-[#003f44] text-[22px] text-center top-[1376px] w-[240px]">{`Established & growing businesses navigating change`}</p>
            <div className="-translate-x-1/2 absolute font-['HV_Harietta',sans-serif] font-normal leading-[28px] left-[calc(50%+127px)] text-[#003f44] text-[22px] text-center top-[1094px] whitespace-nowrap">
                <p className="mb-0">{`Organizations &`}</p>
                <p>leadership teams</p>
            </div>

            <button className="absolute left-[calc(75%-64px)] top-[1270px] w-[304px] h-[296px] bg-[#003f44] flex flex-col items-center justify-center group transition-colors hover:bg-[#002f33] cursor-pointer border-none outline-none">
                <span className="font-['HV_Harietta',sans-serif] font-normal leading-[22.694px] text-[21.064px] text-center text-white whitespace-nowrap z-10">
                    GET IN TOUCH
                </span>
                <div className="h-[1px] w-[164px] bg-white mt-[11px] transition-transform group-hover:scale-x-110 origin-center"></div>
            </button>

            {/* Decorative Assets connecting sections */}
            <div className="absolute h-[1199px] left-[-518px] top-[1697px] w-[2604px] pointer-events-none">
                <img alt="Ellipse" className="absolute block max-w-none size-full" src={imgEllipse1} />
            </div>
            <div className="absolute h-[859.431px] left-[calc(8.33%+119px)] top-[1793px] w-[1277px] pointer-events-none z-10">
                <img alt="Group" className="absolute block max-w-none size-full" src={imgGroup3} />
            </div>

        </section>
    );
}
