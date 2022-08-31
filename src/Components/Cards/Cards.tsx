import React from "react";
import { Link } from "react-router-dom";
import { Container } from "./Cards.styles";

interface IPropsCard {
  image: string;
  text: string;
  slugGame: string
}

const Cards: React.FC<IPropsCard> = ({ image, text, slugGame }) => {
  return (
    <Container>
      <Link to={`detail-game/`+ slugGame} className={"link"}>
        <img src={image} alt="Imagem do Game" className="imageCard" />
        <h1 className="gameName">{text}</h1>
      </Link>
    </Container>
  );
};

export default Cards;
