type Screen = "home" | "donate" | "profile";

const screens: Record<Screen, { kicker: string; title: string; lines: string[] }> = {
  home: {
    kicker: "Home",
    title: "What would you like to do today?",
    lines: ["Donate Blood", "Find Donor", "Blood Banks", "Hospitals"],
  },
  donate: {
    kicker: "Donate Blood",
    title: "Find a donation center",
    lines: ["Search by location", "Nearby centers", "Directions", "Call"],
  },
  profile: {
    kicker: "My Profile",
    title: "Personal information",
    lines: ["Blood type", "Contact details", "Donation history"],
  },
};

export function Phone({
  screen,
  className = "",
  label,
}: {
  screen: Screen;
  className?: string;
  label: string;
}) {
  const content = screens[screen];

  return (
    <figure className={className}>
      <div className="phone-shell aspect-[9/19.2] w-full">
        <div className="phone-screen flex flex-col px-5 pb-5 pt-10">
          <p className="text-[0.62rem] font-medium uppercase tracking-[0.16em] text-primary">{content.kicker}</p>
          <p className="mt-3 text-[1.15rem] leading-tight tracking-[-0.04em] text-foreground">{content.title}</p>
          <ul className="mt-6 flex flex-1 flex-col gap-2.5">
            {content.lines.map((line) => (
              <li key={line} className="border-b border-border py-2.5 text-[0.82rem] text-[#4e4a47]">
                {line}
              </li>
            ))}
          </ul>
          <p className="text-[0.62rem] uppercase tracking-[0.14em] text-muted">Interface study</p>
        </div>
      </div>
      <figcaption className="mt-4 text-center text-[0.72rem] tracking-[0.08em] text-muted uppercase">{label}</figcaption>
    </figure>
  );
}
