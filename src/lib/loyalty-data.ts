// Browser-safe Froyo Squad loyalty program config + helpers.
// Pure data and pure functions — safe to import from any client or server module.

export type TierKey = "sprinkles" | "swirl" | "double-scoop";

export type Tier = {
  key: TierKey;
  name: string;
  minPoints: number;
  emoji: string;
  blurb: string;
  perk: string;
};

export const TIERS: Tier[] = [
  {
    key: "sprinkles",
    name: "Sprinkles",
    minPoints: 0,
    emoji: "✨",
    blurb: "Welcome treat on signup",
    perk: "Welcome treat on signup",
  },
  {
    key: "swirl",
    name: "Swirl",
    minPoints: 100,
    emoji: "🍦",
    blurb: "Double points Tuesdays",
    perk: "Double points Tuesdays",
  },
  {
    key: "double-scoop",
    name: "Double Scoop",
    minPoints: 600,
    emoji: "🍨",
    blurb: "Free birthday sundae + early drops",
    perk: "Free birthday sundae + early drops",
  },
];

export const STAMPS_PER_REWARD = 20;

export type RewardUnit = "points" | "stamps";

export type Reward = {
  id: string;
  title: string;
  cost: number;
  unit: RewardUnit;
  emoji: string;
  desc: string;
};

export const REWARDS: Reward[] = [
  {
    id: "free-topping",
    title: "Free Premium Topping",
    cost: 20,
    unit: "points",
    emoji: "🍓",
    desc: "Add mochi, fresh fruit, or a drizzle to any cup.",
  },
  {
    id: "free-classic",
    title: "Free Classic Cup",
    cost: 50,
    unit: "points",
    emoji: "🍦",
    desc: "Any classic-size flavour, on the house.",
  },
  {
    id: "big-bum-upgrade",
    title: "Big Bum Upgrade",
    cost: 120,
    unit: "points",
    emoji: "🍨",
    desc: "Supersize any cup to a Big Bum — scoop tier and up.",
  },
  {
    id: "stamp-cup",
    title: "Free Cup (20 stamps)",
    cost: 20,
    unit: "stamps",
    emoji: "🎟️",
    desc: "Fill your stamp card and redeem a free Classic cup.",
  },
];

export const FLAVOR_OPTIONS = [
  "Strawberry Swirl",
  "Blue Raspberry Wave",
  "Mango Tango",
  "Classic Vanilla",
  "Chocolate Fudge",
  "Cookies & Cream",
  "Matcha Green",
  "Lemon Sorbet",
  "Not sure yet",
];

export const PERKS = [
  {
    emoji: "⭐",
    title: "1 point per visit",
    body: "Every cup earns a point — no minimum, no catch.",
  },
  {
    emoji: "🎟️",
    title: "Stamp to a free cup",
    body: "Collect 20 stamps for a free Classic cup, anytime.",
  },
  {
    emoji: "📱",
    title: "Apple Wallet ready",
    body: "Keep your card, points, and stamps on your phone.",
  },
  {
    emoji: "🎁",
    title: "Member-only treats",
    body: "Early flavour access and surprise double-point days.",
  },
];

export type LoyaltyMember = {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  birthday: string;
  favoriteFlavor: string;
  memberNumber: string;
  joinedAt: number;
  points: number;
  stamps: number;
};

/** Highest tier the member has reached for their point total. */
export function tierForPoints(points: number): Tier {
  let current: Tier = TIERS[0] as Tier;
  for (const t of TIERS) if (points >= t.minPoints) current = t;
  return current;
}

/** The next tier above the member's current points, or null at the top. */
export function nextTier(points: number): Tier | null {
  for (const t of TIERS) if (t.minPoints > points) return t;
  return null;
}

/** Generate a Froyo Buns-style member number, e.g. FB-7F3K-92A1. */
export function makeMemberNumber(): string {
  const chars = "ABCDEFGHJKLMNPQRSTUVWXYZ23456789";
  const block = (n: number) =>
    Array.from({ length: n }, () => chars[Math.floor(Math.random() * chars.length)]).join("");
  return `FB-${block(4)}-${block(4)}`;
}
