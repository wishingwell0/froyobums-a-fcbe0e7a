import {
  CINNAMON_BUNS,
  CINNAMON_BUN_PRICES,
  PREMIUM_BUN_FLAVOURS,
  BOX_DEALS,
  COFFEE_BUNS_COMBOS,
  DELUXE_LATTE_FLAVOURS,
  DRINKS_MENU,
  type DrinkItem,
} from "@/lib/menu-data";

const SIZE_LABELS: Record<string, string> = {
  small: "S",
  medium: "M",
  large: "L",
};

function SizePrices({ sizes }: { sizes: NonNullable<DrinkItem["sizes"]> }) {
  const entries = (["small", "medium", "large"] as const)
    .map((k) => [k, sizes[k]] as const)
    .filter(([, v]) => Boolean(v));
  if (entries.length === 0) return null;
  return (
    <div className="mt-1.5 flex flex-wrap items-center gap-x-3 gap-y-1">
      {entries.map(([key, val]) => (
        <span key={key} className="inline-flex items-baseline gap-1 text-sm text-card/90">
          <span className="font-display text-[11px] font-bold uppercase tracking-wider text-card/60">
            {SIZE_LABELS[key]}
          </span>
          <span className="font-display font-bold text-card">{val}</span>
        </span>
      ))}
    </div>
  );
}

