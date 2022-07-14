import React from "react";
import Cards from "../Cards/Cards";
import { BoxCards, BoxImage, Container, ImageGame } from "./DisplayGame.styles";

const DisplayGame: React.FC = () => {
  return (
    <Container>
      <BoxImage>
        <ImageGame
          src="https://www.bungie.net/7/ca//destiny/bgs/new_light/hero_desktop_bg.jpg"
          alt="Imagem Games"
        />
      </BoxImage>
      <BoxCards>
        <Cards
          image="https://steamcdn-a.akamaihd.net/steamcommunity/public/images/apps/1085660/9f2d65473912e04aea5b63378def39dc71be2485.ico"
          text="Destiny 2"
        />
        <Cards
          image="https://steamcdn-a.akamaihd.net/steamcommunity/public/images/apps/1085660/9f2d65473912e04aea5b63378def39dc71be2485.ico"
          text="Destiny 2"
        />
        <Cards
          image="https://steamcdn-a.akamaihd.net/steamcommunity/public/images/apps/1085660/9f2d65473912e04aea5b63378def39dc71be2485.ico"
          text="Destiny 2"
        />
        <Cards
          image="https://steamcdn-a.akamaihd.net/steamcommunity/public/images/apps/1085660/9f2d65473912e04aea5b63378def39dc71be2485.ico"
          text="Destiny 2"
        />
      </BoxCards>
    </Container>
  );
};

export default DisplayGame;
