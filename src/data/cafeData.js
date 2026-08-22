export const cafeData = {
  cafe: {
    name: "Brew & Bean",
    tagline: "Coffee Made for Slow Moments.",
    description: "Specialty coffee, fresh food, and a space designed to make you stay a little longer.",
    story: "Brew & Bean was created for people who believe great coffee deserves great company. Every bean is carefully selected, and every cup is crafted with precision to bring you the best experience possible.",
    stats: [
      { label: "Years", value: "5+" },
      { label: "Signature Items", value: "20+" },
      { label: "Happy Guests", value: "10K+" }
    ]
  },
  contact: {
    address: "123 Coffee Lane, Artisan District",
    phone: "+91 6352813895",
    email: "hello@brewandbean.com",
    hours: "Open Today · 8:00 AM — 11:00 PM",
    social: {
      instagram: "#",
      facebook: "#",
      whatsapp: "#"
    }
  },
  menuCategories: ["All", "Coffee", "Tea", "Breakfast", "Desserts", "Cold Drinks", "Snacks"],
  menu: [
    {
      id: 1,
      name: "Signature Cappuccino",
      description: "Double espresso, silky steamed milk and rich crema.",
      price: "₹220",
      category: "Coffee",
      isVeg: true,
      image: "https://images.unsplash.com/photo-1572442388796-11668a67e53d?auto=format&fit=crop&q=80&w=800",
      featured: true
    },
    {
      id: 2,
      name: "Avocado Sourdough Toast",
      description: "Mashed avocado, cherry tomatoes, and microgreens on toasted artisan sourdough.",
      price: "₹350",
      category: "Breakfast",
      isVeg: true,
      image: "https://images.unsplash.com/photo-1541519227354-08fa5d50c44d?auto=format&fit=crop&q=80&w=800",
      featured: true
    },
    {
      id: 3,
      name: "Classic Cold Brew",
      description: "Slow-steeped for 18 hours for a smooth, bold finish.",
      price: "₹250",
      category: "Cold Drinks",
      isVeg: true,
      image: "https://images.unsplash.com/photo-1461023058943-0708e5223eeb?auto=format&fit=crop&q=80&w=800",
      featured: false
    },
    {
      id: 4,
      name: "Basque Cheesecake",
      description: "Caramelized top with a creamy, melt-in-your-mouth center.",
      price: "₹300",
      category: "Desserts",
      isVeg: true,
      image: "https://images.unsplash.com/photo-1533134242443-d4fd215305ad?auto=format&fit=crop&q=80&w=800",
      featured: true
    },
    {
      id: 5,
      name: "Pour Over V60",
      description: "Single-origin beans brewed with precision for clarity and bright notes.",
      price: "₹280",
      category: "Coffee",
      isVeg: true,
      image: "https://images.unsplash.com/photo-1497935586351-b67a49e012bf?auto=format&fit=crop&q=80&w=800",
      featured: false
    },
    {
      id: 6,
      name: "Matcha Latte",
      description: "Premium ceremonial grade matcha with steamed oat milk.",
      price: "₹320",
      category: "Tea",
      isVeg: true,
      image: "https://images.unsplash.com/photo-1515823662972-da6a29051009?auto=format&fit=crop&q=80&w=800",
      featured: false
    },
    {
      id: 7,
      name: "Almond Croissant",
      description: "Flaky, buttery pastry filled with sweet almond frangipane.",
      price: "₹200",
      category: "Snacks",
      isVeg: true,
      image: "https://images.unsplash.com/photo-1530610476181-d83430b64dcb?auto=format&fit=crop&q=80&w=800",
      featured: false
    }
  ],
  features: [
    { title: "Crafted Fresh", icon: "Coffee" },
    { title: "Premium Ingredients", icon: "Leaf" },
    { title: "Thoughtful Service", icon: "Heart" },
    { title: "Made to Feel Like Home", icon: "Home" }
  ],
  reviews: [
    {
      id: 1,
      name: "Sarah Jenkins",
      rating: 5,
      text: "One of the best coffee spots in the city. The atmosphere is incredible and the cappuccino is excellent.",
      avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=150"
    },
    {
      id: 2,
      name: "David Chen",
      rating: 5,
      text: "A perfect place to work or catch up with friends. The avocado toast is a must-try. Highly recommended!",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=150"
    },
    {
      id: 3,
      name: "Emily Roberts",
      rating: 4,
      text: "Beautiful interior design and very welcoming staff. Their cold brew is so smooth.",
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=150"
    },
    {
      id: 4,
      name: "Michael Torres",
      rating: 5,
      text: "The Basque cheesecake changed my life. I come here every weekend just for the desserts and coffee.",
      avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=150"
    }
  ],
  gallery: [
    { id: 1, src: "https://images.unsplash.com/photo-1554118811-1e0d58224f24?auto=format&fit=crop&q=80&w=1000", alt: "Cafe Interior", size: "large" },
    { id: 2, src: "https://images.unsplash.com/photo-1497935586351-b67a49e012bf?auto=format&fit=crop&q=80&w=800", alt: "Barista pouring coffee", size: "small" },
    { id: 3, src: "https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&q=80&w=800", alt: "Coffee cups", size: "small" },
    { id: 4, src: "https://images.unsplash.com/photo-1600093463592-8e36ae95ef56?auto=format&fit=crop&q=80&w=1000", alt: "Cafe atmosphere", size: "medium" },
    { id: 5, src: "https://images.unsplash.com/photo-1507133750076-46ea389f1b0a?auto=format&fit=crop&q=80&w=1000", alt: "Coffee beans", size: "medium" }
  ]
};
