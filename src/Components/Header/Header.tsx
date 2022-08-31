import React from "react";
import { Container } from "./Header.styles";
import Logo from "../../Utils/logo";
import px2vw from "../../Utils/px2vw";
import { Link } from "react-router-dom";

const Header: React.FC = () => {
  return (
    <Container>
      <div className="Logotipo">
        <Link to="/">
        <Logo heightLogo={px2vw(60)}/>
        </Link>
      </div>
    </Container>
  );
};

export default Header;
