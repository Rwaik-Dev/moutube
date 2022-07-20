import { createGlobalStyle } from "styled-components";
import px2vw from "../Utils/px2vw";

export default createGlobalStyle`
    *{
        margin: 0;
        padding:0;
        box-sizing: border-box;
        background-color :#191E29 ;
        color: #fff ;
    }
    html, body, #root{
        height: 100%;
    }
    *, button, input{
        border:0;
        outline:0;
        font-family: 'Roboto', sans-serif;
    }
    button{
        cursor:pointer;
    }
    :root{
        font-size: ${px2vw(24)};

        @media (min-width: 768px) {
        font-size: ${px2vw(18)};
      }

      @media (min-width: 1024px) {
        font-size: ${px2vw(16)};
      }
    }
`;
