import React from "react";
import { Container, Prices, ImageBox } from "./CardGames.styles";

interface IPropsCardGames{
    urlImage: string,
    gameName: string,
    discount: number,
    lastPrice: string,
    currentPrice: string
}

const CardGames: React.FC<IPropsCardGames> = ({urlImage, gameName, discount, lastPrice, currentPrice}) => {
  return (
    <Container>
      <ImageBox>
        <img
          src={urlImage}
          alt="Imagem do Jogo"
        />
      </ImageBox>
      <p className="gameName">{gameName}</p>
      <Prices>
        <p className="infoPrices" id="discount">
          -{discount}%
        </p>
        <p className="infoPrices" id="lastPrice">
          R${lastPrice}
        </p>
        <p className="infoPrices" id="currentPrice">
          R${currentPrice}
        </p>
      </Prices>
    </Container>
  );
};

export default CardGames;
