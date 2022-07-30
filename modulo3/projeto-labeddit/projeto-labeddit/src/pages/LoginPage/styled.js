import styled from "styled-components"

export const Body = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 10px;
    font-family: 'Nanum Gothic', sans-serif;
`
export const UpBody = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

    h2 {
        font-weight: 700;
        font-size: 36px;
        margin-top: -5px;
        color: #373737;
    }

    p {
        font-size: 16px;
        margin-top: -30px;
    }
`
export const DivButtons = styled.div`
    display: flex;
    flex-direction: column;
    gap: 15px;
`
export const ButtonOne = styled.button`
    width: 365px;
    height: 51px;
    border-radius: 27px;
    background: linear-gradient(90deg, #FF6489 0%, #F9B24E 100%);
    color: #FFFFFF;
    font-size: 18px;
    border: none;
    font-weight: 700;
    text-align: center;
`
export const ButtonTwo = styled.button`
    width: 365px;
    height: 51px;
    border-radius: 27px;
    background: none;
    color: #FE7E02;
    font-size: 18px;
    border: 1px solid #FE7E02;
    font-weight: 700;
    margin-top: -30px;
    text-align: center;
`
export const DivInput = styled.div`
    display: flex;
    flex-direction: column;
    margin: 40px 0px;

    form {
        display: flex;
        flex-direction: column;
        border-bottom: 1px solid #FE7E02;
    }

    button {
        margin-top: 20px;
        margin-bottom: 20px;
    }

    input {
        width: 330px;
    }
`