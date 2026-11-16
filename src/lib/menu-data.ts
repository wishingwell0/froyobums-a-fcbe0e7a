// Shared, browser-safe menu + brand content for Froyo Buns.
// Pure data — safe to import from any client or server module.

export type Flavor = {
  name: string;
  description: string;
  tags: string[];
  category: "signature" | "classic" | "sorbet" | "seasonal" | "limited" | "weekly";
  image?: string;
  emoji?: string;
};

export const FLAVORS: Flavor[] = [
  // Signature Swirls
  {
    name: "Wild Berry",
    description: "A vibrant blend of juicy wild berries, bursting with sweet and tangy flavour.",
    tags: ["Signature", "Real Fruit"],
    category: "signature",
    image:
      "https://vibe.filesafe.space/1790640811168876865/attachments/e605f9da-b814-4663-b343-f66fe006b9b6.png",
  },
  {
    name: "Premium Açaí",
    description: "Rich Amazonian organic açaí with pure berry intensity.",
    tags: ["Signature", "100% Organic"],
    category: "signature",
    image:
      "https://vibe.filesafe.space/1790640811168876865/attachments/4a4b62e6-b6b7-4618-b986-92f815b693dd.png",
  },
  {
    name: "Biscoff",
    description: "Rich buttery caramel with sea-salt flake perfection.",
    tags: ["Signature", "Fan Favourite"],
    category: "signature",
    image:
      "https://vibe.filesafe.space/1790640811168876865/attachments/1a777818-eb0e-4992-ba3d-cd5de7abdbb7.png",
  },

  // Classics
  {
    name: "Original Tart",
    description: "Crisp, tangy, light, and naturally refreshing froyo.",
    tags: ["Classic", "Signature Classic"],
    category: "classic",
    image:
      "https://vibe.filesafe.space/1790640811168876865/attachments/83600870-d335-4aeb-84c8-c18938c45736.png",
  },
  {
    name: "Vanilla",
    description: "Real bourbon vanilla bean with rich creamy sweetness.",
    tags: ["Classic", "Pure Bean"],
    category: "classic",
    image:
      "https://vibe.filesafe.space/1790640811168876865/attachments/cd3e43a1-1a88-4323-98ba-2d4a7390370b.png",
  },
  {
    name: "Chocolate",
    description: "Decadent Dutch cocoa churned into silky froyo velvet.",
    tags: ["Classic", "Deep Cocoa"],
    category: "classic",
    image:
      "https://vibe.filesafe.space/1790640811168876865/attachments/6d16486e-ab0e-446c-b13b-783e4656734d.png",
  },

  // Sorbets
  {
    name: "Coconut",
    description: "Creamy tropical coconut milk froyo, light and smooth.",
    tags: ["Sorbet", "Dairy Free & Vegan"],
    category: "sorbet",
    image:
      "https://vibe.filesafe.space/1790640811168876865/attachments/5545b21a-6c0c-437d-871d-4eb8fba4fe02.png",
  },
  {
    name: "Mango Sorbet",
    description: "Juicy tropical mango purée, naturally bright and dairy-free.",
    tags: ["Sorbet", "Vegan / Fruit"],
    category: "sorbet",
    image:
      "https://vibe.filesafe.space/1790640811168876865/attachments/87c1d5f6-9a15-4c62-8017-28a4fe0e3362.png",
  },
];

