import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { ChevronDown, HelpCircle } from "lucide-react";

export const Route = createFileRoute("/faqs")({
  head: () => ({
    meta: [
      { title: "FAQs — FroyoBuns" },
      {
        name: "description",
        content:
          "Answers to common questions about FroyoBuns: flavours, toppings, vegan options, loyalty rewards, Apple Wallet, catering, and store hours.",
      },
      { property: "og:title", content: "FAQs — FroyoBuns" },
      {
        property: "og:description",
        content:
          "Answers to common questions about flavours, toppings, vegan options, loyalty rewards, Apple Wallet, catering, and hours.",
      },
      { property: "og:type", content: "website" },
    ],
  }),
  component: FaqsPage,
});

type FAQ = { q: string; a: string };

const FAQ_GROUPS: { title: string; items: FAQ[] }[] = [
  {
    title: "Flavours & Toppings",
    items: [
      {
        q: "How often do your flavours change?",
        a: "We rotate our lineup monthly and run seasonal specials all year round. A core cast of classics stays on tap, but you'll always find something new to try.",
      },
      {
        q: "Do you have vegan or dairy-free options?",
        a: "Yes, we always have an option available. Just ask one of our BunSquad members.",
      },
      {
        q: "Can I mix more than one flavour?",
        a: "Absolutely. The Cinnamon Buns are made to mix and match and our Premium frozen yoghurt is there to swirl and mix flavours. Swirl two flavours or try them all.",
      },
      {
        q: "Are toppings included or extra?",
        a: "We don't charge per topping. Swirl your yoghurt, add as many toppings as your heart desires, then take your cup to the till to weigh and pay.",
      },
    ],
  },
  {
    title: "Loyalty & Rewards",
    items: [
      {
        q: "How does the Loyalty Club work?",
        a: "Collect 20 points to receive a free cup of Frozen Yoghurt.",
      },
      {
        q: "Can I add my rewards card to Apple Wallet?",
        a: "Yes! After you sign up on the Loyalty page, you can generate an Apple Wallet pass that keeps your points balance, member number, and a scannable barcode right on your phone. Tap “Add to Apple Wallet” to install it.",
      },
      {
        q: "Do points expire?",
        a: "Nope — points never expire. Take your time earning your reward.",
      },
    ],
  },
  {
    title: "Visiting & Ordering",
    items: [
      {
        q: "What are your hours?",
        a: "We open daily, 7.30am – 9pm. Hours may vary on holidays — check our social pages for updates.",
      },
      {
        q: "Is there parking?",
        a: "There's free lot parking right out front, plus street parking nearby.",
      },
    ],
  },
];

function FaqItem({ item }: { item: FAQ }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="overflow-hidden rounded-2xl border border-border/60 bg-card">
      <button
        type="button"
        className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left"
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
      >
        <span className="font-display text-base font-semibold text-foreground text-froyo-darkteal">
          {item.q}
        </span>
        <ChevronDown
          className={
            "size-5 shrink-0 text-primary transition-transform " + (open ? "rotate-180" : "")
          }
        />
      </button>
      {open && <div className="px-5 pb-5 text-sm text-froyo-pink">{item.a}</div>}
    </div>
  );
}

function FaqsPage() {
  return (
    <div>
      <section>
        <div className="mx-auto max-w-4xl px-4 py-14 sm:px-6 md:py-20">
          <span className="inline-flex items-center gap-1.5 rounded-full gradient-pink-teal px-4 py-1.5 text-xs font-semibold uppercase tracking-wide text-primary-foreground shadow-sm">
            <HelpCircle className="size-3.5" /> We've got answers
          </span>
          <h1 className="mt-4 font-display text-4xl font-bold text-foreground sm:text-5xl text-froyo-pink">
            Frequently asked questions
          </h1>
          <p className="mt-3 text-card">
            Everything you need to know about flavours, rewards, and visiting FroyoBuns. Can't find
            your answer? Drop us a line on the Contact page.
          </p>
        </div>
      </section>

      <div className="mx-auto max-w-3xl space-y-12 px-4 py-14 sm:px-6">
        {FAQ_GROUPS.map((group) => (
          <section key={group.title}>
            <h2 className="mb-4 font-display text-2xl font-bold text-primary">{group.title}</h2>
            <div className="space-y-3">
              {group.items.map((item) => (
                <FaqItem key={item.q} item={item} />
              ))}
            </div>
          </section>
        ))}
      </div>
    </div>
  );
}
