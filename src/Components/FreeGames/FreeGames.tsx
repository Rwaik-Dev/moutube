import React from "react";
import CardFreeGame from "../CardFreeGame/CardFreeGame";
import { Container, Box } from "./FreeGames.styles";

const FreeGames: React.FC = () => {
  return (
    <Container>
      <h5>Jogos Gratis</h5>
      <Box>
        <CardFreeGame
          imageGame="https://image.api.playstation.com/cdn/UP1004/CUSA03041_00/3zDubiWo2X5WU18FGiwlsf4lKWb8MwkE.png"
          iconFree="GRÁTIS"
          gameName="Red Dead Redemption - Ultimate Edition"
          infoPrice="Grátis - 21 de jul. às 12:00"
        />
        <CardFreeGame
          imageGame="https://image.api.playstation.com/vulcan/ap/rnd/202011/0319/rdNblnyGXx8EEyqA2u5GJBmB.png"
          iconFree="GRÁTIS"
          gameName="Mortal Kombat 11 - Ultimate Bundle"
          infoPrice="Grátis - 21 de jul. às 12:00"
        />
        <CardFreeGame
          imageGame="https://image.api.playstation.com/cdn/UP0006/CUSA00110_00/D8Gbgtnu0ZvmVs8VloyLb0Sm9tW0wpKh.png"
          iconFree="EM BREVE"
          gameName="Battlefield 4 - Premium Edition"
          infoPrice="Grátis 21 de jul. - 28 de jul."
        />
        <CardFreeGame
          imageGame="https://image.api.playstation.com/vulcan/ap/rnd/202112/0913/5xXGYslR0YU0bXGSCKbUrEvL.png"
          iconFree="EM BREVE"
          gameName="Hitman Trilogy - Premium Add-ons"
          infoPrice="Grátis 21 de jul. - 28 de jul."
        />
      </Box>
    </Container>
  );
};

export default FreeGames;