// Rotating / seasonal flavours — change weekly.
export const ROTATING_FLAVORS: Flavor[] = [
  {
    name: "Red Velvet",
    description: "Decadent crimson cocoa sponge swirled into rich vanilla cream cheese froyo.",
    tags: ["Weekly Special", "Real Cake Crumb"],
    category: "seasonal",
    image:
      "https://vibe.filesafe.space/1790640811168876865/attachments/b2315d83-c3ae-4ec5-b3b9-86dd836c6e77.png",
  },
  {
    name: "Salted Caramel",
    description: "Golden buttery caramel swirled with pure sea-salt flakes and sweet fudge.",
    tags: ["Limited Edition", "Fan Favourite"],
    category: "limited",
    image:
      "https://vibe.filesafe.space/1790640811168876865/attachments/74d6b55d-0715-40d0-a5e3-9729da0eb2c8.png",
  },
  {
    name: "Strawberry",
    description: "Sweet, sun-ripened berry swirls churned fresh with real strawberry purée.",
    tags: ["Weekly Drop", "Real Fruit Swirl"],
    category: "weekly",
    image:
      "https://vibe.filesafe.space/1790640811168876865/attachments/ffeff23d-8fac-4687-a3e1-9e2e2b63b8e4.png",
  },
  {
    name: "Black Sesame",
    description: "Deep, nutty roasted black sesame swirled into smooth and velvety frozen yoghurt.",
    tags: ["Weekly Special", "Nutty & Rich"],
    category: "seasonal",
    image:
      "https://vibe.filesafe.space/1790640811168876865/attachments/90818cc9-66e9-4d3e-accd-fe4c2f4d5946.png",
  },
  {
    name: "Bueno",
    description:
      "Irresistible hazelnut cocoa cream swirl inspired by the classic Kinder Bueno confection.",
    tags: ["Limited Edition", "Hazelnut Cream"],
    category: "limited",
    image:
      "https://vibe.filesafe.space/1790640811168876865/attachments/0b64eaf5-e429-4655-89be-d78b7dcb5167.png",
  },
  {
    name: "Cotton Candy",
    description: "Whimsical spun-sugar sweetness in a nostalgic, fluffy pink dream swirl.",
    tags: ["Fan Favourite", "Sweet & Fun"],
    category: "seasonal",
    image:
      "https://vibe.filesafe.space/1790640811168876865/attachments/f1e00a70-0136-4f1d-98fe-99f229d71a39.png",
  },
  {
    name: "Cookie Dough",
    description:
      "Golden brown-sugar dough flavour packed with chocolate chip cookie dough indulgence.",
    tags: ["Limited Edition", "Loaded Dough"],
    category: "limited",
    image:
      "https://vibe.filesafe.space/1790640811168876865/attachments/80493253-77fd-4ee4-9f0c-6f5c3201952b.png",
  },
  {
    name: "Lychee",
    description:
      "Delicate, floral, and naturally fragrant Asian lychee fruit swirled to perfection.",
    tags: ["Weekly Drop", "Real Fruit / Refreshing"],
    category: "weekly",
    image:
      "https://vibe.filesafe.space/1790640811168876865/attachments/2cbe7837-71d2-43c1-b24f-6dce6e0f65eb.png",
  },
  {
    name: "Matcha",
    description:
      "Authentic ceremonial Japanese stone-ground green tea with earthy, rich aromatics.",
    tags: ["Weekly Special", "Earthy & Pure"],
    category: "seasonal",
    image:
      "https://vibe.filesafe.space/1790640811168876865/attachments/ab378ab1-d1bb-4d6e-9ae9-13f1491f57bd.png",
  },
  {
    name: "Cinnamon",
    description: "Warm spiced cinnamon tart crust and creamy custard swirl — cheekily inspired.",
    tags: ["Signature Special", "Spiced Custard"],
    category: "limited",
    image:
      "https://vibe.filesafe.space/1790640811168876865/attachments/5ed870d0-c9ff-46f8-b4ec-3ffb0c8b975c.png",
  },
  {
    name: "Crisp Mint",
    description:
      "Cool garden mint swirled into refreshing, light, and invigorating frozen yoghurt.",
    tags: ["Weekly Drop", "Cool & Crisp"],
    category: "weekly",
    image:
      "https://vibe.filesafe.space/1790640811168876865/attachments/b2a0546a-2564-4bea-bed8-8143c61caa89.png",
  },
  {
    name: "Peppermint Caramel Tart",
    description:
      "Classic peppermint crisp crumble and caramel tart slice in a velvety froyo swirl.",
    tags: ["Limited Edition", "Caramel & Peppermint"],
    category: "limited",
    image:
      "https://vibe.filesafe.space/1790640811168876865/attachments/3e19cc8a-274d-4b96-ad8c-19eb11281108.png",
  },
  {
    name: "Pistachio",
    description: "Pure roasted Sicilian pistachio swirled for a rich, buttery, nutty perfection.",
    tags: ["Weekly Special", "Real Pistachio"],
    category: "seasonal",
    image:
      "https://vibe.filesafe.space/1790640811168876865/attachments/c6b6451d-44c2-4181-b7ea-81a52f7ee283.png",
  },
  {
    name: "Birthday Cake",
    description:
      "Sweet vanilla celebration cake froyo swirled with festive rainbow confetti sprinkles.",
    tags: ["Weekly Special", "Funfetti Cake"],
    category: "seasonal",
    image:
      "https://vibe.filesafe.space/1790640811168876865/attachments/07b47267-6398-40ec-acec-7f61b9297431.png",
  },
  {
    name: "Coffee",
    description: "Rich roasted espresso beans blended into a smooth, velvety barista-style swirl.",
    tags: ["Limited Edition", "Real Espresso"],
    category: "limited",
    image:
      "https://vibe.filesafe.space/1790640811168876865/attachments/f0701432-5e0d-4eb2-b089-0e6d39345ebe.png",
  },
  {
    name: "Cheesecake",
    description: "Tangy rich cream cheese custard swirl with a golden buttery graham crust bite.",
    tags: ["Weekly Drop", "Classic Cheesecake"],
    category: "weekly",
    image:
      "https://vibe.filesafe.space/1790640811168876865/attachments/f724df6b-354f-4b27-b268-b4d9a4675b6f.png",
  },
  {
    name: "Milky Bar",
    description:
      "Silky, creamy Belgian white cocoa butter churned into melt-in-your-mouth perfection.",
    tags: ["Limited Edition", "Creamy Cocoa"],
    category: "limited",
    image:
      "https://vibe.filesafe.space/1790640811168876865/attachments/c33675c1-6db0-41a5-a562-5066732b7f82.png",
  },
  {
    name: "English Toffee",
    description:
      "Golden honeyed caramel crunch and roasted almond brittle swirled into creamy froyo.",
    tags: ["Weekly Special", "Crunchy Brittle"],
    category: "seasonal",
    image:
      "https://vibe.filesafe.space/1790640811168876865/attachments/2c8a8581-7f70-41e5-b564-cc57bd3cfe2e.png",
  },
  {
    name: "Custard",
    description: "Velvety smooth vanilla custard swirl with a rich, silky crème pâtissière depth.",
    tags: ["Limited Edition", "Rich Custard"],
    category: "limited",
    image:
      "https://vibe.filesafe.space/1790640811168876865/attachments/3dc976ea-4e42-4f1d-a673-092ee000e845.png",
  },
  {
    name: "Passionfruit",
    description: "Sun-drenched tropical passionfruit purée with a delightfully tangy, zesty swirl.",
    tags: ["Weekly Drop", "Real Fruit / Tropical"],
    category: "weekly",
    image:
      "https://vibe.filesafe.space/1790640811168876865/attachments/2bf3dee4-3b0b-4804-a7c4-acd6adcb500b.png",
  },
  {
    name: "Meringue",
    description: "Crisp toasted meringue swirls paired with light, zesty lemon curd creaminess.",
    tags: ["Weekly Special", "Toasted Meringue"],
    category: "seasonal",
    image:
      "https://vibe.filesafe.space/1790640811168876865/attachments/c1d14ae1-91fb-4980-b6c2-ae0f94a75948.png",
  },
  {
    name: "Mars Bar",
    description:
      "Malty milk chocolate froyo swirled with rich golden caramel ribbon and nougat delight.",
    tags: ["Limited Edition", "Caramel & Nougat"],
    category: "limited",
    image:
      "https://vibe.filesafe.space/1790640811168876865/attachments/9f63e41f-5bf8-4a25-9d91-1ec6def818b3.png",
  },
  {
    name: "Bubblegum",
    description: "Sweet, nostalgic pastel pink and blue swirl bursting with vibrant bubblegum fun.",
    tags: ["Weekly Drop", "Sweet & Nostalgic"],
    category: "weekly",
    image:
      "https://vibe.filesafe.space/1790640811168876865/attachments/e660e051-8482-434a-9db3-ef39d0704027.png",
  },
];

