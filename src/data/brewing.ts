export interface BrewingMethod {
  id: string;
  name: string;
  description: string;
  image: string;
  difficulty: "Easy" | "Medium" | "Hard";
  brewTime: string;
  steps: string[];
  equipment: string[];
  tips: string[];
}

export const brewingMethods: BrewingMethod[] = [
  {
    id: "pour-over",
    name: "Pour Over",
    description:
      "A manual brewing method that allows for precise control over the brewing process, resulting in a clean, flavorful cup.",
    image:
      "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=800&auto=format&fit=crop",
    difficulty: "Medium",
    brewTime: "3-4 minutes",
    steps: [
      "Heat water to 195-205°F (90-96°C)",
      "Place filter in dripper and rinse with hot water",
      "Add 20-25g of medium-fine ground coffee",
      "Start timer and pour 50g of water in circular motion (bloom)",
      "Wait 30 seconds for coffee to degas",
      "Continue pouring in slow, circular motions until you reach 350g",
      "Let coffee finish dripping (should complete around 3-4 minutes)",
      "Enjoy your perfectly brewed pour over!",
    ],
    equipment: [
      "Pour over dripper (V60, Chemex, Kalita)",
      "Paper filters",
      "Gooseneck kettle",
      "Scale",
      "Grinder",
    ],
    tips: [
      "Use fresh, quality beans ground just before brewing",
      "Maintain consistent water temperature",
      "Pour in slow, steady circles from center outward",
      "Adjust grind size if brew time is too fast or slow",
    ],
  },
  {
    id: "french-press",
    name: "French Press",
    description:
      "An immersion brewing method that produces a full-bodied, rich coffee with natural oils and sediment.",
    image:
      "https://images.unsplash.com/photo-1511920170033-f8396924c348?w=800&auto=format&fit=crop",
    difficulty: "Easy",
    brewTime: "4-5 minutes",
    steps: [
      "Heat water to 195-205°F (90-96°C)",
      "Add 30g of coarse ground coffee to French press",
      "Start timer and pour 500g of hot water over grounds",
      "Stir gently to ensure all grounds are saturated",
      "Place lid on top (don't plunge yet)",
      "Wait 4 minutes",
      "Slowly press plunger down",
      "Pour immediately to avoid over-extraction",
    ],
    equipment: ["French press", "Grinder", "Kettle", "Timer"],
    tips: [
      "Use coarse grind to prevent sediment",
      "Don't let coffee sit after brewing",
      "Clean press thoroughly after each use",
      "Pre-heat the carafe with hot water",
    ],
  },
  {
    id: "espresso",
    name: "Espresso",
    description:
      "A concentrated coffee brewed by forcing hot water through finely-ground coffee under high pressure.",
    image:
      "https://images.unsplash.com/photo-1510591509098-f4fdc6d0ff04?w=800&auto=format&fit=crop",
    difficulty: "Hard",
    brewTime: "25-30 seconds",
    steps: [
      "Turn on espresso machine and let it warm up",
      "Grind 18-20g of coffee very fine",
      "Distribute grounds evenly in portafilter",
      "Tamp with 30lbs of pressure",
      "Lock portafilter into machine",
      "Start extraction immediately",
      "Stop when you reach 36-40g of espresso (25-30 seconds)",
      "Serve immediately",
    ],
    equipment: [
      "Espresso machine",
      "Grinder",
      "Tamper",
      "Scale",
      "Shot glasses",
    ],
    tips: [
      "Dial in your grind size for proper extraction time",
      "Keep your equipment clean for best flavor",
      "Use fresh beans within 2 weeks of roasting",
      "Watch for golden-brown crema on top",
    ],
  },
  {
    id: "cold-brew",
    name: "Cold Brew",
    description:
      "Coffee steeped in cold water for 12-24 hours, creating a smooth, less acidic concentrate.",
    image:
      "https://images.unsplash.com/photo-1517487881594-2787fef5ebf7?w=800&auto=format&fit=crop",
    difficulty: "Easy",
    brewTime: "12-24 hours",
    steps: [
      "Coarsely grind 100g of coffee",
      "Combine grounds with 1 liter of cold water in container",
      "Stir to ensure all grounds are saturated",
      "Cover and refrigerate for 12-24 hours",
      "Strain through fine mesh strainer or coffee filter",
      "Dilute concentrate with water or milk to taste",
      "Serve over ice",
      "Store concentrate in fridge for up to 2 weeks",
    ],
    equipment: [
      "Large jar or pitcher",
      "Fine mesh strainer or filters",
      "Grinder",
    ],
    tips: [
      "Use a 1:8 coffee to water ratio for concentrate",
      "Longer steep time = stronger flavor",
      "Store in airtight container",
      "Experiment with different beans for unique flavors",
    ],
  },
  {
    id: "aeropress",
    name: "AeroPress",
    description:
      "A versatile brewing device that uses air pressure to extract rich, full-bodied coffee quickly.",
    image:
      "https://images.unsplash.com/photo-1611564228658-99f8d0b6c3b7?w=800&auto=format&fit=crop",
    difficulty: "Easy",
    brewTime: "1-2 minutes",
    steps: [
      "Heat water to 175-185°F (80-85°C)",
      "Insert paper filter and rinse",
      "Add 15-17g of medium-fine ground coffee",
      "Pour 250g of water and stir for 10 seconds",
      "Insert plunger and pull up slightly to create vacuum",
      "Wait 1 minute",
      "Press down slowly over 20-30 seconds",
      "Dilute to taste if desired",
    ],
    equipment: ["AeroPress", "Paper filters", "Grinder", "Kettle", "Stirrer"],
    tips: [
      "Try inverted method for more control",
      "Experiment with water temperature and brew time",
      "Use fresh paper filters for best taste",
      "Clean immediately after use",
    ],
  },
  {
    id: "moka-pot",
    name: "Moka Pot",
    description:
      "A stovetop coffee maker that brews strong coffee by passing boiling water through ground coffee.",
    image:
      "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&auto=format&fit=crop",
    difficulty: "Medium",
    brewTime: "5-10 minutes",
    steps: [
      "Fill bottom chamber with water up to valve",
      "Add 15-20g medium-fine ground coffee to basket",
      "Level grounds without tamping",
      "Assemble moka pot tightly",
      "Place on medium-low heat",
      "Leave lid open to watch brewing",
      "Remove from heat when you hear sputtering",
      "Serve immediately",
    ],
    equipment: ["Moka pot", "Grinder", "Stovetop"],
    tips: [
      "Use pre-heated water to prevent bitter taste",
      "Don't pack the grounds",
      "Remove from heat before all water is pushed through",
      "Clean gasket and filter regularly",
    ],
  },
];
