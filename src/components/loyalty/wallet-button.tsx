// Reusable "Add to Apple Wallet" control. Currently shown as a non-clickable
// "coming soon" badge until Apple Developer pass credentials are configured.

import { Apple } from "lucide-react";
import type { LoyaltyMember } from "../../lib/loyalty-data";

export function WalletButton({ className = "" }: { member: LoyaltyMember; className?: string }) {
  return (
    <div className={className}>
      <div
        aria-disabled="true"
        className="inline-flex w-full cursor-not-allowed items-center justify-center gap-2 rounded-2xl px-6 py-3.5 text-sm font-bold text-white opacity-70 bg-froyo-darkteal"
      >
        <Apple className="size-4 fill-white" />
        Add to Apple Wallet coming soon!
      </div>
    </div>
  );
}
