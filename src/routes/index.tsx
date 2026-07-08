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

      <main className="lg:pl-[340px] xl:pr-16 pt-[57px] lg:pt-0">
        {/* Sidebar profile/stats shown inline on mobile */}
        <MobileSidebar />

        <Hero />
        <Marquee />
        <div className="mx-auto max-w-5xl px-5 lg:px-10 pb-24 xl:pb-0">
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
