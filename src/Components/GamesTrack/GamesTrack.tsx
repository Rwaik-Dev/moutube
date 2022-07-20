import React from "react";
import CardDetailGame from "../../Components/CardDetailGame/CardDetailGame";
import { Container } from "./GamesTrack.styles";

const GamesTrack: React.FC = () => {
  return (
    <Container>
      <CardDetailGame
        currentPrice="220,00"
        descriptionGame="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iusto quas laboriosam minima laudantium nisi. Commodi, libero? Autem animi architecto, libero facere assumenda eum obcaecati vero. Dicta iure tempore quae hic!"
        gameName="Crash Bandicoot 4: It's About Time"
        imageGame="https://image.api.playstation.com/vulcan/ap/rnd/202102/2418/nOYZabSx4faHIlurfiUC0HVl.jpg"
      />
      <CardDetailGame
        currentPrice="149,00"
        descriptionGame="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iusto quas laboriosam minima laudantium nisi. Commodi, libero? Autem animi architecto, libero facereaa"
        gameName="Sniper Elite 5"
        imageGame="https://image.api.playstation.com/vulcan/ap/rnd/202202/2116/59jHCjMBRhuRhPUKUUy2gkNd.png"
      />
      <CardDetailGame
        currentPrice="24,90"
        descriptionGame="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iusto quas laboriosam minima laudantium nisi. Commodi, libero? Autem animi architecto, libero facere assumenda eum obcaecati vero."
        gameName="Left 4 Dead 2"
        imageGame="https://api.cdkeybay.com/static/db5dd9163bda64dc8627a719.jpg"
      />
    </Container>
  );
};

export default GamesTrack;
