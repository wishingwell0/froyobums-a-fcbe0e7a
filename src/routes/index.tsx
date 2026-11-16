import { createFileRoute, Link } from "@tanstack/react-router";
import { Snowflake, Gift, MapPin, ArrowRight, Sparkles } from "lucide-react";
import { FLAVORS, BRAND } from "../lib/menu-data";
import { ShibbysFlavoursCarousel } from "../components/shibbys-flavours-carousel";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "FroyoBuns — Handcrafted Frozen Yoghurt" },
      {
        name: "description",
        content:
          "Swirls, smiles, and a little bit of happy. Handcrafted frozen yoghurt made fresh daily at FroyoBuns. Explore flavours, join the loyalty club, and add your rewards card to Apple Wallet.",
      },
      { property: "og:title", content: "FroyoBuns — Handcrafted Frozen Yoghurt" },
      {
        property: "og:description",
        content:
          "Swirls, smiles, and a little bit of happy. Handcrafted frozen yoghurt made fresh daily.",
      },
      { property: "og:type", content: "website" },
      {
        property: "og:image",
        content: BRAND.heroImage,
      },
      { name: "twitter:image", content: BRAND.heroImage },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  const flavorMarquee = [...FLAVORS, ...FLAVORS];

  return (
    <div>
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="hero-blob absolute -left-24 -top-24 size-80 bg-froyo-teal/30" aria-hidden />
        <div className="hero-blob absolute -right-24 top-20 size-96 bg-accent/25" aria-hidden />
        <div className="relative mx-auto grid max-w-6xl items-center gap-10 px-4 py-16 sm:px-6 md:grid-cols-2 md:py-24">
          <div>
            <span className="inline-flex items-center gap-1.5 rounded-full px-4 py-1.5 text-xs font-semibold uppercase tracking-wide text-card bg-froyo-pink">
              <Snowflake className="size-3.5" /> Made fresh every day
            </span>
            <h1 className="mt-5 font-display text-5xl font-bold leading-[1.05] sm:text-6xl text-balance text-card">
              Welcome to FroyoBuns – where every treat is a little moment of{" "}
              <span className="text-froyo-pink">happiness</span>.
            </h1>
            <p className="mt-5 max-w-md text-lg text-color-white text-border text-card">
              Dive into our irresistibly creamy frozen yoghurt, made with fresh ingredients and real
              Greek yoghurt. Swirl your favourite flavours, pile on the toppings, and drizzle with
              delicious sauces to create your very own masterpiece! Craving something warm and
              indulgent? Treat yourself to our soft, fluffy, freshly baked cinnamon buns, paired
              perfectly with a delicious barista-made coffee.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                to="/menu"
                className="inline-flex items-center gap-2 rounded-full gradient-pink-teal px-7 py-3 text-sm font-semibold text-primary-foreground shadow-md transition-transform hover:scale-[1.03]"
              >
                Explore the Menu <ArrowRight className="size-4" />
              </Link>
            </div>
            <div className="mt-8 flex items-center gap-6 text-sm text-muted-foreground">
              <div className="flex items-center gap-1.5 text-card">
                <MapPin className="size-4 text-accent" /> Silverdale, NZ
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="overflow-hidden rounded-3xl">
              <img
                src={BRAND.heroImage}
                alt="Swirls of pink strawberry and teal blue raspberry frozen yoghurt topped with fresh fruit and sprinkles"
                className="aspect-[4/3] w-full object-contain rounded-none"
                loading="eager"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Stats band */}
      <section className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="grid grid-cols-2 gap-4 rounded-3xl border border-border/60 bg-card p-6 shadow-sm md:grid-cols-4 md:p-8">
          {[
            { value: "8", label: "Regular Froyo flavours" },
            { value: "24", label: "Rotating Froyo flavours" },
            { value: "Fresh", label: "Coffee & cinnamon buns daily" },
            { value: "Free", label: "Rewards on every cup" },
          ].map((s) => (
            <div key={s.label} className="text-center">
              <p className="font-display text-3xl font-bold text-primary">{s.value}</p>
              <p className="mt-1 text-sm text-muted-foreground text-froyo-darkteal">{s.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Our Flavours - Shibbys 3D orbiting carousel */}
      <section className="py-16 sm:py-24 overflow-hidden">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="flex items-end justify-between border-b border-white/20 pb-4">
            <div>
              <h2 className="font-display text-4xl font-bold tracking-tight text-card sm:text-5xl md:text-6xl">
                Our Flavours
              </h2>
            </div>
            <Link
              to="/menu"
              className="hidden shrink-0 items-center gap-1.5 text-sm font-semibold text-card underline-offset-4 hover:underline sm:inline-flex"
            >
              Explore all flavours <ArrowRight className="size-4" />
            </Link>
          </div>
        </div>

        {/* 3D Orbiting CloudCarousel replicating Shibbys */}
        <div className="relative mt-8 w-full">
          <ShibbysFlavoursCarousel />
        </div>
      </section>

      {/* Fill your cup, the way you like it - Exact Shibbys 3-step layout with real imagery & organic blob backdrops */}
      <section className="py-16 sm:py-24">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="border-b border-white/20 pb-4 text-center">
            <h2 className="font-display text-4xl font-bold tracking-tight text-card sm:text-5xl md:text-6xl">
              Fill your cup, the way you like it
            </h2>
          </div>

          <div className="mt-14 grid gap-10 md:grid-cols-3">
            {/* Step 1 */}
            <div className="group flex flex-col items-center text-center">
              <h3 className="font-display text-lg font-bold text-card">
                Step 1 – Choose your flavour
              </h3>
              <div className="relative my-6 flex size-60 items-center justify-center">
                {/* Organic blob background */}
                <div className="shibbys-blob-1 absolute inset-0 bg-froyo-darkteal shadow-xl transition-all duration-500 group-hover:scale-105 group-hover:rotate-3" />
                <img
                  src="https://vibe.filesafe.space/1790640811168876865/attachments/4a4b62e6-b6b7-4618-b986-92f815b693dd.png"
                  alt="Step 1 Choose your flavour cup"
                  className="relative z-10 h-52 w-auto object-contain drop-shadow-2xl transition-transform duration-500 group-hover:-translate-y-2 group-hover:scale-105"
                  loading="lazy"
                />
              </div>
              <p className="max-w-xs text-sm leading-relaxed text-card/90">
                Fill your cup with as little or as much handcrafted frozen yoghurt or fruit sorbet
                as you like.
              </p>
            </div>

            {/* Step 2 */}
            <div className="group flex flex-col items-center text-center">
              <h3 className="font-display text-lg font-bold text-card">
                Step 2 – Add your favourite toppings
              </h3>
              <div className="relative my-6 flex size-60 items-center justify-center">
                {/* Organic blob background */}
                <div className="shibbys-blob-2 absolute inset-0 bg-froyo-teal shadow-xl transition-all duration-500 group-hover:scale-105 group-hover:-rotate-3" />
                <img
                  src="https://vibe.filesafe.space/1790640811168876865/attachments/36a4513e-359d-45b4-994e-5041e4e9bd1e.png"
                  alt="Step 2 Add your favourite toppings cup with warm chocolate drizzle"
                  className="relative z-10 h-52 w-auto object-contain drop-shadow-2xl transition-transform duration-500 group-hover:-translate-y-2 group-hover:scale-105"
                  loading="lazy"
                />
              </div>
              <p className="max-w-xs text-sm leading-relaxed text-card/90">
                From fresh fruit to warm drizzles and crunchy bites — mix and match your favourites.
              </p>
            </div>

            {/* Step 3 */}
            <div className="group flex flex-col items-center text-center">
              <h3 className="font-display text-lg font-bold text-card">
                Step 3 – Weigh, pay, enjoy!
              </h3>
              <div className="relative my-6 flex size-60 items-center justify-center">
                {/* Organic blob background */}
                <div className="shibbys-blob-3 absolute inset-0 bg-froyo-pink shadow-xl transition-all duration-500 group-hover:scale-105 group-hover:rotate-6" />
                <img
                  src="https://vibe.filesafe.space/1790640811168876865/attachments/f5be3e18-4a3d-47b5-a9cd-29e733468051.png"
                  alt="Step 3 Weigh, pay and enjoy loaded froyo cup"
                  className="relative z-10 h-52 w-auto object-contain drop-shadow-2xl transition-transform duration-500 group-hover:-translate-y-2 group-hover:scale-105"
                  loading="lazy"
                />
              </div>
              <p className="max-w-xs text-sm leading-relaxed text-card/90">
                Place your cup on the scale, scan your Apple Wallet loyalty pass, pay at the
                counter, and enjoy!
              </p>
            </div>
          </div>

          {/* Shibbys Feature Showcase banner with biscoff loaded cup */}
          <div className="mt-16 flex flex-col items-center justify-between gap-10 rounded-3xl border border-white/20 gradient-pink-teal p-8 shadow-xl lg:flex-row lg:p-12">
            <div className="grid grid-cols-2 gap-4 sm:grid-cols-4 sm:gap-6">
              {[
                { title: "Made Fresh Daily", desc: "Crafted in small batches", icon: "✨" },
                { title: "Fresh Seasonal Fruit", desc: "Cut fresh every morning", icon: "🍓" },
                { title: "Low Fat & Creamy", desc: "Naturally light indulgence", icon: "🍦" },
                {
                  title: "Vegan and Dairy Free Options",
                  desc: "Refreshing plant sorbets",
                  icon: "🌱",
                },
                { title: "Gluten-Free Options", desc: "Clearly labelled treats", icon: "🌾" },
                { title: "100% Customisable", desc: "Build it your own way", icon: "🎯" },
                {
                  title: "NZ Owned & Operated",
                  desc: "Made for Our Community, Loved Beyond the Coast",
                  icon: "🥝",
                },
                { title: "Loyalty App Coming Soon", desc: "Apple Wallet card", icon: "📱" },
              ].map((badge) => (
                <div
                  key={badge.title}
                  className="group flex flex-col items-center rounded-2xl border border-white/20 bg-card/90 p-4 text-center shadow-md backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:bg-card"
                >
                  <div className="flex size-12 items-center justify-center rounded-xl bg-secondary/80 text-xl shadow-inner transition-transform group-hover:scale-110">
                    {badge.icon}
                  </div>
                  <h4 className="mt-2.5 font-display text-xs font-bold text-froyo-darkteal">
                    {badge.title}
                  </h4>
                  <p className="mt-0.5 text-[11px] text-muted-foreground">{badge.desc}</p>
                </div>
              ))}
            </div>

            <div className="relative shrink-0">
              <div className="shibbys-blob-1 absolute -inset-4 bg-froyo-darkteal/60 blur-xl" />
              <img
                src="https://vibe.filesafe.space/1790640811168876865/attachments/b3b62d4b-d3ef-45c7-884b-03829ed13053.png"
                alt="Loaded FroyoBuns swirl cup with fresh strawberries, brownie bites, caramel drizzle and wafer roll"
                className="relative z-10 h-64 w-auto object-contain drop-shadow-2xl transition-transform duration-500 hover:scale-105 animate-float-cup sm:h-72"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Loyalty CTA */}
      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6 md:py-24">
        <div className="overflow-hidden rounded-3xl gradient-pink-teal p-8 shadow-xl md:p-14">
          <div className="grid items-center gap-8 md:grid-cols-2">
            <div>
              <div className="inline-flex items-center gap-1.5 rounded-full bg-primary-foreground/15 px-4 py-1.5 text-xs font-semibold uppercase tracking-wide text-card backdrop-blur-sm">
                <Sparkles className="size-3.5" /> Coming Soon
              </div>
              <h2 className="mt-4 font-display text-3xl font-bold text-primary-foreground sm:text-4xl text-balance">
                Our FroyoBuns Loyalty App!
              </h2>
              <p className="mt-3 max-w-md text-primary-foreground/85">
                Earn rewards, unlock exclusive treats, and enjoy even more reasons to indulge!
              </p>
              <p className="mt-6 font-display text-2xl font-bold uppercase tracking-wide text-primary-foreground">
                Swirl it. <span className="text-froyo-cream">Top it.</span> Love it.
              </p>
            </div>
            <div className="flex justify-center md:justify-end">
              <div
                className="flip-card w-full max-w-sm rounded-2xl shadow-2xl"
                tabIndex={0}
                aria-label="FroyoBuns loyalty card — hover to flip and see your rewards"
              >
                <div className="flip-card-inner rounded-2xl">
                  {/* Front — loyalty card */}
                  <div className="flip-card-face flip-card-front rounded-2xl overflow-hidden">
                    <img
                      src="https://vibe.filesafe.space/1790640811168876865/attachments/a6fc4bf5-2019-4398-95bd-4884eef63793.png"
                      alt="FroyoBuns loyalty card"
                      className="h-full w-full object-cover"
                      loading="lazy"
                    />
                  </div>
                  {/* Back — rewards info */}
                  <div className="flip-card-face flip-card-back rounded-2xl overflow-hidden bg-card p-6 flex flex-col justify-between">
                    <div>
                      <div className="flex items-center justify-between">
                        <span className="font-display text-lg font-bold text-froyo-darkteal">
                          FroyoBuns
                        </span>
                        <Gift className="size-6 text-froyo-pink" />
                      </div>
                      <p className="mt-1 text-xs font-semibold uppercase tracking-wide text-muted-foreground">
                        Loyalty Club
                      </p>
                    </div>
                    <div className="my-4 flex justify-center gap-1.5">
                      {Array.from({ length: 20 }).map((_, i) => (
                        <span
                          key={i}
                          className={
                            "size-4 rounded-full border-2 " +
                            (i < 3
                              ? "border-froyo-pink bg-froyo-pink"
                              : "border-froyo-darkteal/30 bg-transparent")
                          }
                        />
                      ))}
                    </div>
                    <div>
                      <p className="font-display text-base font-bold text-froyo-darkteal">
                        Collect 20 stamps to earn a free cup
                      </p>
                      <p className="mt-1 text-xs text-muted-foreground">
                        Scan in store to earn a stamp on every swirl.
                      </p>
                      <div className="mt-3 flex gap-0.5">
                        {Array.from({ length: 28 }).map((_, i) => (
                          <span
                            key={i}
                            className="block w-0.5 bg-froyo-darkteal/70"
                            style={{ height: `${8 + ((i * 7) % 22)}px` }}
                          />
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
