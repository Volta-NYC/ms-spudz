export const site = {
  name: "Ms. Spudz",
  fullName: "Ms. Spudz - Everything Potato \"No\" Gravy",
  tagline: "Everything Potato 'No' Gravy",
  homeTagline: "There's a New Girl In Town!",
  type: "Fast Food Outlet",
  address: "790 Eldert Lane, Brooklyn, NY 11208",
  location: "Brooklyn, New York",
  coordinates: {
    lat: 40.6703413,
    lng: -73.8633593,
  },
  email: "msspudzepng@gmail.com",
  website: "https://msspudzepng.com/",
  alternateWebsite: "https://www.msspudzepng.com/",
  instagram: "https://www.instagram.com/Msspudz_epng",
  facebook: "https://www.facebook.com/MsSpudz",
  googleReviewUrl: "https://search.google.com/local/writereview?placeid=ChIJD1svfi5dwokRdu_9rW9cg9E",
  heroImage: "/assets/images/hero.jpg",
  logoImage: "/assets/images/logo.png",
}

export const cateringNotice = [
  "Planning something special? We've got you covered—from small gatherings to big celebrations!",
  "For events with fewer than 15 guests, please check out our Menu Page and order directly. For parties of 15 or more, kindly fill out the catering request form below. Make sure to include the date, time, size of your party, your budget per person, the items that you would like to order and other important details.",
  "We'll review your details and get back to you as soon as possible.",
  "Thank you for choosing Ms. Spudz – Everything Potato, No Gravy!",
  "Note: Please submit your request at least 72 hours in advance. Submitting a request does not confirm your order until we follow up with you!",
]

export type FoodItem = {
  id: string
  name: string
  price: string
  description: string
  fullDescription?: string
  image: string
  alt: string
  sizes?: string[]
}

