import styled from "styled-components";

export const TopContainer = styled.div`
    display: flex;
    position: fixed; 
    margin-right: 18px;
    margin-bottom: 8px;
    width: 100%;
    bottom: 20px;
    align-items: center;
    height: 20px;
    justify-content: flex-end;
    cursor: pointer;
    animation: fadeIn 0.3s;
    transition: opacity 0.4s;
    opacity: 0.5;

    :hover{
        opacity: 1;
    }

    @keyframes fadeIn {
        0% {
            opacity: 0;
        }
        100% {
            opacity: 0.5;
        }   
    }
`