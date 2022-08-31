import React from "react";
import { useState, useEffect } from "react";
import Cards from "../Cards/Cards";
import { BoxCards, BoxImage, Container, ImageGame } from "./DisplayGame.styles";

const DisplayGame: React.FC = () => {
  const listImages = [
    "https://www.ultimaficha.com.br/wp-content/uploads/2022/02/the-witch-queen.jpeg",
    "https://cdn2.unrealengine.com/uk-fc6-ksp-scr-04-1920x1080-uk--1920x1080-1f8e460aaf46.png?h=720&resize=1&w=1280",
    "https://cdn2.unrealengine.com/egs-sifustandardedition-sloclap-g1a-05-1920x1080-6129f1b26e51.jpg",
    "https://assets.xboxservices.com/assets/45/30/453053c9-4d70-4e59-b53a-9e2d1719e51d.jpg?n=Rainbow-Six-Extraction_Feature-Image-Priority-Full-Width-0_Operators_1248x702.jpg",
  ];
  const [imageIndex, setImageIndex] = useState(listImages[0]);
  let index = 0;
  let antBroken = 0;
  useEffect(() => {
    const intervalId = setInterval(() => {
      if (index === listImages.length - 1) {
        antBroken++;
        if (antBroken === 2) {
          // eslint-disable-next-line react-hooks/exhaustive-deps
          antBroken = 0;
          // eslint-disable-next-line react-hooks/exhaustive-deps
          index = 0;
          return setImageIndex(listImages[0]);
        } else {
          setImageIndex(listImages[index]);
        }
      } else {
        index++;
        setImageIndex(listImages[index]);
      }
    }, 5000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <Container>
      <BoxImage>
        <ImageGame src={imageIndex} alt="Imagem Games" />
      </BoxImage>
      <BoxCards>
        <Cards
          image="https://steamcdn-a.akamaihd.net/steamcommunity/public/images/apps/1085660/9f2d65473912e04aea5b63378def39dc71be2485.ico"
          text="Destiny 2"
          slugGame="destiny-2"
        />
        <Cards
          image="https://cdn2.unrealengine.com/fc6-logo-400x150-7808789f6a13.png?h=270&resize=1&w=480"
          text="Far Cry® 6"
          slugGame="far-cry-6"
        />
        <Cards
          image="https://cdn2.unrealengine.com/egs-greeneye-sloclap-ic1-400x400-7f5493d6af29.png?h=270&resize=1&w=480"
          text="Sifu"
          slugGame="sifu"
        />
        <Cards
          image="https://cdn2.unrealengine.com/en-r6e-std-epic-edition-capsule---hero-carrousel-1920x1080-uk-1920x1080-4e6c8c92082c.jpg?h=270&resize=1&w=480"
          text="Rainbow Six ® Extraction"
          slugGame="rainbow-six-extraction"
        />
      </BoxCards>
    </Container>
  );
};

export default DisplayGame;
