import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";
import { useEffect, useRef, useState, type ReactNode } from "react";
import { Menu as MenuIcon, X, Snowflake, Instagram, Facebook } from "lucide-react";

function TikTokIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden>
      <path d="M16.5 3c.3 2.1 1.5 3.6 3.5 3.9v2.6c-1.3.1-2.5-.3-3.6-.9v6.1c0 3.2-2.6 5.8-5.8 5.8S4.8 17.9 4.8 14.7c0-3 2.2-5.4 5.1-5.7v2.7c-1.4.3-2.4 1.5-2.4 3 0 1.7 1.4 3.1 3.1 3.1s3.1-1.4 3.1-3.1V3h2.8z" />
    </svg>
  );
}

import appCss from "../styles.css?url";
import { reportVibeError } from "../lib/vibe-error-reporting";
import { FAVICONS } from "../lib/favicons";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-7xl font-bold text-primary">404</h1>
        <h2 className="mt-4 text-xl font-semibold text-foreground">This page melted away!</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <div className="mt-6">
          <Link
            to="/"
            className="inline-flex items-center justify-center rounded-full bg-primary px-6 py-2.5 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Back to home
          </Link>
        </div>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error);
  const router = useRouter();
  useEffect(() => {
    reportVibeError(error, { boundary: "tanstack_root_error_component" });
  }, [error]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-xl font-semibold tracking-tight text-foreground">
          This page didn't load
        </h1>
        <p className="mt-2 text-sm text-muted-foreground">
          Something went wrong on our end. You can try refreshing or head back home.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-2">
          <button
            onClick={() => {
              router.invalidate();
              reset();
            }}
            className="inline-flex items-center justify-center rounded-full bg-primary px-6 py-2.5 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Try again
          </button>
          <a
            href="/"
            className="inline-flex items-center justify-center rounded-full border border-input bg-background px-6 py-2.5 text-sm font-semibold text-foreground transition-colors hover:bg-accent hover:text-accent-foreground"
          >
            Go home
          </a>
        </div>
      </div>
    </div>
  );
}

const NAV_ITEMS = [
  { label: "Home", to: "/" },
  { label: "Menu", to: "/menu" },
  { label: "About", to: "/about" },
  { label: "FAQs", to: "/faqs" },
  { label: "Contact", to: "/contact" },
  { label: "Loyalty", to: "/loyalty" },
] as const;

