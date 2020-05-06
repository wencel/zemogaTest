import pollsContants from "./PollsConstants";

const initialState = {
  items: [
    {
      id: 1,
      name: "Pope Francis",
      image: "https://storage.googleapis.com/zemogatest/Pope.png",
      category: "Politics",
      description:
        "He’s talking tough on clergy sexual abuse, but is he just another papal pervert protector? (thumbs down) or a true pedophile punishing pontiff? (thumbs up)",
      likes: 34,
      dislikes: 12,
      current: true,
      startDate: "04/15/20",
      endDate: "05/15/20",
    },
    {
      id: 2,
      name: "Kanye West",
      image: "https://storage.googleapis.com/zemogatest/Kanye.png",
      category: "Entertaiment",
      description:
        "Vestibulum diam ante, porttitor a odio eget, rhoncus neque. Aenean eu velit libero. ",
      likes: 34,
      dislikes: 12,
      current: false,
      startDate: "03/15/20",
      endDate: "04/15/20",
    },
    {
      id: 3,
      name: "Mark Zuckerberg",
      image: "https://storage.googleapis.com/zemogatest/Mark.png",
      category: "Business",
      description:
        "Vestibulum diam ante, porttitor a odio eget, rhoncus neque. Aenean eu velit libero. ",
      likes: 34,
      dislikes: 12,
      current: false,
      startDate: "02/15/20",
      endDate: "03/15/20",
    },
    {
      id: 4,
      name: "Cristina Fernández de Kirchner",
      image: "https://storage.googleapis.com/zemogatest/Cristina.png",
      category: "Politics",
      description:
        "Vestibulum diam ante, porttitor a odio eget, rhoncus neque. Aenean eu velit libero. ",
      likes: 34,
      dislikes: 12,
      current: false,
      startDate: "01/15/20",
      endDate: "02/15/20",
    },
    {
      id: 5,
      name: "Malala Yousafzai",
      image: "https://storage.googleapis.com/zemogatest/Malala.png",
      category: "Entertaiment",
      description:
        "Vestibulum diam ante, porttitor a odio eget, rhoncus neque. Aenean eu velit libero. ",
      likes: 34,
      dislikes: 12,
      current: false,
      startDate: "12/15/19",
      endDate: "01/15/20",
    },
  ],
};
const pollsReducer = (state = initialState, action) => {
  switch (action.type) {
    case pollsContants.SAVE_POLLS:
      return {
        ...state,
        items: action.payload,
      };
    default:
      return state;
  }
};
export default pollsReducer;
