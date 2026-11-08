import dynamic from "next/dynamic";
import { Features } from "@/components/features";
import { FinalCta } from "@/components/final-cta";
import { Hero } from "@/components/hero";
import { HowItWorks } from "@/components/how-it-works";
import { Impact } from "@/components/impact";
import { Purpose } from "@/components/purpose";
import { Showcase } from "@/components/showcase";
import { Technology } from "@/components/technology";

const Circulation = dynamic(() => import("@/components/circulation").then((mod) => mod.Circulation));
const Statement = dynamic(() => import("@/components/statement").then((mod) => mod.Statement));

export default function Home() {
  return (
    <main id="top">
      <div id="content">
        <Hero />
        <Circulation />
        <Purpose />
        <Impact />
        <Features />
        <HowItWorks />
        <Showcase />
        <Technology />
        <Statement />
        <FinalCta />
      </div>
    </main>
  );
}
