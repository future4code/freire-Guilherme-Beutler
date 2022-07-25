import styled from "styled-components";

export const MainContainer = styled.div`
    font-family: sans-serif;
`

export const PostContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 30px;
    font-family: 'Nanum Gothic', sans-serif;

    input {
    width: 364px;
    height: 131px;
    background: #EDEDED;
    border-radius: 12px;
    border: none;
    
    ::placeholder {
        align-self: start;;
        color: #6F6F6F;
        font-size: 18px;
    }

    }
`
export const ButtonContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-top: 20px;
    border-bottom: 1px solid #FF6489;

    button {
        color: #FFFFFF;
        width: 359px;
        height: 47px;
        background: linear-gradient(90deg, #FF6489 0%, #F9B24E 100%), #4088CB;
        border-radius: 12px;
        border: none;
        font-weight: 700;
        font-size: 18px;
        margin-bottom: 20px;
    }
`
export const FeedContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 10px;
    margin: 20px 0px;
`
export const CardFeed = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 364px;
    height: 167px;
    background: #FBFBFB;
    border: 1px solid #E0E0E0;
    border-radius: 12px;
    text-align: left;
    
    p {
        font-weight: 400;
        font-size: 12px;
        line-height: 16px;
        color: #6F6F6F;
        margin-left: 20px;
    }

    h3 {
        font-weight: 400;
        font-size: 18px;
        line-height: 23px;
        color: #000000;
        margin-left: 20px;
    }
`