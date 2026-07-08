import { createFileRoute } from "@tanstack/react-router";
import { Sidebar, MobileSidebar } from "@/components/portfolio/Sidebar";
import { RightNav, MobileBar, MobileNav } from "@/components/portfolio/RightNav";
import { Hero } from "@/components/portfolio/Hero";
import { Marquee } from "@/components/portfolio/Marquee";
import { About } from "@/components/portfolio/About";
import { Services } from "@/components/portfolio/Services";
import { Experience } from "@/components/portfolio/Experience";
import { Reviews } from "@/components/portfolio/Reviews";
import { Stack } from "@/components/portfolio/Stack";
import { Contact } from "@/components/portfolio/Contact";

export const Route = createFileRoute("/")({
  component: Index,
});

function Index() {
  return (
    <div className="relative min-h-screen">
      <Sidebar />
      <MobileBar />
      <RightNav />
      {/* Bottom floating nav on mobile/tablet */}
      <MobileNav />

      <main className="relative lg:pl-[340px] xl:pr-16 pt-[57px] lg:pt-0 overflow-hidden">
        {/* Page background patterns & ambient glow gradients */}
        <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
          {/* Continuous dots background across middle and bottom sections */}
          <div className="absolute inset-0 dots-bg opacity-35 mask-gradient" />
          
          {/* Soft ambient glow behind mid page (About / Services / Experience) */}
          <div className="absolute top-[30%] -left-[10%] h-[500px] w-[500px] rounded-full bg-lime/10 blur-[120px]" />
          <div className="absolute top-[45%] -right-[15%] h-[600px] w-[600px] rounded-full bg-signal/5 blur-[150px]" />
          
          {/* Soft ambient glow behind bottom page (Reviews / Contact) */}
          <div className="absolute bottom-[10%] -left-[20%] h-[700px] w-[700px] rounded-full bg-lime/8 blur-[160px]" />
          <div className="absolute bottom-[5%] -right-[10%] h-[500px] w-[500px] rounded-full bg-signal/10 blur-[130px]" />
        </div>

        {/* Sidebar profile/stats shown inline on mobile */}
        <MobileSidebar />

        <Hero />
        <Marquee />
        <div className="mx-auto max-w-5xl px-5 lg:px-10 pb-24 xl:pb-0 relative z-10">
          <About />
          <Services />
          <Experience />
          <Reviews />
          <Stack />
          <Contact />
        </div>
      </main>
    </div>
  );
}
