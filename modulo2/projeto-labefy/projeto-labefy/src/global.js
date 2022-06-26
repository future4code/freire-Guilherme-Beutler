import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
    
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    body {
        display: flex;
        justify-content: center;
        background: #0F2027;  /* fallback for old browsers */
        background: -webkit-linear-gradient(to right, #2C5364, #203A43, #0F2027);
        background: linear-gradient(to right, #2C5364, #203A43, #0F2027);

        color: #fff;
        margin: 20px 20px;
        font-family: 'Nanum Gothic', sans-serif;
    }

    button {
        margin: 20px 20px;
    }
`