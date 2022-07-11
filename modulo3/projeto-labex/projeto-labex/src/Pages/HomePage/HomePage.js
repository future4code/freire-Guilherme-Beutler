import React from "react";
import LabexLogo from '../../Img/LabexLogo.png'
import {ContainerHomePage, LogoBody, ButtonBody} from './style'

export default function HomePage() {
    return (
        <ContainerHomePage>
            <LogoBody src={LabexLogo}/>
            <ButtonBody>VER VIAGENS</ButtonBody>
        </ContainerHomePage>
    )
}