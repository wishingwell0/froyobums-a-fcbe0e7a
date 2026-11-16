export type Topping = {
  name: string;
  description: string;
  emoji?: string;
  image?: string;
  category: "Fresh Fruit" | "Creams & Sauces" | "Crunch" | "Nuts & Seeds" | "Boba" | "Sweet Treats";
};

export const TOPPINGS: Topping[] = [
  // Fresh Fruit
  {
    name: "Fresh Strawberries",
    description: "Sweet, juicy strawberries sliced fresh every morning.",
    image:
      "https://vibe.filesafe.space/1790640811168876865/attachments/990ce33c-2088-4c91-b99d-b32223bcd4d2.png",
    category: "Fresh Fruit",
  },
  {
    name: "Fresh Kiwi Fruit",
    description: "Bright, tangy kiwi for a tropical zing.",
    image:
      "https://vibe.filesafe.space/1790640811168876865/attachments/b5fe58c3-3473-44c5-93b7-1298976ae775.png",
    category: "Fresh Fruit",
  },
  {
    name: "Grapes",
    description: "Crisp, refreshing grapes — little bursts of sweetness.",
    image:
      "https://vibe.filesafe.space/1790640811168876865/attachments/aae77c4a-94b5-400e-9e17-c7c8bd3364d8.png",
    category: "Fresh Fruit",
  },
  {
    name: "Frozen Mango",
    description: "Chilled tropical mango cubes for a cool, sweet bite.",
    image:
      "https://vibe.filesafe.space/1790640811168876865/attachments/5346d752-2c3e-418d-b142-58bb1c510f45.png",
    category: "Fresh Fruit",
  },
  {
    name: "Passionfruit",
    description: "Tangy, aromatic golden passionfruit pulp bursting with flavour.",
    image:
      "https://vibe.filesafe.space/1790640811168876865/attachments/3f6cb030-243d-439b-81ce-e0e2ec8401a3.png",
    category: "Fresh Fruit",
  },
  {
    name: "Lychee",
    description: "Delicate, sweet, and juicy floral lychee fruit pieces.",
    image:
      "https://vibe.filesafe.space/1790640811168876865/attachments/8f806b01-13f4-474d-85f7-140b5ff0c74d.png",
    category: "Fresh Fruit",
  },
  {
    name: "BANANAS IN CARAMEL SAUCE",
    description: "Sweet banana slices drizzled in rich golden caramel.",
    image:
      "https://vibe.filesafe.space/1790640811168876865/attachments/19d9578d-8a8b-4630-b1e2-d7ea71502ba9.png",
    category: "Fresh Fruit",
  },
  {
    name: "Mixed Berries",
    description: "A luscious medley of raspberries, blackberries, blueberries, and strawberries.",
    image:
      "https://vibe.filesafe.space/1790640811168876865/attachments/f38299f1-6f3e-4061-a20c-f418c53db10b.png",
    category: "Fresh Fruit",
  },
  {
    name: "Fresh Pineapple",
    description: "Sweet and juicy golden pineapple chunks with a refreshing tropical tang.",
    image:
      "https://vibe.filesafe.space/1790640811168876865/attachments/965261db-8a50-4120-99c9-9683086e6c67.png",
    category: "Fresh Fruit",
  },

  // Creams & Sauces
  {
    name: "CARAMEL SAUCE",
    description: "Slow-cooked velvety caramelised milk cream swirl.",
    image:
      "https://vibe.filesafe.space/1790640811168876865/attachments/a3dde2f1-dd0d-4f4d-863f-1a858fb9885f.png",
    category: "Creams & Sauces",
  },
  {
    name: "Nutella Swirl",
    description: "Rich, decadent chocolate hazelnut spread swirled to perfection.",
    image:
      "https://vibe.filesafe.space/1790640811168876865/attachments/b0627aac-bf8c-42d2-83e6-60bbabe72ab0.png",
    category: "Creams & Sauces",
  },
  {
    name: "WHITTAKER'S MILK CHOCOLATE",
    description: "Silky Whittaker's milk chocolate on tap",
    image:
      "https://vibe.filesafe.space/1790640811168876865/attachments/14f6db2f-088f-4624-9f07-935890650f68.png",
    category: "Creams & Sauces",
  },
  {
    name: "Pistachio Cream",
    description: "Smooth, velvety Sicilian pistachio cream swirled on top.",
    image:
      "https://vibe.filesafe.space/1790640811168876865/attachments/a90a7225-61f3-4d40-9031-0882909bf645.png",
    category: "Creams & Sauces",
  },
  {
    name: "Biscoff Sauce",
    description: "Warm caramelised spiced Biscoff cookie butter spread.",
    image:
      "https://vibe.filesafe.space/1790640811168876865/attachments/5f5db7b6-deca-4ac1-a74f-e718fe2816c8.png",
    category: "Creams & Sauces",
  },
  {
    name: "Dubai Filling",
    description:
      "The signature filling of a Dubai chocolate bar – a rich, texturally contrasting blend inspired by the traditional Middle Eastern dessert knafeh.",
    image:
      "https://vibe.filesafe.space/1790640811168876865/attachments/018c853d-b55c-4f2f-b784-44e636aeea47.png",
    category: "Creams & Sauces",
  },
  {
    name: "Caramel Popcorn Sauce",
    description: "Decadent caramel sauce loaded with crunchy caramel popcorn bites.",
    image:
      "https://vibe.filesafe.space/1790640811168876865/attachments/bac6dc5b-61f0-4098-9028-fdbb9b5a58a9.png",
    category: "Creams & Sauces",
  },

  // Nuts & Seeds
  {
    name: "Sprinkle nuts",
    description: "Finely chopped roasted nuts for the ultimate nutty sprinkle.",
    image:
      "https://vibe.filesafe.space/1790640811168876865/attachments/cec4d9ba-f5fc-4a98-b92b-6b9897f8dcec.png",
    category: "Nuts & Seeds",
  },
  {
    name: "Flaked Almonds",
    description: "Delicate toasted almond flakes with a gentle, nutty crunch.",
    image:
      "https://vibe.filesafe.space/1790640811168876865/attachments/c12f559d-c50b-4384-b7d4-80a5ec453f40.png",
    category: "Nuts & Seeds",
  },
  {
    name: "Shredded Coconut",
    description: "Light and airy tropical coconut shreds for a sweet finish.",
    image:
      "https://vibe.filesafe.space/1790640811168876865/attachments/26842be8-9594-43c7-a43d-59d5a95ac51f.png",
    category: "Nuts & Seeds",
  },
  {
    name: "Honey Roasted Cashews",
    description: "Crunchy golden cashews glazed in sweet, buttery honey.",
    image:
      "https://vibe.filesafe.space/1790640811168876865/attachments/c5beed4f-df5b-4195-916a-05760e422b95.png",
    category: "Nuts & Seeds",
  },
  {
    name: "Crunchy Granola",
    description: "Toasted golden oat clusters packed with toasted honey goodness.",
    image:
      "https://vibe.filesafe.space/1790640811168876865/attachments/ac5d359f-32a7-4101-b7e0-eb1cb3fe17e2.png",
    category: "Nuts & Seeds",
  },
  {
    name: "Caramel Popcorn",
    description: "Crisp popped corn tumbled in rich, glossy sweet caramel.",
    image:
      "https://vibe.filesafe.space/1790640811168876865/attachments/684762ff-44e8-466d-9acf-17584071052f.png",
    category: "Nuts & Seeds",
  },

  // Boba
  {
    name: "Coconut Jelly",
    description: "Chewy, sweet nata de coco cubes for the perfect texture pop.",
    image:
      "https://vibe.filesafe.space/1790640811168876865/attachments/269a491f-399d-4a9a-9786-9f0d7588ee5e.png",
    category: "Boba",
  },
  {
    name: "Mango Popping Boba",
    description: "Juicy popping boba filled with luscious tropical mango juice.",
    image:
      "https://vibe.filesafe.space/1790640811168876865/attachments/aa765f59-4c57-450d-acad-f4bd781fed8e.png",
    category: "Boba",
  },
  {
    name: "Strawberry Popping Boba",
    description: "Bright red bursting boba packed with sweet strawberry flavour.",
    image:
      "https://vibe.filesafe.space/1790640811168876865/attachments/3c051a2c-1d9e-4bf4-b340-b04b1d4f6f96.png",
    category: "Boba",
  },

  // Sweet Treats
  {
    name: "GUMMY WATERMELON",
    description: "Zesty, sugar-dusted sour watermelon gummy slices with a tangy punch.",
    image:
      "https://vibe.filesafe.space/1790640811168876865/attachments/d43dcffe-aaf3-4fd6-a50f-6971b3c922e7.png",
    category: "Sweet Treats",
  },
  {
    name: "JELLY TOTS",
    description: "Rainbow sugar-coated fruit jelly drops bursting with sweet & sour flavours.",
    image:
      "https://vibe.filesafe.space/1790640811168876865/attachments/498234de-3875-444c-9687-d18bf06df79e.png",
    category: "Sweet Treats",
  },
  {
    name: "JERSEY CARAMELS",
    description: "Rich, chewy layered dairy cream caramel cubes with buttery decadence.",
    image:
      "https://vibe.filesafe.space/1790640811168876865/attachments/482d2710-df96-4adf-9715-5738897fafa8.png",
    category: "Sweet Treats",
  },
  {
    name: "LOTUS BISCOFF BISCUITS",
    description:
      "A deliciously crunchy, caramelised biscuit with a rich, buttery sweetness and a hint of warm cinnamon spice.",
    image:
      "https://vibe.filesafe.space/1790640811168876865/attachments/3ccff390-ecca-4e01-96b0-4c1ee77f499c.png",
    category: "Sweet Treats",
  },
  {
    name: "FUDGE BROWNIES COOKIE DOUGH",
    description:
      "Rich, fudgy brownie cookie dough, filled with delicious Belgian chocolate chips. 100% vegan",
    image:
      "https://vibe.filesafe.space/1790640811168876865/attachments/054fae12-dcce-42ea-a56a-a3542e1f8361.png",
    category: "Sweet Treats",
  },
  {
    name: "BROWNIES",
    description: "Rich, chewy chocolate brownie bites with crisp crackly tops.",
    image:
      "https://vibe.filesafe.space/1790640811168876865/attachments/af45d6b2-8a71-4602-8bfd-78dd7c296a6d.png",
    category: "Sweet Treats",
  },
  {
    name: "CLASSIC CHOCOLATE CHIP COOKIE DOUGH",
    description: "Brown sugar cookie dough filled with Belgian chocolate chips. 100% vegan.",
    image:
      "https://vibe.filesafe.space/1790640811168876865/attachments/b7c8b7fc-4545-43be-9f23-e5446a06d88c.png",
    category: "Sweet Treats",
  },
  {
    name: "PEPPERMINT CRISP CRUMBLE",
    description:
      "An iconic milk-chocolate-covered bar filled with crunchy, bright-green, mint-flavoured sugar candy.",
    image:
      "https://vibe.filesafe.space/1790640811168876865/attachments/3e358a6b-dcb9-4cb1-9afe-b914a3dd1673.png",
    category: "Sweet Treats",
  },
  {
    name: "CHOCOLATE FISH",
    description: "Classic Kiwi favourite — strawberry marshmallow coated in smooth milk chocolate.",
    image:
      "https://vibe.filesafe.space/1790640811168876865/attachments/1a94406e-905f-46af-8432-9e73ec6f30e9.png",
    category: "Sweet Treats",
  },
  {
    name: "BISCOFF CRUNCH",
    description: "Delicious crunchy Biscoff topping.",
    image:
      "https://vibe.filesafe.space/1790640811168876865/attachments/f4930b73-3ca0-4d46-9967-bae1d69376ea.png",
    category: "Sweet Treats",
  },
  {
    name: "PEPPERMINT CRISP CARAMEL TART",
    description: "A classic, no-bake dessert known for its rich, sweet and minty flavour.",
    image:
      "https://vibe.filesafe.space/1790640811168876865/attachments/113bc056-f81d-4cd0-9807-6133f0674e77.png",
    category: "Sweet Treats",
  },
  {
    name: "PINK & WHITE MARSHMALLOWS",
    description: "Fluffy pink and white pillow-soft bite-sized marshmallows.",
    image:
      "https://vibe.filesafe.space/1790640811168876865/attachments/528ec0e2-4a2f-4b5b-be60-48936c48d85c.png",
    category: "Sweet Treats",
  },
  {
    name: "LOTUS BISCOFF CRUMBLE",
    description:
      "Crushed Lotus Biscoff biscuits – irresistibly crunchy, golden caramelised biscuits with a delicious blend of rich caramel flavour and warm cinnamon spice.",
    image:
      "https://vibe.filesafe.space/1790640811168876865/attachments/9a0c0ce8-12aa-4856-9ab3-840876261a39.png",
    category: "Sweet Treats",
  },
  {
    name: "MILO POWDER",
    description: "Rich malted chocolate crunch powder dusted straight over your swirl.",
    image:
      "https://vibe.filesafe.space/1790640811168876865/attachments/2770011e-f114-42b8-94b7-97e0d2764fba.png",
    category: "Sweet Treats",
  },
  {
    name: "OREOS BISCUITS",
    description: "Classic chocolate cookie sandwiches stuffed with sweet vanilla creme.",
    image:
      "https://vibe.filesafe.space/1790640811168876865/attachments/60041972-3a81-43d8-8109-55e6af9f79b3.png",
    category: "Sweet Treats",
  },
  {
    name: "SMARTIES",
    description: "Crispy candy shells packed with rich milk chocolate melt-in-your-mouth centres.",
    image:
      "https://vibe.filesafe.space/1790640811168876865/attachments/b4030f64-f9e3-4534-bf1f-6d3e47b84857.png",
    category: "Sweet Treats",
  },
  {
    name: "SOUR BELTS",
    description: "Chewy, vibrant multicoloured sour straps coated in tangy zesty sugar crystals.",
    image:
      "https://vibe.filesafe.space/1790640811168876865/attachments/ce1e9451-4822-4d01-a086-3c354334cefc.png",
    category: "Sweet Treats",
  },
  {
    name: "SOUR COLA",
    description: "Nostalgic fizzy cola gummy bottles dusted in tangy sweet sour sugar.",
    image:
      "https://vibe.filesafe.space/1790640811168876865/attachments/936d6f06-c41e-4d32-b53b-64d1f321f63e.png",
    category: "Sweet Treats",
  },
  {
    name: "SOUR STRAWBERRIES",
    description: "Juicy, sugar-sparkled strawberry gummies bursting with sweet berry flavour.",
    image:
      "https://vibe.filesafe.space/1790640811168876865/attachments/06d8f9e2-e494-4abf-857f-291d35cc81e6.png",
    category: "Sweet Treats",
  },
  {
    name: "SOUR WORMS",
    description: "Vibrant, sugar-dusted neon gummy worms packed with sweet and tangy fruit punch.",
    image:
      "https://vibe.filesafe.space/1790640811168876865/attachments/17844c6c-f1c3-4344-b26d-6c5d79954768.png",
    category: "Sweet Treats",
  },
];
