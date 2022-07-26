import styled from "styled-components";

export const MainContainer = styled.div`
    font-family: sans-serif;
`
export const Form = styled.div`
    border-bottom: 1px solid #FF6489;
`
export const PostContainer = styled.div`
    margin-top: 30px;
    font-family: 'Nanum Gothic', sans-serif;
    display: flex;
    flex-direction: column;
    align-items: center;
`
export const InputContainer = styled.div`
    width: 364px;
    height: 131px;
    background: #EDEDED;
    border-radius: 12px;
    border: none;
    display: flex;
    flex-direction: column;
    gap: 10px;    

    input {
        border: none;
        background-color: #EDEDED;
        margin: 10px 10px;
    }

`
export const Button = styled.button`
    color: #FFFFFF;
    width: 359px;
    height: 47px;
    background: linear-gradient(90deg, #FF6489 0%, #F9B24E 100%), #4088CB;
    border-radius: 12px;
    border: none;
    font-weight: 700;
    font-size: 18px;
    margin: 20px 0px;        

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
    min-height: 167px;
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
export const Votos = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    text-align: center;
    border: 1px solid #E0E0E0;
    width: 80px;
    height: 30px;
    margin: 0px 20px;
    padding: 0 10px;
    border-radius: 15px;

    p {
        margin-right: 20px;
        align-items: center;
    }

    img{
        
    }
`
export const Comment = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    align-items: center;
    text-align: center;
    border: 1px solid #E0E0E0;
    width: 60px;
    height: 30px;
    margin: 0px 20px;
    padding: 0 10px;
    border-radius: 15px;
`
export const CardDown = styled.div`
    display: flex;
    padding-bottom: 20px;
    justify-content: space-between;

`
export const Send = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    align-items: center;
    text-align: center;
    border: 1px solid #E0E0E0;
    width: 60px;
    height: 30px;
    margin: 0px 20px;
    padding: 0 10px;
    border-radius: 15px;
`