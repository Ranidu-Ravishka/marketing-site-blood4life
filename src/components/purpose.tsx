import { BrandMark } from "@/components/brand-mark";
import { Reveal } from "@/components/reveal";

export function Purpose() {
  return (
    <section id="purpose" className="mx-auto grid w-full max-w-[76rem] gap-16 px-5 py-28 sm:px-8 lg:grid-cols-[1.3fr_0.7fr] lg:items-end lg:py-36">
      <Reveal>
        <p className="kicker">The purpose</p>
        <h2 className="headline mt-6 max-w-[12ch]">Technology, with humanity at its heart.</h2>
      </Reveal>
      <Reveal delay={0.12} className="lg:pb-2">
        <BrandMark className="mb-8 h-14 w-14 text-primary" />
        <p className="prose-quiet">
          Blood4Life is a mobile application for discovering donation opportunities and keeping donors, recipients, and blood banks in the same conversation. The interface gathers those paths so a meaningful action can begin without unnecessary complexity.
        </p>
        <p className="mt-6 text-sm leading-7 text-muted">One donation. A world of difference.</p>
      </Reveal>
    </section>
  );
}
