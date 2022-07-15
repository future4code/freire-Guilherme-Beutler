import React from "react";
import LabexLogo from '../../Img/LabexLogo.png';
import { ContainerHomePage, LogoBody, ButtonBody } from './style';
import { useNavigate } from 'react-router-dom';
import { goToListTripPage } from "../../Router/Coordinator";
import Header from "../../Components/Header/Header";

export default function HomePage() {
    const navigate = useNavigate();

    return (
        <div>
            <Header />
            <ContainerHomePage>
                <LogoBody alt="Logo Astronauta" src={LabexLogo} />
                <ButtonBody onClick={() => goToListTripPage(navigate)}>VER VIAGENS</ButtonBody>
            </ContainerHomePage>
        </div>
    )
}