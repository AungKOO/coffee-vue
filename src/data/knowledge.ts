export interface Article {
  id: string;
  title: string;
  category: string;
  image: string;
  excerpt: string;
  content: string;
  readTime: string;
}

export const articles: Article[] = [
  {
    id: "coffee-origins",
    title: "The Journey of Coffee: From Bean to Cup",
    category: "History",
    image:
      "https://images.unsplash.com/photo-1447933601403-0c6688de566e?w=800&auto=format&fit=crop",
    excerpt:
      "Discover the fascinating journey of coffee from its origins in Ethiopia to becoming the world's favorite beverage.",
    readTime: "5 min",
    content: `
# The Journey of Coffee: From Bean to Cup

Coffee has a rich history that spans centuries and continents. The story begins in the ancient coffee forests of Ethiopia, where legend says a goat herder named Kaldi discovered coffee after noticing his goats became energetic after eating berries from a certain tree.

## Ancient Origins

The coffee plant, Coffea, is believed to have originated in Ethiopia around the 9th century. From there, coffee cultivation spread to Yemen, where Sufi monks used the beverage to stay awake during long hours of prayer.

## Global Expansion

By the 15th century, coffee was being grown in the Arabian Peninsula. The popularity of coffee houses (qahveh khaneh) grew in cities across the Middle East. These establishments became important centers for social interaction and intellectual exchange.

## Coffee Comes to Europe

European travelers to the Middle East brought back stories of an unusual dark black beverage. By the 17th century, coffee had made its way to Europe and was becoming popular across the continent. Coffee houses opened in cities like Venice, London, and Paris.

## The New World

Coffee plants were brought to the Americas in the early 18th century. Today, Central and South America produce much of the world's coffee, with Brazil being the largest producer globally.

## Modern Coffee Culture

Today, coffee is the second most traded commodity in the world after oil. The specialty coffee movement has revolutionized how we think about, prepare, and enjoy coffee, focusing on quality, sustainability, and the unique characteristics of different origins and processing methods.
    `,
  },
  {
    id: "roasting-levels",
    title: "Understanding Coffee Roast Levels",
    category: "Education",
    image:
      "https://images.unsplash.com/photo-1559056199-641a0ac8b55e?w=800&auto=format&fit=crop",
    excerpt:
      "Learn about different roast levels and how they affect the flavor profile of your coffee.",
    readTime: "4 min",
    content: `
# Understanding Coffee Roast Levels

The roasting process is crucial in determining the final flavor of your coffee. Let's explore the different roast levels and their characteristics.

## Light Roast

**Characteristics:**
- Light brown color
- No oil on surface
- Bright acidity
- Complex flavors

Light roasts preserve the original flavors of the coffee bean, allowing you to taste the unique characteristics of different origins. These roasts often have floral, fruity, or tea-like qualities.

**Best for:** Pour over, drip coffee
**Popular names:** Light City, Half City, Cinnamon Roast

## Medium Roast

**Characteristics:**
- Medium brown color
- Balanced flavor and aroma
- Moderate acidity
- Sweeter than light roast

Medium roasts offer a balance between the bean's original flavors and the flavors developed during roasting. This is the most popular roast level in the United States.

**Best for:** Most brewing methods
**Popular names:** American, Breakfast, City Roast

## Medium-Dark Roast

**Characteristics:**
- Rich, dark color
- Some oil on surface
- Slight bittersweet aftertaste
- Lower acidity

These roasts have a heavier body with less acidity. The roasting flavors become more prominent while still retaining some origin characteristics.

**Best for:** Espresso, French press
**Popular names:** Full City, Vienna Roast

## Dark Roast

**Characteristics:**
- Shiny black beans
- Oily surface
- Pronounced bitterness
- Very low acidity

Dark roasts emphasize roasting flavors over origin characteristics. These coffees have a bold, smoky flavor with chocolate or caramel notes.

**Best for:** Espresso, strong coffee drinks
**Popular names:** French, Italian, Spanish Roast

## Choosing Your Roast

The best roast is ultimately a matter of personal preference. Experiment with different levels to find what you enjoy most!
    `,
  },
  {
    id: "coffee-health",
    title: "Health Benefits of Coffee",
    category: "Health",
    image:
      "https://images.unsplash.com/photo-1509042239860-f550ce710b93?w=800&auto=format&fit=crop",
    excerpt:
      "Explore the science-backed health benefits of moderate coffee consumption.",
    readTime: "6 min",
    content: `
# Health Benefits of Coffee

Coffee is more than just a morning pick-me-up. Research has shown that moderate coffee consumption can offer several health benefits.

## Rich in Antioxidants

Coffee is one of the largest sources of antioxidants in the Western diet. These compounds help fight inflammation and may reduce the risk of several diseases.

## Boosts Physical Performance

Caffeine increases adrenaline levels and releases fatty acids from fat tissues, leading to improved physical performance. Many athletes drink coffee before workouts for this reason.

## May Lower Risk of Type 2 Diabetes

Studies have shown that people who drink coffee regularly have a lower risk of developing type 2 diabetes. The exact mechanisms are still being studied.

## Brain Health

Coffee consumption has been associated with:
- Improved memory and cognitive function
- Reduced risk of Alzheimer's disease
- Lower risk of Parkinson's disease
- Improved mood and reduced depression risk

## Liver Protection

Regular coffee consumption may help protect against liver diseases, including liver cancer and cirrhosis. Coffee drinkers have a lower risk of liver enzyme elevations.

## Heart Health

Contrary to old beliefs, moderate coffee consumption (3-5 cups per day) is not associated with increased cardiovascular risk and may even be protective against heart disease.

## Important Notes

While coffee has benefits, moderation is key:
- Limit intake to 3-4 cups per day
- Avoid excessive sugar and cream
- Be mindful of caffeine sensitivity
- Pregnant women should limit consumption
- Quality matters - choose high-quality, freshly roasted beans

Remember: Everyone responds to coffee differently. Listen to your body and adjust your consumption accordingly.
    `,
  },
  {
    id: "grinding-guide",
    title: "Coffee Grinding Guide",
    category: "Technique",
    image:
      "https://images.unsplash.com/photo-1595981234550-8c754e0fa613?w=800&auto=format&fit=crop",
    excerpt:
      "Master the art of coffee grinding and learn how grind size affects extraction and flavor.",
    readTime: "5 min",
    content: `
# Coffee Grinding Guide

Grinding your coffee beans just before brewing is one of the most important steps in making great coffee. Let's explore why grind size matters and how to choose the right one.

## Why Grind Size Matters

The grind size affects:
- **Extraction rate:** Finer grinds extract faster
- **Flavor balance:** Wrong size leads to over or under-extraction
- **Brewing time:** Different methods require different contact times
- **Overall taste:** Proper grind brings out the best flavors

## Grind Sizes Explained

### Extra Coarse
- **Texture:** Like cracked peppercorns
- **Best for:** Cold brew
- **Brew time:** 12-24 hours

### Coarse
- **Texture:** Like sea salt
- **Best for:** French press, percolator
- **Brew time:** 4-5 minutes

### Medium-Coarse
- **Texture:** Like rough sand
- **Best for:** Chemex, Clever dripper
- **Brew time:** 3-4 minutes

### Medium
- **Texture:** Like regular sand
- **Best for:** Drip coffee makers, pour over
- **Brew time:** 2-4 minutes

### Medium-Fine
- **Texture:** Finer than sand, not powder
- **Best for:** AeroPress, pour over, Moka pot
- **Brew time:** 1-3 minutes

### Fine
- **Texture:** Like table salt
- **Best for:** Espresso
- **Brew time:** 25-30 seconds

### Extra Fine
- **Texture:** Like flour
- **Best for:** Turkish coffee
- **Brew time:** Immediate

## Grinder Types

### Blade Grinders
- **Pros:** Affordable, compact
- **Cons:** Inconsistent grind, heats beans
- **Best for:** Beginners on a budget

### Burr Grinders
- **Pros:** Consistent grind, precise settings
- **Cons:** More expensive
- **Best for:** Anyone serious about coffee

**Burr types:**
- **Flat burrs:** More consistent, better for espresso
- **Conical burrs:** Quieter, less static, more forgiving

## Tips for Better Grinding

1. **Grind just before brewing** - Coffee starts going stale immediately after grinding
2. **Keep grinder clean** - Old grounds can make coffee taste stale
3. **Adjust as needed** - If coffee tastes bitter, grind coarser; if sour, grind finer
4. **Use a scale** - Consistency in dose leads to consistent results
5. **Quality matters** - Invest in a good grinder; it's more important than your brewer

## Troubleshooting

**Coffee tastes bitter/burnt:**
- Grind is too fine
- Over-extraction

**Coffee tastes sour/weak:**
- Grind is too coarse
- Under-extraction

**Uneven extraction:**
- Inconsistent grind size
- Consider upgrading grinder

Master your grind, and you're halfway to perfect coffee!
    `,
  },
  {
    id: "water-quality",
    title: "Water Quality and Coffee",
    category: "Technique",
    image:
      "https://images.unsplash.com/photo-1548839140-29a749e1cf4d?w=800&auto=format&fit=crop",
    excerpt:
      "Learn how water quality impacts your coffee and how to optimize it for the perfect brew.",
    readTime: "4 min",
    content: `
# Water Quality and Coffee

Coffee is 98% water, so water quality has a huge impact on the final taste of your brew. Let's dive into what makes water ideal for coffee.

## Why Water Matters

The minerals in water extract flavor compounds from coffee. Too few minerals result in flat, under-extracted coffee. Too many minerals can make coffee taste harsh or prevent proper extraction.

## Ideal Water Composition

### Mineral Content
- **Total Hardness:** 50-175 ppm CaCO3
- **Calcium Hardness:** 50-100 ppm CaCO3
- **Total Alkalinity:** 40-75 ppm
- **pH:** 6.5-7.5
- **Sodium:** 10 ppm or less

### Temperature
- **Ideal range:** 195-205°F (90-96°C)
- **Too hot:** Burns coffee, bitter taste
- **Too cool:** Under-extraction, sour taste

## Common Water Issues

### Hard Water
**Problem:** High mineral content
**Effects:** 
- Scale buildup in equipment
- Dull, flat flavor
- Poor extraction

**Solution:** Use water filter or softener

### Soft Water
**Problem:** Too few minerals
**Effects:**
- Weak, under-extracted coffee
- Lack of body

**Solution:** Add mineral packets or use bottled water

### Chlorinated Water
**Problem:** Chlorine/chloramine treatment
**Effects:**
- Chemical, medicinal taste
- Masks coffee flavors

**Solution:** Carbon filter or let water sit overnight

### Distilled Water
**Problem:** No minerals
**Effects:**
- Flat, lifeless coffee
- Can damage equipment

**Solution:** Don't use for coffee!

## Water Solutions

### Filtered Water
- **Pitcher filters:** Good for removing chlorine
- **Inline filters:** Best for consistency
- **Reverse osmosis:** Needs remineralization

### Bottled Water
Choose brands with balanced mineral content. Good options often include spring water with moderate TDS (Total Dissolved Solids).

### Third Wave Water
Special packets that add ideal minerals to distilled water for perfect coffee brewing water.

## Testing Your Water

1. **Taste test:** Taste your water plain - if it doesn't taste good, your coffee won't either
2. **TDS meter:** Measure total dissolved solids
3. **Home test kit:** Check pH and hardness
4. **Compare:** Brew the same coffee with different waters

## Quick Tips

- Always use fresh, cold water
- Never use hot tap water (contains more minerals and contaminants)
- Clean your kettle regularly to prevent mineral buildup
- If your coffee tastes different, check your water first
- Temperature matters as much as quality

## The Bottom Line

Good water is the foundation of great coffee. If you're serious about coffee, invest in water quality along with quality beans and equipment.

Remember: The best water for coffee tastes clean, has balanced minerals, and is the right temperature!
    `,
  },
  {
    id: "sustainable-coffee",
    title: "Sustainable Coffee: What You Need to Know",
    category: "Sustainability",
    image:
      "https://images.unsplash.com/photo-1500479694472-551d1fb6258d?w=800&auto=format&fit=crop",
    excerpt:
      "Understand the importance of sustainable coffee practices and how to make eco-friendly choices.",
    readTime: "7 min",
    content: `
# Sustainable Coffee: What You Need to Know

As coffee lovers, we have a responsibility to ensure that our favorite beverage is produced sustainably. Here's what you need to know about sustainable coffee.

## Why Sustainability Matters

Coffee is grown in some of the world's most biodiverse regions. Unsustainable farming practices can lead to:
- Deforestation
- Soil erosion
- Water pollution
- Loss of biodiversity
- Poor working conditions for farmers

## Certifications to Look For

### Fair Trade
**What it means:**
- Fair prices for farmers
- Safe working conditions
- Environmental standards
- Community development

**Look for:** Fair Trade Certified logo

### Organic
**What it means:**
- No synthetic pesticides or fertilizers
- Soil health preservation
- Better for environment and workers

**Look for:** USDA Organic or EU Organic certification

### Rainforest Alliance
**What it means:**
- Forest conservation
- Wildlife protection
- Worker welfare
- Sustainable farming practices

**Look for:** Rainforest Alliance Certified seal

### Bird Friendly
**What it means:**
- Shade-grown coffee
- Habitat for migratory birds
- Organic certification required
- Forest canopy preservation

**Look for:** Smithsonian Bird Friendly certification

### Direct Trade
**What it means:**
- Direct relationship between roaster and farmer
- Premium prices
- Quality focus
- Transparent transactions

**Note:** Not a formal certification but often indicates sustainable practices

## Sustainable Practices

### Shade-Grown Coffee
Growing coffee under tree canopy:
- Preserves forests
- Protects wildlife
- Better coffee quality
- Carbon sequestration

### Water Conservation
- Minimal water processing methods
- Wastewater treatment
- Water recycling systems

### Soil Health
- Composting
- Crop rotation
- Cover crops
- Minimal tillage

### Energy Efficiency
- Solar drying
- Efficient processing
- Renewable energy use

## What You Can Do

### As a Consumer

1. **Buy certified coffee**
   - Look for certifications
   - Research brands
   - Support ethical companies

2. **Reduce waste**
   - Use reusable filters
   - Compost coffee grounds
   - Bring your own cup
   - Buy in bulk

3. **Choose quality over quantity**
   - Buy specialty coffee
   - Support small roasters
   - Value transparency

4. **Learn and share**
   - Educate yourself
   - Spread awareness
   - Support advocacy groups

### At Home

1. **Proper disposal**
   - Compost grounds
   - Recycle packaging
   - Reuse containers

2. **Energy efficiency**
   - Use energy-efficient equipment
   - Boil only what you need
   - Maintain your equipment

3. **Minimize waste**
   - Use reusable filters
   - Measure carefully
   - Store properly to prevent staleness

## The Future of Coffee

Climate change threatens coffee production. Sustainable practices help:
- Build resilient farms
- Adapt to changing conditions
- Preserve coffee for future generations
- Protect farming communities

## Supporting Change

### Direct Support
- Buy from importers who work directly with farmers
- Visit coffee origin countries responsibly
- Support coffee farming cooperatives

### Indirect Support
- Support organizations working on coffee sustainability
- Advocate for fair trade policies
- Share information about sustainable coffee

## The Bottom Line

Every cup of coffee we drink connects us to farmers, ecosystems, and communities around the world. By choosing sustainable coffee, we can:
- Ensure fair treatment of farmers
- Protect the environment
- Preserve biodiversity
- Secure the future of coffee
- Enjoy better quality coffee

Remember: Sustainable coffee is not just better for the world—it often tastes better too!

## Resources

- Coffee Kids
- Coffee Collective
- World Coffee Research
- Sustainable Coffee Challenge
- Equal Exchange

Start your sustainable coffee journey today, one cup at a time!
    `,
  },
];
