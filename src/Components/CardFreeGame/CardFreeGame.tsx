import React from "react";
import { Container } from "./CardFreeGame.styles";

interface IPropsCardFreeGame {
  imageGame: string;
  iconFree: string;
  gameName: string;
  infoPrice: string;
}

const CardFreeGame: React.FC<IPropsCardFreeGame> = ({
  imageGame,
  iconFree,
  gameName,
  infoPrice,
}) => {
  let condition = "";

 {iconFree === "GRÁTIS" ? condition = "#01C38D" : condition = "#132D47"}
  return (
    <Container backgroundColor={condition}>
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
    </Container>
  );
};

export default CardFreeGame;
