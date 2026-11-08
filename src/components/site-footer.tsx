import { BrandMark } from "@/components/brand-mark";
import { nav, site } from "@/lib/site";

export function SiteFooter() {
  return (
    <footer className="bg-dark text-[#d9d4cf]">
      <div className="mx-auto grid w-full max-w-[76rem] gap-12 px-5 py-16 sm:px-8 md:grid-cols-[1.4fr_1fr_1fr]">
        <div>
          <a href="#top" className="inline-flex items-center gap-2.5 text-background" aria-label="Blood4Life home">
            <BrandMark className="h-7 w-7" />
            <span className="text-lg tracking-[-0.04em]">Blood4Life</span>
          </a>
          <p className="mt-5 max-w-xs text-sm leading-6 text-[#b7b1ab]">{site.tagline}</p>
        </div>
        <nav aria-label="Footer">
          <ul className="space-y-2 text-sm">
            {nav.map((item) => (
              <li key={item.href}>
                <a href={item.href} className="hover:text-white">
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
        <div className="space-y-2 text-sm">
          <a href={site.github} className="block hover:text-white">
            GitHub project
          </a>
          <a href={site.figma} className="block hover:text-white">
            Interface reference
          </a>
          <a href={site.marketingRepo} className="block hover:text-white">
            Website source
          </a>
        </div>
      </div>
      <div className="mx-auto flex w-full max-w-[76rem] flex-col gap-2 border-t border-white/10 px-5 py-6 text-xs text-[#9c968f] sm:px-8 md:flex-row md:justify-between">
        <p>© {new Date().getFullYear()} Blood4Life</p>
        <p>A software project presentation. Not a live medical service. No public store listing is linked from this site.</p>
      </div>
    </footer>
  );
}