export const foodItems: FoodItem[] = [
  {
    id: "signature-fries",
    name: "Signature Fries",
    price: "$8.99 / $10.50 / $11.50",
    description:
      "Fresh-cut, double-fried, and seasoned to perfection—our Signature Fries are crispy, fluffy, and unforgettable. Pair them with our gourmet dips for the ultimate snack!",
    fullDescription:
      "Our Signature Fries are not your average French fry! We start with fresh-cut potatoes that are soaked in cool water, removing excess starch and ensuring a crispy exterior and fluffy interior. Then, we double-fry them to perfection for the ultimate crunch. Our secret seasoning blend adds the perfect touch of flavor, making these fries truly unforgettable. Try them with our gourmet dipping sauces for an even more satisfying experience!",
    sizes: ["Small $8.99", "Medium $10.50", "Large $11.50"],
    image: "/assets/images/signature-fries-product.jpg",
    alt: "Signature fries from Ms. Spudz",
  },
  {
    id: "loaded-mash",
    name: "Loaded Mash",
    price: "$9.99",
    description:
      "Our signature fries, or rustic skin on mashed potatoes, are topped with cheese, corn, black beans, broccoli, tomatoes, and scallions.",
    fullDescription:
      "Looking for the ultimate comfort food? Look no further than our loaded mash. We start with creamy mashed potatoes and top them with all your favorite toppings—think crispy bacon bits, cheddar cheese, and sour cream. The result is a dish that's warm, hearty, and oh-so-delicious. perfect as a side dish or a meal all on its own!",
    image: "/assets/images/loaded-mash-product.jpg",
    alt: "Loaded mash from Ms. Spudz",
  },
  {
    id: "fish-tacos",
    name: "Fish Tacos",
    price: "$14.99",
    description:
      "2 tortillas w/ of golden and crispy fried fish, cilantro lime slaw, white sauce, tomatoes and scallions w/ Signature fries",
    fullDescription:
      "Our fish tacos are a customer favorite for a reason. We start with lightly battered fish that's fried to crispy perfection. Then, we top it with our fresh cilantro lime slaw and a creamy white sauce for the perfect balance of flavors and textures. Whether you're a seafood lover or just looking to try something new, our fish tacos are not to be missed.",
    image: "/assets/images/fish-tacos-product.jpg",
    alt: "Fish tacos from Ms. Spudz",
  },
  {
    id: "fish-sliders",
    name: "Fish Sliders",
    price: "$11.99",
    description: "2 sliders with crispy fried fish with zesty slaw and Ms. Spudz Signature fries",
    fullDescription:
      "Crispy fried fish tucked in a soft bun, topped with fresh fixings and our signature sauce—small in size, big on flavor!",
    image: "/assets/images/fish-slider-product.png",
    alt: "Fish slider from Ms. Spudz",
  },
  {
    id: "double-truffle-fries",
    name: "Double Truffle Fries",
    price: "$12.50",
    description: "Ms. Spudz signature fries tossed in truffle oil, truffle seasoning and fresh parsley",
    image: "/assets/images/double-truffle-fries.jpg",
    alt: "Double truffle fries from Ms. Spudz",
  },
  {
    id: "fish-n-bag",
    name: "Fish N' Bag",
    price: "$7.99",
    description:
      "Golden, crispy fried fish served hot and crunchy—pair it with our gourmet dips for a flavor-packed bite you'll keep coming back for!",
    image: "/assets/images/fish-n-bag.jpg",
    alt: "Fish N' Bag from Ms. Spudz",
  },
  {
    id: "fish-and-fries",
    name: "Fish & Fries",
    price: "$15.99",
    description: "Our golden, crispy fried fish and shrimp meals come with fries and your choice of gourmet dipping sauce.",
    image: "/assets/images/fish-and-fries.jpg",
    alt: "Fish and fries from Ms. Spudz",
  },
  {
    id: "shrimp-and-fries",
    name: "Shrimp & Fries",
    price: "$16.99",
    description: "Crispy golden shrimp with fries",
    image: "/assets/images/shrimp-and-fries.jpg",
    alt: "Shrimp and fries from Ms. Spudz",
  },
  {
    id: "the-combo",
    name: "The Combo",
    price: "$22.99",
    description: "Our golden, crispy fried fish and shrimp meals come with fries and your choice of gourmet dipping sauce.",
    image: "/assets/images/the-combo.jpg",
    alt: "Fish and shrimp combo from Ms. Spudz",
  },
  {
    id: "veggie-tacos",
    name: "Veggie Tacos",
    price: "$9.99",
    description:
      "2 kale tacos with chic peas, red beans, red onions, cucumber, tomatoes, white sauce & Signature fries",
    image: "/assets/images/veggie-tacos.jpg",
    alt: "Veggie tacos from Ms. Spudz",
  },
  {
    id: "chop-cheese-sliders",
    name: "Chop Cheese Sliders",
    price: "$10.99",
    description: "2 meat sliders w/ provolone cheese & Signature fries",
    image: "/assets/images/chop-cheese-sliders.jpg",
    alt: "Chop cheese sliders from Ms. Spudz",
  },
  {
    id: "loaded-fries",
    name: "Loaded Fries",
    price: "$11.99",
    description: "Signature Fries with melted cheese, corn, black beans, cheddar cheese, tomatoes, scallions and sour cream.",
    image: "/assets/images/loaded-fries.jpg",
    alt: "Loaded fries from Ms. Spudz",
  },
  {
    id: "loaded-nachos",
    name: "Loaded Nachos",
    price: "$11.99",
    description: "Homemade chips with melted cheese topped with corn, black beans, cheddar cheese, tomatoes, scallions and sour cream~",
    image: "/assets/images/loaded-nachos.jpg",
    alt: "Loaded nachos from Ms. Spudz",
  },
  {
    id: "raspberry-love-iced-tea",
    name: "Ms. Spudz Raspberry Love Iced Tea",
    price: "$4.99",
    description: "Homemade raspberry flavored iced tea.",
    image: "/assets/images/raspberry-love-iced-tea.jpg",
    alt: "Ms. Spudz Raspberry Love Iced Tea",
  },
]

export const menuSections = [
  {
    id: "signature",
    title: "Signature Items",
    intro: "The four specialties, shown with their product-page descriptions and current menu pricing.",
    itemIds: ["signature-fries", "loaded-mash", "fish-tacos", "fish-sliders"],
    useFullDescription: true,
  },
  {
    id: "entrees-combos",
    title: "Entrées & Combos",
    intro: "Golden fish, shrimp, fries, and combo plates built for sauce pairing.",
    itemIds: ["double-truffle-fries", "fish-n-bag", "fish-and-fries", "shrimp-and-fries", "the-combo"],
  },
  {
    id: "tacos-sliders",
    title: "Tacos & Sliders",
    intro: "Handhelds with Signature fries on the side.",
    itemIds: ["fish-tacos", "veggie-tacos", "chop-cheese-sliders", "fish-sliders"],
  },
  {
    id: "loaded",
    title: "Loaded",
    intro: "Cheese, corn, black beans, tomatoes, scallions, and comfort-food toppings.",
    itemIds: ["loaded-fries", "loaded-mash", "loaded-nachos"],
  },
  {
    id: "drinks",
    title: "Drinks",
    intro: "Homemade refreshment for the side.",
    itemIds: ["raspberry-love-iced-tea"],
  },
] as const

