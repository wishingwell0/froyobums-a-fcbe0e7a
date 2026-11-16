// Reusable digital loyalty card matching the crisp fuchsia pink card design
// with the Froyo Buns logo, member status, points, and member details.

import { BRAND } from "../../lib/menu-data";
import { tierForPoints, type LoyaltyMember } from "../../lib/loyalty-data";

export function MemberCard({ member }: { member: LoyaltyMember }) {
  const tier = tierForPoints(member.points);
  return (
    <div className="relative overflow-hidden rounded-[2rem] bg-[#ec008c] p-6 text-white shadow-xl sm:p-7">
      {/* Decorative subtle radial glow / circle in top right */}
      <div
        className="absolute -right-8 -top-8 size-48 rounded-full bg-white/10 blur-xl pointer-events-none"
        aria-hidden
      />
      <div
        className="absolute right-6 top-6 flex size-12 items-center justify-center rounded-full bg-white/15 backdrop-blur-sm text-2xl"
        aria-hidden
      >
        🍦
      </div>

      {/* Top logo & status */}
      <div className="relative pr-14">
        <img
          src={BRAND.logoImage}
          alt={BRAND.name}
          className="h-9 w-auto max-w-[140px] object-contain drop-shadow"
        />
        <h3 className="mt-3 font-display text-xl font-bold tracking-tight text-white">
          {tier.name} Member
        </h3>
      </div>

      {/* Bottom member info & points */}
      <div className="relative mt-12 flex items-end justify-between gap-4">
        <div>
          <p className="text-[11px] font-semibold uppercase tracking-wider text-white/70">Member</p>
          <p className="font-display text-lg font-bold text-white leading-tight">
            {member.firstName} {member.lastName}
          </p>
          <p className="mt-0.5 font-mono text-xs text-white/80 tracking-wider">
            {member.memberNumber}
          </p>
        </div>

        <div className="text-right">
          <p className="text-[11px] font-semibold uppercase tracking-wider text-white/70">Points</p>
          <p className="font-display text-4xl font-extrabold text-white leading-none">
            {member.points}
          </p>
        </div>
      </div>
    </div>
  );
}
