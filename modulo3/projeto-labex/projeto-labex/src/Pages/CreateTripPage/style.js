import styled from "styled-components";

export const Body = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: #17323D;
    min-height: 90vh;
`;

export const CardBody = styled.div`
    color: #35F2DF;
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: #101A26;
    width: 95vw;
    min-height: 50vh;
    border-radius: 20px;
    margin: 5vh 0vh;
    gap: 20px;
    padding-bottom: 20px;
`;

export const ButtonDiv = styled.div`    
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    gap: 10px;
`;

export const Button = styled.button`
    background-color: #17323D;
    border: 2px solid #35F2DF;
    color: #35F2DF;
    width: 100px;
    height: 40px;
    border-radius: 10px;
    cursor: pointer;
`;

export const Input = styled.input`
    color: #35F2DF;
    background-color: #101A26;
    border: 1px solid #35F2DF;
    border-radius: 5px;
    height: 50px;
    ::placeholder {
       color: #35F2DF;
    }

`;

export const Form = styled.div`
    display: flex;
    flex-direction: column;
    gap: 20px;
`;

export const Select = styled.select`
    color: #35F2DF;;
    background-color: #101A26;
    border: 1px solid #35F2DF;
    border-radius: 5px;
    height: 50px;

`;
    
