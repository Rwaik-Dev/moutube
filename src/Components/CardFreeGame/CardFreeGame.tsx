import React from "react";
import { Link } from "react-router-dom";
import { Container } from "./CardFreeGame.styles";

interface IPropsCardFreeGame {
  imageGame: string;
  iconFree: string ;
  gameName: string;
  infoPrice: string;
  slugGame: string;
}

const CardFreeGame: React.FC<IPropsCardFreeGame> = ({
  imageGame,
  iconFree,
  gameName,
  infoPrice,
  slugGame
}) => {
  let condition = "";

  if (iconFree === "GRÁTIS") {
    condition = "#01C38D";
  } else {
    condition = "#132D47";
  }

  return (
    <Container backgroundColor={condition}>
      <Link to={`detail-game/`+slugGame} key={slugGame}>
      <img
        src={imageGame}
        alt=""
        width={"100%"}
        height={"100%"}
        className="imageGame"
      />
      <p className="iconFree">{iconFree}</p>
      <p className="gameName">{gameName}</p>
      <p className="infoPrice">{infoPrice}</p>
      </Link>
    </Container>
  );
};

export default CardFreeGame;
