// Froyo Squad layout — shared sub-navigation rendered around every loyalty
// sub-route. The home dashboard lives at /loyalty (loyalty.index.tsx); the
// rewards, how-it-works, and join pages are siblings under this layout.

import { createFileRoute, Outlet, Link } from "@tanstack/react-router";

export const Route = createFileRoute("/loyalty")({
  component: LoyaltyLayout,
});

function LoyaltyLayout() {
  return (
    <div className="min-h-screen bg-[#dbeef5]/45">
      <div className="border-b border-[#033347]/10 bg-white/70 backdrop-blur-md sticky top-16 z-30">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 sm:px-6">
          <div className="flex items-center gap-2 overflow-x-auto text-xs font-semibold">
            <Link
              to="/loyalty"
              activeOptions={{ exact: true }}
              activeProps={{ className: "bg-[#ec008c] text-white shadow-sm" }}
              inactiveProps={{
                className: "text-[#033347]/80 hover:bg-[#033347]/5 hover:text-[#033347]",
              }}
              className="rounded-full px-3.5 py-1.5 transition-colors whitespace-nowrap"
            >
              Dashboard
            </Link>
            <Link
              to="/loyalty/rewards"
              activeProps={{ className: "bg-[#ec008c] text-white shadow-sm" }}
              inactiveProps={{
                className: "text-[#033347]/80 hover:bg-[#033347]/5 hover:text-[#033347]",
              }}
              className="rounded-full px-3.5 py-1.5 transition-colors whitespace-nowrap"
            >
              Rewards
            </Link>
            <Link
              to="/loyalty/how-it-works"
              activeProps={{ className: "bg-[#ec008c] text-white shadow-sm" }}
              inactiveProps={{
                className: "text-[#033347]/80 hover:bg-[#033347]/5 hover:text-[#033347]",
              }}
              className="rounded-full px-3.5 py-1.5 transition-colors whitespace-nowrap"
            >
              How It Works
            </Link>
          </div>
          <span className="hidden sm:inline-flex items-center gap-1.5 rounded-full bg-white/80 border border-[#033347]/10 px-3 py-1 text-xs font-bold text-[#033347]">
            🍦 Froyo Squad
          </span>
        </div>
      </div>

      <Outlet />
    </div>
  );
}
