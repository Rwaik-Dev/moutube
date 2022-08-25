import React from "react";
import { Container } from "./Requirements.style";

interface IRequirementsProps {
  title: string | undefined;
  So: string | undefined;
  processador: string | undefined;
  memory: string | undefined;
  storage: string | undefined;
  directX: string | undefined;
  videoCard: string | undefined;
}

const Requirements: React.FC<IRequirementsProps> = ({
  title,
  So,
  processador,
  directX,
  memory,
  storage,
  videoCard,
}) => {
  return (
    <Container>
      <h5 className="title">{title}</h5>
      <div className="divider">
        <p className="title">Sistema Operacional</p>
        <p className="name">{So}</p>
      </div>
      <div className="divider">
        <p className="title">Processador</p>
        <p className="name">{processador}</p>
      </div>
      <div className="divider">
        <p className="title">Memória</p>
        <p className="name">{memory} GB de RAM</p>
      </div>
      <div className="divider">
        <p className="title">Armazenamento</p>
        <p className="name">{storage} GB de espaço disponivel no HD</p>
      </div>
      <div className="divider">
        <p className="title">DirectX</p>
        <p className="name">DirectX {directX}</p>
      </div>
      <div className="divider">
        <p className="title">Placa de vídeo</p>
        <p className="name">{videoCard}</p>
      </div>
    </Container>
  );
};

export default Requirements;
