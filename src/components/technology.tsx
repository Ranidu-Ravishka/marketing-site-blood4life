import { technologies } from "@/lib/site";
import { Reveal } from "@/components/reveal";

export function Technology() {
  return (
    <section id="technology" className="border-t border-border bg-card">
      <div className="mx-auto w-full max-w-[76rem] px-5 py-28 sm:px-8 lg:py-36">
        <Reveal>
          <p className="kicker">The technology</p>
          <h2 className="headline mt-6 max-w-[14ch]">Built with thoughtful engineering.</h2>
        </Reveal>
        <dl className="mt-16 border-t border-border">
          {technologies.map((item) => (
            <div key={item.name} className="grid gap-2 border-b border-border py-6 md:grid-cols-[16rem_1fr] md:items-baseline">
              <dt className="text-2xl tracking-[-0.04em]">{item.name}</dt>
              <dd className="text-[0.98rem] leading-7 text-[#5e5a57]">{item.text}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
