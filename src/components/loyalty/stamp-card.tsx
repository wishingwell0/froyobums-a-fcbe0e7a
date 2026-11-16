// Reusable 10-stamp punch card matching the strawberry stamp visual style.

import { STAMPS_PER_REWARD } from "../../lib/loyalty-data";

export function StampCard({
  stamps,
  total = STAMPS_PER_REWARD,
}: {
  stamps: number;
  total?: number;
}) {
  const filled = Math.min(stamps, total);

  return (
    <div>
      <div className="flex flex-wrap items-center gap-2.5 sm:gap-3">
        {Array.from({ length: total }).map((_, i) => {
          const isFilled = i < filled;
          const isNextReward = i === 7; // slot 8 in reference has pink dashed border with star
          const isRewardSlot = i === total - 1;

          if (isFilled) {
            return (
              <div
                key={i}
                aria-label={`Stamp ${i + 1} earned`}
                className="flex size-11 sm:size-12 items-center justify-center rounded-full bg-[#ec008c] text-xl shadow-sm text-white transition-transform hover:scale-105"
              >
                🍓
              </div>
            );
          }

          if (i === filled && !isRewardSlot) {
            return (
              <div
                key={i}
                aria-label={`Next stamp slot ${i + 1}`}
                className="flex size-11 sm:size-12 items-center justify-center rounded-full border-2 border-dashed border-[#ec008c] bg-[#ec008c]/5 text-lg"
              >
                ✨
              </div>
            );
          }

          return (
            <div
              key={i}
              aria-label={`Empty stamp slot ${i + 1}`}
              className="flex size-11 sm:size-12 items-center justify-center rounded-full bg-[#e6f4f8] border border-transparent"
            />
          );
        })}
      </div>
    </div>
  );
}
