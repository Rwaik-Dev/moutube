import React from "react";
import { Container } from "./CardDetailGame.style";
import {Link} from "react-router-dom"

interface IPropsCardDetailGame {
  imageGame: string;
  gameName: string;
  descriptionGame: string;
  currentPrice: string;
  slugGame: string,
}

const CardDetailGame: React.FC<IPropsCardDetailGame> = ({
  imageGame,
  gameName,
  currentPrice,
  descriptionGame,
  slugGame
}) => {
  return (
    <Container>
      <Link to={`detail-game/`+ slugGame} key={slugGame}>
      <img src={imageGame} alt="Imagem do Game" id="imageGame" width={"100%"} />
      <div id="description">
        <h4 id="gameName">{gameName}</h4>
        <p id="gameDescription">{descriptionGame}</p>
      </div>
      <h4 id="currentPrice">R$ {currentPrice}</h4>
      </Link>
    </Container>
  );
};

export default CardDetailGame;