// Cinnamon Buns — house-made daily.
export type Bun = {
  name: string;
  description: string;
  tags?: string[];
  image?: string;
  emoji?: string;
};

export const CINNAMON_BUNS: Bun[] = [
  {
    name: "The Classic Bun",
    description: "Soft, swirled cinnamon dough glazed with rich vanilla cream cheese frosting.",
    tags: ["House Classic", "Best Seller"],
    image:
      "https://vibe.filesafe.space/1790640811168876865/attachments/4e891827-8050-4321-a92b-455fc73f97ab.png",
    emoji: "🥮",
  },
  {
    name: "The Pistachio Bun",
    description:
      "Roasted Sicilian pistachio cream drizzle cascading over a fresh warm spiced swirl.",
    tags: ["Signature", "Real Pistachio"],
    image:
      "https://vibe.filesafe.space/1790640811168876865/attachments/93e78def-dba3-4c50-8fe3-76f265d83840.png",
    emoji: "🟢",
  },
  {
    name: "The Biscoff Bun",
    description:
      "Decadent Lotus Biscoff speculoos cream glaze flowing over freshly baked cinnamon dough.",
    tags: ["Fan Favourite", "Biscoff Speculoos"],
    image:
      "https://vibe.filesafe.space/1790640811168876865/attachments/8b6d4d5f-3ff8-407e-86c1-8a9c10a31b74.png",
    emoji: "🍪",
  },
  {
    name: "The Caramel Popcorn Bun",
    description: "Deep golden buttery salted caramel glaze drenched over warm fluffy pastry.",
    tags: ["Signature Special", "Salted Caramel"],
    image:
      "https://vibe.filesafe.space/1790640811168876865/attachments/169f5733-34b2-4177-a8d3-483868cbb882.png",
    emoji: "🍿",
  },
  {
    name: "The Cookies & Cream Bun",
    description: "Sweet cream glaze loaded with crushed chocolate sandwich cookie crumbs.",
    tags: ["Chocolate Dream", "Loaded Crumble"],
    image:
      "https://vibe.filesafe.space/1790640811168876865/attachments/4a7bab35-f5ea-4377-aa0c-91c679047945.png",
    emoji: "🥛",
  },
  {
    name: "The Bueno Bun",
    description: "Creamy roasted hazelnut cocoa drizzle inspired by classic Kinder Bueno.",
    tags: ["Hazelnut Cream", "Limited Edition"],
    image:
      "https://vibe.filesafe.space/1790640811168876865/attachments/d96d6739-9ac8-4cd5-a103-9ec42bf89eab.png",
    emoji: "🍫",
  },
];

