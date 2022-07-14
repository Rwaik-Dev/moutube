import React from "react";
import {Container} from "./Cards.styles";

interface IPropsCard{
    image: string;
    text: string;
}

const Cards: React.FC<IPropsCard> = ({image, text}) => {
  return (
    <Container>
        <img src={image} alt="Imagem do Game" className="imageCard" />
        <h1 className="gameName">{text}</h1>
    </Container>
  );
};

export default Cards;