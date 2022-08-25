import React from "react";
import { Link } from "react-router-dom";
import { Container, Prices, ImageBox } from "./CardGames.styles";

interface IPropsCardGames{
    urlImage: string,
    gameName: string,
    discount: number,
    lastPrice: string,
    currentPrice: string
    slugGame: string,
}

const CardGames: React.FC<IPropsCardGames> = ({urlImage, gameName, discount, lastPrice, currentPrice, slugGame}) => {
  return (
    <Container>
      <Link to={`detail-game/`+slugGame} key={slugGame}>
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
      </Link>
    </Container>
  );
};

export default CardGames;
