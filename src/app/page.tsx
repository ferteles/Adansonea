import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Services from "@/components/sections/Services";
import Contact from "@/components/sections/Contact";

export default function Home() {
  return (
    <div className="bg-[#f4eadc] w-full min-h-screen text-black overflow-x-hidden realtive flex flex-col items-center">
      <div className="relative w-[1440px] min-h-screen">
        {/* We layer the Header above the Hero by giving it an absolute position within the top of the page viewport, to recreate the Figma overlay effect while keeping semantic flow. */}
        <div className="absolute inset-x-0 top-0 z-50">
          <Header />
        </div>

        <main className="w-full">
          <Hero />
          <About />
          <Services />
          <Contact />
        </main>

        <Footer />
      </div>
    </div>
  );
}
