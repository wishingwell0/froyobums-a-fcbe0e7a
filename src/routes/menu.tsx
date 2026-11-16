import { createFileRoute } from "@tanstack/react-router";
import { Star } from "lucide-react";
import { FLAVORS, ROTATING_FLAVORS, TOPPINGS, BRAND } from "../lib/menu-data";
import {
  CinnamonBunsSection,
  BunBoxDealsSection,
  CombosSection,
  HotDrinksSection,
  FrappesSection,
  SoftDrinksSection,
} from "../components/menu-drinks-sections";

export const Route = createFileRoute("/menu")({
  head: () => ({
    meta: [
      { title: "Our Menu — FroyoBuns" },
      {
        name: "description",
        content:
          "Browse the full FroyoBuns menu: frozen yoghurt, toppings, coffee & hot drinks, speciality lattes, frappes, soft drinks, house-made cinnamon buns, box deals and coffee & bun combos.",
      },
      { property: "og:title", content: "Our Menu — FroyoBuns" },
      {
        property: "og:description",
        content:
          "Frozen yoghurt, fresh toppings, coffee, frappes, house-made cinnamon buns, box deals and coffee & bun combos.",
      },
      { property: "og:type", content: "website" },
    ],
  }),
  component: MenuPage,
});

const CATEGORIES = [
  { id: "signature", label: "Signature Swirls" },
  { id: "classic", label: "Classics" },
  { id: "sorbet", label: "Sorbets" },
] as const;

const ROTATING_CATEGORIES = [
  { id: "seasonal", label: "Seasonal Specials" },
  { id: "limited", label: "Limited Edition" },
  { id: "weekly", label: "Weekly Drops" },
] as const;

const TOPPING_GROUPS = [
  "Fresh Fruit",
  "Creams & Sauces",
  "Nuts & Seeds",
  "Boba",
  "Sweet Treats",
] as const;

