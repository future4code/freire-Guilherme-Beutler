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

export const CardTrip = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    gap: 20px;
    padding: 5px 20px;
    padding-bottom: 30px;

    @media screen and (min-device-width: 320px) and (max-device-width: 480px) {
    display: flex;
    flex-direction: column;
    justify-items: center;
    padding: 10px;
    margin: 0px 20px;
    text-align: center;
    padding-bottom: 20px;
  }
`;

export const BodyCardTrip = styled.div`
    color: #35F2DF;
    border: 1px solid #35F2DF;
    border-radius: 10px;
    gap: 5px;
    text-align: center;
`;

export const HeaderBody = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-around;
`;

export const Img = styled.img`
    cursor: pointer;
`;