// Cinnamon bun price map (NZD) — displayed on each card.
export const CINNAMON_BUN_PRICES: Record<string, string> = {
  "The Classic Bun": "$8.50",
  "The Pistachio Bun": "$10.00",
  "The Biscoff Bun": "$10.00",
  "The Caramel Popcorn Bun": "$10.00",
  "The Cookies & Cream Bun": "$10.00",
  "The Bueno Bun": "$10.00",
};

// Premium flavours cost +$1.50 when substituted for a Classic Bun in a box deal.
export const PREMIUM_BUN_FLAVOURS = [
  "Pistachio",
  "Biscoff",
  "Caramel Popcorn",
  "Cookies & Cream",
  "Bueno",
] as const;

export type BoxDeal = {
  name: string;
  count: number;
  price: string;
  description: string;
  emoji: string;
};

export const BOX_DEALS: BoxDeal[] = [
  {
    name: "4 Classic Buns",
    count: 4,
    price: "$32.00",
    description: "A mini box of four classic cinnamon buns — perfect to share.",
    emoji: "📦",
  },
  {
    name: "6 Classic Buns",
    count: 6,
    price: "$49.00",
    description: "Half a dozen warm classic buns for the whole crew.",
    emoji: "📦",
  },
  {
    name: "9 Classic Buns",
    count: 9,
    price: "$69.00",
    description: "Our biggest box — nine classic buns for the serious bun lovers.",
    emoji: "📦",
  },
];

