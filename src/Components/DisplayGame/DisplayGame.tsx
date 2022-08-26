import React,{useState} from "react";
import Cards from "../Cards/Cards";
import { BoxCards, BoxImage, Container, ImageGame } from "./DisplayGame.styles";

const DisplayGame: React.FC = () => {
  const [imgDisplay, setImgDisplay] = useState("https://cdn2.unrealengine.com/screenshot-02-1920x1080-51c75098fdac.jpg")

  return (
    <Container>
      <BoxImage>
        <ImageGame
          src={imgDisplay}
          alt="Imagem Games"
        />
      </BoxImage>
      <BoxCards>
        
        <Cards
          image="https://steamcdn-a.akamaihd.net/steamcommunity/public/images/apps/1085660/9f2d65473912e04aea5b63378def39dc71be2485.ico"
          text="Destiny 2"

       />
        <Cards
          image="https://cdn2.unrealengine.com/fc6-logo-400x150-7808789f6a13.png?h=270&resize=1&w=480"
          text="Far Cry® 6"


        />
        <Cards
          image="https://cdn2.unrealengine.com/egs-greeneye-sloclap-ic1-400x400-7f5493d6af29.png?h=270&resize=1&w=480"
          text="Sifu"    
          click={() => {}}    

        />
        <Cards
          image="https://cdn2.unrealengine.com/en-r6e-std-epic-edition-capsule---hero-carrousel-1920x1080-uk-1920x1080-4e6c8c92082c.jpg?h=270&resize=1&w=480"
          text="Rainbow Six ® Extraction"

          

        />
      </BoxCards>
    </Container>
  );
};

export default DisplayGame;
