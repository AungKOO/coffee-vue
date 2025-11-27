export interface Coffee {
  id: string;
  name: string;
  description: string;
  image: string;
  origin: string;
  roastLevel: string;
  flavorNotes: string[];
  brewingMethods: string[];
}

export const coffees: Coffee[] = [
  {
    id: "espresso",
    name: "Espresso",
    description:
      "A concentrated coffee brewed by forcing hot water through finely-ground coffee beans under high pressure.",
    image:
      "https://images.unsplash.com/photo-1510591509098-f4fdc6d0ff04?w=800&auto=format&fit=crop",
    origin: "Italy",
    roastLevel: "Dark",
    flavorNotes: ["Bold", "Intense", "Rich"],
    brewingMethods: ["Espresso Machine"],
  },
  {
    id: "cappuccino",
    name: "Cappuccino",
    description:
      "An Italian coffee drink prepared with espresso, hot milk, and steamed milk foam.",
    image:
      "https://images.unsplash.com/photo-1572442388796-11668a67e53d?w=800&auto=format&fit=crop",
    origin: "Italy",
    roastLevel: "Medium-Dark",
    flavorNotes: ["Creamy", "Balanced", "Smooth"],
    brewingMethods: ["Espresso Machine", "Milk Frother"],
  },
  {
    id: "latte",
    name: "Latte",
    description:
      "A coffee drink made with espresso and steamed milk, topped with a small amount of milk foam.",
    image:
      "https://images.unsplash.com/photo-1561882468-9110e03e0f78?w=800&auto=format&fit=crop",
    origin: "Italy",
    roastLevel: "Medium",
    flavorNotes: ["Mild", "Creamy", "Sweet"],
    brewingMethods: ["Espresso Machine", "Milk Steamer"],
  },
  {
    id: "americano",
    name: "Americano",
    description:
      "Espresso shots diluted with hot water, creating a coffee similar in strength to drip coffee.",
    image:
      "https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?w=800&auto=format&fit=crop",
    origin: "United States",
    roastLevel: "Medium-Dark",
    flavorNotes: ["Bold", "Clean", "Smooth"],
    brewingMethods: ["Espresso Machine"],
  },
  {
    id: "cold-brew",
    name: "Cold Brew",
    description:
      "Coffee brewed with cold water over an extended period, resulting in a smooth, less acidic taste.",
    image:
      "https://images.unsplash.com/photo-1517487881594-2787fef5ebf7?w=800&auto=format&fit=crop",
    origin: "Japan",
    roastLevel: "Medium",
    flavorNotes: ["Smooth", "Sweet", "Low Acidity"],
    brewingMethods: ["Cold Brew Maker", "French Press"],
  },
  {
    id: "pour-over",
    name: "Pour Over",
    description:
      "Coffee made by pouring hot water over coffee grounds in a filter, allowing it to drip through.",
    image:
      "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=800&auto=format&fit=crop",
    origin: "Germany",
    roastLevel: "Light-Medium",
    flavorNotes: ["Bright", "Clean", "Complex"],
    brewingMethods: ["V60", "Chemex", "Kalita Wave"],
  },
  {
    id: "french-press",
    name: "French Press",
    description:
      "Full-bodied coffee made by steeping coarsely ground beans in hot water and pressing them down.",
    image:
      "https://images.unsplash.com/photo-1511920170033-f8396924c348?w=800&auto=format&fit=crop",
    origin: "France",
    roastLevel: "Medium",
    flavorNotes: ["Full-bodied", "Rich", "Robust"],
    brewingMethods: ["French Press"],
  },
  {
    id: "mocha",
    name: "Mocha",
    description:
      "A chocolate-flavored variant of a latte, made with espresso, steamed milk, and chocolate.",
    image:
      "https://images.unsplash.com/photo-1578374173703-8c7647e6dc5e?w=800&auto=format&fit=crop",
    origin: "United States",
    roastLevel: "Medium",
    flavorNotes: ["Chocolate", "Sweet", "Creamy"],
    brewingMethods: ["Espresso Machine"],
  },
  {
    id: "macchiato",
    name: "Macchiato",
    description:
      'Espresso with a small amount of foamed milk on top, meaning "marked" or "stained" in Italian.',
    image:
      "https://images.unsplash.com/photo-1579992357154-faf4bde95b3d?w=800&auto=format&fit=crop",
    origin: "Italy",
    roastLevel: "Dark",
    flavorNotes: ["Strong", "Intense", "Slightly Sweet"],
    brewingMethods: ["Espresso Machine"],
  },
  {
    id: "turkish-coffee",
    name: "Turkish Coffee",
    description:
      "Very finely ground coffee simmered in a pot with sugar, creating a strong, unfiltered brew.",
    image:
      "https://images.unsplash.com/photo-1610889556528-9a770e32642f?w=800&auto=format&fit=crop",
    origin: "Turkey",
    roastLevel: "Medium-Dark",
    flavorNotes: ["Strong", "Thick", "Aromatic"],
    brewingMethods: ["Cezve/Ibrik"],
  },
  {
    id: "affogato",
    name: "Affogato",
    description:
      "A dessert coffee consisting of a scoop of vanilla ice cream topped with a shot of hot espresso.",
    image:
      "https://images.unsplash.com/photo-1563729784474-d77dbb933a9e?w=800&auto=format&fit=crop",
    origin: "Italy",
    roastLevel: "Dark",
    flavorNotes: ["Sweet", "Creamy", "Indulgent"],
    brewingMethods: ["Espresso Machine"],
  },
  {
    id: "flat-white",
    name: "Flat White",
    description:
      "An espresso-based drink with microfoam (steamed milk with fine bubbles), originating from Australia/New Zealand.",
    image:
      "https://images.unsplash.com/photo-1542652694-40abf526446e?w=800&auto=format&fit=crop",
    origin: "Australia/New Zealand",
    roastLevel: "Medium",
    flavorNotes: ["Velvety", "Smooth", "Balanced"],
    brewingMethods: ["Espresso Machine"],
  },
];
