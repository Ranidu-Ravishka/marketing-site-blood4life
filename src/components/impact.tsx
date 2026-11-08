import { impact } from "@/lib/site";
import { Reveal } from "@/components/reveal";

export function Impact() {
  return (
    <section className="border-y border-border bg-card">
      <div className="mx-auto w-full max-w-[76rem] px-5 py-28 sm:px-8 lg:py-36">
        <Reveal>
          <h2 className="headline max-w-[12ch]">Every connection matters.</h2>
          <p className="prose-quiet mt-6 max-w-xl">
            The value of Blood4Life is the link it tries to make clearer. These are the ideas the product is built around, not measured claims.
          </p>
        </Reveal>
        <div className="mt-16 grid gap-px bg-border sm:grid-cols-2 lg:grid-cols-4">
          {impact.map((item, index) => (
            <Reveal key={item.index} delay={index * 0.06} className="h-full bg-card">
              <article className="h-full py-8 sm:px-6 sm:first:pl-0 lg:py-10">
                <span className="text-xs tracking-[0.16em] text-muted">{item.index}</span>
                <h3 className="mt-6 text-2xl tracking-[-0.04em]">{item.title}</h3>
                <p className="mt-3 max-w-[16rem] text-sm leading-6 text-[#5e5a57]">{item.text}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
