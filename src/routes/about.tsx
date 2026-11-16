import { createFileRoute } from "@tanstack/react-router";
import { Instagram, ArrowUpRight, Quote } from "lucide-react";
import { BRAND } from "../lib/menu-data";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Us — FroyoBuns" },
      {
        name: "description",
        content:
          "The story behind FroyoBuns — a fun, welcoming place for handcrafted frozen yoghurt, freshly baked cinnamon scrolls, and really good coffee in Silverdale, NZ. Follow us on Instagram.",
      },
      { property: "og:title", content: "About Us — FroyoBuns" },
      {
        property: "og:description",
        content:
          "The story behind FroyoBuns — frozen yoghurt, cinnamon scrolls, and great coffee in Silverdale, NZ.",
      },
      { property: "og:type", content: "website" },
      { property: "og:image", content: BRAND.heroImage },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: AboutPage,
});

// Instagram handle — clicking any carousel tile opens the profile.
const INSTAGRAM_URL = "https://www.instagram.com/froyobuns/?hl=en";

type InstaPost = {
  image: string;
  caption: string;
  likes: string;
};

const INSTA_POSTS: InstaPost[] = [
  {
    image:
      "https://vibe.filesafe.space/1790640811168876865/attachments/45a34437-ce9b-4e56-9321-ed15d0b899be.png",
    caption: "Hibiscus Coast, we can't wait to swirl for you! 🍓🍦",
    likes: "512",
  },
  {
    image:
      "https://vibe.filesafe.space/1790640811168876865/attachments/16d1871b-c46d-417e-a53e-e2de9867254e.png",
    caption: "Something cheeky is coming to the coast... Frozen yoghurt, buns & coffee! 🍑",
    likes: "438",
  },
  {
    image:
      "https://vibe.filesafe.space/1790640811168876865/attachments/cabac1d1-ffdb-40fe-a0dc-4b6040fbb73a.png",
    caption: "Unwrapping the good stuff. Fresh fruit & big flavour. 🫐🍓",
    likes: "389",
  },
  {
    image:
      "https://vibe.filesafe.space/1790640811168876865/attachments/c8e0760a-a597-44e4-8daf-e978bc4df53b.png",
    caption: "Can you guess what's under the wraps? 👀✨",
    likes: "294",
  },
  {
    image:
      "https://vibe.filesafe.space/1790640811168876865/attachments/318db3e9-ac76-4beb-a621-46e4dfb4bf35.png",
    caption: "Coming soon to Silverdale! Stay tuned for opening day. 💖",
    likes: "627",
  },
];