export const sauces = [
  {
    name: "Grandma's Original",
    description: "The original sauce that started it all. This savory, smooth, and full of rich flavor is one of our best sellers.",
    image: "/assets/images/grandmas-original.jpg",
  },
  {
    name: "Mango Chutney",
    description: "Sweet and tangy with a tropical twist—perfect for those who like a fruity kick!",
    image: "/assets/images/mango-chutney.jpg",
  },
  {
    name: "Peach Apricot",
    description: "A blend of peach and apricot, bringing sweet notes that pair perfectly with crispy bites.",
    image: "/assets/images/peach-apricot.jpg",
  },
  {
    name: "Garlic Parmesan",
    description: "Fresh garlic parmesan loaded with goodness and flavor with comfort in every dip!",
    image: "/assets/images/garlic-parmesan.jpg",
  },
  {
    name: "Sweet Chili",
    description: "Sweet meets spicy in this flavorful blend—zesty, smooth, and slightly addictive.",
    image: "/assets/images/sweet-chili.jpg",
  },
  {
    name: "Honey Sriracha",
    description: "A balance of sweet heat with a sticky, bold, sauce and a crowd favorite.",
    image: "/assets/images/honey-sriracha.jpg",
  },
  {
    name: "Creamy Sriracha",
    description: "Creamy spicy base with a mellow finish.",
    image: "/assets/images/creamy-sriracha.jpg",
  },
  {
    name: "Creamy Jerk",
    description: "A bold island flavor in a creamy base that's herby, spicy, and totally unforgettable.",
    image: "/assets/images/creamy-jerk.jpg",
  },
  {
    name: "Creamy Wasabi",
    description: "A bold blend of smooth creaminess and wasabi heat, perfect for those who love a kick with their crunch without the intensity.",
    image: "/assets/images/creamy-wasabi.jpg",
  },
]

export const founders = {
  names: "Tinnette & Chel'Si",
  title: "Flavor Visionary & Founders",
  visibleStory:
    "We are the mother daughter duo and hearts behind Ms. Spudz – Everything Potato: \"No\" Gravy. Based in planet Brooklyn, our story started back in 2012 at a local farmers market (ENY Farms) and neighborhood festivals — just a table, tent and fryer - and a big dream. I ...",
  timeline: [
    { year: "2012", text: "Story started at a local farmers market, ENY Farms." },
    { year: "Brooklyn", text: "Built through neighborhood festivals and local areas." },
    { year: "The Dream", text: "Just a table, tent and fryer - and a big dream." },
  ],
}

export const reviews = [
  {
    reviewer: "Anonymous",
    date: "No date listed",
    text: "The user didn't attach his comment to the review.",
  },
  {
    reviewer: "Charlotte Morales",
    date: "Aug 12, 2025",
    text: "Ms. Spudz Everything Potato \"No\" Gravy – A Flavor-Packed Experience at the Brooklyn Bank Block Party. I had the pleasure of trying Ms. Spudz Everything ...",
  },
  {
    reviewer: "Tonya T",
    date: "Jul 21, 2025",
    text: "Had the fish today where they were set up outside the Brooklyn Museum. Amazing. I had the peach mango sauce, very good. They also do catering. Friendly staff.",
  },
  {
    reviewer: "Tracey Keij-Denton",
    date: "Jul 7, 2025",
    text: "Delicious ASF that's it and all",
  },
  {
    reviewer: "Ether Shakur",
    date: "Feb 5, 2025",
    text: "I watched them set, and it took me a minute when I saw the fryer heating up. I had to go. Menu is simple to the point. Great staff, excellent ...",
  },
  {
    reviewer: "Mookie",
    date: "May 18, 2024",
    text: "Food was amaaaaaaazzzing. I got the fish taco the flavor was on point fries were fresh but the greatest thing was the the hospitality. They were nice food ...",
  },
  {
    reviewer: "Brittny Bodden",
    date: "Jul 1, 2023",
    text: "No review text visible.",
  },
]

