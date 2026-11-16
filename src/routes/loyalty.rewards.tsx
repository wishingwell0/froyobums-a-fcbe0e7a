// Froyo Squad rewards — redeemable tiles (points & stamps) plus the tier
// ladder. Redeeming mutates the localStorage member ledger and toasts.

import { createFileRoute, Link } from "@tanstack/react-router";
import { toast } from "sonner";
import { useLoyaltyMember } from "../hooks/use-loyalty-member";
import { RewardTile } from "../components/loyalty/reward-tile";
import { BRAND } from "../lib/menu-data";
import { REWARDS, TIERS, tierForPoints, type Reward } from "../lib/loyalty-data";

export const Route = createFileRoute("/loyalty/rewards")({
  head: () => ({
    meta: [
      { title: "Rewards — Froyo Squad | Froyo Buns" },
      {
        name: "description",
        content:
          "Redeem Froyo Squad points and stamps for free cups, premium toppings, and size upgrades. See the Swirl, Scoop, and Sundae tiers.",
      },
      { property: "og:title", content: "Rewards — Froyo Squad | Froyo Buns" },
      {
        property: "og:description",
        content: "Redeem points and stamps for free cups, toppings, and upgrades.",
      },
      { property: "og:type", content: "website" },
      { property: "og:image", content: BRAND.loyaltyCardImage },
      { name: "twitter:image", content: BRAND.loyaltyCardImage },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: RewardsPage,
});

function RewardsPage() {
  const { member, ready, setMember } = useLoyaltyMember();

  function redeem(reward: Reward) {
    if (!member) return;
    if (reward.unit === "stamps") {
      if (member.stamps < reward.cost) return;
      setMember({ ...member, stamps: member.stamps - reward.cost });
    } else {
      if (member.points < reward.cost) return;
      setMember({ ...member, points: member.points - reward.cost });
    }
    toast.success(`Redeemed: ${reward.title} 🎉`);
  }

  if (!ready) {
    return (
      <div className="mx-auto max-w-6xl px-4 py-12 text-sm text-muted-foreground sm:px-6">
        Loading…
      </div>
    );
  }

  return (
    <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6">
      <h2 className="font-display text-3xl font-bold text-foreground sm:text-4xl">Rewards</h2>
      <p className="mt-2 max-w-2xl text-muted-foreground">
        Spend your points and stamps on free froyo, premium toppings, and size upgrades. Show your
        card at the register to redeem.
      </p>

      {!member ? (
        <div className="mt-6 rounded-2xl border border-border/60 bg-card p-6 shadow-sm">
          <p className="text-sm text-muted-foreground">
            Join the Froyo Squad to start earning points and stamps.
          </p>
          <Link
            to="/loyalty/join"
            className="mt-3 inline-flex items-center gap-2 rounded-full gradient-pink-teal px-6 py-2.5 text-sm font-semibold text-primary-foreground shadow-sm transition-transform hover:scale-[1.03]"
          >
            Join free →
          </Link>
        </div>
      ) : (
        <div className="mt-6 flex flex-wrap gap-3">
          <span className="rounded-full bg-secondary px-4 py-1.5 text-sm font-semibold text-secondary-foreground">
            ⭐ {member.points} points
          </span>
          <span className="rounded-full bg-secondary px-4 py-1.5 text-sm font-semibold text-secondary-foreground">
            🎟️ {member.stamps} stamps
          </span>
        </div>
      )}

      <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {REWARDS.map((r) => {
          const canRedeem =
            !!member && (r.unit === "stamps" ? member.stamps >= r.cost : member.points >= r.cost);
          return (
            <RewardTile
              key={r.id}
              reward={r}
              canRedeem={canRedeem}
              {...(member && canRedeem ? { onRedeem: () => redeem(r) } : {})}
            />
          );
        })}
      </div>

      <h3 className="mt-14 font-display text-2xl font-bold text-foreground">Tiers</h3>
      <p className="mt-2 text-sm text-muted-foreground">
        The more you swirl, the higher you climb — each tier unlocks new perks.
      </p>
      <div className="mt-6 grid gap-5 sm:grid-cols-3">
        {TIERS.map((t) => {
          const current = member ? tierForPoints(member.points).key === t.key : false;
          return (
            <div
              key={t.key}
              className={[
                "rounded-2xl border p-6 shadow-sm",
                current ? "border-primary/50 bg-primary/5" : "border-border/60 bg-card",
              ].join(" ")}
            >
              <div className="flex items-center justify-between">
                <span className="text-3xl">{t.emoji}</span>
                {current && (
                  <span className="rounded-full bg-primary/15 px-2.5 py-0.5 text-xs font-semibold text-primary">
                    Current
                  </span>
                )}
              </div>
              <h4 className="mt-3 font-display text-lg font-bold text-foreground">{t.name}</h4>
              <p className="text-sm font-medium text-primary">{t.minPoints}+ pts</p>
              <p className="mt-1 text-sm text-muted-foreground">{t.blurb}</p>
              <p className="mt-3 rounded-lg bg-muted/60 px-3 py-2 text-xs font-medium text-foreground">
                Perk: {t.perk}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
}