export function CinnamonBunsSection() {
  return (
    <section id="buns" className="py-16">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="text-center">
          <span className="inline-flex items-center gap-1.5 rounded-full px-4 py-1.5 text-xs font-semibold uppercase tracking-wide gradient-pink-teal text-card shadow-sm">
            Baked Fresh Daily!
          </span>
          <h2 className="mt-4 font-display text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl text-card">
            Cinnamon Buns
          </h2>
          <p className="mt-4 text-base font-medium text-card">
            Warm, gooey, and swirled fresh every day — our house-made handcrafted cinnamon buns.
          </p>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-3">
          {CINNAMON_BUNS.map((b, idx) => (
            <div
              key={b.name}
              className="group flex flex-col items-center text-center transition-transform duration-300 hover:-translate-y-2"
            >
              <div
                className="relative flex h-60 w-full items-center justify-center animate-float-cup"
                style={{ animationDelay: `${idx * 0.5}s` }}
              >
                {b.image ? (
                  <img
                    src={b.image}
                    alt={b.name}
                    className="h-56 w-auto object-contain drop-shadow-[0_20px_35px_rgba(0,0,0,0.4)] transition-transform duration-300 group-hover:scale-105"
                    loading="lazy"
                  />
                ) : (
                  <div className="flex size-32 items-center justify-center rounded-2xl bg-white/15 text-5xl shadow-lg backdrop-blur-sm">
                    {b.emoji}
                  </div>
                )}
              </div>

              <h4 className="mt-5 font-display text-lg font-extrabold uppercase tracking-wider text-card sm:text-xl">
                {b.name}
              </h4>

              <p className="mt-2 max-w-xs text-sm text-card/90">{b.description}</p>

              <span className="mt-2 font-display text-xl font-extrabold text-froyo-pink">
                {CINNAMON_BUN_PRICES[b.name]}
              </span>

              {b.tags && b.tags.length > 0 && (
                <div className="mt-3 flex flex-wrap justify-center gap-1.5">
                  {b.tags.map((t) => (
                    <span
                      key={t}
                      className="rounded-full bg-ring px-3 py-0.5 text-xs font-semibold text-card"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function BunBoxDealsSection() {
  return (
    <section id="box-deals" className="py-16">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="text-center">
          <h2 className="font-display text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl text-card">
            Bun Box Deals
          </h2>
          <p className="mt-4 text-base font-medium text-card">
            Grab a box of warm classic buns to share — the more, the merrier.
          </p>
        </div>

        <div className="mx-auto mt-12 grid max-w-5xl grid-cols-1 gap-6 sm:grid-cols-3">
          {BOX_DEALS.map((b) => (
            <div
              key={b.name}
              className="flex flex-col rounded-2xl border border-white/20 bg-white/10 p-6 text-center shadow-lg backdrop-blur-sm transition-transform duration-300 hover:-translate-y-1"
            >
              <h3 className="font-display text-lg font-bold uppercase tracking-wide text-card">
                {b.name}
              </h3>
              <span className="mt-2 font-display text-2xl font-extrabold text-froyo-pink">
                {b.price}
              </span>
              <p className="mt-2 text-sm text-card/85">{b.description}</p>
            </div>
          ))}
        </div>

        <div className="mx-auto mt-10 max-w-3xl rounded-2xl border border-white/20 bg-white/10 p-5 text-center shadow-sm backdrop-blur-sm">
          <p className="text-sm text-card">
            <span className="font-display text-base font-bold uppercase tracking-wide text-froyo-pink">
              Mix &amp; Match your box
            </span>
            <br />
            Swap a Classic Bun for a Premium flavour —{" "}
            <span className="font-bold text-card">{PREMIUM_BUN_FLAVOURS.join(", ")}</span> — for
            just{" "}
            <span className="font-display font-bold text-froyo-pink">+$1.50 per Premium Bun</span>.
          </p>
        </div>
      </div>
    </section>
  );
}

export function CombosSection() {
  return (
    <section id="combos" className="py-16">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="text-center">
          <h2 className="font-display text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl text-card">
            Coffee &amp; Bun Combos
          </h2>
          <p className="mt-4 text-base font-medium text-card">
            The perfect pairing — a warm bun with your favourite coffee.
          </p>
        </div>

        <ul className="mx-auto mt-12 max-w-3xl divide-y divide-white/15">
          {COFFEE_BUNS_COMBOS.map((c) => (
            <li
              key={c.name}
              className="flex flex-col gap-1 py-4 sm:flex-row sm:items-baseline sm:gap-6"
            >
              <span className="font-display text-lg font-bold uppercase tracking-wide text-card sm:w-80 sm:shrink-0">
                {c.name}
              </span>
              <span className="flex-1 text-sm text-card/90">{c.description}</span>
              <span className="font-display text-lg font-extrabold text-froyo-pink sm:ml-auto">
                {c.price}
              </span>
            </li>
          ))}
        </ul>

        <p className="mt-10 text-center text-xs text-card/80 italic">
          *Deluxe Latte options include {DELUXE_LATTE_FLAVOURS.join(", ")} lattes.
        </p>
      </div>
    </section>
  );
}

export function HotDrinksSection() {
  return (
    <section id="hot-drinks" className="py-16">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="text-center">
          <span className="inline-flex items-center gap-1.5 rounded-full px-4 py-1.5 text-xs font-semibold uppercase tracking-wide gradient-pink-teal text-card shadow-sm">
            Freshly Brewed
          </span>
          <h2 className="mt-4 font-display text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl text-card">
            Coffee &amp; Hot Drinks
          </h2>
          <p className="mt-4 text-base font-medium text-card">{DRINKS_MENU.sizesNote}</p>
        </div>

        <div className="mx-auto mt-12 max-w-3xl space-y-12">
          {/* Classics */}
          <div>
            <div className="mb-4 border-b border-white/20 pb-2">
              <h3 className="font-display text-xl font-bold uppercase tracking-wider text-froyo-pink">
                Classics
              </h3>
            </div>
            <ul className="divide-y divide-white/15">
              {DRINKS_MENU.classics.map((item) => (
                <li
                  key={item.name}
                  className="flex flex-col gap-1 py-3.5 sm:flex-row sm:items-baseline sm:justify-between sm:gap-6"
                >
                  <div className="sm:w-56 sm:shrink-0">
                    <span className="font-display text-base font-bold uppercase tracking-wide text-card">
                      {item.name}
                    </span>
                    {item.description && (
                      <p className="mt-0.5 text-xs text-card/75">{item.description}</p>
                    )}
                  </div>
                  {item.sizes && <SizePrices sizes={item.sizes} />}
                </li>
              ))}
            </ul>
          </div>

          {/* Speciality Lattes */}
          <div>
            <div className="mb-4 border-b border-white/20 pb-2">
              <h3 className="font-display text-xl font-bold uppercase tracking-wider text-froyo-pink">
                Speciality Lattes
              </h3>
            </div>
            <ul className="divide-y divide-white/15">
              {DRINKS_MENU.specialityLattes.map((item) => (
                <li
                  key={item.name}
                  className="flex flex-col gap-1 py-3.5 sm:flex-row sm:items-baseline sm:justify-between sm:gap-6"
                >
                  <div className="sm:w-56 sm:shrink-0">
                    <div className="flex items-center gap-2">
                      <span className="font-display text-base font-bold uppercase tracking-wide text-card">
                        {item.name}
                      </span>
                      {item.badge && (
                        <span className="rounded-full bg-ring px-2 py-0.5 text-[10px] font-semibold text-card">
                          {item.badge}
                        </span>
                      )}
                    </div>
                    {item.description && (
                      <p className="mt-0.5 text-xs text-card/75">{item.description}</p>
                    )}
                  </div>
                  {item.sizes && <SizePrices sizes={item.sizes} />}
                </li>
              ))}
            </ul>
          </div>

          {/* Little Ones + Customisations */}
          <div className="grid gap-8 sm:grid-cols-2">
            <div>
              <div className="mb-4 border-b border-white/20 pb-2">
                <h3 className="font-display text-xl font-bold uppercase tracking-wider text-froyo-pink">
                  For the Little Ones
                </h3>
              </div>
              <ul className="divide-y divide-white/15">
                {DRINKS_MENU.treats.map((item) => (
                  <li key={item.name} className="flex items-baseline justify-between py-3">
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="font-display text-base font-bold uppercase tracking-wide text-card">
                          {item.name}
                        </span>
                        {item.badge && (
                          <span className="rounded-full bg-ring px-2 py-0.5 text-[10px] font-semibold text-card">
                            {item.badge}
                          </span>
                        )}
                      </div>
                      {item.description && (
                        <p className="mt-0.5 text-xs text-card/75">{item.description}</p>
                      )}
                    </div>
                    {item.price && (
                      <span className="font-display font-bold text-froyo-pink">{item.price}</span>
                    )}
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <div className="mb-4 border-b border-white/20 pb-2">
                <h3 className="font-display text-xl font-bold uppercase tracking-wider text-froyo-pink">
                  Drink Customisations
                </h3>
              </div>
              <ul className="divide-y divide-white/15">
                {DRINKS_MENU.customisations.map((item) => (
                  <li key={item.name} className="flex items-baseline justify-between py-3">
                    <div>
                      <span className="font-display text-base font-bold uppercase tracking-wide text-card">
                        {item.name}
                      </span>
                      {item.description && (
                        <p className="mt-0.5 text-xs text-card/75">{item.description}</p>
                      )}
                    </div>
                    {item.price && (
                      <span className="font-display font-bold text-froyo-pink">{item.price}</span>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export function FrappesSection() {
  return (
    <section id="frappes" className="py-16">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="text-center">
          <span className="inline-flex items-center gap-1.5 rounded-full px-4 py-1.5 text-xs font-semibold uppercase tracking-wide gradient-pink-teal text-card shadow-sm">
            Blended &amp; Iced
          </span>
          <h2 className="mt-4 font-display text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl text-card">
            Frappes
          </h2>
          <p className="mt-4 text-base font-medium text-card">
            Cool down with a thick, creamy blended frappe — your flavour, your way.
          </p>
        </div>

        <div className="mx-auto mt-12 grid max-w-5xl grid-cols-2 gap-5 sm:grid-cols-3">
          {DRINKS_MENU.frappes.map((item) => (
            <div
              key={item.name}
              className="flex flex-col items-center rounded-2xl border border-white/20 bg-white/10 p-5 text-center shadow-lg backdrop-blur-sm transition-transform duration-300 hover:-translate-y-1"
            >
              <h3 className="font-display text-base font-bold uppercase tracking-wide text-card">
                {item.name}
              </h3>
              {item.description && (
                <p className="mt-1.5 text-xs text-card/80">{item.description}</p>
              )}
              <span className="mt-3 font-display text-xl font-extrabold text-froyo-pink">
                {item.price}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function SoftDrinksSection() {
  return (
    <section id="soft-drinks" className="py-16">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="text-center">
          <h2 className="font-display text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl text-card">
            Soft Drinks
          </h2>
          <p className="mt-4 text-base font-medium text-card">
            Ice-cold classics to wash it all down.
          </p>
        </div>

        <ul className="mx-auto mt-12 grid max-w-4xl grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-5">
          {DRINKS_MENU.softDrinks.map((item) => (
            <li
              key={item.name}
              className="flex flex-col items-center justify-center rounded-2xl border border-white/20 bg-white/10 px-3 py-5 text-center shadow-sm backdrop-blur-sm"
            >
              <span className="font-display text-base font-bold uppercase tracking-wide text-card">
                {item.name}
              </span>
              <span className="mt-1.5 font-display font-bold text-froyo-pink">{item.price}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
