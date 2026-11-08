import { features } from "@/lib/site";
import { Reveal } from "@/components/reveal";

export function Features() {
  return (
    <section id="features" className="mx-auto w-full max-w-[76rem] px-5 py-28 sm:px-8 lg:py-36">
      <Reveal className="max-w-3xl">
        <p className="kicker">Designed with purpose</p>
        <h2 className="headline mt-6">Everything important. Thoughtfully connected.</h2>
        <p className="prose-quiet mt-6">
          Each of these flows exists in the Flutter application. Sign-in, onboarding, and an in-app notifications screen sit alongside them.
        </p>
      </Reveal>
      <div className="mt-16 border-t border-border">
        {features.map((feature) => (
          <Reveal key={feature.index}>
            <article className="grid gap-4 border-b border-border py-9 md:grid-cols-[5rem_1fr_1.2fr] md:items-baseline md:gap-10">
              <span className="text-sm tracking-[0.16em] text-primary">{feature.index}</span>
              <h3 className="text-2xl tracking-[-0.04em] md:text-[1.7rem]">{feature.title}</h3>
              <p className="max-w-md text-[0.98rem] leading-7 text-[#5e5a57]">{feature.text}</p>
            </article>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
