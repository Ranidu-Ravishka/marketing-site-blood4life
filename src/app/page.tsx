"use client";

import Image from "next/image";
import { useState } from "react";
import {
  ArrowUpRight, Building2, Check, ChevronDown, CircleUserRound, Clock3,
  Droplets, Github, HeartPulse, Hospital, Menu, Search, ShieldCheck,
  UsersRound, X,
} from "lucide-react";

const githubUrl = "https://github.com/Ranidu-Ravishka/blood_4_life";
const figmaUrl = "https://www.figma.com/proto/3UOZJ5LCNrHnnj7BUcG6TB/blood-donation";

const features = [
  { icon: Search, title: "Find a donor", text: "Search the donor experience by blood type or location, with availability details surfaced in a focused flow." },
  { icon: Droplets, title: "Donate blood", text: "A guided donation flow helps users find a donation center and keep their contribution journey organised." },
  { icon: Building2, title: "Blood banks", text: "Explore nearby blood banks with location details and status information in one accessible view." },
  { icon: Hospital, title: "Hospitals", text: "Keep hospitals close at hand alongside the other care and coordination destinations." },
  { icon: ShieldCheck, title: "Secure sign-in", text: "Firebase Authentication supports email and Google sign-in, with profile details stored in Firestore." },
  { icon: CircleUserRound, title: "Personal profile", text: "Users can manage their profile and review donation history from the app's account area." },
];

const faqs = [
  ["What is Blood4Life?", "Blood4Life is a Flutter mobile application concept that brings donor, recipient, blood bank, and hospital workflows together in one place."],
  ["Who is Blood4Life designed for?", "The current app flows are designed around people who want to donate, people searching for donors, and people looking for blood banks or hospitals."],
  ["What technologies power Blood4Life?", "The repository uses Flutter and Dart, with Firebase Authentication, Cloud Firestore, Firebase Storage, and Google Sign-In integrations."],
  ["Is Blood4Life available for download?", "This website presents the project and its source code. There is no verified public App Store or Google Play release linked from this site."],
  ["Is this a live blood donation service?", "No. This is a software project presentation and portfolio demonstration. It does not collect patient information or facilitate real-world donation transactions."],
];

function Logo() {
  return <a className="logo" href="#top" aria-label="Blood4Life home"><span className="logo-mark"><Droplets size={18} fill="currentColor" /></span><span>blood<span>4</span>life</span></a>;
}

function Phone({ type, label }: { type: "home" | "search" | "donate"; label: string }) {
  return <div className={`phone phone-${type}`} aria-label={`${label} app preview`}>
    <div className="phone-notch" />
    <div className="phone-screen">
      <div className="screen-top"><span className="screen-dot" /><span>9:41</span><span>•••</span></div>
      {type === "home" && <><p className="screen-eyebrow">WELCOME BACK</p><h3>Hello, donor!</h3><p className="screen-muted">What would you like to do today?</p><div className="screen-grid"><b><Droplets />Donate blood</b><b><Search />Find donor</b><b><HeartPulse />Blood banks</b><b><Hospital />Hospitals</b></div><div className="progress-card"><span>Next donation</span><strong>Now eligible</strong><i><span /></i></div></>}
      {type === "search" && <><p className="screen-eyebrow">FIND A DONOR</p><h3>Search donors</h3><div className="search-field"><Search size={13} />Blood type or location</div><div className="blood-chips"><b>A+</b><span>B-</span><span>O+</span><span>AB+</span></div><p className="screen-muted">Available donors</p>{["John D.", "Sarah M.", "Robert L."].map((name, i) => <div className="donor-row" key={name}><span className="avatar">{name[0]}</span><b>{name}<small>{["A+ · 2.5km", "B- · 3.1km", "O+ · 1.8km"][i]}</small></b><ArrowUpRight size={14} /></div>)}</>}
      {type === "donate" && <><p className="screen-eyebrow">YOUR JOURNEY</p><h3>Donate blood</h3><div className="drop-illustration"><Droplets size={36} fill="currentColor" /></div><p className="screen-center">One donation can support a life.</p><div className="donate-item"><Check size={14} />Find a donation center</div><div className="donate-item"><Clock3 size={14} />Review your history</div><button className="screen-button">Get started <ArrowUpRight size={13} /></button></>}
    </div>
    <span className="phone-label">{label}</span>
  </div>;
}

