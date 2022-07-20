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
        <h4 id="gameName">{gameName}</h4>
        <p id="gameDescription">{descriptionGame}</p>
      </div>
      <h4 id="currentPrice">R$ {currentPrice}</h4>
    </Container>
  );
};

export default CardDetailGame;
