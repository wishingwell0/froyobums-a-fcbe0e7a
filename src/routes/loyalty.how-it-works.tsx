// How the Froyo Squad works — the earning flow, the stamp card, the tiers,
// and the Apple Wallet pitch, plus a join CTA.

import { createFileRoute, Link } from "@tanstack/react-router";
import { Gift, ArrowRight } from "lucide-react";
import { BRAND } from "../lib/menu-data";
import { TIERS, STAMPS_PER_REWARD, PERKS } from "../lib/loyalty-data";

export const Route = createFileRoute("/loyalty/how-it-works")({
  head: () => ({
    meta: [
      { title: "How It Works — Froyo Squad | Froyo Buns" },
      {
        name: "description",
        content:
          "How the Froyo Squad works: earn a point per visit, fill a 20-stamp card for a free cup, climb three tiers, and add your card to Apple Wallet.",
      },
      { property: "og:title", content: "How It Works — Froyo Squad | Froyo Buns" },
      {
        property: "og:description",
        content: "Earn points and stamps, climb tiers, and keep your card in Apple Wallet.",
      },
      { property: "og:type", content: "website" },
      { property: "og:image", content: BRAND.loyaltyCardImage },
      { name: "twitter:image", content: BRAND.loyaltyCardImage },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: HowItWorks,
});

const STEPS = [
  {
    step: "01",
    title: "Join free",
    body: "Sign up with your name and email — you'll get a member number instantly, no fees.",
  },
  {
    step: "02",
    title: "Earn every visit",
    body: "Show your card at the register. Each cup earns 1 point and 1 stamp toward a free cup.",
  },
  {
    step: "03",
    title: "Fill your stamp card",
    body: `Collect ${STAMPS_PER_REWARD} stamps to unlock a free Classic cup — redeem it anytime.`,
  },
  {
    step: "04",
    title: "Climb the tiers",
    body: "Points move you up the Swirl, Scoop, and Sundae tiers, each with new perks.",
  },
  {
    step: "05",
    title: "Add to Apple Wallet",
    body: "Keep your card, points, and barcode on your phone — tap to add.",
  },
];

function HowItWorks() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6">
      <h2 className="font-display text-3xl font-bold text-foreground sm:text-4xl text-ring">
        How the Froyo Squad works
      </h2>
      <p className="mt-2 max-w-2xl text-card">
        Five simple steps from your first swirl to a wallet full of rewards.
      </p>

      <ol className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {STEPS.map((s) => (
          <li key={s.step} className="rounded-2xl border border-border/60 bg-card p-6 shadow-sm">
            <span className="font-display text-4xl font-bold text-primary/80">{s.step}</span>
            <h3 className="mt-2 font-display text-lg font-bold text-foreground text-froyo-darkteal">
              {s.title}
            </h3>
            <p className="mt-1.5 text-sm text-muted-foreground">{s.body}</p>
          </li>
        ))}
      </ol>

      <h3 className="mt-14 font-display text-2xl font-bold text-foreground text-ring">
        Perks at a glance
      </h3>
      <div className="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {PERKS.map((p) => (
          <div key={p.title} className="rounded-2xl border border-border/60 bg-card p-6 shadow-sm">
            <span className="text-3xl">{p.emoji}</span>
            <h4 className="mt-3 font-display text-base font-bold text-foreground text-froyo-darkteal">
              {p.title}
            </h4>
            <p className="mt-1 text-sm text-muted-foreground">{p.body}</p>
          </div>
        ))}
      </div>

      <h3 className="mt-14 font-display text-2xl font-bold text-foreground">The tier ladder</h3>
      <div className="mt-6 grid gap-5 sm:grid-cols-3">
        {TIERS.map((t) => (
          <div key={t.key} className="rounded-2xl border border-border/60 bg-card p-6 shadow-sm">
            <span className="text-3xl">{t.emoji}</span>
            <h4 className="mt-3 font-display text-lg font-bold text-foreground text-froyo-darkteal">
              {t.name}
            </h4>
            <p className="text-sm font-medium text-primary">{t.minPoints}+ pts</p>
            <p className="mt-1 text-sm text-muted-foreground">{t.perk}</p>
          </div>
        ))}
      </div>

      <div className="mt-14 overflow-hidden rounded-3xl gradient-pink-teal p-8 text-primary-foreground shadow-xl md:p-12">
        <div className="flex flex-col items-start gap-4 md:flex-row md:items-center md:justify-between">
          <div>
            <h3 className="font-display text-2xl font-bold text-balance sm:text-3xl">
              Ready to start earning?
            </h3>
            <p className="mt-2 max-w-md text-primary-foreground/85">
              Join the Froyo Squad free — your first stamp is one swirl away.
            </p>
          </div>
          <Link
            to="/loyalty/join"
            className="inline-flex shrink-0 items-center gap-2 rounded-full bg-primary-foreground px-7 py-3 text-sm font-semibold text-primary transition-transform hover:scale-[1.03]"
          >
            <Gift className="size-4" /> Join the club <ArrowRight className="size-4" />
          </Link>
        </div>
      </div>
    </div>
  );
}
