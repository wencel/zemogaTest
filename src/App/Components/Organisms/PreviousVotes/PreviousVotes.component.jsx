import React from "react";
import { VotesGrid } from "./PreviousVotes.styled";
import PreviousPollCard from "../PreviousPollCard/PreviousPollCard.component";
const PreviousVotes = () => {
  return (
    <VotesGrid>
      <PreviousPollCard
        image='https://storage.googleapis.com/zemogatest/Kanye.png'
        likes='34'
        dislikes='92'
        description='Vestibulum diam ante, porttitor a odio eget, rhoncus neque. Aenean eu velit libero.'
        name='Kanye West'
        category='Entertaiment'
      ></PreviousPollCard>
      <PreviousPollCard
        image='https://storage.googleapis.com/zemogatest/Mark.png'
        likes='34'
        dislikes='92'
        description='Vestibulum diam ante, porttitor a odio eget, rhoncus neque. Aenean eu velit libero.'
        name='Mark Zuckerberg'
        category='Business'
      ></PreviousPollCard>
      <PreviousPollCard
        image='https://storage.googleapis.com/zemogatest/Cristina.png'
        likes='34'
        dislikes='92'
        description='Vestibulum diam ante, porttitor a odio eget, rhoncus neque. Aenean eu velit libero.'
        name='Cristina Fernández de Kirchner'
        category='Politics'
      ></PreviousPollCard>
      <PreviousPollCard
        image='https://storage.googleapis.com/zemogatest/Malala.png'
        likes='34'
        dislikes='92'
        description='Vestibulum diam ante, porttitor a odio eget, rhoncus neque. Aenean eu velit libero.'
        name='Malala Yousafzai'
        category='Entertaiment'
      ></PreviousPollCard>
    </VotesGrid>
  );
};

export default PreviousVotes;