function SectionHeading({ eyebrow, title, copy }: { eyebrow: string; title: string; copy?: string }) {
  return <div className="section-heading"><span className="eyebrow">{eyebrow}</span><h2>{title}</h2>{copy && <p>{copy}</p>}</div>;
}

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  return <main id="top">
    <nav className="nav"><div className="container nav-inner"><Logo /><div className={`nav-links ${menuOpen ? "is-open" : ""}`}>{["About", "Features", "How it works", "Showcase", "Technology", "FAQ"].map(item => <a key={item} href={`#${item.toLowerCase().replaceAll(" ", "-")}`} onClick={() => setMenuOpen(false)}>{item}</a>)}<a className="nav-cta" href="#showcase" onClick={() => setMenuOpen(false)}>Explore the app <ArrowUpRight size={15} /></a></div><button className="menu-button" aria-label={menuOpen ? "Close menu" : "Open menu"} onClick={() => setMenuOpen(!menuOpen)}>{menuOpen ? <X /> : <Menu />}</button></div></nav>

    <section className="hero"><div className="container hero-grid"><div className="hero-copy"><div className="pill"><span /> A project with purpose</div><h1>A little kindness.<br /><em>A lifetime of impact.</em></h1><p>Connecting blood donors, recipients, and blood banks through a thoughtfully designed mobile experience.</p><div className="hero-actions"><a className="button button-primary" href="#showcase">Explore the app <ArrowUpRight size={17} /></a><a className="button button-quiet" href={githubUrl} target="_blank" rel="noreferrer"><Github size={17} /> View on GitHub</a></div><div className="hero-note"><ShieldCheck size={16} /><span>Portfolio project · Not a live healthcare service</span></div></div><div className="hero-visual"><div className="orb orb-one" /><div className="orb orb-two" /><Phone type="home" label="Home" /><Phone type="search" label="Find a donor" /></div></div></section>

    <section className="trust-strip"><div className="container trust-inner"><span>BUILT WITH</span><b>Flutter</b><i>·</i><b>Dart</b><i>·</i><b>Firebase</b><i>·</i><b>Human-centred design</b></div></section>

    <section className="section about" id="about"><div className="container two-col"><div><SectionHeading eyebrow="01 — The why" title="Technology with a purpose." copy="Blood donation is deeply human. Blood4Life explores how thoughtful digital tools can make the coordination around it feel a little clearer, closer, and more accessible." /><p className="body-copy">The application is a collaborative software engineering project built around the needs of donors, recipients, and care destinations. Its interface brings key paths together without turning a meaningful action into a complicated one.</p><a className="text-link" href={figmaUrl} target="_blank" rel="noreferrer">View the interface direction <ArrowUpRight size={16} /></a></div><div className="about-card"><div className="about-card-top"><span className="number">01</span><HeartPulse size={25} /></div><Image className="about-illustration" src="/blood-donation.png" alt="Blood4Life donation illustration" width={120} height={116} /><div className="big-quote">“Small actions,<br /><em>shared with care.</em>”</div><div className="about-lines"><span /><span /><span /></div></div></div></section>

    <section className="section features" id="features"><div className="container"><SectionHeading eyebrow="02 — What it does" title="A calmer way to coordinate care." copy="Every feature below is grounded in the current Flutter application." /><div className="feature-grid">{features.map(({ icon: Icon, title, text }) => <article className="feature-card" key={title}><div className="feature-icon"><Icon size={20} /></div><h3>{title}</h3><p>{text}</p><ArrowUpRight className="feature-arrow" size={17} /></article>)}</div></div></section>

    <section className="section how" id="how-it-works"><div className="container"><SectionHeading eyebrow="03 — How it works" title="Three perspectives. One shared purpose." copy="The current experience gives each participant a clear place to begin." /><div className="steps"><div className="step"><span>01</span><div className="step-icon"><UsersRound /></div><h3>Donors</h3><p>Move from profile and eligibility context to a donation center with less friction.</p></div><div className="step-line" /><div className="step"><span>02</span><div className="step-icon"><Search /></div><h3>Recipients</h3><p>Search available donor information by blood type or location from a focused flow.</p></div><div className="step-line" /><div className="step"><span>03</span><div className="step-icon"><Building2 /></div><h3>Blood banks</h3><p>Find nearby blood banks and hospitals, with location and status details in view.</p></div></div></div></section>

    <section className="section showcase" id="showcase"><div className="container showcase-grid"><div><SectionHeading eyebrow="04 — App showcase" title="Designed for the moment it matters." copy="A glimpse at the product language and flows inside the Flutter application." /><p className="body-copy">The repository does not include exported screen captures, so these previews are an illustrative presentation of verified screens and interactions—not claims of live product screenshots.</p><a className="text-link" href={figmaUrl} target="_blank" rel="noreferrer">Explore the Figma reference <ArrowUpRight size={16} /></a></div><div className="showcase-phones"><Phone type="donate" label="Donate blood" /><Phone type="search" label="Find a donor" /></div></div></section>

    <section className="section tech" id="technology"><div className="container"><SectionHeading eyebrow="05 — The foundation" title="Simple technology. Thoughtful intent." /><div className="tech-grid">{[["Flutter", "Cross-platform mobile foundation.", "FL"], ["Dart", "Typed language for the app experience.", "D"], ["Firebase", "Authentication and cloud data services.", "FB"], ["Firestore", "Profile and donation data storage.", "FS"]].map(([name, text, mark]) => <div className="tech-item" key={name}><span>{mark}</span><div><h3>{name}</h3><p>{text}</p></div><Check size={17} /></div>)}</div></div></section>

    <section className="section faq" id="faq"><div className="container faq-grid"><SectionHeading eyebrow="06 — Questions" title="Good to know." copy="A few honest answers about the project and its current status." /><div className="faq-list">{faqs.map(([question, answer], i) => <div className={`faq-item ${openFaq === i ? "open" : ""}`} key={question}><button onClick={() => setOpenFaq(openFaq === i ? null : i)} aria-expanded={openFaq === i}><span>{question}</span><ChevronDown size={18} /></button>{openFaq === i && <p>{answer}</p>}</div>)}</div></div></section>

    <section className="final-cta"><div className="container final-inner"><div><span className="eyebrow">KEEP EXPLORING</span><h2>Every drop counts.<br /><em>Every life matters.</em></h2></div><div className="final-actions"><p>Explore the project, the interface direction, and the ideas behind Blood4Life.</p><a className="button button-light" href={githubUrl} target="_blank" rel="noreferrer"><Github size={17} /> Explore GitHub</a><a className="button button-outline-light" href={figmaUrl} target="_blank" rel="noreferrer">View UI design <ArrowUpRight size={16} /></a></div></div></section>

    <footer><div className="container footer-main"><Logo /><p>A collaborative software engineering project<br />designed around technology with a purpose.</p><div className="footer-links"><a href={githubUrl} target="_blank" rel="noreferrer">GitHub <ArrowUpRight size={13} /></a><a href={figmaUrl} target="_blank" rel="noreferrer">Figma design <ArrowUpRight size={13} /></a></div></div><div className="container footer-bottom"><span>© 2025 Blood4Life project</span><span>Not a live medical service · Please seek professional care for medical advice.</span></div></footer>
  </main>;
}