export type Combo = {
  name: string;
  price: string;
  description: string;
  emoji: string;
};

export const COFFEE_BUNS_COMBOS: Combo[] = [
  {
    name: "Classic Bun + Regular Coffee",
    price: "$13.50",
    description: "One classic cinnamon bun with your regular coffee of choice.",
    emoji: "☕",
  },
  {
    name: "Speciality Bun + Regular Coffee",
    price: "$15.00",
    description: "A premium speciality bun with your regular coffee of choice.",
    emoji: "☕",
  },
  {
    name: "Classic Bun + Deluxe Latte",
    price: "$14.50",
    description: "A classic bun paired with a deluxe flavoured latte.",
    emoji: "☕",
  },
  {
    name: "Speciality Bun + Deluxe Latte",
    price: "$16.50",
    description: "A premium speciality bun paired with a deluxe flavoured latte.",
    emoji: "☕",
  },
];

export const DELUXE_LATTE_FLAVOURS = ["Pistachio", "Biscoff", "Red Velvet", "Matcha"] as const;

// ---- Drinks menu ----

export type SizePrice = {
  small?: string;
  medium?: string;
  large?: string;
};

export type DrinkItem = {
  name: string;
  description?: string;
  sizes?: SizePrice;
  badge?: string;
  price?: string; // flat price (no sizes)
};

export type DrinksMenu = {
  sizesNote: string;
  classics: DrinkItem[];
  specialityLattes: DrinkItem[];
  treats: DrinkItem[];
  customisations: DrinkItem[];
  frappes: DrinkItem[];
  softDrinks: DrinkItem[];
};

