// Reusable reward tile. `canRedeem` gates the Redeem button; `onRedeem`
// is only wired when the caller is ready to spend points/stamps.

import { CheckCircle2 } from "lucide-react";
import type { Reward } from "../../lib/loyalty-data";

export function RewardTile({
  reward,
  canRedeem,
  onRedeem,
}: {
  reward: Reward;
  canRedeem: boolean;
  onRedeem?: () => void;
}) {
  return (
    <div className="flex h-full flex-col rounded-2xl border border-border/60 bg-card p-5 shadow-sm">
      <div className="flex size-12 items-center justify-center rounded-2xl gradient-cream-peach text-2xl">
        {reward.emoji}
      </div>
      <h3 className="mt-4 font-display text-base font-bold text-foreground">{reward.title}</h3>
      <p className="mt-1 flex-1 text-sm text-muted-foreground">{reward.desc}</p>
      <div className="mt-4 flex items-center justify-between">
        <span className="rounded-full bg-secondary px-2.5 py-1 text-xs font-semibold text-secondary-foreground">
          {reward.cost} {reward.unit === "stamps" ? "stamps" : "pts"}
        </span>
        <button
          onClick={onRedeem}
          disabled={!canRedeem || !onRedeem}
          className="inline-flex items-center gap-1.5 rounded-full gradient-pink-teal px-4 py-2 text-xs font-semibold text-primary-foreground transition-transform hover:scale-[1.03] disabled:cursor-not-allowed disabled:opacity-50"
        >
          <CheckCircle2 className="size-3.5" /> Redeem
        </button>
      </div>
    </div>
  );
}