export type ArticleBlock = {
  heading?: string
  paragraphs: string[]
}

export const blogPosts = [
  {
    slug: "history-of-french-fries",
    title: "The History of French Fries: From Belgium to America",
    date: "March 29, 2023",
    image: "/assets/images/blog-history-french-fries.jpg",
    preview:
      "Covers the Belgian origins of French fries in the 17th century, their arrival in America in the late 19th century and popularization during WWII, the rise of Ms. Spudz's loaded spudz dishes, French fries around the world, and the future of the dish.",
    blocks: [
      {
        paragraphs: [
          "French fries are a beloved food around the world, and at Ms. Spudz Everything Potato \"No\" Gravy in Brooklyn, we're proud to offer our own unique twist on this classic dish with our loaded spudz. But have you ever wondered where French fries come from? Keep reading to learn more about the history of French fries and how they became a beloved food in America.",
        ],
      },
      {
        heading: "The Origins of French Fries",
        paragraphs: [
          "French fries actually originated in Belgium in the 17th century. The story goes that villagers in the Meuse Valley would fry small fish to eat with their meals, but when the river froze over in the winter, they turned to frying potatoes instead. And thus, French fries were born! The name \"French fries\" actually comes from the way the potatoes are cut: into thin strips, or \"frites\" in French.",
        ],
      },
      {
        heading: "French Fries in America",
        paragraphs: [
          "French fries made their way to America in the late 19th century, where they quickly became a popular snack food. In fact, during World War II, American soldiers stationed in Belgium and France were introduced to French fries and brought their love for the dish back to America with them. Today, French fries are a staple on menus at fast food restaurants and diners across the country.",
        ],
      },
      {
        heading: "The Rise of Loaded Spudz",
        paragraphs: [
          "At Ms. Spudz - Everything Potato \"No\" Gravy in Brooklyn, we've taken French fries to the next level with our loaded spudz dishes. Our fresh-cut, cool-water-bathed, double-fried fries are the perfect base for all of your favorite toppings, like cheese sauce, bacon bits, and jalapenos. And for something a little different, try our loaded seafood potatoes, which come topped with shrimp or crab meat and a creamy white sauce. With so many delicious options to choose from, it's no wonder that loaded spuds have become a fan favorite.",
        ],
      },
      {
        heading: "French Fries Around the World",
        paragraphs: [
          "French fries may have originated in Belgium, but they've become a beloved food around the world. In Canada, poutine, a dish of French fries, cheese curds, and gravy, is a popular snack food. In Australia, French fries are often served with gravy or tomato sauce. And in Japan, French fries are sometimes topped with mayo and seaweed.",
        ],
      },
      {
        heading: "The Future of French Fries",
        paragraphs: [
          "As French fries continue to be a popular food around the world, it's clear that they're not going anywhere anytime soon. And at Ms. Spudz - Everything Potato \"No\" Gravy in Brooklyn, we're excited to continue offering our own unique twist on this classic dish with our loaded spudz. Whether you're in the mood for loaded fries, loaded nachos, loaded sliders, or something entirely else, we've got you covered.",
          "French fries have a rich history that dates back centuries, and at Ms. Spudz Everything Potato \"No\" Gravy in Brooklyn, we're proud to be a part of that history with our loaded spudz dishes. Whether you're in the mood for tacos, nachos, or drinks, we've got a variety of delicious options to choose from. And with a focus on giving back to underserved communities, you can feel good about supporting our business.",
          "If you have any questions or would like to place an order, please don't hesitate to get in touch with us at msspudzepng@gmail.com. We're always here to help you satisfy your cravings for delicious food!",
        ],
      },
    ] satisfies ArticleBlock[],
  },
  {
    slug: "loaded-spudz-comfort-food",
    title: "Loaded Spudz: The Ultimate Comfort Food",
    date: "March 28, 2023",
    image: "/assets/images/blog-loaded-spudz.jpg",
    preview:
      "Covers loaded fries as a classic favorite, loaded nachos for sharing, loaded sliders, cheese sauce as the ultimate topping, and bacon bits and jalapenos as the perfect pairing.",
    blocks: [
      {
        paragraphs: [
          "If you're looking for the ultimate comfort food, look no further than loaded spudz! These delicious and indulgent dishes are the perfect treat when you need a little pick-me-up. From loaded fries to loaded nachos to loaded sliders, there's a loaded spudz dish for every craving. And at Ms. Spudz-Everything Potato \"No\" Gravy in Brooklyn, we're proud to offer a variety of loaded spudz dishes that are sure to satisfy. Keep reading to learn more about these mouth-watering dishes and why they're the ultimate comfort food.",
        ],
      },
      {
        heading: "Loaded Fries: A Classic Favorite",
        paragraphs: [
          "Loaded fries are a classic favorite for a reason - they're delicious! At Ms. Spudz-Everything Potato \"No\" Gravy, we take our loaded fries to the next level by using our signature fresh cut, cool water bathed, double fried fries as a base. From there, we pile on all of your favorite toppings, like cheese sauce, bacon bits, and jalapenos. And if you're looking for something a little different, try our seafood-loaded fries, which come topped with shrimp or crab meat and a creamy white sauce. With so many options to choose from, loaded fries are the perfect comfort food for any occasion.",
        ],
      },
      {
        heading: "Loaded Nachos: Perfect for Sharing",
        paragraphs: [
          "Loaded nachos are the ultimate comfort food for sharing with friends and family. At Ms. Spudz-Everything Potato \"No\" Gravy, our loaded nachos are piled high with all of your favorite toppings, including cheese sauce, bacon bits, and jalapenos. And for seafood lovers, we also offer loaded seafood nachos, which come topped with shrimp or crab meat and a creamy white sauce. Whether you're watching the game with friends or enjoying a night in with family, loaded nachos are the perfect treat for sharing.",
        ],
      },
      {
        heading: "Loaded Sliders: Small but Mighty",
        paragraphs: [
          "Loaded sliders are the perfect comfort food when you're in the mood for something small but mighty. At Ms. Spudz-Everything Potato \"No\" Gravy, our loaded sliders come piled high with all of your favorite toppings, like cheese sauce, bacon bits, and jalapenos. And for something a little different, try our seafood sliders, which come topped with shrimp or crab meat and a creamy white sauce. With so many delicious options to choose from, loaded sliders are the perfect comfort food for any occasion.",
        ],
      },
      {
        heading: "Cheese Sauce: The Ultimate Topping",
        paragraphs: [
          "No loaded spudz dish is complete without a generous helping of cheese sauce. At Ms. Spudz-Everything Potato \"No\" Gravy, we take our cheese sauce seriously. Our homemade cheese sauce is made with only the freshest ingredients and is the perfect addition to any loaded spudz dish. Whether you're enjoying loaded fries, loaded nachos, or loaded sliders, our cheese sauce is sure to take your dish to the next level.",
        ],
      },
      {
        heading: "Bacon Bits and Jalapenos: The Perfect Pairing",
        paragraphs: [
          "Bacon bits and jalapenos are the ultimate pairing when it comes to loaded spudz dishes. The salty crunch of the bacon bits pairs perfectly with the spicy kick of the jalapenos, creating a flavor explosion in every bite. At Ms. Spudz-Everything Potato \"No\" Gravy, we use only the freshest ingredients for our bacon bits and jalapenos, ensuring that every bite is packed with flavor.",
          "Loaded spudz dishes are the ultimate comfort food, and at Ms. Spudz-Everything Potato \"No\" Gravy in Brooklyn, we're proud to offer a variety of delicious options. Whether you're in the mood for loaded fries, loaded nachos, or loaded sliders, we've got you covered. And with toppings like cheese sauce, bacon bits, and jalapenos, every bite is sure to be packed with flavor.",
          "If you're ready to indulge in the ultimate comfort food, come visit us at Ms. Spudz-Everything Potato \"No\" Gravy. We offer a variety of loaded spudz dishes, along with other delicious items like tacos, soups, and drinks. And with a focus on giving back to underserved communities, you can feel good about supporting our business.",
          "If you have any questions or would like to place an order, please don't hesitate to get in touch with us at msspudzepng@gmail.com. We're always here to help you satisfy your cravings for delicious comfort food!",
        ],
      },
    ] satisfies ArticleBlock[],
  },
]

export const foodById = Object.fromEntries(foodItems.map((item) => [item.id, item])) as Record<string, FoodItem>

export const signatureItems = ["signature-fries", "loaded-mash", "fish-tacos", "fish-sliders"].map((id) => foodById[id])