export const DRINKS_MENU: DrinksMenu = {
  sizesNote: "Available in Small 8oz • Medium 12oz • Large 16oz",
  classics: [
    {
      name: "Espresso",
      description: "Rich, concentrated shot of freshly pulled espresso.",
      sizes: { small: "$4.00" },
    },
    {
      name: "Long Black",
      description: "Double shot of espresso poured over hot water.",
      sizes: { small: "$4.50", medium: "$5.00", large: "$5.50" },
    },
    {
      name: "Flat White",
      description: "Silky micro-foam poured over a double ristretto.",
      sizes: { small: "$5.00", medium: "$5.50", large: "$6.00" },
    },
    {
      name: "Cappuccino",
      description: "Espresso topped with creamy steamed milk foam and cocoa dusting.",
      sizes: { small: "$5.00", medium: "$5.50", large: "$6.00" },
    },
    {
      name: "Latte",
      description: "Smooth espresso gently layered with velvety steamed milk.",
      sizes: { small: "$5.00", medium: "$5.50", large: "$6.00" },
    },
    {
      name: "Mocha",
      description: "Rich Dutch cocoa melted with espresso and steamed milk.",
      sizes: { small: "$5.50", medium: "$6.00", large: "$6.50" },
    },
    {
      name: "Hot Chocolate",
      description: "Decadent melted chocolate topped with creamy steamed milk.",
      sizes: { small: "$5.00", medium: "$5.50", large: "$6.50" },
    },
    {
      name: "Chai Latte",
      description: "Spiced aromatic black tea blend steamed with milk.",
      sizes: { small: "$5.50", medium: "$6.00", large: "$6.50" },
    },
    {
      name: "Tea",
      description: "English Breakfast or Earl Grey — premium loose-leaf and herbal teas.",
      sizes: { small: "$4.50" },
    },
  ],
  specialityLattes: [
    {
      name: "Pistachio Latte",
      description: "Roasted Sicilian pistachio syrup steamed with silky milk and espresso.",
      sizes: { small: "$6.50", medium: "$7.00", large: "$7.50" },
      badge: "Signature",
    },
    {
      name: "Biscoff Latte",
      description: "Lotus Biscoff caramel cookie spread melted into warm espresso latte.",
      sizes: { small: "$6.50", medium: "$7.00", large: "$7.50" },
      badge: "Fan Favourite",
    },
    {
      name: "Red Velvet Latte",
      description: "Crimson cocoa and sweet vanilla cream swirled latte.",
      sizes: { small: "$6.50", medium: "$7.00", large: "$7.50" },
      badge: "Signature",
    },
    {
      name: "Matcha Latte",
      description: "Authentic ceremonial stone-ground Japanese green tea with steamed milk.",
      sizes: { small: "$6.00", medium: "$6.50", large: "$7.00" },
      badge: "Popular",
    },
  ],
  treats: [
    {
      name: "Kids Fluffy",
      description: "Steamed warm frothed milk dusted with cocoa or pink sugar.",
      price: "$2.00",
      badge: "Kids",
    },
    {
      name: "Pup Cup",
      description: "Whipped cream doggy treat served in a mini cup.",
      price: "$2.50",
      badge: "Pets",
    },
  ],
  customisations: [
    {
      name: "Alternative Milk",
      description: "Oat, Almond, or Soy milk substitution.",
      price: "+$0.80",
    },
    {
      name: "Extra Coffee Shot",
      description: "Add an extra shot of rich espresso to any drink.",
      price: "+$0.80",
    },
    {
      name: "Syrup",
      description: "Vanilla, Caramel, Hazelnut, or seasonal flavour shot.",
      price: "+$0.80",
    },
  ],
  frappes: [
    {
      name: "Chocolate",
      description: "Rich, creamy blended iced chocolate frappe.",
      price: "$11.00",
    },
    {
      name: "White Chocolate",
      description: "Silky sweet white chocolate blended frappe.",
      price: "$11.00",
    },
    {
      name: "Coffee",
      description: "Bold espresso blended with ice and creamy milk.",
      price: "$11.00",
    },
    {
      name: "Matcha",
      description: "Stone-ground green tea blended with ice and milk.",
      price: "$11.00",
    },
    {
      name: "Caramel",
      description: "Buttery golden caramel swirled into a blended frappe.",
      price: "$11.00",
    },
    {
      name: "Piña Colada",
      description: "Tropical pineapple & coconut blended iced frappe.",
      price: "$11.00",
    },
  ],
  softDrinks: [
    { name: "Coke", price: "$3.50" },
    { name: "Coke Zero", price: "$3.50" },
    { name: "Sprite", price: "$3.50" },
    { name: "Fanta", price: "$3.50" },
    { name: "L&P", price: "$3.50" },
  ],
};

export { TOPPINGS, type Topping } from "./toppings-data";

export const BRAND = {
  name: "Froyo Buns",
  tagline: "Frozen Yoghurt • Cheeky Cinnamon Buns • Coffee",
  address: "51 Arran Drive, Silverdale",
  phone: "+64 21 571 0005",
  hours: "Open daily 7.30am – 9pm",
  email: "info@froyobuns.co.nz",
  logoImage:
    "https://vibe.filesafe.space/1790640811168876865/assets/9ec7c9b4-b012-48d8-81f4-4c86efba6fca.png",
  heroImage:
    "https://vibe.filesafe.space/1790640811168876865/attachments/071ae819-a3c3-438c-a600-1f8a73865ff1.gif",
  loyaltyCardImage:
    "https://vibe.filesafe.space/1790640811168876865/assets/490b461d-fbef-4c70-ace8-877efda60c3c.png",
  mascotImage:
    "https://vibe.filesafe.space/1790640811168876865/assets/9ec7c9b4-b012-48d8-81f4-4c86efba6fca.png",
};
