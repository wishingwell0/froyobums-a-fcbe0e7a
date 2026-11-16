// Froyo Squad dashboard — faithfully replicates the clean, playful pastel-blue layout
// from the reference with hero teaser, digital pass, points, stamps, tiers, spend options,
// and step-by-step footer banner.

import { createFileRoute, Link } from "@tanstack/react-router";
import { Check, Star, ArrowRight, Sparkles } from "lucide-react";
import { useLoyaltyMember, DEMO_MEMBER } from "../hooks/use-loyalty-member";
import { MemberCard } from "../components/loyalty/member-card";
import { StampCard } from "../components/loyalty/stamp-card";
import { WalletButton } from "../components/loyalty/wallet-button";
import { BRAND } from "../lib/menu-data";
import { TIERS, tierForPoints, nextTier } from "../lib/loyalty-data";

export const Route = createFileRoute("/loyalty/")({
  head: () => ({
    meta: [
      { title: `Froyo Squad — ${BRAND.name} Loyalty & Rewards` },
      {
        name: "description",
        content:
          "Join the Froyo Squad: collect stamps for free cups, rack up points for toppings, and carry your membership right in Apple Wallet.",
      },
      {
        property: "og:title",
        content: `Froyo Squad — ${BRAND.name} Loyalty & Rewards`,
      },
      {
        property: "og:description",
        content:
          "Collect stamps for free cups, rack up points, and carry your card in Apple Wallet.",
      },
      {
        property: "og:image",
        content:
          "https://assets.cdn.filesafe.space/twp6nyqYXqMjriSQ7hzj/media/6ab5e1913ae3da26fb518739.gif",
      },
      {
        name: "twitter:image",
        content:
          "https://assets.cdn.filesafe.space/twp6nyqYXqMjriSQ7hzj/media/6ab5e1913ae3da26fb518739.gif",
      },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: LoyaltyDashboard,
});

export function LoyaltyDashboard() {
  const { member: activeMember, ready, setMember, clearMember } = useLoyaltyMember();

  // Use loaded member or fallback to reference demo member
  const member = activeMember ?? DEMO_MEMBER;
  const currentTier = tierForPoints(member.points);
  const next = nextTier(member.points);

  function handleAddVisit() {
    const updated = {
      ...member,
      points: member.points + 15,
      stamps: member.stamps >= 20 ? 1 : member.stamps + 1,
    };
    setMember(updated);
  }

  function handleResetDemo() {
    clearMember();
  }

  return (
    <div className="mx-auto max-w-6xl px-4 py-8 sm:px-6 sm:py-12 space-y-10 sm:space-y-12">
      {/* ----------------- SECTION 1: HERO HEADER ----------------- */}
      <section className="grid items-center gap-8 lg:grid-cols-12">
        <div className="lg:col-span-7 space-y-4">
          {/* Badge */}
          <div
            aria-disabled="true"
            className="inline-flex cursor-not-allowed items-center gap-2 rounded-full border border-[#033347]/10 bg-white/70 px-3.5 py-1 text-xs font-semibold text-[#033347] backdrop-blur-sm shadow-xs opacity-70"
          >
            <span>💳</span>
            <span>Apple Wallet coming soon!</span>
          </div>

          {/* Heading */}
          <h1 className="font-display text-4xl font-extrabold tracking-tight text-[#033347] sm:text-5xl lg:text-6xl leading-[1.1] text-color-white">
            Scoop more. <br />
            <span className="text-[#ec008c]">Earn more.</span>
          </h1>

          {/* Subheading */}
          <p className="max-w-xl text-base font-normal leading-relaxed text-[#033347]/80 sm:text-lg">
            Every visit earns a stamp. Collect 20 for a free cup, stack points for toppings &amp;
            birthday sundaes, and carry your card right in Apple Wallet.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-wrap items-center gap-3 pt-2">
            <div
              aria-disabled="true"
              className="inline-flex cursor-not-allowed items-center gap-2 rounded-full border border-[#033347]/15 px-6 py-3 text-sm font-bold text-white opacity-70 bg-froyo-darkteal"
            >
              <span>💳</span>
              <span>Add to Apple Wallet coming soon!</span>
            </div>
          </div>
        </div>

        {/* Hero right image card */}
        <div className="relative lg:col-span-5">
          <div className="relative mx-auto max-w-md overflow-hidden rounded-[2.5rem] p-2 sm:max-w-none">
            <img
              src="https://assets.cdn.filesafe.space/twp6nyqYXqMjriSQ7hzj/media/6abb17f4b4d207ff9d2aef42.png"
              alt="Froyo Buns signature swirl bowl"
              className="aspect-[4/3] w-full rounded-[2rem] object-contain"
            />
            {/* Overlay pill tag */}
            <div className="absolute bottom-6 left-6 rounded-2xl bg-white/95 px-4 py-2.5 shadow-lg backdrop-blur-md border border-[#ec008c]/20">
              <p className="text-[10px] font-bold uppercase tracking-wider text-muted-foreground">
                Free cup at
              </p>
              <p className="font-display text-lg font-extrabold text-[#ec008c] leading-tight">
                20 stamps
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ----------------- SECTION 2: BENTO GRID ----------------- */}
      <section id="pass-section" className="space-y-6">
        <div className="grid grid-cols-1 gap-6 md:grid-cols-12 items-start">
          {/* Member Card & Wallet column */}
          <div className="space-y-4 md:col-span-5 lg:col-span-4">
            <MemberCard member={member} />

            <div className="rounded-[2rem] bg-white p-6 shadow-sm border border-[#033347]/10">
              <WalletButton member={member} />
            </div>
          </div>

          {/* Right Bento items (Points & Stamps top row, Stamp Card & Tier bottom) */}
          <div className="space-y-6 md:col-span-7 lg:col-span-8">
            {/* Top row: 2 metric cards */}
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              {/* POINTS CARD */}
              <div className="relative rounded-[2rem] bg-white p-6 shadow-sm border border-[#033347]/10">
                <div className="flex items-center justify-between">
                  <span className="text-2xl" aria-hidden>
                    ⭐
                  </span>
                  <span className="text-[11px] font-bold uppercase tracking-wider text-muted-foreground">
                    POINTS
                  </span>
                </div>

                <div className="mt-4">
                  <p className="font-display text-4xl font-extrabold text-[#033347]">
                    {member.points}
                  </p>
                  <p className="mt-1 text-xs font-semibold text-muted-foreground">
                    {next
                      ? `${next.minPoints - member.points} pts to ${next.name}`
                      : "Top tier unlocked 🎉"}
                  </p>
                </div>
              </div>

              {/* STAMPS CARD */}
              <div className="relative rounded-[2rem] bg-white p-6 shadow-sm border border-[#033347]/10">
                <div className="flex items-center justify-between">
                  <span className="text-2xl" aria-hidden>
                    🍓
                  </span>
                  <span className="text-[11px] font-bold uppercase tracking-wider text-muted-foreground">
                    STAMPS
                  </span>
                </div>

                <div className="mt-4">
                  <p className="font-display text-4xl font-extrabold text-[#033347]">
                    {member.stamps}/20
                  </p>
                  <p className="mt-1 text-xs font-semibold text-muted-foreground">
                    {20 - Math.min(member.stamps, 20) > 0
                      ? `${20 - Math.min(member.stamps, 20)} stamps to a free cup`
                      : "Reward ready to redeem!"}
                  </p>
                </div>
              </div>
            </div>

            {/* Middle row: Stamp Card on left, Tiers on right */}
            <div className="grid grid-cols-1 gap-6 lg:grid-cols-12 items-stretch">
              {/* STAMP CARD TILE */}
              <div className="flex flex-col justify-between rounded-[2rem] bg-white p-6 shadow-sm border border-[#033347]/10 lg:col-span-7">
                <div>
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="font-display text-base font-bold text-[#033347]">
                        Stamp card
                      </h3>
                      <p className="mt-0.5 text-xs text-muted-foreground">
                        {member.stamps} of 20 stamps • {Math.max(0, 20 - member.stamps)} to a free
                        cup
                      </p>
                    </div>
                    <span className="rounded-full bg-[#033347]/5 px-3 py-1 text-[11px] font-bold text-[#033347]">
                      Free cup at 20
                    </span>
                  </div>

                  <div className="mt-6">
                    <StampCard stamps={member.stamps} total={20} />
                  </div>
                </div>

                <div className="mt-6 flex items-center justify-between border-t border-[#033347]/5 pt-4 text-xs">
                  <button
                    onClick={handleAddVisit}
                    className="inline-flex items-center gap-1.5 font-bold text-[#ec008c] hover:underline"
                  >
                    <span>+</span> Simulate purchase (+1 stamp)
                  </button>
                  <button
                    onClick={handleResetDemo}
                    className="text-muted-foreground hover:text-[#033347]"
                  >
                    Reset demo
                  </button>
                </div>
              </div>

              {/* YOUR TIER CARD */}
              <div className="rounded-[2rem] bg-white p-6 shadow-sm border border-[#033347]/10 lg:col-span-5 flex flex-col justify-between">
                <div>
                  <h3 className="font-display text-base font-bold text-[#033347]">Your tier</h3>
                  <div className="mt-4 space-y-2.5">
                    {/* Tier 1: Sprinkles */}
                    <div className="flex items-center justify-between rounded-xl bg-[#f2e6e9] px-4 py-2.5 text-xs">
                      <div>
                        <p className="font-bold text-[#033347]">Sprinkles</p>
                        <p className="text-[11px] text-[#033347]/70">Welcome treat on signup</p>
                      </div>
                      <Check className="size-4 text-[#033347]/60" />
                    </div>

                    {/* Tier 2: Swirl (Active) */}
                    <div className="flex items-center justify-between rounded-xl bg-[#ec008c] px-4 py-2.5 text-xs text-white shadow-sm">
                      <div>
                        <p className="font-bold">Swirl</p>
                        <p className="text-[11px] text-white/80">Double points Tuesdays</p>
                      </div>
                      <Check className="size-4 text-white" />
                    </div>

                    {/* Tier 3: Double Scoop (Future) */}
                    <div className="flex items-center justify-between rounded-xl bg-[#e6f4f8] px-4 py-2.5 text-xs">
                      <div>
                        <p className="font-bold text-[#033347]">Double Scoop</p>
                        <p className="text-[11px] text-[#033347]/70">
                          Free birthday sundae + early drops
                        </p>
                      </div>
                      <span className="font-bold text-[#033347]/70 text-[11px]">600 pts</span>
                    </div>
                  </div>
                </div>

                <Link
                  to="/loyalty/how-it-works"
                  className="mt-4 block text-center text-xs font-semibold text-[#033347]/70 hover:text-[#ec008c]"
                >
                  See all tier perks →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ----------------- SECTION 3: SPEND YOUR POINTS ----------------- */}
      <section className="space-y-4 pt-4">
        <div className="flex items-end justify-between">
          <div>
            <h2 className="font-display text-2xl font-bold text-[#033347]">Spend your points</h2>
            <p className="text-xs text-muted-foreground mt-0.5">
              A taste of what {member.points} points can unlock.
            </p>
          </div>
          <Link
            to="/loyalty/rewards"
            className="rounded-full bg-[#033347] px-4 py-1.5 text-xs font-bold text-white hover:bg-[#022432] transition-colors"
          >
            See all rewards
          </Link>
        </div>

        {/* 3 Spend Cards */}
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
          {/* Perk 1 */}
          <div className="flex items-center gap-4 rounded-[2rem] bg-white p-5 shadow-sm border border-[#033347]/10">
            <div className="flex size-12 shrink-0 items-center justify-center rounded-full bg-[#fde9f2] text-2xl">
              🍦
            </div>
            <div>
              <p className="font-display text-sm font-bold text-[#033347]">Free Small Froyo</p>
              <p className="text-xs text-muted-foreground">Any flavour, any day.</p>
              <p className="mt-1 text-xs font-extrabold text-[#ec008c]">100 pts</p>
            </div>
          </div>

          {/* Perk 2 */}
          <div className="flex items-center gap-4 rounded-[2rem] bg-white p-5 shadow-sm border border-[#033347]/10">
            <div className="flex size-12 shrink-0 items-center justify-center rounded-full bg-[#fde9f2] text-2xl">
              🍓
            </div>
            <div>
              <p className="font-display text-sm font-bold text-[#033347]">Loaded Toppings</p>
              <p className="text-xs text-muted-foreground">Unlimited toppings on your next cup.</p>
              <p className="mt-1 text-xs font-extrabold text-[#ec008c]">150 pts</p>
            </div>
          </div>

          {/* Perk 3 */}
          <div className="flex items-center gap-4 rounded-[2rem] bg-white p-5 shadow-sm border border-[#033347]/10">
            <div className="flex size-12 shrink-0 items-center justify-center rounded-full bg-[#fde9f2] text-2xl">
              🍧
            </div>
            <div>
              <p className="font-display text-sm font-bold text-[#033347]">Free Medium Cup</p>
              <p className="text-xs text-muted-foreground">Upgrade your swirl, on us.</p>
              <p className="mt-1 text-xs font-extrabold text-[#ec008c]">250 pts</p>
            </div>
          </div>
        </div>
      </section>

      {/* ----------------- SECTION 4: FULL-WIDTH PINK FOOTER HOW-IT-WORKS BANNER ----------------- */}
      <section className="rounded-[2.5rem] bg-[#ec008c] p-8 sm:p-10 text-white shadow-xl">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {/* Step 1 */}
          <div className="flex items-start gap-4">
            <div className="flex size-9 shrink-0 items-center justify-center rounded-full bg-white/20 font-display text-sm font-bold text-white">
              1
            </div>
            <div>
              <h4 className="font-display text-base font-bold text-white">Order any cup</h4>
              <p className="mt-1 text-xs text-white/80 leading-relaxed">
                Scan in-store or order ahead.
              </p>
            </div>
          </div>

          {/* Step 2 */}
          <div className="flex items-start gap-4">
            <div className="flex size-9 shrink-0 items-center justify-center rounded-full bg-white/20 font-display text-sm font-bold text-white">
              2
            </div>
            <div>
              <h4 className="font-display text-base font-bold text-white">Earn a stamp</h4>
              <p className="mt-1 text-xs text-white/80 leading-relaxed">
                Plus points on every dollar.
              </p>
            </div>
          </div>

          {/* Step 3 */}
          <div className="flex items-start gap-4">
            <div className="flex size-9 shrink-0 items-center justify-center rounded-full bg-white/20 font-display text-sm font-bold text-white">
              3
            </div>
            <div>
              <h4 className="font-display text-base font-bold text-white">Redeem treats</h4>
              <p className="mt-1 text-xs text-white/80 leading-relaxed">
                Free cups, toppings, sundaes.
              </p>
            </div>
          </div>
        </div>

        <div className="mt-8 pt-6 border-t border-white/20">
          <Link
            to="/loyalty/how-it-works"
            className="inline-flex items-center gap-2 rounded-full bg-white/15 px-5 py-2 text-xs font-bold text-white hover:bg-white/25 transition-colors"
          >
            How it all works →
          </Link>
        </div>
      </section>
    </div>
  );
}
