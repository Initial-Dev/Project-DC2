const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function seed() {
  try {
    // Insérer des produits
    await prisma.product.createMany({
      data: [
        {
          "brand": "Adidas",
          "category": "men",
          "image": "https://image.goat.com/attachments/product_template_pictures/images/092/765/985/original/IG6303.png.png",
          "description": "The adidas Crazy IIInfinity \u00e2\u20ac\u02dcStormtrooper\u00e2\u20ac\u2122 presents a retro-inspired lifestyle silhouette that takes design cues from the Crazy 1, formerly known as The Kobe. The upper features a zippered shroud in black textile, contrasted by white molded foam paneling with debossed three-stripes at the midfoot. A reinforced rubber toe cap gives a nod to The Kobe 2, along with adidas\u00e2\u20ac\u2122 shell-toe heritage. Underfoot, the herringbone-traction rubber outsole reveals an exposed TPU shank for midfoot stability.",
          "price": 160,
          "name": "Crazy Iiinfinity Stormtrooper",
          "variants": "Core Black, Cloud White, Chalk White"
      },
      {
          "brand": "Adidas",
          "category": "men",
          "image": "https://image.goat.com/attachments/product_template_pictures/images/096/506/877/original/IH7516.png.png",
          "description": "",
          "price": 160,
          "name": "Harden Vol. 7 Year Of The Dragon (2024)",
          "variants": "Off-White, Black, Metallic Gold"
      },
      {
          "brand": "Adidas",
          "category": "men",
          "image": "https://image.goat.com/attachments/product_template_pictures/images/096/421/316/original/IH7517.png.png",
          "description": "",
          "price": 120,
          "name": "D.o.n. Issue #5 Year Of The Dragon (2024)",
          "variants": "Core White, Matte Gold, Halo Gold"
      },
      {
          "brand": "Puma",
          "category": "men",
          "image": "https://images.stockx.com/images/Puma-Clyde-Made-in-Japan-Blue-Blue-Japan-Navy .jpg?fit=fill&bg=FFFFFF&w=500&h=500&fm=webp&auto=compress&trim=color&q=90&dpr=2&updated_at=1704187809",
          "description": "",
          "price": 270,
          "name": "Clyde Made In Japan Blue Blue Japan Navy",
          "variants": "Blue, Clyde Blue, Blue"
      },
      {
          "brand": "Nike",
          "category": "men",
          "image": "https://image.goat.com/attachments/product_template_pictures/images/095/591/040/original/FQ8109_331.png.png",
          "description": "",
          "price": 270,
          "name": "Zoomx Vaporfly 3 Ekiden Pack",
          "variants": "Luminous Green, Crimson Tint, Volt, Black"
      },
      {
          "brand": "Adidas",
          "category": "men",
          "image": "https://image.goat.com/attachments/product_template_pictures/images/095/520/751/original/IF3501.png.png",
          "description": "",
          "price": 130,
          "name": "Nmd R1 Crystal White Better Scarlet",
          "variants": "Crystal White, Cloud White, Better Scarlet"
      },
      {
          "brand": "Nike",
          "category": "men",
          "image": "https://image.goat.com/attachments/product_template_pictures/images/094/631/969/original/FV4137_001.png.png",
          "description": "The Nike GT Hustle 2 \u00e2\u20ac\u02dcGreater Than Ever\u00e2\u20ac\u2122 delivers a performance basketball shoe that takes design cues from the running shoe space. The minimalist upper is crafted from breathable black mesh with tonal iridescent overlays and a padded mid-cut collar. Accented with a crimson topline and treated to a purple iridescent finish, a lightweight Phylon midsole features full-length Zoom Air cushioning for on-court responsiveness. Underfoot, a translucent rubber outsole provides multi-directional traction.",
          "price": 180,
          "name": "Air Zoom Gt Hustle 2 Greater Than Ever",
          "variants": "Black, Black, Multi, Color, Picante Red, Anthracite"
      },
      {
          "brand": "Li-ning",
          "category": "men",
          "image": "https://image.goat.com/attachments/product_template_pictures/images/080/035/880/original/ABPS039_4.png.png",
          "description": "",
          "price": 150,
          "name": "Wade Ice Blood V2 305",
          "variants": "White, Pink"
      },
      {
          "brand": "Jordan",
          "category": "youth",
          "image": "",
          "description": "The Air Jordan 1 Retro Low OG GS \u00e2\u20ac\u02dcMocha\u00e2\u20ac\u2122 showcases color blocking that recalls the \u00e2\u20ac\u02dcDark Mocha\u00e2\u20ac\u2122 AJ1 from 2020. The low-top sports a white leather upper with contrasting black accents on the Swoosh and forefoot overlay. Brown nubuck construction is utilized on the heel and back tab, marked with the iconic Wings logo. A woven Nike tag adorns the breathable nylon tongue. The sneaker rests on a standard rubber cupsole, featuring stitched sidewall construction and encapsulated Air-sole cushioning.",
          "price": 120,
          "name": "Air 1 Retro Low Og Gs 'mocha'",
          "variants": "White, Black, Dark Mocha"
      },
      {
          "brand": "Jordan",
          "category": "youth",
          "image": "",
          "description": "The Air Jordan 1 Retro Low OG PS \u00e2\u20ac\u02dcMocha\u00e2\u20ac\u2122 features a white and black leather upper with brown nubuck construction on the heel overlay and back tab. The latter displays the iconic Wings logo, while a woven Nike tag decorates the tongue. The low-top is appointed with classic Jordan details, including a perforated toe box and a durable rubber cupsole. Underfoot, the outsole pattern features a pivot circle originally designed for the hardwood.",
          "price": 75,
          "name": "Air 1 Retro Low Og Ps 'mocha'",
          "variants": "White, Black, Dark Mocha"
      },
      {
          "brand": "Jordan",
          "category": "infant",
          "image": "",
          "description": "The Air Jordan 1 Retro Low OG TD \u00e2\u20ac\u02dcMocha\u00e2\u20ac\u2122 features color blocking that parallels the AJ1 \u00e2\u20ac\u02dcDark Mocha\u00e2\u20ac\u2122 from 2020. The low-top makes use of a white leather upper, contrasted by black accents on the forefoot overlay and signature Swoosh. Brown nubuck construction is utilized on the heel overlay and back tab. The latter is stamped with the iconic Wings logo, while a woven Nike tag appears on the tongue. Underfoot, a black rubber outsole provides reliable traction for growing feet.",
          "price": 65,
          "name": "Air 1 Retro Low Og Td 'mocha'",
          "variants": "White, Black, Dark Mocha"
      },
      {
          "brand": "Jordan",
          "category": "men",
          "image": "",
          "description": "",
          "price": 250,
          "name": "3 Retro J Balvin Rio",
          "variants": "Black, Solar Flare-Total Crimson Abyss"
      },
      {
          "brand": "Jordan",
          "category": "women",
          "image": "https://image.goat.com/attachments/product_template_pictures/images/097/103/468/original/DZ4137_700.png.png",
          "description": "",
          "price": 150,
          "name": "1 Retro Low Og Sp Travis Scott Canary (women's)",
          "variants": "Canary, Racer Blue-Light Silver-Gum Medium Brown"
      },
      {
          "brand": "Jordan",
          "category": "men",
          "image": "",
          "description": "",
          "price": 180,
          "name": "1 Retro High Og Denim",
          "variants": "Summit White, Obsidian-Summit White-Gum Medium Brown"
      },
      {
          "brand": "Jordan",
          "category": "youth",
          "image": "",
          "description": "Made for big kids, the Air Jordan 6 Retro GS \u00e2\u20ac\u02dcReverse Oreo\u00e2\u20ac\u2122 draws inspiration from the black-and-white AJ6 colorway from 2010. The legacy silhouette dons a white leather upper, contrasted by a molded black tongue and a matching black textile lining. Jumpman branding embellishes the neoprene lace cover and back heel. The midsole and molded pull tab feature white speckles against a solid black backdrop, accentuating the shoe\u00e2\u20ac\u2122s cookies-and-cream design motif Underfoot, a translucent rubber outsole provides grippy traction.",
          "price": 160,
          "name": "Air 6 Retro Gs 'reverse Oreo'",
          "variants": "White, Black"
      },
      {
          "brand": "Jordan",
          "category": "youth",
          "image": "",
          "description": "Offered in pre-school sizing, the Air Jordan 6 Retro PS \u00e2\u20ac\u02dcReverse Oreo\u00e2\u20ac\u2122 presents a two-tone colorway inspired by the classic AJ6 release from 2010. Built with crisp white leather, the upper features perforated detailing and contrasting hits of black on the molded tongue and interior lining. Embroidered Jumpman branding decorates the lace cover and back heel. Anchoring the sneaker is a lightweight foam midsole, ornamented with black accents covered in white speckles.",
          "price": 100,
          "name": "Air 6 Retro Ps 'reverse Oreo'",
          "variants": "White, Black"
      },
      {
          "brand": "Jordan",
          "category": "infant",
          "image": "",
          "description": "The Air Jordan 6 Retro TD \u00e2\u20ac\u02dcReverse Oreo\u00e2\u20ac\u2122 takes its design cues from a black-and-white AJ6 colorway originally released in 2010. Crisp white leather is utilized on the upper, accented with perforated detailing and contrasting hits of black on the interior lining and tongue. The latter is marked with Jordan branding and an embroidered Jumpman logo. A second Jumpman icon decorates the back heel. A cushy foam midsole features white speckles against a solid black backdrop.",
          "price": 85,
          "name": "Air 6 Retro Td 'reverse Oreo'",
          "variants": "White, Black"
      },
      {
          "brand": "Jordan",
          "category": "youth",
          "image": "",
          "description": "Made for big kids, the Air Jordan 11 Retro Low GS \u00e2\u20ac\u02dcLegend Pink\u00e2\u20ac\u2122 delivers a pastel colorway of the legacy silhouette. White ballistic mesh is utilized on the upper, fortified with a pink patent leather mudguard and secured with rope laces that feed through webbing eyelets. Branding elements include a Jumpman logo and a stylized \u00e2\u20ac\u02dc23\u00e2\u20ac\u2122 on the back heel. The low-top is mounted on a white Phylon midsole with encapsulated Air-sole cushioning and a carbon fiber spring plate. A translucent rubber outsole features herringbone traction pods for reliable grip.",
          "price": 80,
          "name": "Air 11 Retro Low Gs 'legend Pink'",
          "variants": "White, Legend Pink"
      },
      {
          "brand": "Nike",
          "category": "men",
          "image": "https://image.goat.com/attachments/product_template_pictures/images/097/827/636/original/FQ3545_300.png.png",
          "description": "The Nike Zoom Kobe 4 Protro \u00e2\u20ac\u02dcGirl Dad\u00e2\u20ac\u2122 is a nod to the bond that Kobe Bryant shared with his daughters. A muted teal suede upper built with rolled edges is contrasted with black accents on the Swoosh, collar lining and interior tongue. A chrome-plated heel counter displays Kobe Bryant\u00e2\u20ac\u2122s signature on the lateral side, while the inside tongue showcases a \u00e2\u20ac\u02dcGirl Dad\u00e2\u20ac\u2122 inscription. The sneaker rides on a lightweight Phylon midsole with a springy Zoom Air unit in the heel. Underfoot, a herringbone-traction rubber outsole reveals a carbon fiber shank plate for midfoot support.",
          "price": 190,
          "name": "Zoom Kobe 4 Protro 'girl Dad'",
          "variants": "Bicoastal, Black, Metallic Silver"
      },
      {
          "brand": "Jordan",
          "category": "infant",
          "image": "",
          "description": "The Air Jordan 11 Retro Low TD \u00e2\u20ac\u02dcLegend Pink\u00e2\u20ac\u2122 brings pastel accents to the championship model. Rope laces feed through webbing eyelets to secure the upper, crafted from white ballistic mesh with a shiny patent leather mudguard in a soft pink finish. Jumpman branding decorates the tongue and back tab. The sneaker rests on a white foam midsole for lightweight cushioning and a comfortable ride. A translucent rubber outsole provides durable traction.",
          "price": 60,
          "name": "Air 11 Retro Low Td 'legend Pink'",
          "variants": "White, Legend Pink"
      },
      {
          "brand": "Jordan",
          "category": "women",
          "image": "",
          "description": "The Women\u00e2\u20ac\u2122s Air Jordan 1 Retro High OG \u00e2\u20ac\u02dcLatte\u00e2\u20ac\u2122 dresses the classic silhouette in color blocking that mirrors the \u00e2\u20ac\u02dcDark Mocha\u00e2\u20ac\u2122 AJ1 from 2020. Built with a crisp white base, the leather upper features black accents on the forefoot overlay and Swoosh, along with contrasting hits of dark tan on the heel and collar flap. The latter is marked with the iconic Wings logo, while a woven Nike Air tag embellishes the tongue. Underpinning the high-top is a vintage off-white rubber midsole, fitted with an Air-sole heel unit encapsulated in a lightweight polyurethane wedge.",
          "price": 180,
          "name": "Air 1 Retro High Og 'latte'",
          "variants": "Black, Legend Medium Brown, White, Sail"
      },
      {
          "brand": "Jordan",
          "category": "men",
          "image": "",
          "description": "The Air Jordan 4 Retro \u00e2\u20ac\u02dcOxidized Green\u00e2\u20ac\u2122 arrives in a crisp white leather upper with tonal quarter panel netting and grey molded eyelets. Contrasting green accents make their way to the support wings and back tab, marked with embossed Jumpman branding. A second Jumpman logo decorates the woven tongue tag. An additional hit of green coloring distinguishes the lightweight polyurethane midsole, featuring an exposed Air-sole unit in the heel.",
          "price": 210,
          "name": "Air 4 Retro 'oxidized Green'",
          "variants": "White, Oxidized Green, White, Neutral Grey"
      },
      {
          "brand": "Jordan",
          "category": "youth",
          "image": "",
          "description": "Built for little kids, the Air Jordan 12 Retro PS \u00e2\u20ac\u02dcRed Taxi\u00e2\u20ac\u2122 adds bold pops of color to an OG-inspired white and black colorway. White tumbled leather is utilized on the upper, which is accented with radiating stitched lines and a black lizard-textured mudguard. An embroidered Jumpman logo in Gym Red adorns the tongue, matching the TPU midfoot overlay. A foam midsole offers lightweight cushioning with each step, while the rubber outsole features herringbone traction pods for superior grip.",
          "price": 100,
          "name": "Air 12 Retro Ps 'red Taxi'",
          "variants": "White, Gym Red, Black"
      },
      {
          "brand": "Jordan",
          "category": "men",
          "image": "",
          "description": "The Air Jordan 12 Retro \u00e2\u20ac\u02dcRed Taxi\u00e2\u20ac\u2122 adds splashes of color to a familiar colorway inspired by an OG 1996 release. Crafted from tumbled white leather, the upper features radiating stitched lines and a lizard-textured mudguard in a contrasting black finish. A crimson Jumpman logo is embroidered on the tongue, matching a midfoot TPU overlay. Performance benefits include a lightweight Phylon midsole with full-length Zoom Air cushioning and a carbon fiber spring plate.",
          "price": 0,
          "name": "Air 12 Retro 'red Taxi'",
          "variants": "White, Gym Red, Black"
      },
      {
          "brand": "Jordan",
          "category": "infant",
          "image": "",
          "description": "The Air Jordan TD Retro PS \u00e2\u20ac\u02dcRed Taxi\u00e2\u20ac\u2122 draws inspiration from an OG colorway of the championship silhouette that Michael Jordan wore during the \u00e2\u20ac\u212296 \u00e2\u20ac\u201c \u00e2\u20ac\u212297 NBA season. Like the older shoe, the design is highlighted by a white tumbled leather upper, accented with stitched lines and fortified with a black lizard-textured mudguard. Gym Red accents make their way to the midfoot overlay and a Jumpman logo embroidered on the tongue. Underfoot, the outsole features herringbone traction pods for reliable grip.",
          "price": 85,
          "name": "Air 12 Retro Td 'red Taxi'",
          "variants": "White, Gym Red, Black"
      },
      {
          "brand": "Jordan",
          "category": "youth",
          "image": "",
          "description": "Made for big kids, the Air Jordan 12 Retro GS \u00e2\u20ac\u02dcRed Taxi\u00e2\u20ac\u2122 takes inspiration from a classic OG colorway of the championship silhouette. Radiating stitched lines enliven the upper, crafted from white tumbled leather with a black lizard-textured mudguard. Gym Red accents settle on the midfoot overlay and an embroidered Jumpman logo atop the tongue. A lightweight Phylon midsole with Zoom Air cushioning provides a smooth and responsive ride.",
          "price": 160,
          "name": "Air 12 Retro Gs 'red Taxi'",
          "variants": "White, Gym Red, Black"
      },
      {
          "brand": "Jordan",
          "category": "infant",
          "image": "",
          "description": "The Air Jordan 11 Retro Low TD \u00e2\u20ac\u02dcSpace Jam\u00e2\u20ac\u2122 takes inspiration from the sleek AJ11 of the same name, which debuted in movie theaters in 1996 before hitting store shelves in 2000. The upper is built with black ballistic mesh and fortified with a tonal patent leather mudguard. Jumpman branding decorates the tongue and back heel. A crisp white finish is applied to a cushy foam midsole. Underfoot, a translucent rubber outsole yields durable traction.",
          "price": 60,
          "name": "Air 11 Retro Low Td 'space Jam'",
          "variants": "Black, Varsity Royal, White"
      },
      {
          "brand": "Jordan",
          "category": "men",
          "image": "",
          "description": "The Air Jordan 11 Retro Low \u00e2\u20ac\u02dcSpace Jam\u00e2\u20ac\u2122 is based on the high-top AJ11 of the same name, featuring a black ballistic mesh upper with a tonal patent leather mudguard. Rope laces feed through webbing eyelets for a secure fit, while the back heel is marked with a stylized \u00e2\u20ac\u02dc23\u00e2\u20ac\u2122 and classic Jumpman branding. Anchoring the sneaker is a white Phylon midsole, fitted with full-length Air-sole cushioning and an exposed carbon fiber plate. A translucent rubber outsole utilizes herringbone traction pods for superior grip.",
          "price": 190,
          "name": "Air 11 Retro Low 'space Jam'",
          "variants": "Black, Varsity Royal, White"
      },
      {
          "brand": "Jordan",
          "category": "youth",
          "image": "",
          "description": "Built for big kids, the Air Jordan 11 Retro Low GS \u00e2\u20ac\u02dcSpace Jam\u00e2\u20ac\u2122 takes inspiration from the coveted AJ11 release from 2000. Rope laces feed through webbing eyelets to secure an upper crafted from black ballistic mesh with a tonal patent leather mudguard. \u00e2\u20ac\u02dc23\u00e2\u20ac\u2122 is printed on the heel tab, directly above an embroidered Jumpman logo in Varsity Royal. The low-top is mounted on a white Phylon midsole, enhanced with encapsulated Air-sole cushioning and supported by a translucent rubber outsole.",
          "price": 150,
          "name": "Air 11 Retro Low Gs 'space Jam'",
          "variants": "Black, Varsity Royal, White"
      },
      {
          "brand": "Jordan",
          "category": "youth",
          "image": "",
          "description": "Made for little kids, the Air Jordan 11 Retro Low PS \u00e2\u20ac\u02dcSpace Jam\u00e2\u20ac\u2122 showcases the same sleek design worn by Michael Jordan in his 1996 cinematic debut. A stealthy black finish is executed on the upper, built with ballistic mesh and a shiny patent leather mudguard. Embroidered on the back heel is a royal blue Jumpman logo for a discreet pop of color. A white foam midsole offers lightweight cushioning with each step, while a translucent rubber outsole provides grippy traction.",
          "price": 80,
          "name": "Air 11 Retro Low Ps 'space Jam'",
          "variants": "Black, Varsity Royal, White"
      },
      {
          "brand": "Jordan",
          "category": "infant",
          "image": "https://image.goat.com/attachments/product_template_pictures/images/096/964/539/original/FQ9175_121.png.png",
          "description": "The Air Jordan 3 Retro TD &#39;Georgia Peach&#39; sports a white tumbled leather upper, accented with orange molded eyelets and bolstered with grey elephant print overlays at the forefoot and heel. Jumpman branding decorates the tongue and back heel. A splash of Cosmic Clay wraps around the heel of the midsole, built with lightweight foam and rendered in an aged off-white finish. Undergirding the sneaker is a durable grey rubber outsole.",
          "price": 85,
          "name": "Air 3 Retro Td 'georgia Peach'",
          "variants": "White, Cosmic Clay, Sail, Cement Grey, Anthracite"
      },
      {
          "brand": "Jordan",
          "category": "youth",
          "image": "",
          "description": "Built for little kids, the Air Jordan 3 Retro PS &#39;Georgia Peach&#39; features a white tumbled leather upper with grey elephant print overlays at the forefoot and heel. Molded eyelets in Cosmic Clay match the Jumpman branding hits that decorate the tongue and back heel. The same orange hue wraps around the heel of the lightweight foam midsole, featuring an off-white finish for a vintage aesthetic. Underfoot, a grey rubber outsole provides grippy traction.",
          "price": 100,
          "name": "Air 3 Retro Ps 'georgia Peach'",
          "variants": "White, Cosmic Clay, Sail, Cement Grey, Anthracite"
      },
      {
          "brand": "Jordan",
          "category": "women",
          "image": "",
          "description": "The Women&#39;s Air Jordan 3 Retro &#39;Georgia Peach&#39; showcases a white tumbled leather upper, contrasted by orange molded eyelets and fortified with grey elephant print overlays at the forefoot and heel. Jumpman branding adorns the tongue and back heel. A vintage off-white finish is applied to the polyurethane midsole, featuring visible Air-sole cushioning and a wraparound splash of Cosmic Clay.",
          "price": 200,
          "name": "Air 3 Retro 'georgia Peach'",
          "variants": "White, Cosmic Clay, Sail, Cement Grey, Anthracite"
      },
      {
          "brand": "Jordan",
          "category": "men",
          "image": "",
          "description": "",
          "price": 180,
          "name": "1 Retro High Og Green Glow",
          "variants": "White, Black-Green Glow"
      },
      {
          "brand": "Nike",
          "category": "men",
          "image": "https://image.goat.com/attachments/product_template_pictures/images/097/856/565/original/FN6247_300.png.png",
          "description": "",
          "price": 130,
          "name": "Zoom Kd 4 'weatherman' 2024",
          "variants": "Lush Green, Volt, Black, Team Orange"
      },
      {
          "brand": "Nike",
          "category": "youth",
          "image": "",
          "description": "Made for little kids, the Nike Kobe 8 Protro PS &#39;Mambacita&#39; honors the lasting legacy built by Kobe Bryant and his daughter, Gianna &#39;Gigi&#39; Bryant. The low-top utilizes a light grey engineered mesh upper, featuring an all-over butterfly print with gold embroidered Swoosh branding. &#39;GIGI&#39; and her jersey number are displayed on the back heel of the left and right shoe, respectively. Lightweight cushioning arrives via a full-length foam midsole, painted black and supported by a white herringbone-traction rubber outsole.",
          "price": 90,
          "name": "Kobe 8 Protro Ps 'mambacita'",
          "variants": "White, Metallic Gold, Black"
      },
      {
          "brand": "Nike",
          "category": "men",
          "image": "https://image.goat.com/attachments/product_template_pictures/images/097/856/577/original/FZ1347_100.png.png",
          "description": "The 2024 edition of the Nike Cortez &#39;Forrest Gump&#39; brings back the vintage runner worn by Tom Hanks in the Oscar-winning 1994 film. The upper carries white leather construction with Varsity Red accents on the signature Swoosh and back tab, branded with a Nike wordmark in embroidered lettering. Lightweight cushioning arrives via a full-length foam midsole, rendered in a classic wedge shape and featuring a contrasting slash of Varsity Royal coloring. A herringbone-traction rubber outsole provides durable traction underfoot.",
          "price": 0,
          "name": "Cortez Premium Qs 'forrest Gump' 2024",
          "variants": "White, Varsity Red, Varsity Blue, Metallic Silver"
      },
      {
          "brand": "Nike",
          "category": "youth",
          "image": "",
          "description": "Made for big kids, the Nike Kobe 8 Protro GS &#39;Mambacita&#39; honors the legacy that Gianna &#39;Gigi&#39; Bryant built with her father. An all-over butterfly print adorns the light grey engineered mesh upper, featuring a signature Swoosh in metallic gold embroidery. &#39;GIGI&#39; is stamped on the heel of the left shoe, while her jersey number is displayed on the heel of the right shoe. Lightweight cushioning is provided by a drop-in React foam midsole. Underfoot, a white herringbone-traction rubber outsole yields optimal grip.",
          "price": 120,
          "name": "Kobe 8 Protro Gs 'mambacita'",
          "variants": "White, Metallic Gold, Black"
      },
      {
          "brand": "Nike",
          "category": "men",
          "image": "",
          "description": "The Nike Kobe 8 Protro \u00e2\u20ac\u02dcMambacita\u00e2\u20ac\u2122 pays homage to Gigi Bryant, featuring an all-over butterfly print across an upper built with off-white Engineered Mesh. An embroidered gold Swoosh adorns the lateral side, while the back heel is marked with \u00e2\u20ac\u02dcGigi\u00e2\u20ac\u2122 on the left shoe and her jersey number on the right. Performance benefits include a drop-in React foam midsole and a carbon fiber shank plate. A herringbone-traction rubber outsole provides optimal grip.",
          "price": 190,
          "name": "Kobe 8 Protro 'mambacita'",
          "variants": "White, Metallic Gold, Black"
      },
      {
          "brand": "Jordan",
          "category": "men",
          "image": "https://image.goat.com/attachments/product_template_pictures/images/097/760/700/original/FZ8117_101.png.png",
          "description": "",
          "price": 200,
          "name": "Jumpman Jack Tr Travis Scott University Red",
          "variants": "Sail, University Red-Black-Muslin"
      },
      {
          "brand": "Jordan",
          "category": "infant",
          "image": "",
          "description": "The 2024 edition of the Air Jordan 4 Retro TD \u00e2\u20ac\u02dcMilitary Blue\u00e2\u20ac\u2122 brings back an OG colorway in time for the classic silhouette\u00e2\u20ac\u2122s 35th anniversary. True to the original, the upper features off-white leather construction with quarter panel netting and TPU support wings. Military Blue lands on the upper and lower eyelets, along with a heel tab marked with Nike Air branding. Lightweight cushioning is provided by a two-tone foam midsole, reinforced underfoot by a herringbone-traction outsole.",
          "price": 85,
          "name": "Air 4 Retro Td 'military Blue' 2024",
          "variants": "Off White, Military Blue, Neutral Grey"
      },
      {
          "brand": "Jordan",
          "category": "men",
          "image": "",
          "description": "The 2024 edition of the Air Jordan 4 Retro \u00e2\u20ac\u02dcMilitary Blue\u00e2\u20ac\u2122 brings back a coveted OG colorway of the legacy silhouette. Smooth off-white leather is utilized on the upper, featuring quarter panel netting and a tonal nubuck forefoot overlay. A vibrant blue Jumpman logo adorns the woven tongue tag, matching the molded eyelets and a back tab marked with Nike Air branding. The sneaker rides on a lightweight polyurethane midsole with encapsulated Air-sole cushioning in the forefoot and a visible Air bag in the heel.",
          "price": 215,
          "name": "Air 4 Retro 'military Blue' 2024",
          "variants": "Off-White, Military Blue, Neutral Grey"
      },
      {
          "brand": "Jordan",
          "category": "youth",
          "image": "",
          "description": "Made for big kids, the 2024 reissue of the Air Jordan 4 Retro GS \u00e2\u20ac\u02dcMilitary Blue\u00e2\u20ac\u2122 brings back one of the four OG colorways of the classic silhouette. The off-white leather upper is equipped with TPU support wings and breathable quarter panel netting. Bright blue accents make their way to molded eyelets, a woven Jumpman tongue tag, and a back tab embellished with Nike Air branding. The lightweight polyurethane midsole features a blue topline and exposed Air-sole cushioning in the heel.",
          "price": 160,
          "name": "Air 4 Retro Gs 'military Blue' 2024",
          "variants": "Off White, Military Blue, Neutral Grey"
      },
      {
          "brand": "Jordan",
          "category": "youth",
          "image": "",
          "description": "The 2024 edition of the Air Jordan 4 Retro PS \u00e2\u20ac\u02dcMilitary Blue\u00e2\u20ac\u2122 brings back an OG colorway in a scaled-down build made for little kids. Constructed from off-white leather, the upper features signature AJ4 details, including quarter panel netting and TPU support wings. A vibrant blue Jumpman logo graces the woven tongue tag, matching the molded eyelets and a back tab marked with Nike Air branding. A two-tone foam midsole is supported underfoot by a herringbone-traction rubber outsole.",
          "price": 100,
          "name": "Air 4 Retro Ps 'military Blue' 2024",
          "variants": "Off White, Military Blue, Neutral Grey"
      },
      {
          "brand": "Nike",
          "category": "men",
          "image": "https://image.goat.com/attachments/product_template_pictures/images/097/796/276/original/FN5880_001.png.png",
          "description": "The Nike Dunk Low Premium SB \u00e2\u20ac\u02dcPastoral Print\u00e2\u20ac\u2122 dons a grey canvas upper covered in bucolic graphics depicting fluffy clouds, soaring birds and leafy trees. Brown piping outlines the Swoosh, eyestay, and forefoot and heel overlay. A tan Nike SB tag adorns the stuffed tongue, while a Nike wordmark is embroidered in bronze lettering on the back tab. A solid off-white finish is applied to the rubber cupsole, featuring stitched sidewall construction and an outsole equipped with a hardwood-ready pivot circle.",
          "price": 125,
          "name": "Sb Dunk Low Premium Pastoral Print",
          "variants": "Football Grey, Coconut Milk-Khaki-Flat Gold-Sail-Dragon Red"
      },
      {
          "brand": "Jordan",
          "category": "men",
          "image": "",
          "description": "The Women&#39;s Air Jordan 4 Retro &#39;Vivid Sulfur&#39; is built with smooth white leather featuring signature AJ4 details, including breathable quarter panel netting and black TPU support wings. Contrasting yellow accents land on the molded eyelets, interior lining, and the Jumpman branding hits that adorn the tongue and back tab. The sneaker rests on a two-tone polyurethane midsole, fitted with a visible Air-sole unit in the heel.",
          "price": 200,
          "name": "4 Retro Vivid Sulfur (women's)",
          "variants": "White, Coconut Milk, Vivid Sulfur, Anthracite"
      },
      {
          "brand": "Jordan",
          "category": "men",
          "image": "",
          "description": "",
          "price": 160,
          "name": "Spizike Low Coconut Milk",
          "variants": "Sail, University Red, Coconut Milk, Sandstone, Smoke Grey"
      },
      {
          "brand": "Nike",
          "category": "men",
          "image": "https://image.goat.com/attachments/product_template_pictures/images/097/827/637/original/FQ3545_400.png.png",
          "description": "The Nike Zoom Kobe 4 Protro &#39;Philly&#39; revives the 2009 colorway that pays homage to Kobe Bryant&#39;s birth city. A vibrant royal blue finish is executed on the synthetic leather upper, featuring semi-translucent quarter panels that reveal Nike&#39;s supportive Flywire technology. Branding elements include a white Swoosh outlined in crimson trim, Kobe Bryant&#39;s personal logo atop the tongue, and the athlete&#39;s signature inscribed on the TPU heel counter. The low-top rests on a lightweight Phylon midsole with Zoom Air cushioning in the heel.",
          "price": 180,
          "name": "Zoom Kobe 4 Protro 'philly'",
          "variants": "Varsity Royal, White, University Red"
      },
      {
          "brand": "Jordan",
          "category": "men",
          "image": "",
          "description": "",
          "price": 210,
          "name": "5 Retro Se Sail",
          "variants": "Sail, Black, Light Orewood Brown, Coconut Milk"
      },
      {
          "brand": "Nike",
          "category": "men",
          "image": "",
          "description": "The Nike Kobe 8 Protro \u00e2\u20ac\u02dcVenice Beach\u00e2\u20ac\u2122 celebrates the vibrant culture of the Southern California city. Splashes of red, teal and yellow enliven a seamless upper built with grey Engineered Mesh. Additional pops of color arrive via a turquoise external heel counter and an orange textile collar lining. In terms of performance, the low-top is equipped with a drop-in React foam midsole and a carbon fiber shank plate. A semi-translucent rubber outsole features a herringbone traction pattern for superior grip.",
          "price": 180,
          "name": "Kobe 8 Protro Venice Beach (2024)",
          "variants": "Stadium Grey, Metallic Silver, Tour Yellow"
      },
      {
          "brand": "Nike",
          "category": "youth",
          "image": "",
          "description": "Built for little kids, the Nike Kobe 8 Protro PS &#39;Venice Beach&#39; brings back a 2013 colorway that celebrates the Los Angeles neighborhood and its ties to basketball culture. The low-top utilizes an engineered mesh upper, featuring a neutral grey base with vibrant splashes of orange, yellow and teal. The latter hue is repeated on the external heel counter, marked with Kobe Bryant&#39;s signature, and lightweight foam midsole. A translucent rubber midsole provides durable traction underfoot.",
          "price": 90,
          "name": "Kobe 8 Protro Ps 'venice Beach'",
          "variants": "Stadium Grey, Metallic Silver, Tour Yellow"
      },
      {
          "brand": "Jordan",
          "category": "men",
          "image": "",
          "description": "",
          "price": 190,
          "name": "11 Retro Low Midnight Navy (2024)",
          "variants": "White, Midnight Navy, Diffused Blue, Football Grey"
      },
      {
          "brand": "Nike",
          "category": "men",
          "image": "https://image.goat.com/attachments/product_template_pictures/images/097/835/572/original/1335379_00.png.png",
          "description": "",
          "price": 115,
          "name": "Sb Dunk Low Navy Gum",
          "variants": "Navy, White-Gum Light Brown"
      },
      {
          "brand": "Jordan",
          "category": "youth",
          "image": "",
          "description": "Made for big kids, the Air Jordan 1 Retro High OG GS \u00e2\u20ac\u02dcGreen Glow\u00e2\u20ac\u2122 blends white side panels with a black forefoot overlay and matching black Swoosh. Mint green accents land on the perforated toe box, heel overlay and collar flap, marked with the retro Wings logo on the lateral side. A woven Nike Air tag decorates the breathable nylon tongue. The high-top rests on a rubber cupsole, featuring white sidewalls and a bright green rubber outsole.",
          "price": 140,
          "name": "Air 1 Retro High Og Gs 'green Glow'",
          "variants": "White, Black, Green Glow"
      },
      {
          "brand": "Jordan",
          "category": "youth",
          "image": "",
          "description": "Made for big kids, the Jordan Tatum 2 &#39;Vortex&#39; takes inspiration from Jayson Tatum&#39;s steady demeanor under pressure, akin to the calm conditions that signal the eye of the storm. The low-top utilizes a mint green mesh upper with large foam and textile pods that extend into the midsole, which works in tandem with a full-length Air Strobel unit. Underfoot, the rubber outsole features a modified herringbone tread for multidirectional grip on the hardwood.",
          "price": 90,
          "name": "Tatum 2 Gs 'vortex'",
          "variants": "Mint Foam, Lava Glow, Black, Hyper Jade, Key Lime"
      },
      {
          "brand": "Nike",
          "category": "women",
          "image": "https://image.goat.com/attachments/product_template_pictures/images/097/103/473/original/FD8315_700.png.png",
          "description": "",
          "price": 285,
          "name": "Alphafly 3 Volt Concord (women's)",
          "variants": "Volt, Dusty Cactus, Total Orange, Concord"
      },
      {
          "brand": "Jordan",
          "category": "infant",
          "image": "",
          "description": "The Jordan Tatum 2 TD &#39;Vortex&#39; is inspired by the NBA athlete&#39;s composed temperament under pressure. The low-top employs a mint green mesh upper with strategically placed pods in textured foam and textile. No-tie elastic laces and a webbing pull tab at the heel combine for easy on and off. A foam midsole offers lightweight cushioning, while the outsole features herringbone traction pods for reliable grip.",
          "price": 55,
          "name": "Tatum 2 Td 'vortex'",
          "variants": "Mint Foam, Lava Glow, Black, Hyper Jade, Key Lime"
      },
      {
          "brand": "Nike",
          "category": "men",
          "image": "https://image.goat.com/attachments/product_template_pictures/images/096/856/591/original/FD8311_700.png.png",
          "description": "The Nike Air Zoom Alphafly NEXT% 3 &#39;Volt&#39; presents an eye-catching colorway of the marathon running shoe. A neon green hue floods the Atomknit 3.0 upper, featuring a stretchy cuff and lofted Flyknit heel pods for a comfortable fit. The seamless build is mounted on a high-stack ZoomX foam midsole, fitted with a full-length carbon fiber Flyplate and dual Zoom Air units in the forefoot. Underfoot, Nike&#39;s lightweight Fast Shot outsole provides optimal grip.",
          "price": 285,
          "name": "Alphafly 3 Volt Concord",
          "variants": "Volt, Dusty Cactus, Total Orange, Concord"
      },
      {
          "brand": "Jordan",
          "category": "men",
          "image": "https://image.goat.com/attachments/product_template_pictures/images/096/457/570/original/FJ6457_300.png.png",
          "description": "Representing one of the debut colorways of Jayson Tatum\u00e2\u20ac\u2122s sophomore signature shoe, the Jordan Tatum 2 \u00e2\u20ac\u02dcVortex\u00e2\u20ac\u2122 takes inspiration from the NBA athlete\u00e2\u20ac\u2122s calm demeanor under pressure. Textured textile and foam pods are strategically placed throughout the mint green textile upper and lightweight foam midsole, featuring a full-length Air Strobel unit for impact protection. Underfoot, the rubber outsole utilizes a modified herringbone traction pattern for multi-directional grip.",
          "price": 125,
          "name": "Tatum 2 Vortex",
          "variants": "Mint Foam, Lava Glow-Black-Hyper Jade-Key Lime"
      },
      {
          "brand": "Jordan",
          "category": "youth",
          "image": "",
          "description": "Offered in pre-school sizing, the Jordan Tatum 2 &#39;Vortex&#39; represents the NBA athlete&#39;s composed demeanor under pressure. The low-top carries a mint green mesh upper with textured pods in foam and textile. The oversized inserts stabilize the foot while referencing the bold aesthetic of &#39;90s basketball shoes. Underpinning the sneaker is a rubber outsole, featuring a modified herringbone traction pattern for superior grip.",
          "price": 75,
          "name": "Tatum 2 Ps 'vortex'",
          "variants": "Mint Foam, Lava Glow, Black, Hyper Jade, Key Lime"
      },
      {
          "brand": "Saucony",
          "category": "men",
          "image": "",
          "description": "",
          "price": 140,
          "name": "Grid Shadow 2 'sand Brown'",
          "variants": "Sand, Brown"
      },
      {
          "brand": "Saucony",
          "category": "men",
          "image": "",
          "description": "",
          "price": 130,
          "name": "Shadow 6000 'green White'",
          "variants": "Green, White"
      },
      {
          "brand": "Saucony",
          "category": "men",
          "image": "",
          "description": "",
          "price": 130,
          "name": "Shadow 6000 'yellow White'",
          "variants": "Yellow, White"
      },
      {
          "brand": "Nike",
          "category": "men",
          "image": "https://image.goat.com/attachments/product_template_pictures/images/097/608/172/original/FZ4831_400.png.png",
          "description": "The Nike Air Max 1 &#39;86 &#39;Jackie Robinson&#39; pays tribute to the historical athlete who broke Major League Baseball&#39;s color barrier when he debuted for the Brooklyn Dodgers in 1947. The retro runner sports a perforated nubuck upper in Midnight Navy. Obsidian suede paneling is overlaid on the midfoot and heel, featuring Nike Air branding in gold embroidery. Robinson&#39;s jersey number is highlighted on diamond-shaped tongue tags and metallic gold lace jewels. A white synthetic suede mudguard give way to a crisp white foam midsole, fitted with a large-volume Air-sole unit in the heel and supported by a gum rubber outsole underfoot.",
          "price": 150,
          "name": "Air Max 1 '86 Jackie Robinson",
          "variants": "Midnight Navy, Obsidian-Sail-Metallic Gold-Gum Medium Brown"
      },
      {
          "brand": "Jordan",
          "category": "men",
          "image": "https://image.goat.com/attachments/product_template_pictures/images/096/293/539/original/FD8636_011.png.png",
          "description": "The Air Jordan 1 Retro High OG \u00e2\u20ac\u02dcCraft - Sea Glass\u00e2\u20ac\u2122 arrives with a mixed-material upper, featuring an ivory leather base with pale green suede overlays and a color-matched Swoosh. Reflecting the design of the original AJ1 from 1985, the high-top is branded with a Nike tongue tag and the iconic Wings logo on the lateral collar flap. An aged off-white finish is applied to the rubber midsole, which houses an Air-sole heel unit encapsulated within a lightweight polyurethane wedge.",
          "price": 180,
          "name": "1 Retro High Og Craft Ivory",
          "variants": "Sea Glass, Pale Ivory-Coconut Milk-Coconut Milk"
      },
      {
          "brand": "Nike",
          "category": "men",
          "image": "https://image.goat.com/attachments/product_template_pictures/images/095/708/001/original/FB8883_001.png.png",
          "description": "",
          "price": 180,
          "name": "Air More Uptempo 96 Black Star Blue",
          "variants": "Black, Star Blue, Summit White, Sail"
      },
      {
          "brand": "Nike",
          "category": "men",
          "image": "https://image.goat.com/attachments/product_template_pictures/images/094/562/492/original/DV1403_115.png.png",
          "description": "The Nike Air Max 1 \u00e2\u20ac\u02dc86 OG Golf \u00e2\u20ac\u02dcBig Bubble\u00e2\u20ac\u2122 presents a course-ready version of the original \u00e2\u20ac\u02dcRoyal\u00e2\u20ac\u2122 AM1. The water-resistant upper features white mesh construction with synthetic suede overlays in a pale grey finish. Contrasting blue accents land on the signature Swoosh, suede mudguard, and the embroidered Nike Air branding that adorns the back heel. The white foam midsole packs a large-volume Max Air unit inspired by the Air Max 1 that initially released in 1986. Underfoot, the rubber outsole utilizes an integrated traction pattern for optimal grip.",
          "price": 160,
          "name": "Air Max 1 '86 Og Golf 'big Bubble - Royal'",
          "variants": "White, Hyper Royal, Pure Platinum, Black"
      },
      {
          "brand": "Nike",
          "category": "women",
          "image": "",
          "description": "The Nike Women\u00e2\u20ac\u2122s Air Max 1 \u00e2\u20ac\u02dc86 OG \u00e2\u20ac\u02dcBig Bubble\u00e2\u20ac\u2122 in \u00e2\u20ac\u02dcRoyal\u00e2\u20ac\u2122 features an original color scheme, paired with revised tooling inspired by the short-lived introductory run of the vintage running shoe. The upper combines ventilated white mesh with synthetic suede overlays in a pale grey finish. Royal blue accents settle on the molded eyelets, Swoosh, and suede mudguard. The sneaker rests on a white foam midsole, rendered in a classic wedge shape and fitted with a large-window Max Air unit in the heel.",
          "price": 150,
          "name": "Air Max 1 '86 Og 'big Bubble - Royal'",
          "variants": "White, Royal Blue, Neutral Grey, Black"
      },
      {
          "brand": "Nike",
          "category": "men",
          "image": "https://image.goat.com/attachments/product_template_pictures/images/097/134/007/original/DV3337_700.png.png",
          "description": "The Nike Air Max DN &#39;Volt&#39; debuts a lifestyle running shoe for Air Max Day 2024. Rope laces feed through webbing eyelets to secure a seamless textile upper in Nike&#39;s signature neon hue. The minimalist design is bolstered with a TPU toe bumper and an external heel counter. A circular Air Max DN badge adorns the tongue and back heel. The lightweight build is mounted on a decoupled foam midsole, featuring a quartet of visible Air pods in the heel.",
          "price": 160,
          "name": "Air Max Dn Voltage Purple (2024)",
          "variants": "Volt, Black-Volt Glow-Sequoia"
      },
      {
          "brand": "Nike",
          "category": "men",
          "image": "https://image.goat.com/attachments/product_template_pictures/images/097/743/281/original/DV3337_008.png.png",
          "description": "The Nike Air Max DN &#39;All Night&#39; showcases a grey injected Phylon midsole with a pink-tinged Dynamic Air system \u00e2\u20ac\u201d a dual-chamber, four-tubed Nike Air unit nestled in the heel. With each step, air flows freely between the tubes in each chamber, delivering a smooth transition and a comfortable ride. Black textile is utilized on the upper, featuring a haptic textured overlay and a TPU heel counter. The latter is marked with a circular DN Air Max badge.",
          "price": 160,
          "name": "Air Max Dn 'all Night'",
          "variants": "Black, Dark Smoke Grey, Anthracite, Light Crimson"
      },
      {
          "brand": "Jordan",
          "category": "child",
          "image": "",
          "description": "",
          "price": 160,
          "name": "9 Retro Powder Blue (2024) (gs)",
          "variants": "Summit White, Black, Dark Powder Blue"
      },
      {
          "brand": "Jordan",
          "category": "toddler",
          "image": "",
          "description": "",
          "price": 85,
          "name": "9 Retro Powder Blue (2024) (td)",
          "variants": "Summit White, Black, Dark Powder Blue"
      },
      {
          "brand": "Jordan",
          "category": "men",
          "image": "https://image.goat.com/attachments/product_template_pictures/images/096/293/556/original/FQ8992_101.png.png",
          "description": "The 2024 edition of the Air Jordan 9 Retro \u00e2\u20ac\u02dcPowder Blue\u00e2\u20ac\u2122 brings back an OG colorway in honor of the shoe\u00e2\u20ac\u2122s 30th anniversary. A speed lacing system secures the white leather upper, featuring stitched detailing on the side panels and a contrasting black mesh tongue. A powder blue interior sleeve matches the Air Jordan tongue tag and the molded Jumpman emblem that adorns the heel. Underpinning the sneaker is a polyurethane midsole, built with encapsulated Air-sole cushioning and painted sidewalls in Carolina blue.",
          "price": 210,
          "name": "9 Retro Powder Blue (2024)",
          "variants": "Summit White, Black, Dark Powder Blue"
      },
      {
          "brand": "Nike",
          "category": "men",
          "image": "https://image.goat.com/attachments/product_template_pictures/images/096/891/075/original/FJ1915_200.png.png",
          "description": "",
          "price": 160,
          "name": "Zoom Vomero 5 Neutral Olive",
          "variants": "Neutral Olive, Black-Medium Olive"
      },
      {
          "brand": "Jordan",
          "category": "preschool",
          "image": "",
          "description": "",
          "price": 100,
          "name": "9 Retro Powder Blue (2024) (ps)",
          "variants": "Summit White, Black, Dark Powder Blue"
      },
      {
          "brand": "Nike",
          "category": "women",
          "image": "https://image.goat.com/attachments/product_template_pictures/images/097/796/288/original/FZ4123_394.png.png",
          "description": "",
          "price": 115,
          "name": "Air Force 1 Low 'mint Foam'",
          "variants": "Barely Green, Mint Foam, White"
      },
      {
          "brand": "Jordan",
          "category": "men",
          "image": "https://image.goat.com/attachments/product_template_pictures/images/096/293/542/original/FJ3460_012.png.png",
          "description": "The Air Jordan 14 Retro &#39;Flint Grey&#39; showcases varying shades of grey on the upper, crafted from a soft suede base with hairy suede overlays at the forefoot and heel. Jumpman branding adorns the toe and heel, as well as the Ferrari-inspired badge that graces the lateral collar. The greyscale theme continues on the lightweight Phylon midsole, enhanced with Zoom Air cushioning in the forefoot and heel.",
          "price": 210,
          "name": "14 Retro Flint Grey",
          "variants": "Flint Grey, Stealth Grey, White"
      },
      {
          "brand": "Jordan",
          "category": "men",
          "image": "https://image.goat.com/attachments/product_template_pictures/images/097/619/434/original/1323645_00.png.png",
          "description": "",
          "price": 160,
          "name": "1 Retro Low 85 Metallic Blue",
          "variants": "Summit White, Navy-White"
      },
      {
          "brand": "Jordan",
          "category": "men",
          "image": "https://image.goat.com/attachments/product_template_pictures/images/097/796/249/original/CT8532_031.png.png",
          "description": "The Air Jordan 3 Retro \u00e2\u20ac\u02dcGreen Glow\u00e2\u20ac\u2122 adds brilliant flashes of color to a neutral design that calls to mind the OG \u00e2\u20ac\u02dcBlack Cement\u00e2\u20ac\u2122 colorway. The upper features tumbled black leather with grey elephant print detailing on the eyestay, toe cap and heel overlay. Vivid green accents settle on the upper and lower eyelets, along with the raised Jumpman logo that adorns the back tab. A polyurethane midsole packs a visible Air-sole unit in the heel for lightweight cushioning.",
          "price": 200,
          "name": "3 Retro Green Glow",
          "variants": "Black, Green Glow, Wolf Grey, White"
      },
      {
          "brand": "Jordan",
          "category": "youth",
          "image": "https://image.goat.com/attachments/product_template_pictures/images/097/796/254/original/DM0966_031.png.png",
          "description": "Crafted for little kids, the Air Jordan 3 Retro PS \u00e2\u20ac\u02dcGreen Glow\u00e2\u20ac\u2122 dresses the classic silhouette in an OG-inspired design with vibrant pops of color. Black tumbled leather is deployed on the upper, contrasted by grey elephant print overlays at the forefoot, heel, and eyestay. The neutral tones are offset by molded eyelets in a mint green finish. A color-matched Jumpman logo adorns the tongue and back heel. The sneaker rides on a white foam midsole, accented with a wraparound splash of black and supported by a durable rubber outsole.",
          "price": 100,
          "name": "Air 3 Retro Ps 'green Glow'",
          "variants": "Black, Green Glow, Wolf Grey, White"
      },
      {
          "brand": "Jordan",
          "category": "youth",
          "image": "https://image.goat.com/attachments/product_template_pictures/images/097/796/255/original/DM0967_031.png.png",
          "description": "Made for big kids, the Air Jordan 3 Retro GS \u00e2\u20ac\u02dcGreen Glow\u00e2\u20ac\u2122 brings fluorescent pops of color to an OG-inspired design that recalls the iconic \u00e2\u20ac\u02dcBlack Cement\u00e2\u20ac\u2122 release from 1988. The upper features black tumbled leather with grey elephant print overlays at the forefoot, heel and eyestay. Mint green accents make their way to the upper and lower eyelets, as well as Jumpman branding hits at the tongue and back heel. Lightweight cushioning arrives via a two-tone polyurethane midsole with a visible Air-sole unit in the heel.",
          "price": 150,
          "name": "Air 3 Retro Gs 'green Glow'",
          "variants": "Black, Green Glow, Wolf Grey, White"
      },
      {
          "brand": "Jordan",
          "category": "infant",
          "image": "https://image.goat.com/attachments/product_template_pictures/images/097/796/257/original/DM0968_031.png.png",
          "description": "Scaled down for little feet, the Air Jordan 3 Retro TD \u00e2\u20ac\u02dcGreen Glow\u00e2\u20ac\u2122 uses the OG Black Cement colorway as a creative jumping-off point. The upper features black tumbled leather with grey elephant print overlays along the forefoot, heel, and eyestay. Fluorescent green accents stand out on the upper eyelets, matching the Jumpman branding hits that appear on the tongue and back heel. A foam midsole offers lightweight cushioning with each step, while a rubber outsole provides reliable traction.",
          "price": 85,
          "name": "Air 3 Retro Td 'green Glow'",
          "variants": "Black, Green Glow, Wolf Grey, White"
      },
      {
          "brand": "Jordan",
          "category": "women",
          "image": "https://image.goat.com/attachments/product_template_pictures/images/097/946/237/original/1223666_00.png.png",
          "description": "The Women\u00e2\u20ac\u2122s Air Jordan 4 Retro \u00e2\u20ac\u02dcMetallic Gold\u00e2\u20ac\u2122 delivers a pristine colorway of the legacy silhouette. A subtle off-white finish is executed on the smooth leather upper, featuring breathable quarter panel netting and metallic gold eyelets. Jumpman branding decorates the tongue and molded heel tab. A color-matched polyurethane midsole packs a visible Air-sole unit in the heel for lightweight cushioning. Underfoot, a cream-hued herringbone traction outsole provides optimal grip.",
          "price": 200,
          "name": "4 Retro Metallic Gold (women's)",
          "variants": "Sail, Metallic Gold, Black"
      },
      {
          "brand": "Saucony",
          "category": "men",
          "image": "",
          "description": "",
          "price": 130,
          "name": "Shadow 6000 'green Multi'",
          "variants": "Green, Multi"
      },
      {
          "brand": "Nike",
          "category": "women",
          "image": "https://images.stockx.com/images/Nike-Air-Max-1-87-Velvet-Brown-Womens.jpg?fit=fill&bg=FFFFFF&w=500&h=500&fm=webp&auto=compress&trim=color&q=90&dpr=2&updated_at=1706683857",
          "description": "",
          "price": 150,
          "name": "Air Max 1 '87 Velvet Brown (women's)",
          "variants": "Velvet Brown, Sail-Light British Tan-Sanddrift"
      },
      {
          "brand": "Nike",
          "category": "women",
          "image": "https://image.goat.com/attachments/product_template_pictures/images/095/149/892/original/FQ3381_300.png.png",
          "description": "The Nike Women\u00e2\u20ac\u2122s Sabrina 1 \u00e2\u20ac\u02dcOregon Ducks\u00e2\u20ac\u2122 pays homage to Sabrina Ionescu\u00e2\u20ac\u2122s alma mater. The shoe makes use of a mesh and textile upper in contrasting green and yellow hues. Sabrina\u00e2\u20ac\u2122s personal logo appears on the tongue patch, while a Swoosh outlined in black embroidery adorns the lateral side panel. \u00e2\u20ac\u02dcQUACK\u00e2\u20ac\u2122 is inscribed on the lateral sidewall in a playful nod to the Oregon Ducks. Performance benefits include a cushy React foam midsole with a top-loaded Zoom Air unit in the forefoot.",
          "price": 130,
          "name": "Sabrina 1 'oregon Ducks'",
          "variants": "Malachite, Black, Lightening, Stadium Green"
      },
      {
          "brand": "Nike",
          "category": "men",
          "image": "",
          "description": "The Jordan Air Ship PE SP \u00e2\u20ac\u02dcRust Pink\u00e2\u20ac\u2122 delivers an off-white leather upper contrasted by muted pink accents on the forefoot overlay, Swoosh, and collar. The latter is branded with an embroidered Nike wordmark on the lateral side. The sneaker rides atop a rubber cupsole, built with sidewall construction and an encapsulated Air-sole unit in the heel. The pink rubber outsole features the same traction pattern used on the Air Jordan 1.",
          "price": 140,
          "name": "Jordan Air Ship Pe Sp Rust Pink",
          "variants": "Rust Pink, Sail-Sail-Gamma Green"
      },
      {
          "brand": "Jordan",
          "category": "toddler",
          "image": "",
          "description": "The 2024 edition of the Air Jordan 5 Retro TD \u00e2\u20ac\u02dcOlive\u00e2\u20ac\u2122 draws from a popular Lifestyle Series colorway from 2006. Built for little feet, the classic silhouette features an olive green suede upper with breathable quarter panel netting. Contrasting orange accents land on the interior lining, as well as the Jumpman branding hits found on the back heel and silver reflective tongue. The sneaker is mounted on an olive-hued foam midsole with orange shark tooth detailing.",
          "price": 85,
          "name": "5 Retro Olive (2024) (td)",
          "variants": "Army Olive, Solar Orange"
      },
      {
          "brand": "Jordan",
          "category": "preschool",
          "image": "",
          "description": "The 2024 edition of the Air Jordan 5 Retro PS \u00e2\u20ac\u02dcOlive\u00e2\u20ac\u2122 brings back an archival Lifestyle Series colorway for little kids. Originally released in 2006, the legacy silhouette sports an olive suede upper with tonal molded eyelets and ventilated quarter panel netting. Orange textile lines the padded collar, matching the embroidered Jumpman logos that adorn the back heel and silver reflective tongue. A final splash of orange can be found on the speckled shark tooth detailing that enlivens the foam midsole.",
          "price": 100,
          "name": "5 Retro Olive (2024) (ps)",
          "variants": "Army Olive, Solar Orange"
      },
      {
          "brand": "Nike",
          "category": "women",
          "image": "https://image.goat.com/attachments/product_template_pictures/images/097/811/195/original/1308086_00.png.png",
          "description": "",
          "price": 135,
          "name": "Dunk Low Lx Year Of The Dragon (2024) (women's)",
          "variants": "Sail, Dusty Cactus, Vapor Green, Dragon Red"
      },
      {
          "brand": "Jordan",
          "category": "child",
          "image": "",
          "description": "Made for big kids, the 2024 reissue of the Air Jordan 5 Retro GS \u00e2\u20ac\u02dcOlive\u00e2\u20ac\u2122 revives a Lifestyle Series colorway from Jordan Brand\u00e2\u20ac\u2122s 2006 archive. The olive suede upper features hallmark details of the AJ5, including lace locks, quarter panel netting and a silver reflective tongue. The latter is marked with an orange Jumpman logo, matching the interior lining and a second Jumpman icon embroidered on the back heel. Lightweight cushioning arrives via an Air-assisted polyurethane midsole, finished in an olive drab hue with orange shark tooth detailing. A translucent rubber outsole provides grippy traction underfoot.",
          "price": 160,
          "name": "5 Retro Olive (2024) (gs)",
          "variants": "Army Olive, Solar Orange"
      },
      {
          "brand": "Adidas",
          "category": "men",
          "image": "https://image.goat.com/attachments/product_template_pictures/images/097/856/593/original/IG3904.png.png",
          "description": "",
          "price": 140,
          "name": "Crazy 8 'olive Strata'",
          "variants": "Olive Strata, Off White, Core White"
      },
      {
          "brand": "Jordan",
          "category": "men",
          "image": "https://image.goat.com/attachments/product_template_pictures/images/096/293/512/original/DD0587_308.png.png",
          "description": "The 2024 edition of the Air Jordan 5 Retro \u00e2\u20ac\u02dcOlive\u00e2\u20ac\u2122 brings back a popular colorway from Jordan Brand\u00e2\u20ac\u2122s 2006 Lifestyle Series. Crafted from textured suede in a muted olive green hue, the upper features tonal molded eyelets and breathable quarter panel netting. Contrasting orange accents make their way to the interior lining, as well as the Jumpman logo hits that decorate the back heel and reflective tongue. Orange shark-tooth detailing decorates the olive-hued polyurethane midsole, fitted with visible Air-sole cushioning and reinforced by a translucent rubber outsole.",
          "price": 210,
          "name": "5 Retro Olive (2024)",
          "variants": "Army Olive, Solar Orange"
      },
      {
          "brand": "Adidas",
          "category": "men",
          "image": "https://image.goat.com/attachments/product_template_pictures/images/096/293/576/original/IF1864.png.png",
          "description": "",
          "price": 120,
          "name": "Ae 1 Velocity Blue",
          "variants": "Velocity Blue, Lime Green, Velocity Blue"
      },
      {
          "brand": "Nike",
          "category": "women",
          "image": "https://image.goat.com/attachments/product_template_pictures/images/097/355/397/original/FZ3775_133.png",
          "description": "The Nike Women&#39;s Dunk Low &#39;Give Her Flowers&#39; features an off-white leather upper, with plush textile overlays covered in an embossed floral print. The pristine design is interrupted by discreet pops of color: a molded rose pinned to the lateral heel and crimson Nike branding on the woven tongue tag. Inside the shoe, custom sockliners are inscribed with the phrase &#39;You deserve flowers.&#39; The low-top rests on a rubber cupsole in a solid white finish.",
          "price": 115,
          "name": "Dunk Low 'give Her Flowers'",
          "variants": "Sail, Sail, University Red, Chlorophyll, Medium Soft Pink, Metallic Gold"
      },
      {
          "brand": "Nike",
          "category": "women",
          "image": "https://image.goat.com/attachments/product_template_pictures/images/097/796/287/original/FZ3777_133.png.png",
          "description": "The Nike Women&#39;s Air Max 90 Futura &#39;Give Her Flowers&#39; features a plush white textile upper, covered in an embossed floral pattern and fortified with tonal leather overlays. A molded red rose emblem is pinned to the lateral heel, while &#39;Air Max&#39; is embroidered on the tongue in crimson lettering. Webbing pull tabs are added to the tongue and heel for easy on and off. Inside the shoe, pink sockliners display an inscription that reads &#39;You Deserve Flowers.&#39; The sneaker rides on a matching white foam midsole with a visible Max Air unit in the heel.",
          "price": 160,
          "name": "Air Max 90 Futura 'give Her Flowers'",
          "variants": "Sail, Light Bone, University Red, Chlorophyll, Medium Soft Pink"
      },
      {
          "brand": "Nike",
          "category": "women",
          "image": "https://image.goat.com/attachments/product_template_pictures/images/095/591/029/original/DZ2628_003.png.png",
          "description": "The Nike Women\u00e2\u20ac\u2122s Air Max 1 \u00e2\u20ac\u02dc87 \u00e2\u20ac\u02dcMalachite\u00e2\u20ac\u2122 features an upper that combines breathable white mesh with grey synthetic suede overlays at the midfoot and heel. The latter displays Nike Air branding in green embroidery, matching the molded upper eyelets, signature Swoosh and suede mudguard. Lightweight cushioning is provided by a white polyurethane midsole, featuring a visible Air-sole unit in the heel.",
          "price": 140,
          "name": "Air Max 1 '87 'malachite'",
          "variants": "Neutral Grey, Malachite, White, Black"
      },
      {
          "brand": "Nike",
          "category": "men",
          "image": "https://image.goat.com/attachments/product_template_pictures/images/097/856/562/original/FJ1566_101.png.png",
          "description": "",
          "price": 170,
          "name": "Liverpool F.c. X Zoom Lebron Nxxt Gen Ampd 'light Orewood Washed Teal'",
          "variants": "Light Orewood Brown, Black, Washed Teal, Metallic Gold"
      },
      {
          "brand": "Nike",
          "category": "men",
          "image": "https://image.goat.com/attachments/product_template_pictures/images/096/727/356/original/HF0105_100.png.png",
          "description": "The Nike Air Max 1 &#39;Chili Volt&#39; showcases a scarlet leather Swoosh on the upper, crafted from breathable grey mesh with a white leather overlay and a wavy black suede mudguard. A woven Nike tag in the brand&#39;s signature Volt hue embellishes the tongue, matching the molded eyelets and the Nike Air logo embroidered on the back heel. Lightweight cushioning arrives via a white polyurethane midsole, featuring a Volt-tinged Max Air unit in the heel.",
          "price": 140,
          "name": "Air Max 1 'chili Volt'",
          "variants": "White, University Red, Black, Volt, Neutral Grey"
      },
      {
          "brand": "Jordan",
          "category": "women",
          "image": "",
          "description": "The Women&#39;s Air Jordan 1 Retro High OG &#39;Dusted Clay&#39; dons a supple suede upper, featuring a light tan base with brown forefoot overlays and a color-matched Swoosh. A contrasting burnt orange hue lands on the heel and collar flap, marked with a debossed Wings logo on the lateral side. A vintage off-white finish is applied to the midsole, fitted with Air-sole cushioning in the heel and supported by a grippy orange rubber outsole.",
          "price": 180,
          "name": "1 Retro High Og Dusted Clay (women's)",
          "variants": "Dusted Clay, Cacao Wow, Burnt Sunrise"
      }
      ],
    });

    console.log('Données insérées avec succès!');
  } catch (error) {
    console.error('Erreur lors de l\'insertion des données:', error);
  } finally {
    await prisma.$disconnect(); // Déconnectez Prisma une fois que les opérations sont terminées
  }
}

seed();
