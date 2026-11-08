export function FinalCta() {
  return (
    <section id="download" className="mx-auto flex w-full max-w-[76rem] flex-col gap-10 px-5 py-28 sm:px-8 lg:flex-row lg:items-end lg:justify-between lg:py-36">
      <div>
        <h2 className="headline max-w-[14ch]">Be part of something that matters.</h2>
        <p className="prose-quiet mt-6 max-w-md">
          Discover Blood4Life and be part of a more connected donation community.
        </p>
      </div>
      <div className="flex flex-col gap-3 sm:flex-row">
        <a href="#showcase" className="inline-flex h-12 items-center justify-center rounded-full bg-primary px-6 text-sm text-white">
          Explore Blood4Life
        </a>
        <a href="#top" className="inline-flex h-12 items-center justify-center rounded-full border border-border px-6 text-sm">
          Back to top
        </a>
      </div>
    </section>
  );
}
