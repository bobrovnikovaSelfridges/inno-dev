import { Config } from "./types";

export const config: Config = {
  types: {
    header: "coverImage",
    footer: "middle",
    structure: "landing",
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
        "has amazing British accent",
        "lives in Hampstead",
        "is dangerously good Scrabble",
      ],
      local: "____",
    },
    1: {
      name: "Karthik Muthumari",
      photo: "./images/Karthik.png",
      title: "engineer",
      facts: [
        "awesome teammate",
        "speaks to AWS god on behalf of the whole team",
      ],
      local: "____",
    },

    2: {
      name: "Nataliya Dimitrova",
      photo: "",
      title: "engineer",
      facts: [
        "has hair just like Disney princess",
        "loves minimalism",
        "lived in Canada",
        "learned computer science at the university",
      ],
      local: "Bulgaria 🇧🇬",
    },
    3: {
      name: "Sandy Vaidyanathan",
      photo: "",
      title: "QA engineer",
      local: "India 🇮🇳",
      facts: ["has amazing smile", "has a Dog called Wonder"],
    },
    4: {
      name: "Bogdan Grama",
      photo: "",
      title: "engineer",
      local: "Targu-Mures, Romania",
      facts: [""],
    },
    5: {
      name: "Shazad Ahmed",
      photo: "",
      title: "Delivery Lead",
      local: "____",
      facts: [""],
    },
    6: {
      name: "Ankur Pradhan",
      photo: "",
      title: "engineer",
      local: "India 🇮🇳",
      facts: [""],
    },

    7: {
      name: "Joanna Bak",
      photo: "",
      local: "Poland 🇵🇱",
      title: "engineer",
      facts: [""],
    },
    8: {
      name: "Larisa Bobrovnikova",
      photo: "",
      local: "Russia 🇷🇺",
      title: "engineer",
      facts: [""],
    },
  },
};