function SiteHeader() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/60 gradient-pink-teal">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6">
        <Link to="/" className="flex items-center gap-2.5" onClick={() => setOpen(false)}>
          <img
            src="https://vibe.filesafe.space/1790640811168876865/assets/9ec7c9b4-b012-48d8-81f4-4c86efba6fca.png"
            alt="FroyoBuns logo"
            className="h-10 w-auto object-contain transition-transform hover:scale-105"
          />
        </Link>

        <nav className="hidden items-center gap-1 md:flex">
          {NAV_ITEMS.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              activeProps={{
                className: "bg-white/20 text-white font-semibold",
              }}
              inactiveProps={{ className: "text-white/90" }}
              className="rounded-full px-4 py-2 text-sm transition-colors hover:bg-white/20 hover:text-white"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <button
          className="rounded-md p-2 text-white md:hidden"
          aria-label="Toggle menu"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X className="size-6" /> : <MenuIcon className="size-6" />}
        </button>
      </div>

      {open && (
        <div className="border-t border-white/20 bg-froyo-darkteal md:hidden">
          <nav className="mx-auto flex max-w-6xl flex-col px-4 py-3 sm:px-6">
            {NAV_ITEMS.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                onClick={() => setOpen(false)}
                className="rounded-lg px-3 py-2.5 text-sm font-medium text-white/90 transition-colors hover:bg-white/10 hover:text-white"
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}

function SiteFooter() {
  return (
    <footer className="mt-24 border-t border-border/60 gradient-pink-teal">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-14 sm:px-6 md:grid-cols-5">
        <div className="md:col-span-2">
          <Link to="/" className="inline-block">
            <img
              src="https://vibe.filesafe.space/1790640811168876865/assets/9ec7c9b4-b012-48d8-81f4-4c86efba6fca.png"
              alt="FroyoBuns logo"
              className="h-12 w-auto object-contain brightness-105"
            />
          </Link>
          <p className="mt-4 max-w-sm text-sm text-background/70">
            Swirls, smiles, and a little bit of happy. Handcrafted frozen yoghurt made fresh every
            day with real fruit and big flavour.
          </p>
        </div>

        <div>
          <h3 className="font-display text-sm font-semibold uppercase tracking-wide text-background/90">
            Explore
          </h3>
          <ul className="mt-4 space-y-2 text-sm text-background/70">
            {NAV_ITEMS.map((item) => (
              <li key={item.to}>
                <Link to={item.to} className="transition-colors hover:text-background">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="font-display text-sm font-semibold uppercase tracking-wide text-background/90">
            Visit Us
          </h3>
          <ul className="mt-4 space-y-2 text-sm text-background/70">
            <li>51 Arran Drive</li>
            <li>Silverdale, NZ 12345</li>
            <li>Open daily 7.30am – 9pm</li>
            <li className="pt-1 text-background">+64 21 571 0005</li>
          </ul>
        </div>

        <div>
          <h3 className="font-display text-sm font-semibold uppercase tracking-wide text-background/90">
            Connect
          </h3>
          <div className="mt-4 flex flex-wrap gap-2.5">
            <a
              href="https://www.instagram.com/froyobuns/?hl=en"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="FroyoBuns on Instagram"
              className="inline-flex size-9 items-center justify-center rounded-full bg-background/10 text-background/80 transition-colors hover:bg-froyo-pink hover:text-background"
            >
              <Instagram className="size-[18px]" />
            </a>
            <a
              href="https://www.tiktok.com/@froyobuns?lang=en"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="FroyoBuns on TikTok"
              className="inline-flex size-9 items-center justify-center rounded-full bg-background/10 text-background/80 transition-colors hover:bg-froyo-pink hover:text-background"
            >
              <TikTokIcon className="size-[18px]" />
            </a>
            <a
              href="https://www.facebook.com/froyobuns"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="FroyoBuns on Facebook"
              className="inline-flex size-9 items-center justify-center rounded-full bg-background/10 text-background/80 transition-colors hover:bg-froyo-pink hover:text-background"
            >
              <Facebook className="size-[18px]" />
            </a>
          </div>
        </div>
      </div>

      <div className="border-t border-background/10 bg-accent">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-2 px-4 py-6 text-xs text-background/60 sm:flex-row sm:px-6 bg-froyo-teal">
          <p>© {new Date().getFullYear()} FroyoBuns. All rights reserved.</p>
          <p>Made with real fruit & a lot of love.</p>
        </div>
      </div>
    </footer>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "FroyoBuns — Swirls, Smiles & a Little Bit of Happy" },
      {
        name: "description",
        content:
          "FroyoBuns serves handcrafted frozen yoghurt made fresh daily. Browse our menu, join the loyalty club, and add your rewards card to Apple Wallet.",
      },
      { name: "author", content: "FroyoBuns" },
      {
        property: "og:title",
        content: "FroyoBuns — Swirls, Smiles & a Little Bit of Happy",
      },
      {
        property: "og:description",
        content:
          "Handcrafted frozen yoghurt made fresh daily. Browse the menu, join the loyalty club, and add your rewards card to Apple Wallet.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [
      { rel: "icon", type: "image/png", sizes: "16x16", href: FAVICONS.favicon16 },
      { rel: "icon", type: "image/png", sizes: "32x32", href: FAVICONS.favicon32 },
      { rel: "icon", type: "image/png", sizes: "48x48", href: FAVICONS.favicon48 },
      { rel: "shortcut icon", type: "image/png", href: FAVICONS.favicon32 },
      { rel: "apple-touch-icon", sizes: "180x180", href: FAVICONS.appleTouchIcon },
      { rel: "stylesheet", href: appCss },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      {
        rel: "preconnect",
        href: "https://fonts.gstatic.com",
        crossOrigin: "anonymous",
      },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Fredoka:wght@400;500;600;700&display=swap",
      },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Nunito:wght@400;500;600;700&display=swap",
      },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" type="image/png" sizes="16x16" href={FAVICONS.favicon16} />
        <link rel="icon" type="image/png" sizes="32x32" href={FAVICONS.favicon32} />
        <link rel="icon" type="image/png" sizes="48x48" href={FAVICONS.favicon48} />
        <link rel="shortcut icon" type="image/png" href={FAVICONS.favicon32} />
        <link rel="apple-touch-icon" sizes="180x180" href={FAVICONS.appleTouchIcon} />
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

// Page-wide floating sprinkles — brand palette only
const PAGE_SPRINKLES = [
  { color: "var(--color-froyo-pink)", size: 7 },
  { color: "var(--color-froyo-teal)", size: 5 },
  { color: "var(--color-froyo-cream)", size: 9 },
  { color: "var(--color-froyo-peach)", size: 6 },
  { color: "var(--color-froyo-lightpink)", size: 8 },
  { color: "var(--color-froyo-teal)", size: 4 },
  { color: "var(--color-froyo-pink)", size: 6 },
  { color: "var(--color-froyo-cream)", size: 7 },
  { color: "var(--color-froyo-peach)", size: 5 },
  { color: "var(--color-froyo-lightpink)", size: 6 },
  { color: "var(--color-froyo-pink)", size: 8 },
  { color: "var(--color-froyo-teal)", size: 5 },
  { color: "var(--color-froyo-pink)", size: 6 },
  { color: "var(--color-froyo-teal)", size: 9 },
  { color: "var(--color-froyo-cream)", size: 5 },
  { color: "var(--color-froyo-peach)", size: 7 },
  { color: "var(--color-froyo-lightpink)", size: 4 },
  { color: "var(--color-froyo-pink)", size: 8 },
  { color: "var(--color-froyo-teal)", size: 6 },
  { color: "var(--color-froyo-cream)", size: 10 },
  { color: "var(--color-froyo-peach)", size: 5 },
  { color: "var(--color-froyo-lightpink)", size: 7 },
  { color: "var(--color-froyo-pink)", size: 5 },
  { color: "var(--color-froyo-teal)", size: 8 },
  { color: "var(--color-froyo-cream)", size: 6 },
  { color: "var(--color-froyo-peach)", size: 9 },
  { color: "var(--color-froyo-lightpink)", size: 4 },
  { color: "var(--color-froyo-pink)", size: 7 },
  { color: "var(--color-froyo-teal)", size: 6 },
  { color: "var(--color-froyo-cream)", size: 8 },
  { color: "var(--color-froyo-peach)", size: 5 },
  { color: "var(--color-froyo-lightpink)", size: 9 },
  { color: "var(--color-froyo-pink)", size: 4 },
  { color: "var(--color-froyo-teal)", size: 7 },
  { color: "var(--color-froyo-cream)", size: 6 },
] as const;

function PageSprinkles() {
  const ref = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry) setActive(entry.isIntersecting);
      },
      {
        threshold: 0,
      },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={`pointer-events-none fixed inset-0 z-[60] overflow-hidden ${active ? "page-sprinkle-active" : ""}`}
      aria-hidden
    >
      {PAGE_SPRINKLES.map((s, i) => (
        <span
          key={i}
          className="page-sprinkle"
          style={{
            backgroundColor: s.color,
            width: s.size,
            height: s.size,
            left: `${(i * 8.3 + 4) % 100}%`,
            top: `${(i * 13 + 10) % 100}%`,
            animationDuration: `${7 + (i % 5)}s`,
            animationDelay: `${i * 0.6}s`,
          }}
        />
      ))}
    </div>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();

  return (
    <QueryClientProvider client={queryClient}>
      <div className="flex min-h-screen flex-col">
        <SiteHeader />
        <main className="flex-1">
          {/* Required: nested routes render here. Removing <Outlet /> breaks all child routes. */}
          <Outlet />
        </main>
        <SiteFooter />
        <PageSprinkles />
      </div>
    </QueryClientProvider>
  );
}
