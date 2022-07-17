import React from "react";
import { Container } from "./CardDetailGame.style";

interface IPropsCardDetailGame {
  imageGame: string;
  gameName: string;
  descriptionGame: string;
  currentPrice: string;
}

const CardDetailGame: React.FC<IPropsCardDetailGame> = ({
  imageGame,
  gameName,
  currentPrice,
  descriptionGame,
}) => {
  return (
    <Container>
      <img src={imageGame} alt="Imagem do Game" id="imageGame" width={"100%"} />
      <div id="description">
        <p id="gameName">{gameName}</p>
        {descriptionGame}
      </div>
      <p id="currentPrice">R$ {currentPrice}</p>
    </Container>
  );
};

export default CardDetailGame;
