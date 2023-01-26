import { Config } from "./types";

export const config: Config = {
  types: {
    header: "coverImage",
    footer: "middle",
    structure: "landing",
  },

  projects: {
    0: {
      name: "Christmas gift Guide",
      link: "https://www.selfridges.com/GB/en/features/articles/selfridges-guideto/gifts/",
    },
    1: {
      name: "VIP sign up form",
      link: "https://vip-signup.selfridges.com/?h=fa8enAlJkN4ItQagHEXRgP6dIiJJ7gCAzelAGhPpSiM=",
    },
    2: {
      name: "Personal Shopper Profiles​",
      link: "https://stylist.selfridges.com/arron-dickinson",
    },
    3: {
      name: "Livestream Shopping​",
      link: "https://www.selfridges.com/GB/en/features/liveshopping/",
    },
  },

  uiText: {
    main: {
      title: "Selfridges Innovation team",
      description: "description is a string",
    },
    cart: {
      title: "your cart",
      subtitle:
        "Check our <a href={google.com}>offers page</a> for more special prices",
      description: "description is a string",
    },
  },

  images: {
    default:
      "https://images.unsplash.com/photo-1535615615570-3b839f4359be?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80",
    header:
      "https://plus.unsplash.com/premium_photo-1661657759493-f21eb0d67e27?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80",
  },
  colleagues: {
    0: {
      name: "Katie McGowan",
      photo: "./images/Katie.png",
      title: "Product Manager",
      facts: [
        "🎠 has an amazing British accent",
        "🏠 lives in Hampstead",
        "🥷 is dangerously good in Scrabble",
      ],
      local: "UK 🇬🇧",
    },
    1: {
      name: "Shazad Ahmed",
      photo: "./images/Shazad.png",
      title: "Delivery Lead",
      local: "UK 🇬🇧",
      facts: [
        "🎮 makes wonderful retros;",
        "🎉 Shazad loves Holidays and Cars;",
        "🌃 Shaz loves going to Dubai;",
        "🌆 Sometimes Shazad visits Birmingham.",
      ],
    },

    2: {
      name: "Nataliya Dimitrova",
      photo: "./images/Nataliya.png",
      title: "engineer",
      facts: [
        "👸🏻 has hair just like Disney princess;",
        "🔲 loves minimalism;",
        "🇨🇦🥶 lived in Canada;",
        "🖥️ learned computer science at the university.",
      ],
      local: "Bulgaria 🇧🇬",
    },
    3: {
      name: "Sandy Vaidyanathan",
      photo: "./images/Sandy.png",
      title: "QA engineer",
      local: "Chennai, TamilNadu 🇮🇳",
      facts: [
        "👑 Sandy has an amazing smile;",
        "📽️ favourite movie genres are Sci-fi and thriller;",
        "🐕 has a Dog called Wonder;",
        "💻 She tested it all.",
      ],
    },
    4: {
      name: "Bogdan Grama",
      photo: "./images/Bogdan.jpeg",
      title: "engineer",
      local: "Targu-Mures, Romania 🇷🇴",
      facts: [
        "🐈 Bogdan likes cats, but loves dogs too! ",
        "🔴🫒 Favourite color is red, but he has been fancying olive lately.",
      ],
    },
    5: {
      name: "Karthik Muthumari",
      photo: "./images/Karthik.png",
      title: "engineer",
      facts: [
        "👊 awesome teammate and profesional;",
        "🏏 loves to watch cricket and wwe;",
        "🏆 a great fan of Chennai Super Kings (CSK).",
      ],
      local: "India 🇮🇳",
    },
    6: {
      name: "Ankur Pradhan",
      photo: "./images/Ankur.jpeg",
      title: "engineer",
      local: "India 🇮🇳",
      facts: [
        "🎥🎞️ Shawshank is his favourite movie;",
        "💐 favourite season is Spring.",
      ],
    },

    7: {
      name: "Sophie Ashwell",
      photo: "./images/Sophie.png",
      local: "UK 🇬🇧",
      title: "Product Principle",
      facts: [
        "🐕🌳 Sophie desperately wants a sausage dog but need to wait till she has a garden;",
        "🧱🏭 Sophie lives in an old textiles warehouse;",
        "🎼 Sophie's best skill is guessing the song/artist if you give her 10 seconds of a music intro.",
      ],
    },

    8: {
      name: "Joanna Bak",
      photo: "./images/Joanna.png",
      local: "Poland 🇵🇱",
      title: "engineer",
      facts: [
        "💃 Joanna loves to dance on Fridays;",
        "😎 she dances Salsa and Bachata;",
        "🍦 Joanna likes ice creams, football ⚽, pizza 🍕 and baking.",
      ],
    },
    9: {
      name: "Larisa Bobrovnikova",
      photo: "./images/Larisa.png",
      local: "Russia 🇷🇺",
      title: "engineer",
      facts: [
        "😎 has the best team in the world 😎",
        "🍬 can eat only sweets till the end of her life 🍬",
      ],
    },
  },
};
