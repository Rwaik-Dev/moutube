import React from "react";
import GamesInfo from "../GamesInfo/GamesInfo";
import { Container, NewGames, BestSellers, Incoming } from "./TopGames.style";

const TopGames: React.FC = () => {
  return (
    <Container>
      <NewGames className="separatorClass">
        <h4>Novos lançamentos</h4>
        <GamesInfo
          imageUrl="https://upload.wikimedia.org/wikipedia/pt/6/6c/Ghostwire_Tokyo_capa.jpg"
          gameName="Ghostwire: Tokyo"
          information="R$ 132,00"
        />
        <GamesInfo
          imageUrl="https://cdn1.epicgames.com/offer/05057ec2d5ea43c3b0701cc1518e0577/EGS_GothamKnights_WarnerBrosGamesMontreal_S2_1200x1600-5a46b442e57afa637f013bbc09fe5487"
          gameName="Gotham Knights"
          information="R$ 324,42"
        />
        <GamesInfo
          imageUrl="https://garotanocontrole.com.br/wp-content/uploads/2022/02/Sifu-Is-a-Love-Letter-to-the-Martial-Arts-Genre-640x450.jpg"
          gameName="Sifu"
          information="R$ 99,00"
        />
        <GamesInfo
          imageUrl="https://t.ctcdn.com.br/efyy2ADqd67kPvUfXBVJWMJiX_I=/1400x788/smart/filters:format(webp)/i499600.png"
          gameName="Horizon Forbidden West"
          information="R$ 249,00"
        />
        <GamesInfo
          imageUrl="https://compass-ssl.xbox.com/assets/5d/aa/5daa43b3-632b-46b8-8aff-b19dd6dc8acd.jpg?n=Forza-Horizon-5_Sharing_200x200.jpg"
          gameName="Forza Horizon 5"
          information="R$ 120,00"
        />
        <GamesInfo
          imageUrl="https://store-images.s-microsoft.com/image/apps.56579.13727851868390641.c9cc5f66-aff8-406c-af6b-440838730be0.0dee39b3-efb2-4425-8f1f-087c111ff9b2?w=300&h=300"
          gameName="Halo Infinite"
          information="R$ 150,00"
        />
      </NewGames>
      <BestSellers className="separatorClass">
        <h4>Mais vendidos</h4>
        <GamesInfo
          imageUrl="https://image.api.playstation.com/vulcan/img/rnd/202104/2507/Xdncb153Sz5UZMaF0X944NP5.png"
          gameName="Genshin Impact"
          information="Gratuito"
        />
        <GamesInfo
          imageUrl="https://image.api.playstation.com/vulcan/ap/rnd/202101/2019/EN4cTwY9NWbfXywW0bktic9J.jpg"
          gameName="Grand Theft Auto V: Edição Premium & Pacote Tubarão-Branco"
          information="R$ 186,90"
        />
        <GamesInfo
          imageUrl="https://rocketleague.media.zestyio.com/rl_home_f2p-launch_shop_square_10515.jpg?optimize=high"
          gameName="Rocket League"
          information="Gratuito"
        />
        <GamesInfo
          imageUrl="https://http2.mlstatic.com/D_NQ_NP_2X_869780-MLA48240785172_112021-V.webp"
          gameName="Far Cry 6"
          information="R$ 99,90"
        />
        <GamesInfo
          imageUrl="https://static.truetrophies.com/boxart/Game_7995.jpg"
          gameName="Ace Combat 7 Skies Unknown"
          information="R$ 47,90"
        />
        <GamesInfo
          imageUrl="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQqOvB7tAxHZ6KKmMylL8wxikGdcs0-Zr3tng&usqp=CAU"
          gameName="Midnight Club 3 Dub Edition Remix"
          information="R$ 11,07"
        />
      </BestSellers>
      <Incoming className="separatorClass">
        <h4>Em breve</h4>
        <GamesInfo
          imageUrl="https://external-preview.redd.it/F1fzwjnSkw9-iJCA11fASkHodz2CH5NOGJPB1TH79Qc.jpg?auto=webp&s=5ae5fc8da6176fe816243ba58f55f3f78e740edb"
          gameName="Senua Hellblade 2"
          information="Disponível em 25/11/22"
        />
        <GamesInfo
          imageUrl="https://sm.ign.com/ign_br/game/g/god-of-war/god-of-war-ragnarok_z48t.jpg"
          gameName="God Of War Ragnarok"
          information="Disponível em 25/11/22"
        />
        <GamesInfo
          imageUrl="https://cdn.cloudflare.steamstatic.com/steam/apps/315210/capsule_616x353.jpg?t=1653326000"
          gameName="Suicide Squad: Kill the Justice League"
          information="Disponível em 12/07/23"
        />
        <GamesInfo
          imageUrl="https://cdn.akamai.steamstatic.com/steam/apps/1643320/capsule_616x353.jpg?t=1655252279"
          gameName="S.T.A.L.K.E.R. 2: Heart of Chornobyl"
          information="Disponível em 18/11/22"
        />
        <GamesInfo
          imageUrl="https://trecobox.com.br/wp-content/uploads/2022/06/Street-Fighter-6-novo-trailer.jpg"
          gameName="Street Fighter 6"
          information="Disponível em 06/10/2023"
        />
        <GamesInfo
          imageUrl="https://i.ytimg.com/vi/D8KbXpk2J9Y/maxresdefault.jpg"
          gameName="Ark II"
          information="Disponível em 08/10/2023"
        />
      </Incoming>
    </Container>
  );
};

export default TopGames;