function MenuPage() {
  return (
    <div>
      {/* Header */}
      <section>
        <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6 md:py-20">
          <span className="inline-flex items-center gap-1.5 rounded-full px-4 py-1.5 text-xs font-semibold uppercase tracking-wide shadow-sm gradient-pink-teal text-card">
            Sweet cravings? We&apos;ve got you covered!
          </span>
          <h1 className="mt-4 font-display text-4xl font-bold text-foreground sm:text-5xl text-ring">
            OUR MENU
          </h1>
          <p className="mt-3 max-w-xl text-card">
            Swirl your own frozen yoghurt, pile on fresh toppings, pull a flat white, and warm up
            with our house-made cinnamon buns.
          </p>

          {/* Quick nav chips */}
          <div className="mt-6 flex flex-wrap gap-2">
            {[
              { href: "#flavors", label: "Frozen Yoghurt" },
              { href: "#rotating", label: "Rotating Flavours" },
              { href: "#toppings", label: "Toppings" },
              { href: "#hot-drinks", label: "Coffee & Hot Drinks" },
              { href: "#frappes", label: "Frappes" },
              { href: "#soft-drinks", label: "Soft Drinks" },
              { href: "#buns", label: "Cinnamon Buns" },
              { href: "#box-deals", label: "Bun Box Deals" },
              { href: "#combos", label: "Coffee & Bun Combos" },
            ].map((c) => (
              <a
                key={c.href}
                href={c.href}
                className="rounded-full bg-card/15 px-4 py-1.5 text-xs font-semibold text-card transition-colors hover:bg-card/25"
              >
                {c.label}
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Frozen Yogurt — Flavors */}
      <section id="flavors" className="py-16">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="text-center">
            <h2 className="font-display text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl text-card">
              Regular Flavours
            </h2>
            <p className="mt-4 text-base font-medium text-card">
              Enjoy our range of 8 house–made flavours, each made with care and full of flavour.
            </p>
            <p className="mt-1 text-xs text-card/80 italic">*Please note flavours may change</p>
          </div>

          {/* Pricing */}
          <div className="mx-auto mt-8 max-w-md">
            <div className="flex items-center justify-center gap-5 overflow-hidden rounded-2xl gradient-pink-teal px-6 py-4 shadow-lg">
              <div className="text-center">
                <span className="font-display text-3xl font-extrabold leading-none text-card sm:text-4xl">
                  $4.79
                </span>
                <span className="mt-1 block font-display text-[10px] font-bold uppercase tracking-[0.2em] text-card/85">
                  per 100g
                </span>
              </div>
              <div className="h-10 w-px bg-card/30" />
              <p className="text-sm font-medium leading-snug text-card/90">
                Frozen yoghurt with toppings &amp; sauces — fill your cup, pile it high, then weigh
                &amp; pay.
              </p>
            </div>
          </div>

          <div className="mt-14 space-y-16">
            {CATEGORIES.map((cat) => {
              const items = FLAVORS.filter((f) => f.category === cat.id);
              if (items.length === 0) return null;
              return (
                <div key={cat.id}>
                  <div className="mb-8 border-b border-white/20 pb-3 text-center sm:text-left">
                    <h3 className="font-display text-2xl font-bold sm:text-3xl text-froyo-pink">
                      {cat.label}
                    </h3>
                  </div>
                  <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-3">
                    {items.map((f, idx) => (
                      <div
                        key={f.name}
                        className="group flex flex-col items-center text-center transition-transform duration-300 hover:-translate-y-2"
                      >
                        {/* Cup visual matching Shibbys style */}
                        <div
                          className="relative flex h-60 w-full items-center justify-center animate-float-cup"
                          style={{ animationDelay: `${idx * 0.6}s` }}
                        >
                          {f.image ? (
                            <img
                              src={f.image}
                              alt={f.name}
                              className="h-56 w-auto object-contain drop-shadow-[0_20px_35px_rgba(0,0,0,0.3)] transition-transform duration-300 group-hover:scale-105"
                              loading="lazy"
                            />
                          ) : (
                            <div className="flex size-32 items-center justify-center rounded-2xl gradient-cream-peach text-5xl">
                              {f.emoji}
                            </div>
                          )}
                        </div>

                        {/* Flavour label in bold all-caps matching Shibbys sample */}
                        <h4 className="mt-5 font-display text-lg font-extrabold uppercase tracking-wider text-card sm:text-xl">
                          {f.name}
                        </h4>

                        {/* Short description and tags */}
                        <p className="mt-2 max-w-xs text-sm text-card/90">{f.description}</p>

                        <div className="mt-3 flex flex-wrap justify-center gap-1.5">
                          {f.tags.map((t) => (
                            <span
                              key={t}
                              className="rounded-full bg-ring px-3 py-0.5 text-xs font-semibold text-card"
                            >
                              {t}
                            </span>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Frozen Yogurt — Rotating Flavours */}
      <section id="rotating" className="py-16">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="text-center">
            <h2 className="font-display text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl text-card">
              Rotating Flavours
            </h2>
            <p className="mt-4 text-base font-medium text-card">
              Our rotating lineup changes weekly — grab these fresh drops while they last!
            </p>
            <p className="mt-1 text-xs text-card/80 italic">
              *Please note rotating flavours are available for a limited time
            </p>
          </div>

          <div className="mt-14 space-y-16">
            <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-3">
              {ROTATING_FLAVORS.map((f, idx) => (
                <div
                  key={f.name}
                  className="group flex flex-col items-center text-center transition-transform duration-300 hover:-translate-y-2"
                >
                  {/* Cup visual matching Shibbys style */}
                  <div
                    className="relative flex h-60 w-full items-center justify-center animate-float-cup"
                    style={{ animationDelay: `${idx * 0.6}s` }}
                  >
                    {f.image ? (
                      <img
                        src={f.image}
                        alt={f.name}
                        className="h-56 w-auto object-contain drop-shadow-[0_20px_35px_rgba(0,0,0,0.3)] transition-transform duration-300 group-hover:scale-105"
                        loading="lazy"
                      />
                    ) : (
                      <div className="flex size-32 items-center justify-center rounded-2xl gradient-cream-peach text-5xl">
                        {f.emoji}
                      </div>
                    )}
                  </div>

                  {/* Flavour label in bold all-caps matching Shibbys sample */}
                  <h4 className="mt-5 font-display text-lg font-extrabold uppercase tracking-wider text-card sm:text-xl">
                    {f.name}
                  </h4>

                  {/* Short description and tags */}
                  <p className="mt-2 max-w-xs text-sm text-card/90">{f.description}</p>

                  <div className="mt-3 flex flex-wrap justify-center gap-1.5">
                    {f.tags.map((t) => (
                      <span
                        key={t}
                        className="rounded-full bg-ring px-3 py-0.5 text-xs font-semibold text-card"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Frozen Yogurt — Toppings */}
      <section id="toppings" className="py-16">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="text-center">
            <h2 className="font-display text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl text-card">
              Our Toppings
            </h2>
            <p className="mt-4 text-base font-medium text-card">
              Pile it high with fresh fruit, creamy sauces, and crunchy bits — your cup, your way.
            </p>
          </div>

          <div className="mt-14 space-y-16">
            {TOPPING_GROUPS.map((group) => {
              const items = TOPPINGS.filter((t) => t.category === group);
              if (items.length === 0) return null;
              return (
                <div key={group}>
                  <div className="mb-8 border-b border-white/20 pb-3 text-center sm:text-left">
                    <h3 className="font-display text-2xl font-bold sm:text-3xl text-froyo-pink">
                      {group}
                    </h3>
                  </div>
                  <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-3">
                    {items.map((t, idx) => (
                      <div
                        key={t.name}
                        className="group flex flex-col items-center text-center transition-transform duration-300 hover:-translate-y-2"
                      >
                        <div
                          className="relative flex h-44 w-full items-center justify-center animate-float-cup"
                          style={{ animationDelay: `${idx * 0.6}s` }}
                        >
                          {t.image ? (
                            <img
                              src={t.image}
                              alt={t.name}
                              className="size-36 rounded-full object-cover shadow-[0_15px_30px_rgba(0,0,0,0.35)] transition-transform duration-300 group-hover:scale-105"
                              loading="lazy"
                            />
                          ) : (
                            <div className="flex size-28 items-center justify-center rounded-full bg-white/15 text-5xl shadow-lg backdrop-blur-sm transition-transform duration-300 group-hover:scale-105">
                              {t.emoji}
                            </div>
                          )}
                        </div>

                        <h4 className="mt-5 font-display text-lg font-extrabold uppercase tracking-wider text-card sm:text-xl">
                          {t.name}
                        </h4>

                        <p className="mt-2 max-w-xs text-sm text-card/90">{t.description}</p>
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <CinnamonBunsSection />
      <BunBoxDealsSection />
      <CombosSection />
      <HotDrinksSection />
      <FrappesSection />
      <SoftDrinksSection />

      {/* Allergen note */}
      <section className="mx-auto max-w-6xl px-4 pb-6 pt-6 sm:px-6">
        <div className="flex items-start gap-3 rounded-2xl border border-border/60 bg-secondary/40 p-5">
          <Star className="mt-0.5 size-5 shrink-0 fill-primary text-primary" />
          <p className="text-sm text-card">
            <span className="font-semibold text-foreground text-froyo-pink">
              Allergen-friendly options.
            </span>{" "}
            Vegan and dairy-free flavours are clearly tagged above. For full ingredient and allergen
            info for any item, just ask our team in store or check the Contact page.
          </p>
        </div>
      </section>
    </div>
  );
}
