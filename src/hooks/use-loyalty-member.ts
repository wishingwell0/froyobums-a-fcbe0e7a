// Client-side Froyo Squad member state, persisted to localStorage.
// Seeds the default demo member (Jamie Rivera) so the dashboard works out of the box.

import { useState, useEffect } from "react";
import type { LoyaltyMember } from "../lib/loyalty-data";

const KEY = "froyo-bums-loyalty-member";

export const DEMO_MEMBER: LoyaltyMember = {
  firstName: "Jamie",
  lastName: "Rivera",
  email: "jamie.rivera@example.com",
  phone: "(555) 234-5678",
  birthday: "1995-07-12",
  favoriteFlavor: "Strawberry Swirl",
  memberNumber: "FYC-2K429",
  joinedAt: Date.now() - 1000 * 60 * 60 * 24 * 60,
  points: 320,
  stamps: 7,
};

export function useLoyaltyMember() {
  const [member, setMemberState] = useState<LoyaltyMember | null>(null);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    try {
      const raw = localStorage.getItem(KEY);
      if (raw) {
        setMemberState(JSON.parse(raw));
      } else {
        // Seed default demo member so dashboard matches the reference layout immediately
        setMemberState(DEMO_MEMBER);
        localStorage.setItem(KEY, JSON.stringify(DEMO_MEMBER));
      }
    } catch {
      setMemberState(DEMO_MEMBER);
    } finally {
      setReady(true);
    }
  }, []);

  function setMember(m: LoyaltyMember | null) {
    setMemberState(m);
    try {
      if (m) localStorage.setItem(KEY, JSON.stringify(m));
      else localStorage.removeItem(KEY);
    } catch {
      /* ignore quota errors */
    }
  }

  function clearMember() {
    setMember(DEMO_MEMBER);
  }

  return { member, ready, setMember, clearMember };
}
