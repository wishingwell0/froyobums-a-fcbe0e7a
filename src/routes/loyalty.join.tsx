// Froyo Squad signup — CRM-tracked form (Favorite Flavor is a registered
// custom field). On success the member ledger is saved to localStorage and
// the user is routed to the dashboard.

import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { useState, type FormEvent } from "react";
import { Sparkles } from "lucide-react";
import { toast } from "sonner";
import { useLoyaltyMember } from "../hooks/use-loyalty-member";
import { trackLoyaltySubmission } from "../lib/tracking";
import { BRAND } from "../lib/menu-data";
import { FLAVOR_OPTIONS, makeMemberNumber, type LoyaltyMember } from "../lib/loyalty-data";

export const Route = createFileRoute("/loyalty/join")({
  head: () => ({
    meta: [
      { title: "Join the Froyo Squad — Froyo Buns" },
      {
        name: "description",
        content:
          "Sign up free for the Froyo Squad loyalty program. Earn points and stamps, climb tiers, and add your card to Apple Wallet.",
      },
      { property: "og:title", content: "Join the Froyo Squad — Froyo Buns" },
      {
        property: "og:description",
        content: "Sign up free for the Froyo Squad. Earn points, stamps, and rewards.",
      },
      { property: "og:type", content: "website" },
      { property: "og:image", content: BRAND.loyaltyCardImage },
      { name: "twitter:image", content: BRAND.loyaltyCardImage },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: JoinPage,
});

function JoinPage() {
  const { setMember } = useLoyaltyMember();
  const navigate = useNavigate();
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    birthday: "",
    favoriteFlavor: FLAVOR_OPTIONS[0],
  });

  const inputCls =
    "w-full rounded-xl border border-input bg-background px-4 py-2.5 text-sm text-foreground shadow-sm transition-colors placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring";

  function update<K extends keyof typeof form>(key: K, value: string) {
    setForm((f) => ({ ...f, [key]: value }));
  }

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    setError(null);
    if (
      !form.firstName.trim() ||
      !form.lastName.trim() ||
      !form.email.trim() ||
      !form.phone.trim()
    ) {
      setError("Please fill in your name, email, and phone.");
      return;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      setError("Please enter a valid email address.");
      return;
    }

    setSubmitting(true);
    try {
      const memberNumber = makeMemberNumber();
      const member: LoyaltyMember = {
        firstName: form.firstName.trim(),
        lastName: form.lastName.trim(),
        email: form.email.trim(),
        phone: form.phone.trim(),
        birthday: form.birthday,
        favoriteFlavor: form.favoriteFlavor || "Vanilla",
        memberNumber,
        joinedAt: Date.now(),
        points: 25,
        stamps: 1,
      };
      // Fire-and-forget CRM signup (Favorite Flavor = registered custom field).
      trackLoyaltySubmission({
        firstName: member.firstName,
        lastName: member.lastName,
        email: member.email,
        phone: member.phone,
        birthday: member.birthday,
        favoriteFlavor: member.favoriteFlavor,
        memberNumber,
      });
      setMember(member);
      toast.success("Welcome to the Froyo Squad! 🎉");
      navigate({ to: "/loyalty" });
    } catch {
      setError("Something went wrong signing you up. Please try again.");
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <div className="mx-auto max-w-2xl px-4 py-12 sm:px-6">
      <div className="rounded-3xl border border-border/60 bg-card p-6 shadow-sm md:p-8">
        <h2 className="font-display text-2xl font-bold text-foreground">Join the Froyo Squad</h2>
        <p className="mt-1 text-sm text-muted-foreground">Takes 30 seconds. Free forever.</p>

        <form onSubmit={handleSubmit} className="mt-6 space-y-5" noValidate>
          <div className="grid gap-4 sm:grid-cols-2">
            <div>
              <label
                htmlFor="join-firstName"
                className="mb-1.5 block text-sm font-medium text-foreground"
              >
                First name
              </label>
              <input
                id="join-firstName"
                className={inputCls}
                value={form.firstName}
                onChange={(e) => update("firstName", e.target.value)}
                placeholder="Jamie"
                autoComplete="given-name"
              />
            </div>
            <div>
              <label
                htmlFor="join-lastName"
                className="mb-1.5 block text-sm font-medium text-foreground"
              >
                Last name
              </label>
              <input
                id="join-lastName"
                className={inputCls}
                value={form.lastName}
                onChange={(e) => update("lastName", e.target.value)}
                placeholder="Sweet"
                autoComplete="family-name"
              />
            </div>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            <div>
              <label
                htmlFor="join-email"
                className="mb-1.5 block text-sm font-medium text-foreground"
              >
                Email
              </label>
              <input
                id="join-email"
                type="email"
                className={inputCls}
                value={form.email}
                onChange={(e) => update("email", e.target.value)}
                placeholder="jamie@example.com"
                autoComplete="email"
              />
            </div>
            <div>
              <label
                htmlFor="join-phone"
                className="mb-1.5 block text-sm font-medium text-foreground"
              >
                Phone
              </label>
              <input
                id="join-phone"
                type="tel"
                className={inputCls}
                value={form.phone}
                onChange={(e) => update("phone", e.target.value)}
                placeholder="(555) 010-2024"
                autoComplete="tel"
              />
            </div>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            <div>
              <label
                htmlFor="join-birthday"
                className="mb-1.5 block text-sm font-medium text-foreground"
              >
                Birthday
              </label>
              <input
                id="join-birthday"
                type="date"
                className={inputCls}
                value={form.birthday}
                onChange={(e) => update("birthday", e.target.value)}
              />
            </div>
            <div>
              <label
                htmlFor="join-flavor"
                className="mb-1.5 block text-sm font-medium text-foreground"
              >
                Favourite flavour
              </label>
              <select
                id="join-flavor"
                className={inputCls}
                value={form.favoriteFlavor}
                onChange={(e) => update("favoriteFlavor", e.target.value)}
              >
                {FLAVOR_OPTIONS.map((f) => (
                  <option key={f} value={f}>
                    {f}
                  </option>
                ))}
              </select>
            </div>
          </div>

          {error && (
            <p className="rounded-lg bg-destructive/10 px-3 py-2 text-sm font-medium text-destructive">
              {error}
            </p>
          )}

          <button
            type="submit"
            disabled={submitting}
            className="inline-flex w-full items-center justify-center gap-2 rounded-full gradient-pink-teal px-6 py-3 text-sm font-semibold text-primary-foreground shadow-md transition-transform hover:scale-[1.01] disabled:opacity-60"
          >
            <Sparkles className="size-4" />
            {submitting ? "Joining…" : "Join & get my card"}
          </button>
          <p className="text-center text-xs text-muted-foreground">
            By joining you agree to receive loyalty updates. Unsubscribe anytime.
          </p>
        </form>
      </div>
    </div>
  );
}