function AboutPage() {
  return (
    <div>
      {/* Header */}
      <section>
        <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6 md:py-20">
          <span className="inline-flex items-center gap-1.5 rounded-full px-4 py-1.5 text-xs font-semibold uppercase tracking-wide shadow-sm bg-froyo-darkteal text-card">
            Our story
          </span>
          <h1 className="mt-4 font-display text-4xl font-bold text-foreground sm:text-5xl text-ring">
            About FroyoBuns
          </h1>
          <p className="mt-3 max-w-xl text-card">
            A shop with big swirls, warm buns, and a whole lot of happy.
          </p>
        </div>
      </section>

      {/* Blog post / story */}
      <article className="mx-auto max-w-3xl px-4 py-14 sm:px-6 md:py-20">
        <div className="prose-froyo space-y-6">
          <p className="font-display text-2xl font-bold text-foreground text-froyo-darkteal">
            How it all started
          </p>
          <p className="font-display text-xl font-bold text-card">
            A little bit of froyo, a whole lot of bun love!
          </p>
          <p className="text-base leading-relaxed text-card">
            FroyoBuns was born from a simple idea: create a fun, welcoming place where people can
            come together, treat themselves and enjoy the little things in life.
          </p>
          <p className="text-base leading-relaxed text-card">
            What started as an idea quickly turned into a whole lot of dreaming, planning, creating
            and hard work. From choosing our flavours and perfecting our cinnamon scrolls to
            designing our space and bringing all the little details together, every part of
            FroyoBuns has been created with love, passion and a whole lot of excitement.
          </p>
          <p className="text-base leading-relaxed text-card">
            We wanted to create something a little different — a place that brings together three
            things we absolutely love: delicious frozen yoghurt, freshly baked cinnamon scrolls and
            really good coffee!
          </p>
          <p className="text-base leading-relaxed text-card">
            At FroyoBuns, you can build your own frozen yoghurt creation, pile on your favourite
            toppings, indulge in one of our freshly baked, deliciously gooey cinnamon scrolls or
            grab a speciality coffee to brighten your day.
          </p>
          <p className="text-base leading-relaxed text-card">
            Whether you're popping in after school, catching up with friends, treating the kids,
            grabbing your morning coffee or simply satisfying that sweet craving, there's something
            here for everyone.
          </p>
          <p className="text-base leading-relaxed text-card">
            But for us, it's about more than just the food. It's about creating smiles, bringing
            people together and becoming a little part of our wonderful local community.
          </p>
          <p className="text-base leading-relaxed text-card">
            We're a small business with big dreams, a passion for what we do and a whole lot of love
            baked into everything we serve.
          </p>
          <p className="text-base leading-relaxed text-card">
            So come as you are, bring your friends, bring the family, and don't forget to leave room
            for a little something sweet!
          </p>
          <p className="font-display text-xl font-bold text-froyo-pink">
            FroyoBuns – Good vibes. Great buns. Even better froyo.
          </p>

          <figure className="overflow-hidden rounded-3xl">
            <img
              src="https://assets.cdn.filesafe.space/twp6nyqYXqMjriSQ7hzj/media/6ab5923c9a20764dbf64e0e0.png"
              alt="A swirl of pink strawberry and teal blue raspberry frozen yoghurt topped with fresh fruit and sprinkles"
              className="aspect-[16/9] w-full object-contain"
              loading="lazy"
            />
          </figure>

          <p className="font-display text-2xl font-bold text-foreground text-froyo-darkteal">
            More than just froyo
          </p>
          <p className="text-base leading-relaxed text-card">
            These days we're not just about frozen yoghurt. We pull flat whites and cold brews from
            locally roasted beans, and bake cinnamon scrolls fresh every morning (they're usually
            gone by noon — come early). No great day out should end without something sweet to take
            home.
          </p>
          <p className="text-base leading-relaxed text-card">
            Everything is made in small batches with real ingredients, and we tag every option
            clearly so you can build your perfect treat without guessing.
          </p>

          <blockquote className="relative rounded-2xl border border-border/60 bg-card p-6 shadow-sm">
            <Quote className="absolute -top-3 left-5 size-7 fill-primary/15 text-primary" />
            <p className="font-display text-lg font-semibold text-foreground text-froyo-darkteal">
              “We're not trying to be the biggest — just the place you keep coming back to.”
            </p>
            <footer className="mt-3 text-sm text-muted-foreground">
              — Janine & Brian, founders of FroyoBuns
            </footer>
          </blockquote>

          <p className="font-display text-2xl font-bold text-foreground text-froyo-darkteal">
            What's next
          </p>
          <p className="text-base leading-relaxed text-card">
            We're growing our loyalty club, adding seasonal flavours, and dreaming up a toppings bar
            for parties. Follow along on Instagram for the daily specials, behind-the-counter chaos,
            and the occasional free-cup giveaway.
          </p>
        </div>
      </article>

      {/* Instagram carousel */}
      <section className="mx-auto max-w-6xl px-4 pb-20 sm:px-6">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div>
            <h2 className="font-display text-3xl font-bold text-foreground sm:text-4xl text-froyo-pink">
              From our Instagram
            </h2>
            <p className="mt-2 text-sm text-card">
              Tap any post to follow along — daily specials, fresh buns, and the occasional freebie.
            </p>
          </div>
          <a
            href={INSTAGRAM_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full gradient-pink-teal px-6 py-3 text-sm font-semibold text-primary-foreground shadow-md transition-transform hover:scale-[1.03]"
          >
            <Instagram className="size-4" /> @froyobuns
          </a>
        </div>

        <div className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5">
          {INSTA_POSTS.map((post) => (
            <a
              key={post.caption}
              href={INSTAGRAM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative block overflow-hidden rounded-2xl border border-border/60 bg-card shadow-sm transition-all hover:-translate-y-1 hover:shadow-md"
              aria-label={`Open Instagram post: ${post.caption}`}
            >
              <div className="aspect-square overflow-hidden">
                <img
                  src={post.image}
                  alt={post.caption}
                  className="size-full object-cover transition-transform duration-300 group-hover:scale-105"
                  loading="lazy"
                />
              </div>
              <div className="absolute inset-0 flex flex-col justify-end bg-gradient-to-t from-black/70 via-black/10 to-transparent p-3 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                <p className="line-clamp-2 text-xs font-medium text-white">{post.caption}</p>
                <p className="mt-1 text-[11px] text-white/80">❤ {post.likes}</p>
              </div>
              <span className="absolute right-2 top-2 flex size-7 items-center justify-center rounded-full bg-white/85 text-foreground opacity-0 shadow-sm transition-opacity duration-300 group-hover:opacity-100">
                <ArrowUpRight className="size-4" />
              </span>
            </a>
          ))}
        </div>

        <p className="mt-6 text-center text-sm text-card">
          We post fresh daily —{" "}
          <a
            href={INSTAGRAM_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="font-semibold text-primary hover:underline"
          >
            follow @froyobuns
          </a>{" "}
          so you never miss a swirl.
        </p>
      </section>
    </div>
  );
}
