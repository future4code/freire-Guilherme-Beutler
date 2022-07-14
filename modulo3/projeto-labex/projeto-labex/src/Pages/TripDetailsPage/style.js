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
    background-color: #101A26;
    width: 95vw;
    min-height: 80vh;
    border-radius: 20px;
    margin: 5vh 0vh;
`;

export const CardCandidate = styled.div`
    color: #35F2DF;
    border: 1px solid #35F2DF;
    border-radius: 10px;
    text-align: center;
    width: 35vw;
    margin-bottom: 15px;
`;

export const GridCandidates = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
`;

export const Approved = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export const Repproved = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export const Button = styled.button`
    background-color: #17323D;
    border: 2px solid #35F2DF;
    color: #35F2DF;
    width: 75px;
    height: 35px;
    border-radius: 10px;
    cursor: pointer;
`;

export const ButtonDiv = styled.div`
    display: flex;
    justify-content: space-evenly;
    padding-bottom: 15px;
`;

export const Img = styled.img`
    max-width: 20px;
    padding: 20px 20px;
    cursor: pointer;
`;