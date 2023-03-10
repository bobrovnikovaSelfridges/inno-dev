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
      name: "Personal Shopper Profilesโ",
      link: "https://stylist.selfridges.com/arron-dickinson",
    },
    3: {
      name: "Livestream Shoppingโ",
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
        "๐  has an amazing British accent",
        "๐  lives in Hampstead",
        "๐ฅท is dangerously good in Scrabble",
      ],
      local: "UK ๐ฌ๐ง",
    },
    1: {
      name: "Shazad Ahmed",
      photo: "./images/Shazad.png",
      title: "Delivery Lead",
      local: "UK ๐ฌ๐ง",
      facts: [
        "๐ฎ makes wonderful retros;",
        "๐ Shazad loves Holidays and Cars;",
        "๐ Shaz loves going to Dubai;",
        "๐ Sometimes Shazad visits Birmingham.",
      ],
    },

    2: {
      name: "Nataliya Dimitrova",
      photo: "./images/Nataliya.png",
      title: "engineer",
      facts: [
        "๐ธ๐ป has hair just like Disney princess;",
        "๐ฒ loves minimalism;",
        "๐จ๐ฆ๐ฅถ lived in Canada;",
        "๐ฅ๏ธ learned computer science at the university.",
      ],
      local: "Bulgaria ๐ง๐ฌ",
    },
    3: {
      name: "Sandy Vaidyanathan",
      photo: "./images/Sandy.png",
      title: "QA engineer",
      local: "Chennai, TamilNadu ๐ฎ๐ณ",
      facts: [
        "๐ Sandy has an amazing smile;",
        "๐ฝ๏ธ favourite movie genres are Sci-fi and thriller;",
        "๐ has a Dog called Wonder;",
        "๐ป She tested it all.",
      ],
    },
    4: {
      name: "Bogdan Grama",
      photo: "./images/Bogdan.jpeg",
      title: "engineer",
      local: "Targu-Mures, Romania ๐ท๐ด",
      facts: [
        "๐ Bogdan likes cats, but loves dogs too! ",
        "๐ด๐ซ Favourite color is red, but he has been fancying olive lately.",
      ],
    },
    5: {
      name: "Karthik Muthumari",
      photo: "./images/Karthik.png",
      title: "engineer",
      facts: [
        "๐ awesome teammate and profesional;",
        "๐ loves to watch cricket and wwe;",
        "๐ a great fan of Chennai Super Kings (CSK).",
      ],
      local: "India ๐ฎ๐ณ",
    },
    6: {
      name: "Ankur Pradhan",
      photo: "./images/Ankur.jpeg",
      title: "engineer",
      local: "India ๐ฎ๐ณ",
      facts: [
        "๐ฅ๐๏ธ Shawshank is his favourite movie;",
        "๐ favourite season is Spring.",
      ],
    },

    7: {
      name: "Sophie Ashwell",
      photo: "./images/Sophie.png",
      local: "UK ๐ฌ๐ง",
      title: "Product Principle",
      facts: [
        "๐๐ณ Sophie desperately wants a sausage dog but need to wait till she has a garden;",
        "๐งฑ๐ญ Sophie lives in an old textiles warehouse;",
        "๐ผ Sophie's best skill is guessing the song/artist if you give her 10 seconds of a music intro.",
      ],
    },

    8: {
      name: "Joanna Bak",
      photo: "./images/Joanna.png",
      local: "Poland ๐ต๐ฑ",
      title: "engineer",
      facts: [
        "๐ Joanna loves to dance on Fridays;",
        "๐ she dances Salsa and Bachata;",
        "๐ฆ Joanna likes ice creams, football โฝ, pizza ๐ and baking.",
      ],
    },
    9: {
      name: "Larisa Bobrovnikova",
      photo: "./images/Larisa.png",
      local: "Russia ๐ท๐บ",
      title: "engineer",
      facts: [
        "๐ has the best team in the world ๐",
        "๐ฌ can eat only sweets till the end of her life ๐ฌ",
      ],
    },
  },
};
